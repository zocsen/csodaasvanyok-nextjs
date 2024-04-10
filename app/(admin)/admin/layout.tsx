import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "../../globals.scss";
import "./admin.scss";
import SideBar from "@/components/admin/sidebar/page";
import LogoutForm from "@/components/shared/Auth/LogoutForm/LogoutForm";

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
        <div className="admin-page-container">
          <div>
            <SideBar />
            <LogoutForm />
          </div>

          <main className="admin-main">{children}</main>
        </div>
      </body>
    </html>
  );
}
