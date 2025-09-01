import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

// Merge MDX config with Next.js config
export default nextConfig
