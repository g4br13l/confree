/** @type {import('next').NextConfig} */


const nextConfig = {

  images: {
    formats: ['image/avif', "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com'
      },
      {
        protocol: 'https',
        hostname: 'files.stripe.com'
      }
    ]
  },

  reactStrictMode: false,
};


export default nextConfig;
