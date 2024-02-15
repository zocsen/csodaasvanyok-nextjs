'use client';
import "./add-to-cart-button.scss"

import React from 'react';
import { useProduct } from '@/hooks/ProductContext';
import { useCart } from '@/hooks/CartContext';
import { Product } from '@/types/products';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { selectedSize } = useProduct();
  const { addToCart, openCart } = useCart();

  return (
    <button className="add-to-cart-button"
      disabled={!selectedSize}
      onClick={() => {
          addToCart({ ...product, size: selectedSize, quantity: 1 });
        
        openCart();
      }}
    >
      Kosárba
    </button>
  );
};

export default AddToCartButton;
