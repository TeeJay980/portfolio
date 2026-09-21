import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TJ | Web Developer & Specialist",
  description:
    "Product Designer & Web Specialist crafting premium web experiences, high-converting digital products, and refined design systems.",
  keywords: ["Web Design", "UI/UX", "Framer", "Next.js", "Portfolio", "Design Engineer", "TJ"],
  authors: [{ name: "TJ" }],
  openGraph: {
    title: "TJ | Web Developer & Specialist",
    description: "Product Designer & Web Specialist crafting premium web experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F8F7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${inter.variable}`}>
      <body className="bg-[#F8F8F7] text-[#111111] antialiased selection:bg-[#111111] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
