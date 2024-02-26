"use client";

import { ReactNode, useEffect, useState } from "react";
import "./product-minerals.scss";
import { Mineral, Product } from "@/types/products";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function chunkArray(array: any, width: number) {
  let chunkSize: number = 0;

  if (width >= 1400) {
    console.log(width);
    chunkSize = 4;
  } else if (width >= 768) {
    chunkSize = 3;
  } else if (width >= 360) {
    chunkSize = 2;
  } else if (width < 360) {
    chunkSize = 1;
  }

  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const MineralItemAccordion = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <>
      <div className="accordion-style box-shadow-border" tabIndex={0}>
        <h2 className="mineral-name">{title}</h2>
        <span>+</span>
      </div>
      <div className={`accordion-content box-shadow-border`} tabIndex={1}>
        {children}
      </div>
    </>
  );
};

const ProductMinerals = ({ product }: { product: Product }) => {
  const { width } = useWindowSize();
  let mineralChunks;

  if (!product) return null;

  if (product.mineral === undefined && product) {
    mineralChunks = chunkArray(product, width);
  } else {
    mineralChunks = chunkArray(product.mineral, width);
  }

  return (
    <div className="product-minerals">
      {product.mineral !== undefined && product && (
        <h2 className="product-minerals-title">
          A termék a következő ásványokat tartalmazza:
        </h2>
      )}

      {mineralChunks.map((chunk, index) => (
        <div key={index} className="product-minerals-container">
          {chunk.map((mineralType: Mineral) => (
            <MineralItemAccordion
              key={mineralType.name}
              title={mineralType.name}
            >
              <div className="mineral-container">
                <p className="mineral-description">{mineralType.description}</p>
                <ul className="mineral-benefits">
                  {mineralType.benefit.map((benefit) => (
                    <li
                      className="mineral-benefit-item box-shadow-border"
                      key={benefit._id}
                    >
                      {benefit.name}
                    </li>
                  ))}
                </ul>
              </div>
            </MineralItemAccordion>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductMinerals;
