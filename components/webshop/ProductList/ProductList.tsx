import Image from "next/image";

import "./product-list.scss";
import Link from "next/link";
import convertToSlug from "@/utils/convertToSlug";
import formatPrice from "@/utils/formatPrice";

import { Product, ProductListProps } from "@/types/products";


export default function ProductList({ fetchedProducts }: ProductListProps) {
  return (
    <div className="container">
      {fetchedProducts &&
        fetchedProducts.map((product: Product) => {
          const productSlug = convertToSlug(product.name);
          const imgSrc = product.image;
          return (
            <div className="grid-item" key={product.id}>
              <Link href={`/termek/${productSlug}/${product.id}`}>
                <Image
                  src={imgSrc}
                  width={400}
                  height={400}
                  alt="Termék"
                  className="product-image"
                />
                <h1 className="product-name">{product.name}</h1>
                <p className="product-price">{formatPrice(product.price)}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
