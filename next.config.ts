import path from "path";

/** @type {import('next').NextConfig} */

const nextConfig: import('next').NextConfig = {

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'app/components'),
      '@types': path.resolve(__dirname, 'types'),
      '@data': path.resolve(__dirname, 'data'),
    };
    
    return config;
  },

  images: {
    remotePatterns: /** @type {import('next').RemotePattern[]} */ [
      {
        protocol: 'https',
        hostname: 'ap-south-1.graphassets.com',
        pathname: '**', // allow all paths
      },
    ],
  },
  
};

export default nextConfig;
