import ProductsTable from "@/components/admin/Tables/ProductsTable";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getAllProducts() {
  const res = await fetch(`${API_URL}/products`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data;
}

async function ProductsPage() {
  const fetchedProducts = await getAllProducts();
  return <ProductsTable fetchedProducts={fetchedProducts} />;
}

export default ProductsPage;
