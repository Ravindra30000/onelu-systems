import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneLU | Infrastructure + Systems Company",
  description: "Building physical and digital infrastructure systems that solve real-world operational bottlenecks at scale.",
};

export const viewport = {
  themeColor: "#050505",
};

import BrandWatermark from "@/components/BrandWatermark";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-onelu-bg text-foreground overflow-x-hidden selection:bg-onelu-blue selection:text-white">
        {children}
        <BrandWatermark />
      </body>
    </html>
  );
}
