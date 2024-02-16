import { Stripe } from "@stripe/stripe-js";
import { ReactNode } from "react";

export interface StripeContextType {
  stripe: Stripe | null;
  initializeStripe: () => Promise<void>;
}

export interface StripeProviderProps {
  children: ReactNode;
}
