import { ReactNode } from "react";

interface Category {
  name: string;
}

export interface Benefit {
  name: string;
  _id: string;
}

export interface Mineral {
  name: string;
  _id: string;
  benefit: Benefit[];
  description: string;
}

export interface Product {
  name: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  category: Category;
  mineral: Mineral[] | null;
  subcategory: string[];
  color: { code: string }[];
  dateCreated?: Date;
  id?: string;
}

export type ProductsHandlerProps = {
  fetchedProducts: Product[];
  title: string;
};

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
