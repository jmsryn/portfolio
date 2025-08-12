import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      'framer-motion': require('path').resolve(__dirname, 'src/lib/no-motion.tsx'),
    };
    return config;
  },
};

export default nextConfig;
