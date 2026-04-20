/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** Shodné s produkčním Webnode (canonical URL s lomítkem na konci). */
  trailingSlash: true,
  /** Nepřidávat redirects() pro /en → /en/: s trailingSlash to v Next 14 dělá framework a vlastní pravidlo způsobilo nekonečnou 308 smyčku na /en/. */
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
    ];
  },
};

module.exports = nextConfig;
