"use client";

import { ProductContextType, ProductProviderProps } from "@/types/products";
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const value = { selectedSize, setSelectedSize };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
