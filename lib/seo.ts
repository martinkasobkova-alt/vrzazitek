import type { Metadata } from 'next';

/** Jedna pravda pro produkční doménu (shodné s Webnode / Search Console). */
export const SITE_URL = 'https://www.vrzazitek.cz';

/** OG obrázky z původního webu — stabilní URL pro náhledy ve vyhledávání a sociálních sítích. */
const ogRodina =
  'https://3f0d647b7d.clvaw-cdnwnd.com/6a3203a6baa9e1dbebb1d79acc84a561/200000975-8f5408f542/rodina-4.webp?ph=3f0d647b7d';
const ogBackground =
  'https://3f0d647b7d.clvaw-cdnwnd.com/6a3203a6baa9e1dbebb1d79acc84a561/200000866-b80fbb80fd/700/background.png?ph=3f0d647b7d';

export type SeoPageKey =
  | 'home'
  | 'zapujceni-vr'
  | 'vr-pro-firmy'
  | 'teambuilding-ve-vr'
  | 'oslavy-vr'
  | 'o-nas'
  | 'objednani-vr';

type SeoDef = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  /** hreflang — pouze kde měl Webnode alternativy u konkrétní stránky */
  alternatesLanguages?: Record<string, string>;
};

export const homeTitle = 'Pronájem VR domů i pro firmy. Půjčovna Praha a Beroun od 999 Kč';

