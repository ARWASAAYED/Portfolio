import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  reactStrictMode: true,

  images: {
  
    formats: ["image/avif", "image/webp"],
   
    minimumCacheTTL: 31536000,
  },

 
  compress: true,

 
  typescript: {
    ignoreBuildErrors: false,
  },
 
  experimental: {
    optimisticClientCache: true,
  },
};

export default nextConfig;
