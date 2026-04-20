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
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/vr-home', destination: '/zapujceni-vr', permanent: true },
      { source: '/en/vr-teambuilding', destination: '/teambuilding-ve-vr', permanent: true },
      { source: '/en/order', destination: '/objednani-vr', permanent: true },
      { source: '/en/contact-team', destination: '/o-nas', permanent: true },
      { source: '/en/for-businessess', destination: '/vr-pro-firmy', permanent: true },
      { source: '/en/terms-and-conditions', destination: '/', permanent: true },
      { source: '/en/privacy-policy', destination: '/', permanent: true },
      { source: '/en/thank-you', destination: '/', permanent: true },
      { source: '/en/vr-party-experience', destination: '/oslavy-vr', permanent: true },
    ];
  },
};

module.exports = nextConfig;
