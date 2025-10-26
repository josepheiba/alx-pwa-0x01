import withPWA from "@ducanh2912/next-pwa";

const pwaConfig = withPWA({
  dest: "public",
  disable: false,
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com', 'image.tmdb.org', 'covers.openlibrary.org'],
    unoptimized: false,
  },
};

export default pwaConfig(nextConfig);
