import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vekterteorien",
  assetPrefix: "/vekterteorien/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
