import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
