import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";

const BASE = "https://marniblythespeaks.com";

// lastModified = date of the last real content change per page. Bump the
// relevant date when a page's copy actually changes (a shared build-time
// timestamp carries no freshness signal and eventually gets discounted).
const LAUNCH = "2026-08-13";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: LAUNCH },
    { url: `${BASE}/speaking`, lastModified: LAUNCH },
    { url: `${BASE}/contact`, lastModified: LAUNCH },
    { url: `${BASE}/about`, lastModified: LAUNCH },
    { url: `${BASE}/privacy`, lastModified: LAUNCH },
    ...industries.map((i) => ({
      url: `${BASE}/speaking/${i.slug}`,
      lastModified: LAUNCH,
    })),
  ];
}
