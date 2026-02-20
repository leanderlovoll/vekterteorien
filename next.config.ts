import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vektorteorien",
  assetPrefix: "/vektorteorien/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
