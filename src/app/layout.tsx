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
  title: "Shree Nihil Vijayan | Portfolio",
  description: "Innovative individual specializing in Web Design, Cloud Computing & Network Infrastructure.",
};

import { SmoothScroll } from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
