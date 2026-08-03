import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Boston/Raleigh market photos and testimonial avatars are currently hotlinked
    // from Unsplash. These should be self-hosted before launch.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
