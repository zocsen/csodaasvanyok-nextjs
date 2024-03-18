import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.scss";
import { Suspense } from "react";
import ClientSideContextProvider from "@/hooks/ClientSideContextProvider";
import Header from "@/components/webshop/Header/Header";
import Cart from "@/components/webshop/Cart/Cart";
import DeliveryInfo from "@/components/webshop/DeliveryInfo/DeliveryInfo";
import Footer from "@/components/webshop/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Csodaásványok",
  description:
    "Csodaásványok webárúház, eredeti ásvány karkötők, nyakláncok, fülbevalók",
};

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--primary-font-family",
});

const lora = Lora({
  subsets: ["latin-ext"],
  variable: "--secondary-font-family",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${lora.variable}`}>
      <body className="App">
        <ClientSideContextProvider>
          <Suspense fallback={<div>...</div>}>
            <Header />
            <Cart />
            <DeliveryInfo />
          </Suspense>
          <main className="main">{children}</main>
          <Footer />
        </ClientSideContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
