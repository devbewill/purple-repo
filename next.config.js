/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  // experimental: {
  //   styledComponents: true, //Enables the styled-components SWC transform (ADDED FIX IN .BABELRC)
  // },
};

module.exports = nextConfig;
