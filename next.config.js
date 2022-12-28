/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['localhost'] // whatever port your backend runs on
  }
};

module.exports = nextConfig;
