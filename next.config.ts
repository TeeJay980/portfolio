import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true" || process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/portfolio",
        images: {
          unoptimized: true,
        },
      }
    : {
        images: {
          remotePatterns: [
            {
              protocol: "https",
              hostname: "images.unsplash.com",
            },
            {
              protocol: "https",
              hostname: "framerusercontent.com",
            },
          ],
        },
      }),
};

export default nextConfig;
