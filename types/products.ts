import { ReactNode } from "react";


interface Category {
  name: string;
}
export interface Product {
  name: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  category: Category;
  mineral: string[]; 
  subcategory: string[];
  color: string[]; 
  dateCreated?: Date;
  id?: string;
}

export type ProductListProps = {
  products: Product[];
};

export interface ProductContextType {
  selectedSize: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ProductProviderProps {
  children: ReactNode;
}