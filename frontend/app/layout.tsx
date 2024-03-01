import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoToTop from "@/components/general/GoToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codeleap Social Network",
  description: "Codeleap technical test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body
        className={
          inter.className + "bg-base-100 min-h-screen container mx-auto px-4"
        }
      >
        {children}
        <GoToTop />
      </body>
    </html>
  );
}
