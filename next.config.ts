import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        port: '',
        pathname: '/dynamic/image/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
