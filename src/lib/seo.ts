import type { Metadata } from "next";

export interface MetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "Developer Portfolio | Obsidian Glass & Editorial Tech",
  description = "A premium modern developer portfolio and engineering product interface.",
  image = "/og-image.png",
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"),
  };
}
