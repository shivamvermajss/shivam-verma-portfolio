import type { Metadata } from "next";
import "./globals.css";
import { constructMetadata } from "@/lib/seo";
import { BackgroundFoundation } from "@/components/primitives/BackgroundFoundation";
import { CustomCursor } from "@/components/primitives/CustomCursor";
import { Navbar, SkipLink } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
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
