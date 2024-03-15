import { Product } from "@/types/products";
import convertToSlug from "@/utils/convertToSlug";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3100";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type ChangeFrequency =
  | "yearly"
  | "monthly"
  | "weekly"
  | "daily"
  | "always"
  | "hourly"
  | "never";

const productPaths = [
  "osszes-karkoto",
  "noi-karkotok",
  "ferfi-karkotok",
  "paros-karkotok",
  "natural-karkotok",
  "tel",
  "szerelem",
  "horoszkop",
  "akcio",
  "marokkovek",
];

async function getAllProducts() {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();
  return data;
}

function getAllProductPaths(products: Product[]) {
  return products.map((product: Product) => {
    const productSlug = convertToSlug(product.name);
    return `/termek/${productSlug}-${product.id}`;
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allProduct = await getAllProducts();
  const allProductPath = getAllProductPaths(allProduct);

  const staticPaths = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/rolunk`,
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/asvany-katalogus`,
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ekszer-tervezo`,
      lastModified: new Date(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 1,
    },
    {
      url: `${baseUrl}/altalanos-szerzodesi-feltetelek`,
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/adatkezelesi-tajekoztato`,
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.3,
    },
  ];

  const productListPaths = productPaths.map((path) => ({
    url: `${baseUrl}/termekek/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.7,
  }));

  const allProductPaths = allProductPath.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as ChangeFrequency,
    priority: 0.7,
  }));

  return [...staticPaths, ...productListPaths, ...allProductPaths];
}
