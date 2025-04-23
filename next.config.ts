import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'app/components'),
      '@types': path.resolve(__dirname, 'types'),
      '@data': path.resolve(__dirname, 'data'),
    };
    return config;
  },
};

export default nextConfig;
