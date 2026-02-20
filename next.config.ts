import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      basePath: "/vekterteorien",
      assetPrefix: "/vekterteorien/",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      // Normal Vercel deploy
      images: { unoptimized: false },
    };

export default nextConfig;
