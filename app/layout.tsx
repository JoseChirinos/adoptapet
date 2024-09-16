import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adoptapet by Jose Chirinos",
  description: "Find your new best friend with petfinder api.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#29C254"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
