import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Campaign Dashboard",
  description: "The ultimate dashboard for your campaigns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        <section className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-hidden pt-16">{children}</main>
        </section>
      </body>
    </html>
  );
}
