/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  images: {
    domains: ["picsum.photos"],
  },
  experimental: {
    styledComponents: true,
    // Enables the styled-components SWC transform
  },
};

module.exports = nextConfig;
