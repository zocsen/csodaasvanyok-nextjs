"use client";
import React, { ReactNode } from "react";
import ProductProvider from "./ProductContext";
import CartProvider from "./CartContext";
import { DeliveryProvider } from "./DeliveryContext";
import { StripeProvider } from "./StripeContext";

interface ClientSideContextProviderProps {
  children: ReactNode;
}

const ClientSideContextProvider = ({
  children,
}: ClientSideContextProviderProps) => {
  return (
    <ProductProvider>
      <CartProvider>
        <DeliveryProvider>
          <StripeProvider>{children}</StripeProvider>
        </DeliveryProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default ClientSideContextProvider;
