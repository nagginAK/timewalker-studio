import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Timewalker Inc.",
  description: "Design. Build. Brand. Document. A Florida-based design and construction management firm.",
  keywords: "architecture, construction management, design-build, screen printing, Florida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}