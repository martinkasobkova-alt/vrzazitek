/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '3f0d647b7d.clvaw-cdnwnd.com' },
      { protocol: 'https', hostname: 'cdn.synthesisvr.com' },
      { protocol: 'https', hostname: 'duyn491kcolsw.cloudfront.net' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      // Keep original home URL working
      { source: '/home', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
