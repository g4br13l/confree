/** @type {import('next').NextConfig} */


const nextConfig = {

  images: {
    formats: ['image/avif', "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com',
        port: '',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
        port: '',
        pathname: '*',
      }
    ]
  },

  reactStrictMode: false,
};


export default nextConfig;
