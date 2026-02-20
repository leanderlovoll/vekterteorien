import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/vekterteorien" : "";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
