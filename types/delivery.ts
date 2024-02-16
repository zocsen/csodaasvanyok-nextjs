import { ReactNode } from "react";
import { CartItem } from "./cart";

export interface DeliveryInfo {
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
}

export interface DeliveryContextType {
  isDeliveryPanelOpen: boolean;
  openDeliveryPanel: () => void;
  closeDeliveryPanel: () => void;
  deliveryInfo: DeliveryInfo;
  setDeliveryInfo: (item: DeliveryInfo) => void;
}

export interface DeliveryProviderProps {
  children: ReactNode;
}
