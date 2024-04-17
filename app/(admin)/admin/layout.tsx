import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
// import "../../globals.scss";
import "../../globals.css";
import "./admin.scss";
import SideBar from "@/components/admin/sidebar/page";
import LogoutForm from "@/components/shared/Auth/LogoutForm/LogoutForm";

import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/admin/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Admin - Csodaásványok",
  description:
    "Csodaásványok webárúház, eredeti ásvány karkötők, nyakláncok, fülbevalók",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const lora = Lora({
//   subsets: ["latin-ext"],
//   variable: "--secondary-font-family",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="admin-page-container">
          <div>
            <Sidebar>{children}</Sidebar>
            {/* <LogoutForm /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
