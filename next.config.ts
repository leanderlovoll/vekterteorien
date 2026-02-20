import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip static page generation to avoid Node.js 24 compatibility issues
  // All pages will be rendered on-demand (SSR)
  experimental: {
    // Workaround for prerender errors on Node.js 24
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
