/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod.spline.design",
      },
      {
        protocol: "https",
        hostname: "assets.csecnix.com",
      },
    ],
  },
};

export default nextConfig;
