import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const heading = Oswald({ subsets: ["latin"], variable: "--font-heading", weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Atlas Roofing | Strong Roofs. Bold Protection.",
  description: "Professional roofing services — residential & commercial. Free estimates, licensed & insured. Serving the greater metro area.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
