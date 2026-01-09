import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a professional, clean font
import "./globals.css";
import BackgroundAnimation from "@/components/BackgroundAnimation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syed Mawahid Hussain | Portfolio",
  description: "Software Engineer / CS Student / Problem Solver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-black text-slate-900 dark:text-slate-100`}>
        <BackgroundAnimation />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
