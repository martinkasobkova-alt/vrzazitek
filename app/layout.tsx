import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';
import {
  homeTitle,
  rootLayoutDefaultDescription,
  rootLayoutDefaultDescriptionEn,
  SITE_URL,
} from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: '%s',
  },
  description: rootLayoutDefaultDescription(),
  authors: [{ name: 'VRzazitek.cz' }],
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#eef4ff',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const lang = h.get('x-locale') === 'en' ? 'en' : 'cs';
  const jsonLdDescription =
    lang === 'en' ? rootLayoutDefaultDescriptionEn() : rootLayoutDefaultDescription();

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'VRzazitek.cz',
              description: jsonLdDescription,
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
