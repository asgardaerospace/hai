import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Every URL here must be on the canonical host and must return 200 — a sitemap
 * full of redirects wastes crawl budget and muddies which host Google should
 * index. `siteConfig.url` is the single definition of that host.
 *
 * `lastModified` is maintained deliberately rather than set to build time.
 * Stamping every route with the deploy timestamp tells crawlers that all six
 * pages changed on every deploy, which is false and trains them to ignore the
 * signal. Update a route's date when its *content* changes.
 *
 * `changefreq` and `priority` are omitted — Google ignores both.
 */
const routes: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-09-05" },
  { path: "/about", lastModified: "2026-09-05" },
  { path: "/services", lastModified: "2026-09-05" },
  { path: "/global-experience", lastModified: "2026-09-05" },
  { path: "/team", lastModified: "2026-09-05" },
  { path: "/contact", lastModified: "2026-09-05" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(lastModified),
  }));
}
