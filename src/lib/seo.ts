import type { Metadata } from "next";

const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630 };

/**
 * Per-page metadata with self-referencing canonical and page-specific
 * Open Graph / Twitter tags. Next.js inherits the root layout's static
 * `openGraph` object verbatim (it does NOT re-derive og:title from the page
 * title), so every page must pass through this helper — otherwise forwarded
 * links unfurl with generic homepage copy.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Marni Blythe Speaks",
      title,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
