import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TJ | Senior Designer & Web Specialist",
  description:
    "Product Designer & Web Specialist crafting premium web experiences, high-converting digital products, and refined design systems.",
  keywords: ["Web Design", "UI/UX", "Framer", "Next.js", "Portfolio", "Design Engineer"],
  authors: [{ name: "TJ" }],
  openGraph: {
    title: "TJ | Senior Designer & Web Specialist",
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
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="bg-[#F8F8F7] text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
        {children}
      </body>
    </html>
  );
}
