/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
