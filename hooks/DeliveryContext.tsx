"use client";

import { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext";
import {
  DeliveryContextType,
  DeliveryInfoType,
  DeliveryProviderProps,
} from "@/types/delivery";

const DeliveryContext = createContext<DeliveryContextType | undefined>(
  undefined
);

export const useDelivery = (): DeliveryContextType => {
  const context = useContext(DeliveryContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const { cartItems, totalPriceWithDeliveryFee, deliveryFee } = useCart();
  const [isDeliveryPanelOpen, setIsDeliveryPanelOpen] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfoType>({
    orderItems: cartItems,
    shippingAddress1: "",
    city: "",
    zip: "",
    country: "Magyarország",
    phone: "",
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    status: 0,
    totalPrice: totalPriceWithDeliveryFee,
    deliveryFee: deliveryFee,
    deliveryMethod: "",
  });

  const openDeliveryPanel = () => {
    setIsDeliveryPanelOpen(true);
  };

  const closeDeliveryPanel = () => {
    setIsDeliveryPanelOpen(false);
  };

  const value = {
    isDeliveryPanelOpen,
    openDeliveryPanel,
    closeDeliveryPanel,
    deliveryInfo,
    setDeliveryInfo,
  };

  return (
    <DeliveryContext.Provider value={value}>
      {children}
    </DeliveryContext.Provider>
  );
}
