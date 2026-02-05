import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Halal Digital Hustles",
  description: "Abu Hayyan School of Skills & Deen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${mono.variable} bg-[#001232] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
