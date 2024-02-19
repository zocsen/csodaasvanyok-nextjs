"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { StripeContextType, StripeProviderProps } from "@/types/stripe";

const StripeContext = createContext<StripeContextType | null>(null);

export const useStripeContext = (): StripeContextType => {
  const context = useContext(StripeContext);

  if (context === null) {
    throw new Error("useStripeContext must be used within a StripeProvider");
  }
  return context;
};

export const StripeProvider = ({ children }: StripeProviderProps) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  const initializeStripe = useCallback(async () => {
    if (!stripe && process.env.NEXT_PUBLIC_STRIPE_KEY) {
      const stripeInstance = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_KEY
      );
      setStripe(stripeInstance);
    }
  }, [stripe]);

  return (
    <StripeContext.Provider value={{ stripe, initializeStripe }}>
      {children}
    </StripeContext.Provider>
  );
};
