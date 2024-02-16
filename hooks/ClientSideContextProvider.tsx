"use client";
import React, { ReactNode } from "react";
import ProductProvider from "./ProductContext";
import CartProvider from "./CartContext";
import { DeliveryProvider } from "./DeliveryContext";

interface ClientSideContextProviderProps {
  children: ReactNode;
}

const ClientSideContextProvider = ({
  children,
}: ClientSideContextProviderProps) => {
  return (
    <ProductProvider>
      <CartProvider>
        <DeliveryProvider>{children}</DeliveryProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default ClientSideContextProvider;
