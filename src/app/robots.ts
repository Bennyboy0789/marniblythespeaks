import type { MetadataRoute } from "next";

// Explicit allow-list for AI answer-engine crawlers (GEO): visibility in
// ChatGPT/Perplexity/AI Overviews is a lead source for a speaker, so these
// are deliberately allowed rather than bundled into the wildcard. If Marni
// later wants to block training-only scrapers (CCBot etc.), add disallow
// rules here without touching the answer-engine bots.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Bingbot",
        ],
        allow: "/",
      },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://marniblythespeaks.com/sitemap.xml",
  };
}
