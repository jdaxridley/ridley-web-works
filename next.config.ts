import type { NextConfig } from "next";

// Cloudflare serves this site as static assets. The legacy Vercel redirect
// is preserved in public/_redirects and applied at the edge.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
