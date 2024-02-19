"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [baseDeliveryFee, setBaseDeliveryFee] = useState(1100);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [freeDeliveryThreshold, setFreeDeliveryThreshold] = useState(12000);
  const [deliveryFee, setDeliveryFee] = useState(baseDeliveryFee);
  const [totalPriceWithDeliveryFee, setTotalPriceWithDeliveryFee] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
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

  const getCartItemsFromLocalStorage = useCallback(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart && savedCart !== "undefined"
        ? JSON.parse(savedCart)
        : [];
    } catch (error) {
      console.error("Error reading cart items from localStorage:", error);
      return [];
    }
  }, []);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const getCartItemsCount = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const getDeliveryFee = useCallback(() => {
    return totalPrice >= freeDeliveryThreshold ? 0 : baseDeliveryFee;
  }, [totalPrice, freeDeliveryThreshold, baseDeliveryFee]);

  const getTotalPriceWithDeliveryFee = useCallback(() => {
    return totalPrice + deliveryFee;
  }, [totalPrice, deliveryFee]);

  const getProgress = useCallback(() => {
    return Math.min((totalPrice / freeDeliveryThreshold) * 100, 100);
  }, [totalPrice, freeDeliveryThreshold]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setCartItems(getCartItemsFromLocalStorage());
    }
  }, [getCartItemsFromLocalStorage]);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount());
    setTotalPrice(getTotalPrice());
    setDeliveryFee(getDeliveryFee());
    setTotalPriceWithDeliveryFee(getTotalPriceWithDeliveryFee());
    setProgress(getProgress());
  }, [
    getCartItemsCount,
    getTotalPrice,
    getDeliveryFee,
    getProgress,
    getTotalPriceWithDeliveryFee,
    getCartItemsFromLocalStorage,
    cartItems,
  ]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    isCartOpen,
    openCart,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    cartItemsCount,
    progress,
    deliveryFee,
    totalPriceWithDeliveryFee,
    freeDeliveryThreshold,
    setBaseDeliveryFee,
  };

  useEffect(() => {
    if (!isInitialRender) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
    setIsInitialRender(false);
  }, [cartItems, isInitialRender]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
