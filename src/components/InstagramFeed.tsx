"use client";

import { useEffect, useState } from "react";

// Live Instagram feed via Behold (https://behold.so):
// 1. Sign in to Behold with any account, add a feed, and connect
//    @marniblythespeaks when Instagram asks for authorization.
// 2. Choose "JSON feed" and copy the feed URL (https://feed.behold.so/...).
// 3. Set NEXT_PUBLIC_IG_FEED_URL to that URL (Vercel env var or .env.local).
// Until then, this component renders placeholder tiles linking to the profile.
const FEED_URL = process.env.NEXT_PUBLIC_IG_FEED_URL ?? "";
const POST_COUNT = 6;

type Post = {
  id: string;
  permalink: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  mediaType?: string;
  prunedCaption?: string;
  caption?: string;
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!FEED_URL) return;
    let cancelled = false;
    fetch(FEED_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`${r.status}`))))
      .then((data) => {
        // Behold returns either an array of posts or { posts: [...] }
        const list: Post[] = Array.isArray(data) ? data : (data.posts ?? []);
        if (!cancelled) setPosts(list.slice(0, POST_COUNT));
      })
      .catch(() => {
        // Silently fall back to placeholders — the profile link still works.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // CRO: no placeholder tiles — until the Behold feed is connected (or if it
  // fails), the section's heading + follow CTA stand alone.
  if (posts.length === 0) return null;

  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {posts.map((p) => {
        const src =
          p.mediaType === "VIDEO" ? (p.thumbnailUrl ?? p.mediaUrl) : p.mediaUrl;
        const alt =
          p.prunedCaption?.slice(0, 100) ||
          p.caption?.slice(0, 100) ||
          "Instagram post from @marniblythespeaks";
        return (
          <a
            key={p.id}
            href={p.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden rounded-xl bg-white/5"
          >
            {/* Feed media comes from Instagram's CDN with short-lived URLs, so
                next/image optimization is skipped on purpose. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-80"
            />
            {p.mediaType === "VIDEO" && (
              <span className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" className="fill-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
