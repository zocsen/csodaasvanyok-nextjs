import ProductMinerals from "@/components/webshop/ProductMinerals/ProductMinerals";
import { Metadata } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
  title: "Ásvány Katalógus - Csodaásványok",
  description:
    "Fedezze fel egyedi ásványkarkötőink széles választékát webshopunkban. Mindegyik karkötő különleges ásványokból készül, melyek nem csak gyönyörűek, de különleges jelentéssel is bírnak. Ismerje meg az ásványok titkait, hatásait és válassza ki az Önnek legmegfelelőbb darabot.",
};

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
