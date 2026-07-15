import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shree Nihil Vijayan | Web & Cloud Engineer Portfolio",
  description: "Portfolio of Shree Nihil Vijayan. Web Design, Cloud Computing, and Network Infrastructure Specialist based in Coimbatore, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-black text-[#ebebeb] overflow-x-hidden selection:bg-lime/30 selection:text-lime`}
      >
        <SmoothScroll>
          <div className="min-h-screen bg-black py-4 md:py-10 px-4 md:px-8 selection:bg-lime/30 selection:text-lime">
            <div className="max-w-[1600px] mx-auto rounded-[2.5rem] ring-1 ring-white/10 shadow-2xl bg-[#0c0c0c] relative overflow-hidden noise-overlay">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
