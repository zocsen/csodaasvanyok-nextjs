import { ReactNode } from "react";

export interface CartItem {
  id?: string;
  price: number;
  quantity: number;
  size?: string | null;
  image: string;
  name: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  removeFromCart: (item: CartItem) => void;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  increaseQuantity: (item: CartItem) => void;
  decreaseQuantity: (item: CartItem) => void;
  totalPrice: number;
  cartItemsCount: number;
  progress: number;
  deliveryFee: number;
  totalPriceWithDeliveryFee: number;
  freeDeliveryThreshold: number;
  setBaseDeliveryFee: React.Dispatch<React.SetStateAction<number>>;
}

export interface CartProviderProps {
  children: ReactNode;
}
