import type { MetadataRoute } from "next";
import { PUBLIC_PATHS, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until actual content revision dates are maintained.
  return PUBLIC_PATHS.map((path) => ({ url: siteUrl(path) }));
}
