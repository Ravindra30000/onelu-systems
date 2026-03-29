import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1 Lu Next Gen Technologies | Web, App & DSC Services – Raipur",
  description:
    "Affordable web development from ₹4,999, Class 3 DSC from ₹825, and full-stack apps that grow with your business. Based in Raipur, Chhattisgarh.",
};

export const viewport = {
  themeColor: "#F9FAFB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-lu-bg text-lu-text overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
