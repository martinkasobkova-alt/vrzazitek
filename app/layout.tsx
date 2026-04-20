import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vrzazitek.cz'),
  title: {
    default: 'VRzazitek.cz — Pronájem VR pro firmy, teambuilding a domů | Praha, Beroun',
    template: '%s | VRzazitek.cz',
  },
  description: 'Profesionální realizace virtuální reality pro firmy, teambuilding a domácnosti. Přivezeme techniku, obsah i obsluhu — vy si užijete zážitek. Praha, Beroun, celá ČR. Od 999 Kč.',
  keywords: ['virtuální realita', 'VR pronájem', 'VR pro firmy', 'teambuilding VR', 'VR Praha', 'VR Beroun', 'VR oslavy', 'Meta Quest 3 pronájem'],
  authors: [{ name: 'VRzazitek.cz' }],
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://www.vrzazitek.cz',
    siteName: 'VRzazitek.cz',
    title: 'VRzazitek.cz — Virtuální realita pro firmy i domů',
    description: 'Firemní eventy, teambuildingy a VR domů. Přivezeme techniku, obsah i obsluhu.',
  },
  alternates: {
    canonical: 'https://www.vrzazitek.cz',
    languages: { 'cs': 'https://www.vrzazitek.cz', 'en': 'https://www.vrzazitek.cz/en' },
  },
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
              description: 'Pronájem virtuální reality pro firmy, teambuilding a domů',
              url: 'https://www.vrzazitek.cz',
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