const defs: Record<SeoPageKey, SeoDef> = {
  home: {
    path: '/',
    title: homeTitle,
    description:
      'Půjčovna VR brýlí domů i pro firmy. Meta Quest 3 s 30+ hrami již od 999 Kč. Osobní předání Praha a Beroun nebo kurýrem po celé ČR. Ideální zážitek na oslavy.',
    ogTitle: 'Půjčovna VR domů i pro firmy | VRzazitek.cz',
    ogDescription:
      'Pronájem virtuální reality s hrami v ceně. Půjčujeme Meta Quest 3. Osobní předání Praha a Beroun. Zábava od 999 Kč.',
    ogImage: ogRodina,
    alternatesLanguages: {
      'x-default': SITE_URL.replace(/\/$/, ''),
      cs: `${SITE_URL}/`,
      en: `${SITE_URL}/en/`,
    },
  },
  'zapujceni-vr': {
    path: '/zapujceni-vr/',
    title: 'Zapůjčení VR headsetů domů | Pronájem virtuální reality – VR Zážitek',
    description:
      'Zapůjčení VR brýlí domů na víkend i delší dobu. Hry, návody, podpora. Objednejte si virtuální realitu pohodlně online.',
    ogTitle: 'Půjčovna VR domů | Pronájem Meta Quest po celé ČR – VR Zážitek',
    ogDescription:
      'Zapůjčení VR headsetů domů od 1 dne. Meta Quest 2 a 3, Praha, Beroun i celá ČR. Rychlá rezervace a technická podpora.',
  },
  'vr-pro-firmy': {
    path: '/vr-pro-firmy/',
    title: 'Pronájem virtuální reality (VR) & AR pro firmy | Eventy & teambuilding',
    description:
      'VR (virtuální realita) a AR (rozšířená realita) pro firemní akce, marketing i prezentace. Kompletní servis, technika a podpora - Praha, celá ČR.',
    keywords: ['VR', 'virtualni realita', 'VR brýle', 'firmy'],
    ogTitle: 'VR a AR řešení pro firmy | VRzazitek.cz',
    ogDescription:
      'VR a AR na firemní akce, teambuildingy, prezentace produktů a vzdělávací workshopy. Profesionální obsluha, technika i obsah.',
    ogImage: ogRodina,
  },
  'teambuilding-ve-vr': {
    path: '/teambuilding-ve-vr/',
    title: 'VR teambuilding pro firmy | Firemní akce ve virtuální realitě',
    description:
      'Firemní teambuilding ve virtuální realitě v Praze i po celé ČR. Zajistíme headsety, obsluhu i hry pro 10–200 lidí. Rychlá rezervace, špičkový zážitek.',
    keywords: [
      'vr teambuilding',
      'firemní teambuilding',
      'teambuilding pro firmy',
      'firemní akce',
      'virtuální realita teambuilding',
      'vr akce',
      'vr event',
      'vr pro firmy',
      'teambuilding praha',
      'vr herní zóna',
      'meta quest teambuilding',
      'pronájem vr headsetů',
      'corporate event vr',
    ],
    ogTitle: 'VR teambuilding pro firmy | Firemní akce ve virtuální realitě',
    ogDescription:
      'Firemní teambuilding ve virtuální realitě v Praze i po celé ČR. Zajistíme headsety, obsluhu i hry pro 10–200 lidí.',
  },
  'oslavy-vr': {
    path: '/oslavy-vr/',
    title: 'VR oslavy a narozeniny v Praze | VR zážitek – přivezeme VR k vám',
    description:
      'Nezapomenutelné VR oslavy: dětské narozeniny, párty, rozlučky i svatby. Přivezeme Meta Quest 3, vše nastavíme, zajistíme obsluhu i fotky. Praha a okolí.',
    ogTitle: 'VR oslavy a narozeniny | Dětské párty, rozlučky i svatby – VR zážitek',
    ogDescription:
      'Nezapomenutelné VR oslavy: narozeniny, dětské párty, rozlučky se svobodou i svatby. Přivezeme virtuální realitu k vám. Praha i celá ČR.',
  },
  'o-nas': {
    path: '/o-nas/',
    title: 'O nás | VR Zážitek – experti na virtuální realitu a firemní eventy',
    description:
      'Poznejte tým VR Zážitek, který stojí za stovkami VR akcí pro firmy i jednotlivce. Naše zkušenosti, technologie a přístup k zákazníkům.',
    ogTitle: 'O nás | VR zážitek – rodinný tým pro VR pronájem a eventy',
    ogDescription:
      'Jsme rodinný tým VR zážitku. Půjčujeme VR domů i na firemní akce, zajišťujeme instalaci, program i technickou podporu. Praha, Beroun a celá ČR.',
    ogImage: ogBackground,
  },
  'objednani-vr': {
    path: '/objednani-vr/',
    title: 'Objednávka pronájmu VR | Virtuální realita pro firmy i domů – VR Zážitek',
    description:
      'Rychlá a nezávazná objednávka VR pronájmu. Vyplňte formulář a připravíme vám nabídku na míru na doma i pro firemní akce.',
    ogTitle: 'Objednávka VR | Pronájem Meta Quest domů i pro firmy – VR zážitek',
    ogDescription:
      'Nezávazná objednávka VR pronájmu. Napište termín a co chcete (Quest 3, počet dní, doprava) a pošleme nabídku. Praha/Beroun + kurýr po ČR.',
  },
};

function canonicalUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`;
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${SITE_URL}/${clean}/`;
}

export function metadataFor(key: SeoPageKey): Metadata {
  const d = defs[key];
  const canonical = canonicalUrl(d.path);
  const image = d.ogImage ?? ogRodina;

  return {
    title: { absolute: d.title },
    description: d.description,
    ...(d.keywords?.length ? { keywords: d.keywords } : {}),
    alternates: {
      canonical,
      ...(d.alternatesLanguages ? { languages: d.alternatesLanguages } : {}),
    },
    openGraph: {
      type: 'website',
      locale: 'cs_CZ',
      url: canonical,
      siteName: 'VRzazitek.cz',
      title: d.ogTitle ?? d.title,
      description: d.ogDescription ?? d.description,
      images: [{ url: image, alt: d.title }],
    },
    robots: { index: true, follow: true },
  };
}

export function rootLayoutDefaultDescription(): string {
  return defs.home.description;
}
