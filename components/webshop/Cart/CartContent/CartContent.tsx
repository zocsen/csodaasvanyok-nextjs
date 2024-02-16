"use client";

import { useCart } from "@/hooks/CartContext";
import "./cart-content.scss";
import formatPrice from "@/utils/formatPrice";
import Image from "next/image";

export default function CartContent() {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <>
      {cartItems.length > 0 ? (
        <ul className="cart-middle">
          {cartItems.map((item) => {
            return (
              <li
                className="cart-item"
                key={`${item.id}_${item.size || "default"}`}
              >
                <Image
                  className="cart-item-image"
                  src={item.image}
                  alt="Termék"
                  width={100}
                  height={100}
                />
                <div className="item-details-wrapper">
                  <div className="upper-details">
                    <div className="item-name-size-wrapper">
                      <p className="item-name">{item.name}</p>
                      {item.size && (
                        <p className="item-size">Méret: {item.size}</p>
                      )}
                    </div>
                  </div>
                  <div className="lower-details">
                    <div className="item-quantity-wrapper box-shadow-border">
                      <button
                        className="remove-item-button"
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </button>
                      <p className="item-quantity">{item.quantity}</p>
                      <button
                        className="add-item-button"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </button>
                    </div>
                    <p className="item-price">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="cart-empty-disclaimer">
          <h2>Úgy tűnik magányos a kosarad!</h2>
          <p>
            Töltsd meg kedvenceiddel, és máris készen állunk, hogy
            kiszolgálhassunk. 🎁
          </p>
        </div>
      )}
    </>
  );
}
