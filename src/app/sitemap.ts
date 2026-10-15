import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";

const BASE = "https://marniblythespeaks.com";

// lastModified = date of the last real content change per page. Bump the
// relevant date when a page's copy actually changes (a shared build-time
// timestamp carries no freshness signal and eventually gets discounted).
const LAUNCH = "2026-08-13";
const WALKTHROUGH_UPDATE = "2026-10-15";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: WALKTHROUGH_UPDATE },
    { url: `${BASE}/speaking`, lastModified: WALKTHROUGH_UPDATE },
    { url: `${BASE}/reviews`, lastModified: WALKTHROUGH_UPDATE },
    { url: `${BASE}/contact`, lastModified: WALKTHROUGH_UPDATE },
    { url: `${BASE}/about`, lastModified: WALKTHROUGH_UPDATE },
    { url: `${BASE}/press`, lastModified: WALKTHROUGH_UPDATE },
    { url: `${BASE}/privacy`, lastModified: LAUNCH },
    ...industries.map((i) => ({
      url: `${BASE}/speaking/${i.slug}`,
      lastModified: WALKTHROUGH_UPDATE,
    })),
  ];
}
