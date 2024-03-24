import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import SidePopCards from "@/components/SidePopCard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "wesho",
  description: "Built with React, Next and Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-between w-full min-h-screen place-content-center bg-gradient-to-br from-pink-500 to-yellow-500 px-4 py-12 text-slate-900">
        <Navbar/>
        <main>
        <SidePopCards/>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
