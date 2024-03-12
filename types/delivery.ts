import { ReactNode } from "react";
import { CartItem } from "./cart";

export interface DeliveryInfoType {
  orderItems: CartItem[];
  shippingAddress1: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  status: number;
  totalPrice: number;
  deliveryFee: number;
  deliveryMethod: string;
  billingCountry: string;
  billingAddress1: string;
  billingCity: string;
  billingZip: string;
}

export interface DeliveryContextType {
  isDeliveryPanelOpen: boolean;
  openDeliveryPanel: () => void;
  closeDeliveryPanel: () => void;
  deliveryInfo: DeliveryInfoType;
  setDeliveryInfo: (
    item: DeliveryInfoType | ((prevInfo: DeliveryInfoType) => DeliveryInfoType)
  ) => void;
}

export interface DeliveryProviderProps {
  children: ReactNode;
}
