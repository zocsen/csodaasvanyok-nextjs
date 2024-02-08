export interface Product {
  name: string;
  description: string;
  image: string;
  images: string[];
  price: number;
  category: string;
  mineral: string[]; 
  subcategory: string[];
  color: string[]; 
  dateCreated?: Date;
  id?: string;
}

export type ProductListProps = {
  fetchedProducts: Product[];
};
