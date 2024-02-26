"use client";
import React, { ReactNode, useEffect, useState } from "react";
import ProductProvider from "./ProductContext";
import CartProvider from "./CartContext";
import { DeliveryProvider } from "./DeliveryContext";
import { StripeProvider } from "./StripeContext";
import IsMobileContext from "./isMobileContext";

interface ClientSideContextProviderProps {
  children: ReactNode;
}

const ClientSideContextProvider = ({
  children,
}: ClientSideContextProviderProps) => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === undefined) return null;

  return (
    <IsMobileContext.Provider value={isMobile}>
      <StripeProvider>
        <ProductProvider>
          <CartProvider>
            <DeliveryProvider>{children}</DeliveryProvider>
          </CartProvider>
        </ProductProvider>
      </StripeProvider>
    </IsMobileContext.Provider>
  );
};

export default ClientSideContextProvider;
