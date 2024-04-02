/** @type {import('next').NextConfig} */


const nextConfig = {

  /*experimental: {
    serverActions: {
      allowedOrigins: ['my-proxy.com']
    }
  },*/

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
  reactStrictMode: true,
};


export default nextConfig;
