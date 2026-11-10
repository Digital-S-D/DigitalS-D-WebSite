import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // Search access and training permission are separate decisions.
    // Cloudflare may inject additional directives: verify the served file.
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["Googlebot", "Bingbot", "OAI-SearchBot"], allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      // Preserve the current published restriction until the owner decides:
      // Google-Extended controls both Gemini grounding and training use.
      { userAgent: "Google-Extended", disallow: "/" },
    ],
    sitemap: siteUrl("/sitemap.xml"),
  };
}
