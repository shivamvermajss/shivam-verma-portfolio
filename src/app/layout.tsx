import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";
import { BackgroundFoundation } from "@/components/primitives/BackgroundFoundation";
import { CustomCursor } from "@/components/primitives/CustomCursor";
import { Navbar, SkipLink } from "@/components/navbar";
import { Footer } from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-[#070709] text-[#F5F5F7]">
        <BackgroundFoundation>
          <SkipLink />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </BackgroundFoundation>
      </body>
    </html>
  );
}
