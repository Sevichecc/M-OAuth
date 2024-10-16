/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net", "github.com", "cdn.simpleicons.org"],
  },
};

module.exports = nextConfig;
