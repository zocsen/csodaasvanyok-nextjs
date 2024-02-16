import type { Metadata } from "next";
import "./globals.scss";
import { Suspense } from "react";
import ClientSideContextProvider from "@/hooks/ClientSideContextProvider";
import Header from "@/components/webshop/Header/Header";
import Cart from "@/components/webshop/Cart/Cart";
import DeliveryInfo from "@/components/webshop/DeliveryInfo/DeliveryInfo";

export const metadata: Metadata = {
  title: "Csodaásványok",
  description:
    "Csodaásványok webárúház, eredeti ásvány karkötők, nyakláncok, fülbevalók",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="App">
        <ClientSideContextProvider>
          <Suspense fallback={<div>...</div>}>
            <Header />
            <Cart />
            <DeliveryInfo />
          </Suspense>
          <main className="main">{children}</main>
        </ClientSideContextProvider>
      </body>
    </html>
  );
}
