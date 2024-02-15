"use client";
import React, { ReactNode } from "react";
import ProductProvider from "./ProductContext";
import CartProvider from "./CartContext";

interface ClientSideContextProviderProps {
  children: ReactNode;
}

const ClientSideContextProvider = ({
  children,
}: ClientSideContextProviderProps) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};

export default ClientSideContextProvider;
