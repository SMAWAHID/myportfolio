import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a professional, clean font
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
