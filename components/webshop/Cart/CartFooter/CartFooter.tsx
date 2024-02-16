"use client";

import "./cart-footer.scss";

import { useEffect, useState } from "react";

import formatPrice from "@/utils/formatPrice";
import { useCart } from "@/hooks/CartContext";
import { useDelivery } from "@/hooks/DeliveryContext";
import { LinearProgress, styled } from "@mui/material";

const StyledLinearProgress = styled(LinearProgress)(() => ({
  backgroundColor: "var(--shadow-color)",
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "var(--primary-font-color)",
  },
}));

export default function CartFooter() {
  const {
    cartItems,
    totalPrice,
    progress,
    deliveryFee,
    totalPriceWithDeliveryFee,
    freeDeliveryThreshold,
  } = useCart();

  const { openDeliveryPanel } = useDelivery();

  const remainingPrice = freeDeliveryThreshold - totalPrice;

  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    if (totalPrice >= freeDeliveryThreshold) {
      setTimeout(() => {
        setShowProgress(false);
      }, 200);
    } else {
      setShowProgress(true);
    }
  }, [totalPrice, freeDeliveryThreshold]);

  if (cartItems.length === 0) return;

  return (
    <div className="cart-footer">
      <div className="to-free-delivery">
        {showProgress && (
          <>
            {remainingPrice > 0 && (
              <p className="free-delivery-reminder">
                Már csak {formatPrice(remainingPrice)} és ingyen házhoz visszük!
              </p>
            )}

            <StyledLinearProgress variant="determinate" value={progress} />

            <div className="min-max-price-needed">
              <p>0 Ft</p>
              <p>{formatPrice(freeDeliveryThreshold)} </p>
            </div>
          </>
        )}
        <p className="deliver-fee-title">
          Szállítás:
          <span className={deliveryFee === 0 ? "free" : undefined}>
            {deliveryFee > 0 ? "Akár " + formatPrice(deliveryFee) : "Ingyenes"}
          </span>
        </p>
      </div>

      <div className="cart-footer-total">
        <p>Összesített ár:</p>
        <p>{formatPrice(totalPriceWithDeliveryFee)}</p>
      </div>
      <button className="to-payment-info-button" onClick={openDeliveryPanel}>
        Tovább a szállításhoz
      </button>
    </div>
  );
}
