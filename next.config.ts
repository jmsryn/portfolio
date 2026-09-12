import type { NextConfig } from "next";
import { resolve } from "node:path";

const nextConfig: NextConfig = {
  // Allow verification builds to run without sharing the active dev server's cache.
  distDir: process.env.NEXT_OUTPUT_DIR || '.next',
  images: {
    domains: [
      "www.pngall.com",
      "upload.wikimedia.org",
      "tcm-sec.com",
      "images.unsplash.com",
      "placehold.co",
      "via.placeholder.com",
      "i.scdn.co",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    // Replace framer-motion with a lightweight no-op implementation to disable animations globally
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'framer-motion': resolve(__dirname, 'src/lib/no-motion.tsx'),
    };
    return config;
  },
};

export default nextConfig;
