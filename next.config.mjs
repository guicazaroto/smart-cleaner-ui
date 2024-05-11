
/** @type {import('next').NextConfig} */
const nextConfig = {
    api: {
        bodyParser: false,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
        ],
      },
};

export default nextConfig;