import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';
import { homeTitle, metadataFor, rootLayoutDefaultDescription, SITE_URL } from '@/lib/seo';
import './globals.css';

const homeSeo = metadataFor('home');

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: '%s',
  },
  description: rootLayoutDefaultDescription(),
  authors: [{ name: 'VRzazitek.cz' }],
  openGraph: homeSeo.openGraph,
  alternates: homeSeo.alternates,
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#eef4ff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'VRzazitek.cz',
              description: rootLayoutDefaultDescription(),
              url: `${SITE_URL}/`,
              telephone: '+420604160718',
              email: 'info@vrzazitek.cz',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Na Lucberku 245',
                addressLocality: 'Králův Dvůr - Levín',
                postalCode: '267 01',
                addressCountry: 'CZ',
              },
              areaServed: ['Praha', 'Beroun', 'Česká republika'],
              priceRange: 'od 999 Kč',
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <ScrollRevealProvider>
          <main>{children}</main>
          <Footer />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
