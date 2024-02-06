import Image from "next/image";
import formatPrice from "../../../utils/formatPrice";
import "./product-list.scss";
import Link from "next/link";

export default function ProductList({ fetchedProducts }) {
  console.log("Fetched products: ", fetchedProducts);
  return (
    <div className="container">
      {fetchedProducts.success !== false &&
        fetchedProducts.map((product) => {
          // Use a slug or a URL-friendly version of the product name
          function convertToSlug(text) {
            const map = {
              á: "a",
              é: "e",
              í: "i",
              ó: "o",
              ö: "o",
              ő: "o",
              ú: "u",
              ü: "u",
              ű: "u",
              Á: "A",
              É: "E",
              Í: "I",
              Ó: "O",
              Ö: "O",
              Ő: "O",
              Ú: "U",
              Ü: "U",
              Ű: "U",
            };

            return text
              .split("")
              .map((char) => map[char] || char)
              .join("")
              .toLowerCase()
              .replace(/[^a-z0-9]/g, "_") // Replace any non-alphanumeric character with _
              .replace(/_+/g, "_"); // Replace multiple underscores with a single underscore
          }

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
