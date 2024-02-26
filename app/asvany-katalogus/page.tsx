import ProductMinerals from "@/components/webshop/ProductMinerals/ProductMinerals";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getMinerals() {
  const res = await fetch(`${API_URL}/minerals`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch minerals");
  }

  const data = await res.json();
  return data;
}

export default async function MineralCatalogue() {
  const allMinerals = await getMinerals();
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          padding: "0px 0 40px",
          fontSize: "3.8rem",
        }}
      >
        Ásvány Katalógus
      </h1>
      <ProductMinerals product={allMinerals} />
    </>
  );
}
