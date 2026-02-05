import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halal Digital Hustles From Home | Abu Hayyan School",
  description: "10 Online Businesses You Can Do From Home. Free Masterclass.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#001232] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
