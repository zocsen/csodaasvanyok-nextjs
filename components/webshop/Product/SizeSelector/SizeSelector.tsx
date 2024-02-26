"use client";
import "./size-selector.scss";

import React, { useState } from "react";
import { useProduct } from "@/hooks/ProductContext";
import { Product } from "@/types/products";
import SizeHelper from "../../SizeHelper/SizeHelper";

interface SizeSelectorProps {
  product: Product;
}

const SizeSelector = ({ product }: SizeSelectorProps) => {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const { selectedSize, setSelectedSize } = useProduct();

  const [isSizeHelperOpen, setIsSizeHelperOpen] = useState(false);

  const openSizeHelper = () => {
    setIsSizeHelperOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeSizeHelper = () => {
    setIsSizeHelperOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      {product.category.name === "Karkötő" && (
        <div className="product-size-wrapper">
          <h3 className="size-title">Méret</h3>
          <div className="size-boxes">
            {sizes.map((size) => (
              <button
                key={size}
                className={`size-box ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button
            className="size-helper-button"
            onClick={() => openSizeHelper()}
          >
            Méret segédlet
          </button>
        </div>
      )}
      <SizeHelper
        handleSizeHelperVisibility={() => closeSizeHelper()}
        isSizeHelperOpen={isSizeHelperOpen}
      />
    </>
  );
};

export default SizeSelector;
