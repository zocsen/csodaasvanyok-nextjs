"use client";

import React, { ChangeEvent, use, useEffect, useState } from "react";
import "./delivery-info.scss";
import CloseIcon from "../../../public/images/icons/close.svg";
import DeliveryMethodSelector from "./DeliveryMethodSelector";
import { useStripeContext } from "@/hooks/StripeContext";
import { useCart } from "@/hooks/CartContext";
import { useDelivery } from "@/hooks/DeliveryContext";
import Image from "next/image";
import { TextField, Typography } from "@mui/material";

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

interface Errors {
  [key: string]: string;
}

type AddressInfo = {
  street: string;
  city: string;
  zip: string;
};

const DeliveryInfo = () => {
  const { stripe, initializeStripe } = useStripeContext();
  const {
    cartItems,
    totalPriceWithDeliveryFee,
    deliveryFee,
    setBaseDeliveryFee,
  } = useCart();
  const [errors, setErrors] = useState<Errors>({});
  const {
    isDeliveryPanelOpen,
    closeDeliveryPanel,
    deliveryInfo,
    setDeliveryInfo,
  } = useDelivery();

  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [isFoxPostLocationSelected, setIsFoxPostLocationSelected] =
    useState(false);

  const [isChecked, setIsChecked] = useState(true);
  const [isInitialStripeRender, setIsInitialStripeRender] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDeliveryInfo((prev) => {
      const newState = { ...prev, [name]: value };

      if (name === "firstName" || name === "lastName") {
        newState.name = `${newState.firstName} ${newState.lastName}`.trim();
      }

      return newState;
    });
  };

  if (deliveryMethod === "FoxPost Automata") {
    setBaseDeliveryFee(1100);
  } else if (deliveryMethod === "GLS Házhozszállítás") {
    setBaseDeliveryFee(1900);
  } else if (deliveryMethod === "Posta Házhozszállítás") {
    setBaseDeliveryFee(1350);
  }

  const handleSubmit = async () => {
    let validationErrors: Errors = {};

    // Required fields check
    Object.entries(deliveryInfo).forEach(([key, value]) => {
      if (
        !value &&
        key !== "totalPrice" &&
        key !== "status" &&
        key !== "deliveryFee"
      ) {
        validationErrors[key] = "További információkra lenne szükségünk";
      }
    });

    // Email format validation
    if (deliveryInfo.email && !validateEmail(deliveryInfo.email)) {
      validationErrors.email = "Invalid email format";
    }

    setErrors(validationErrors);
    console.log(deliveryInfo);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/orders/temp-order`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              deliveryInfo,
            }),
          }
        );

        const data = await response.json();

        localStorage.setItem("tempOrderId", data.tempOrderId);
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/orders/create-checkout-session`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: cartItems,
              deliveryFee: deliveryFee,
              email: deliveryInfo.email,
            }),
          }
        );
        const session = await response.json();

        // Redirect to Stripe Checkout
        if (stripe) {
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });
          if (result.error) {
            // Handle error here
            console.error(result.error.message);
          }
        } else {
          console.error("Stripe has not been initialized yet.");
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }
  };

  useEffect(() => {
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      orderItems: cartItems,
      totalPrice: totalPriceWithDeliveryFee,
      deliveryFee: deliveryFee,
      deliveryMethod: deliveryMethod,
    }));
  }, [
    cartItems,
    totalPriceWithDeliveryFee,
    deliveryFee,
    deliveryMethod,
    setDeliveryInfo,
  ]);

  const handleDeliverySelection = (event: ChangeEvent<HTMLSelectElement>) => {
    setDeliveryMethod(event.target.value);
    setIsFoxPostLocationSelected(false);
    setIsChecked(true);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("message", receiveMessage, false);
  }

  const saveFoxPostAddress = (address: AddressInfo) => {
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      shippingAddress1: address.street,
      city: address.city,
      zip: address.zip,
    }));
    setIsFoxPostLocationSelected(true);
    setIsChecked(false);
  };

  function receiveMessage(event: MessageEvent) {
    if (event.origin !== "https://cdn.foxpost.hu") {
      return;
    }

    if (typeof event.data !== "string") {
      console.error("event.data is not a string:", event.data);
      return;
    }

    try {
      var apt = JSON.parse(event.data);
      saveFoxPostAddress({ street: apt.street, city: apt.city, zip: apt.zip });
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  if (isDeliveryPanelOpen && isInitialStripeRender) {
    setIsInitialStripeRender(false);
    initializeStripe();
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    if (isChecked) {
      setDeliveryInfo((prevInfo) => ({
        ...prevInfo,
        billingCity: deliveryInfo.city,
        billingZip: deliveryInfo.zip,
        billingAddress1: deliveryInfo.shippingAddress1,
      }));
    } else {
      setDeliveryInfo((prevInfo) => ({
        ...prevInfo,
        billingCity: "",
        billingZip: "",
        billingAddress1: "",
      }));
    }
  }, [
    isChecked,
    deliveryInfo.city,
    deliveryInfo.zip,
    deliveryInfo.shippingAddress1,
    setDeliveryInfo,
  ]);

  return (
    <>
      <div
        className={`delivery-info-panel ${isDeliveryPanelOpen ? "open" : ""}`}
      >
        <div className="delivery-header">
          <h2>Szállítás</h2>
          <button onClick={closeDeliveryPanel}>
            <Image
              src={CloseIcon}
              className="base-svg"
              alt="Close"
              width={34}
              height={34}
            />
          </button>
        </div>

        <div className="delivery-options">
          <DeliveryMethodSelector
            deliveryMethod={deliveryMethod}
            handleDeliverySelection={handleDeliverySelection}
          />
        </div>
        <div className="delivery-middle">
          {deliveryMethod === "" ? null : deliveryMethod ===
              "FoxPost Automata" && isFoxPostLocationSelected === false ? (
            <iframe
              className="delivery-iframe"
              frameBorder="0"
              loading="lazy"
              src="https://cdn.foxpost.hu/apt-finder/v1/app/"
            ></iframe>
          ) : (
            <div className="delivery-content">
              {isFoxPostLocationSelected === true &&
                deliveryMethod === "FoxPost Automata" && (
                  <button
                    onClick={() => setIsFoxPostLocationSelected(false)}
                    className="foxpost-delivery-delete-button"
                  >
                    Kiválasztott automata törlése
                  </button>
                )}
              <TextField
                className="full-text-field"
                id="outlined-read-only-input"
                label="Ország / régió"
                defaultValue="Magyarország"
                InputProps={{
                  readOnly: true,
                  style: {
                    fontSize: "1.8rem",
                    color: "var(--primary-font-color)",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: "1.8rem",
                    color: "var(--primary-font-color)",
                    fontWeight: "500",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: "1.2rem",
                  },
                }}
              />
              <TextField
                className="full-text-field"
                required
                id="outlined-required"
                label="E-mail-cím"
                name="email"
                onChange={handleChange}
                value={deliveryInfo.email}
                error={!!errors.email}
                helperText={errors.email}
                InputLabelProps={{
                  style: {
                    fontSize: "1.8rem",
                    color: "var(--primary-font-color)",
                    fontWeight: "500",
                  },
                }}
                InputProps={{
                  style: {
                    fontSize: "1.8rem",
                    color: "var(--primary-font-color)",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: "1.2rem",
                  },
                }}
              />

              <div className="half-fields">
                <TextField
                  className="half-text-field"
                  required
                  id="outlined-required"
                  label="Vezetéknév"
                  name="lastName"
                  onChange={handleChange}
                  value={deliveryInfo.lastName}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  InputLabelProps={{
                    style: {
                      fontSize: "1.8rem",
                      color: "var(--primary-font-color)",
                      fontWeight: "500",
                    },
                  }}
                  InputProps={{
                    style: {
                      fontSize: "1.8rem",
                      color: "var(--primary-font-color)",
                    },
                  }}
                  FormHelperTextProps={{
                    style: {
                      fontSize: "1.2rem",
                    },
                  }}
                />
                <TextField
                  className="half-text-field"
                  required
                  id="outlined-required"
                  label="Keresztnév"
                  name="firstName"
                  onChange={handleChange}
                  value={deliveryInfo.firstName}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  InputLabelProps={{
                    style: {
                      fontSize: "1.8rem",
                      color: "var(--primary-font-color)",
                      fontWeight: "500",
                    },
                  }}
                  InputProps={{
                    style: {
                      fontSize: "1.8rem",
                      color: "var(--primary-font-color)",
                    },
                  }}
                  FormHelperTextProps={{
                    style: {
                      fontSize: "1.2rem",
                    },
                  }}
                />
              </div>

              <div className="half-fields">
                <TextField
                  className="half-text-field"
                  required
                  id="outlined-required"
                  label="Település"
                  name="city"
                  onChange={handleChange}
                  value={deliveryInfo.city}
                  error={!!errors.city}
                  helperText={errors.city}
                  disabled={
                    isFoxPostLocationSelected &&
                    deliveryMethod === "FoxPost Automata"
                  }
                  InputLabelProps={{
                    style: {
                      fontSize: "1.8rem",
                      color: "var(--primary-font-color)",
                      fontWeight: "500",
                    },
                  }}
                  InputProps={{
                    style: {
                      fontSize: "1.8rem",
                      color: "var(--primary-font-color)",
                    },
                  }}
                  FormHelperTextProps={{
                    style: {
                      fontSize: "1.2rem",
                    },
                  }}
                />
                <TextField
                  className="half-text-field"
                  required
                  id="outlined-required"
                  label="Irányítószám"
                  type="number"
                  name="zip"
                  onChange={handleChange}
                  value={deliveryInfo.zip}
                  error={!!errors.zip}
                  helperText={errors.zip}
                  disabled={
                    isFoxPostLocationSelected &&
                    deliveryMethod === "FoxPost Automata"
                  }
                  InputLabelProps={{
                    style: {
                      fontSize: "1.8rem",
                      color: "var(--primary-font-color)",
                      fontWeight: "500",
                    },
                  }}
                  InputProps={{
                    style: {
                      fontSize: "1.8rem",
                      color: "var(--primary-font-color)",
                    },
                  }}
                  FormHelperTextProps={{
                    style: {
                      fontSize: "1.2rem",
                    },
                  }}
                />
              </div>

              <TextField
                className="full-text-field"
                required
                id="outlined-required"
                label="Szállítási Cím"
                name="shippingAddress1"
                onChange={handleChange}
                value={deliveryInfo.shippingAddress1}
                error={!!errors.shippingAddress1}
                helperText={errors.shippingAddress1}
                disabled={
                  isFoxPostLocationSelected &&
                  deliveryMethod === "FoxPost Automata"
                }
                InputLabelProps={{
                  style: {
                    fontSize: "1.8rem",
                    color: "var(--primary-font-color)",
                    fontWeight: "500",
                  },
                }}
                InputProps={{
                  style: {
                    fontSize: "1.8rem",
                    color: "var(--primary-font-color)",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: "1.2rem",
                  },
                }}
              />
              <TextField
                className="full-text-field"
                id="outlined-phone"
                required
                label="Telefonszám"
                onChange={handleChange}
                name="phone"
                value={deliveryInfo.phone}
                error={!!errors.phone}
                helperText={errors.phone}
                InputLabelProps={{
                  style: {
                    fontSize: "1.8rem",
                    color: "var(--primary-font-color)",
                    fontWeight: "500",
                  },
                }}
                inputProps={{
                  maxLength: 15, // Adjust based on your needs
                  style: {
                    fontSize: "1.8rem",
                    color: "var(--primary-font-color)",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: "1.2rem",
                  },
                }}
              />

              {!isFoxPostLocationSelected && (
                <div className="billing-checkbox">
                  <input
                    id="billing-checkbox"
                    className="css-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    disabled={isFoxPostLocationSelected}
                  />
                  <label htmlFor="billing-checkbox">
                    Szállítási cím megegyezik a számlázási címmel.
                  </label>
                </div>
              )}

              {isChecked ? null : (
                <>
                  <Typography variant="h5" className="billing-info-title">
                    Számlázási információk
                  </Typography>
                  <div className="half-fields">
                    <TextField
                      className="half-text-field"
                      required
                      id="outlined-required"
                      label="Település"
                      name="billingCity"
                      onChange={handleChange}
                      value={deliveryInfo.billingCity}
                      error={!!errors.billingCity}
                      helperText={errors.billingCity}
                      InputLabelProps={{
                        style: {
                          fontSize: "1.8rem",
                          color: "var(--primary-font-color)",
                          fontWeight: "500",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontSize: "1.8rem",
                          color: "var(--primary-font-color)",
                        },
                      }}
                      FormHelperTextProps={{
                        style: {
                          fontSize: "1.2rem",
                        },
                      }}
                    />
                    <TextField
                      className="half-text-field"
                      required
                      id="outlined-required"
                      label="Irányítószám"
                      type="number"
                      name="billingZip"
                      onChange={handleChange}
                      value={deliveryInfo.billingZip}
                      error={!!errors.billingZip}
                      helperText={errors.billingZip}
                      InputLabelProps={{
                        style: {
                          fontSize: "1.8rem",
                          color: "var(--primary-font-color)",
                          fontWeight: "500",
                        },
                      }}
                      InputProps={{
                        style: {
                          fontSize: "1.8rem",
                          color: "var(--primary-font-color)",
                        },
                      }}
                      FormHelperTextProps={{
                        style: {
                          fontSize: "1.2rem",
                        },
                      }}
                    />
                  </div>
                  <TextField
                    className="full-text-field"
                    required
                    id="outlined-required"
                    label="Számlázási Cím"
                    name="billingAddress1"
                    onChange={handleChange}
                    value={deliveryInfo.billingAddress1}
                    error={!!errors.billingAddress1}
                    helperText={errors.billingAddress1}
                    InputLabelProps={{
                      style: {
                        fontSize: "1.8rem",
                        color: "var(--primary-font-color)",
                        fontWeight: "500",
                      },
                    }}
                    InputProps={{
                      style: {
                        fontSize: "1.8rem",
                        color: "var(--primary-font-color)",
                      },
                    }}
                    FormHelperTextProps={{
                      style: {
                        fontSize: "1.2rem",
                      },
                    }}
                  />
                </>
              )}
            </div>
          )}
        </div>

        <div className="delivery-footer">
          <button onClick={handleSubmit} className="to-payment-info-button">
            Tovább a fizetéshez
          </button>
        </div>
      </div>
      <div
        className={`overlay ${isDeliveryPanelOpen ? "open" : ""}`}
        onClick={closeDeliveryPanel}
      ></div>
    </>
  );
};

export default DeliveryInfo;
