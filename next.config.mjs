
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        DEFAULT_TOKEN: process.env.NEXT_PUBLIC_DEFAULT_TOKEN,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
          {
            protocol: 'https',
            hostname: 'imagens-profile.s3.us-east-1.amazonaws.com',
          }
        ],
      },
};

export default nextConfig;