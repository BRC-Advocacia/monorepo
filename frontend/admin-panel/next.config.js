/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "31000",
        pathname: "/uploads/**",
      },
    ],
  },
};

module.exports = nextConfig;
