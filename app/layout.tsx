import type { Metadata } from "next";
import "./globals.scss";
import { Suspense } from "react";

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
    <html className="App" lang="hu">
      <body>
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
