import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Objednání VR | Nezávazná poptávka',
  description: 'Objednejte si virtuální realitu pro firmy, teambuilding, oslavu nebo domů. Vyplňte formulář a do 24 hodin vám pošleme nezávaznou nabídku.',
  alternates: { canonical: 'https://www.vrzazitek.cz/objednani-vr' },
};

export default function ObjednaniLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
