import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import { Rubik_Vinyl } from "next/font/google";
import { Water_Brush } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Rethink_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
})

const RubikVinylFont = Rubik_Vinyl({
  weight: '400',
  subsets: ["latin"],
})

const WaterBrushFont = Water_Brush({
  variable: "--font-WaterBrushFont",
  weight: '400',
  subsets: ["latin"],
})

/* 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); 
*/

export const metadata: Metadata = {
  title: "United Gymnastix",
  description: "United Gymnastix page built using next js 15.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
