/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/DigitalS-D-WebSite",
  assetPrefix: "/DigitalS-D-WebSite/",
  trailingSlash: true,
};

module.exports = nextConfig;
