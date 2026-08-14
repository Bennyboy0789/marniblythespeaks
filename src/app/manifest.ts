import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Marni Blythe Speaks",
    short_name: "MB Speaks",
    description:
      "Keynote speaker Marni Blythe — Human Intelligence in the Age of AI.",
    start_url: "/",
    display: "browser",
    background_color: "#0d0916",
    theme_color: "#0d0916",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
