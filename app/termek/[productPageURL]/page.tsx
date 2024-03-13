import AddToCartButton from "@/components/webshop/Product/AddToCartBtn/AddToCartButton";
import "./product-page.scss";

import formatPrice from "@/utils/formatPrice";
import Image from "next/image";
import SizeSelector from "@/components/webshop/Product/SizeSelector/SizeSelector";
import ProductMinerals from "@/components/webshop/ProductMinerals/ProductMinerals";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getProductById(productId: string) {
  const res = await fetch(`${API_URL}/products/${productId}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product by id");
  }

  const data = await res.json();
  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { productPageURL: string };
}) {
  const segments = params.productPageURL.split("-");
  const productId = segments[segments.length - 1];
  const product = await getProductById(productId);

  console.log("asd");

  return (
    <>
      <div className="product-page">
        <Image
          className="product-image box-shadow-border"
          src={product?.image}
          alt="Termék"
          width={400}
          height={400}
        />
        <div className="product-details">
          <h1 className="product-name">{product?.name}</h1>
          <p className="product-price">{formatPrice(product.price)}</p>
          <p className="product-description">
            <span className="description-header">TERMÉK LEÍRÁSA</span> <br />
            {product?.description}
          </p>
          <SizeSelector product={product} />
          <AddToCartButton product={product} />
        </div>
      </div>
      <ProductMinerals product={product} />
    </>
  );
}
