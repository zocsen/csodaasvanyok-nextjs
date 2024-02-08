import getCategoryFromURL from "@/utils/getCategoryFromURL";
import ProductList from "../../../components/webshop/ProductList/ProductList";

import getSubcategoryFromURL from "../../../utils/getSubcategoryFromURL";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getProducts(category: string, subcategories: string) {
  const res = await fetch(
    `${API_URL}/products/?category=${category}&subcategories=${subcategories}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default async function ProductsPage({
  params,
}: {
  params: { productsPageURL: string };
}) {
  const productsPageURL = params.productsPageURL;
  const category = getCategoryFromURL(productsPageURL);
  const subcategories = getSubcategoryFromURL(productsPageURL);
  const fetchedProducts = await getProducts(category, subcategories);

  return (
    <div>
      <ProductList fetchedProducts={fetchedProducts}></ProductList>
    </div>
  );
}
