/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Shodné s produkčním Webnode (canonical URL s lomítkem na konci). */
  trailingSlash: true,
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
      { source: '/home', destination: '/', permanent: true },
      { source: '/firemni-teambuilding', destination: '/teambuilding-ve-vr', permanent: true },
      { source: '/portfolio', destination: '/vr-pro-firmy', permanent: true },
      { source: '/dekujeme', destination: '/', permanent: true },
      { source: '/obchodni-podminky', destination: '/', permanent: true },
      { source: '/ochrana-osobnich-udaju', destination: '/', permanent: true },
      /** Anglické URL obsluhuje Next — nechat indexovatelné (stejné cesty jako dříve na Webnode). */
      { source: '/en', destination: '/en/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
