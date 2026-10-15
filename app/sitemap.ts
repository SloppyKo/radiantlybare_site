import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

// Bump this when page content changes, then resubmit in Search Console.
const LAST_MODIFIED = new Date("2026-10-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
  ];
}
