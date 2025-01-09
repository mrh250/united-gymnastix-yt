import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Rethink_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
})

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
        <Footer />
      </body>
    </html>
  );
}
