import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../../globals.css";
import LogoutForm from "@/components/shared/Auth/LogoutForm/LogoutForm";

import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/admin/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Admin - Csodaásványok",
  description:
    "Csodaásványok webárúház, eredeti ásvány karkötők, nyakláncok, fülbevalók",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
            <Sidebar LogoutComp={<LogoutForm />}>{children}</Sidebar>
          </div>
        </div>
      </body>
    </html>
  );
}
