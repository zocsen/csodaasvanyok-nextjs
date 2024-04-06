import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "../globals.scss";
import "@/components/shared/Auth/auth.scss";

export const metadata: Metadata = {
  title: "Admin - Csodaásványok",
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
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
