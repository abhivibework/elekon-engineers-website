import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyContactBar from "@/components/layout/StickyContactBar";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elekon Engineers | Safe, Sustainable & Innovative Electrical Solutions",
  description: "Leading electrical services provider in Mysore. Residential, Commercial, Solar, and Temporary power solutions. Licensed and certified experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cinzel.variable}`}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          {children}
          <WhatsAppButton />
          <StickyContactBar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
