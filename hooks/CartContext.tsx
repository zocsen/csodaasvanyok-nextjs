"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContextType, CartItem, CartProviderProps } from "@/types/cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      // Load cart items from local storage if available
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const openCart = () => {
    setIsCartOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeCart = () => {
    setIsCartOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      // Check if the item is already in the cart considering size
      const itemExists = prevItems.find(
        (i) => i.id === item.id && (!item.size || i.size === item.size)
      );

      if (itemExists) {
        // Increase quantity
        return prevItems.map((i) =>
          i.id === item.id && (!item.size || i.size === item.size)
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      // Add new item
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (item: CartItem) => {
    setCartItems((prevItems) => {
      return prevItems.map((i) => {
        if (
          i.id === item.id &&
          (!item.size || i.size === item.size) &&
          i.quantity < 9
        ) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      });
    });
  };

  const decreaseQuantity = (item: CartItem) => {
    setCartItems((prevItems) => {
      return prevItems.reduce<CartItem[]>((acc, i) => {
        if (i.id === item.id && (!item.size || i.size === item.size)) {
          const newQuantity = i.quantity - 1;
          if (newQuantity > 0) {
            acc.push({ ...i, quantity: newQuantity });
          }
        } else {
          acc.push(i);
        }
        return acc;
      }, []);
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (i) => i.id !== item.id || (item.size && i.size !== item.size)
      )
    );
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const getCartItemsCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const [baseDeliveryFee, setBaseDeliveryFee] = useState(1100);
  const freeDeliveryThreshold = 12000;

  const deliveryFee = totalPrice >= freeDeliveryThreshold ? 0 : baseDeliveryFee;
  const progress = Math.min((totalPrice / freeDeliveryThreshold) * 100, 100);
  const totalPriceWithDeliveryFee = totalPrice + deliveryFee;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    openCart,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    getCartItemsCount,
    progress,
    deliveryFee,
    totalPriceWithDeliveryFee,
    freeDeliveryThreshold,
    setBaseDeliveryFee,
  };

  useEffect(() => {
    // Save cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
