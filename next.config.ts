import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/limo-service-raleigh', destination: '/locations/raleigh', permanent: true },
      { source: '/limo-service-boston', destination: '/locations/boston', permanent: true },
      { source: '/contact-8', destination: '/contact', permanent: true },
      { source: '/about-3', destination: '/about', permanent: true },
    ];
  },
};

export default nextConfig;
