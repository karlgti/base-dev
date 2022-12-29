/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: ['res.cloudinary.com'] // whatever port your backend runs on
  }
};

module.exports = nextConfig;
