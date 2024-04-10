import BasicTable from "@/components/admin/Table/SortTable";

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

async function DashboardPage() {
  const fetchedProducts = await getAllProducts();
  return <BasicTable fetchedData={fetchedProducts} />;
}

export default DashboardPage;
