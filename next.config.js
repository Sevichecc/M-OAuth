/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.jsdelivr.net", "github.com"],
  },
};

module.exports = nextConfig
