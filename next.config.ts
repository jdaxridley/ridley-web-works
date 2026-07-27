import type { NextConfig } from "next";

// Cloudflare Pages serves this site as static files. The legacy Vercel redirect
// is preserved in public/_redirects, which Cloudflare Pages applies at the edge.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
