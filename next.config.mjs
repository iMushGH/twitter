/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "logos-world.net" },
      { hostname: "pbs.twimg.com" },
    ],
  },
};

export default nextConfig;
