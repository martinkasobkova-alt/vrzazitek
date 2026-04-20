import type { Metadata } from 'next';
import type { SeoPageKey } from '@/lib/i18n/routes';
import { LOCALIZED_PATH } from '@/lib/i18n/routes';

export type { SeoPageKey };

/** Jedna pravda pro produkční doménu (shodné s Webnode / Search Console). */
export const SITE_URL = 'https://www.vrzazitek.cz';

/** OG obrázky z původního webu — stabilní URL pro náhledy ve vyhledávání a sociálních sítích. */
const ogRodina =
  'https://3f0d647b7d.clvaw-cdnwnd.com/6a3203a6baa9e1dbebb1d79acc84a561/200000975-8f5408f542/rodina-4.webp?ph=3f0d647b7d';
const ogBackground =
  'https://3f0d647b7d.clvaw-cdnwnd.com/6a3203a6baa9e1dbebb1d79acc84a561/200000866-b80fbb80fd/700/background.png?ph=3f0d647b7d';

type SeoDef = {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

export const homeTitle = 'Pronájem VR domů i pro firmy. Půjčovna Praha a Beroun od 999 Kč';

const defs: Record<SeoPageKey, SeoDef> = {
  home: {
    title: homeTitle,
    description:
      'Půjčovna VR brýlí domů i pro firmy. Meta Quest 3 s 30+ hrami již od 999 Kč. Osobní předání Praha a Beroun nebo kurýrem po celé ČR. Ideální zážitek na oslavy.',
    ogTitle: 'Půjčovna VR domů i pro firmy | VRzazitek.cz',
    ogDescription:
      'Pronájem virtuální reality s hrami v ceně. Půjčujeme Meta Quest 3. Osobní předání Praha a Beroun. Zábava od 999 Kč.',
    ogImage: ogRodina,
  },
  'zapujceni-vr': {
    title: 'Zapůjčení VR headsetů domů | Pronájem virtuální reality – VR Zážitek',
    description:
      'Zapůjčení VR brýlí domů na víkend i delší dobu. Hry, návody, podpora. Objednejte si virtuální realitu pohodlně online.',
    ogTitle: 'Půjčovna VR domů | Pronájem Meta Quest po celé ČR – VR Zážitek',
    ogDescription:
      'Zapůjčení VR headsetů domů od 1 dne. Meta Quest 2 a 3, Praha, Beroun i celá ČR. Rychlá rezervace a technická podpora.',
  },
  'vr-pro-firmy': {
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
    title: 'VR oslavy a narozeniny v Praze | VR zážitek – přivezeme VR k vám',
    description:
      'Nezapomenutelné VR oslavy: dětské narozeniny, párty, rozlučky i svatby. Přivezeme Meta Quest 3, vše nastavíme, zajistíme obsluhu i fotky. Praha a okolí.',
    ogTitle: 'VR oslavy a narozeniny | Dětské párty, rozlučky i svatby – VR zážitek',
    ogDescription:
      'Nezapomenutelné VR oslavy: narozeniny, dětské párty, rozlučky se svobodou i svatby. Přivezeme virtuální realitu k vám. Praha i celá ČR.',
  },
  'o-nas': {
    title: 'O nás | VR Zážitek – experti na virtuální realitu a firemní eventy',
    description:
      'Poznejte tým VR Zážitek, který stojí za stovkami VR akcí pro firmy i jednotlivce. Naše zkušenosti, technologie a přístup k zákazníkům.',
    ogTitle: 'O nás | VR zážitek – rodinný tým pro VR pronájem a eventy',
    ogDescription:
      'Jsme rodinný tým VR zážitku. Půjčujeme VR domů i na firemní akce, zajišťujeme instalaci, program i technickou podporu. Praha, Beroun a celá ČR.',
    ogImage: ogBackground,
  },
  'objednani-vr': {
    title: 'Objednávka pronájmu VR | Virtuální realita pro firmy i domů – VR Zážitek',
    description:
      'Rychlá a nezávazná objednávka VR pronájmu. Vyplňte formulář a připravíme vám nabídku na míru na doma i pro firemní akce.',
    ogTitle: 'Objednávka VR | Pronájem Meta Quest domů i pro firmy – VR zážitek',
    ogDescription:
      'Nezávazná objednávka VR pronájmu. Napište termín a co chcete (Quest 3, počet dní, doprava) a pošleme nabídku. Praha/Beroun + kurýr po ČR.',
  },
};

/** Anglické meta — cesty musí odpovídat LOCALIZED_PATH.en (včetně /en/for-businessess/). */
const enDefs: Record<SeoPageKey, SeoDef> = {
  home: {
    title: 'VR Rental Prague | Virtual Reality for Home & Events',
    description:
      'Futuristic experiences without the hassle. Corporate events, team building and VR home rental in Prague and across the Czech Republic. We deliver technology and support.',
    ogTitle: 'VR Rental Prague | Virtual Reality for Business & Home | VRzazitek.cz',
    ogDescription:
      'Virtual reality for corporate events, team building and home rental. Meta Quest 2 & 3. Prague, Beroun and courier delivery across CZ.',
    ogImage: ogRodina,
  },
  'zapujceni-vr': {
    title: 'VR for Home Rental | Rent Meta Quest in Prague & CZ',
    description:
      'Rent VR headsets for your home — weekend or longer. Games, guides and support. Order virtual reality online with fast delivery.',
    ogTitle: 'VR Home Rental | Meta Quest 2 & 3 — Prague, Beroun & CZ | VRzazitek',
    ogDescription:
      'VR headset rental from one day up. Meta Quest 2 and 3, Prague, Beroun and courier across the Czech Republic.',
  },
  'vr-pro-firmy': {
    title: 'VR for Business & Corporate Events | VR Rental Prague and Czech',
    description:
      'VR and AR for corporate events, marketing and presentations in Prague and across the Czech Republic. Full service, hardware and on-site support.',
    keywords: ['VR', 'virtual reality', 'corporate events', 'Prague'],
    ogTitle: 'VR & AR for Business | VRzazitek.cz',
    ogDescription:
      'VR and AR for conferences, team building, product demos and workshops. Professional crew, equipment and content.',
    ogImage: ogRodina,
  },
  'teambuilding-ve-vr': {
    title: 'VR Teambuilding Prague | Unique & Fun Team Activities',
    description:
      'Corporate VR team building in Prague and across the Czech Republic. Headsets, staff and games for teams of 10–200. Fast booking, premium experience.',
    keywords: [
      'vr team building',
      'corporate team building',
      'prague vr',
      'meta quest',
      'company event vr',
    ],
    ogTitle: 'VR Team Building for Companies | VRzazitek',
    ogDescription:
      'Turn your office into a VR gaming zone. Team missions, competitions and a memorable wow effect.',
  },
  'oslavy-vr': {
    title: 'VR Parties & Birthday Events | Virtual Reality Celebrations – VR Experience',
    description:
      'Unforgettable VR parties: kids’ birthdays, bachelor parties and weddings. We bring Meta Quest 3, set everything up and provide staff and photos.',
    ogTitle: 'VR Party & Birthday Entertainment | VRzazitek',
    ogDescription:
      'Celebrate with virtual reality at your place. Prague and surrounding areas, full service.',
  },
  'o-nas': {
    title: 'Contact & Our Team | VR Rental Prague - VRzazitek.cz',
    description:
      'Meet the VRzazitek team — hundreds of VR events for companies and individuals. Contact us for VR rental in Prague, Beroun and nationwide.',
    ogTitle: 'Contact & Team | VRzazitek.cz',
    ogDescription:
      'Family-run VR rental: home and corporate events, setup, program and support across the Czech Republic.',
    ogImage: ogBackground,
  },
  'objednani-vr': {
    title: 'Order VR Rental | Online Reservation - VRzazitek.cz',
    description:
      'Quick non-binding VR rental request. Tell us your dates and needs — we reply fast with a tailored offer for home or business.',
    ogTitle: 'Order VR | Meta Quest rental — home & business | VRzazitek',
    ogDescription:
      'Request VR rental online. Quest 3, number of days, delivery — we respond within 24 hours. Prague / Beroun + courier.',
  },
};

function canonicalUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`;
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${SITE_URL}/${clean}/`;
}

export function pageMetadata(locale: 'cs' | 'en', key: SeoPageKey): Metadata {
  const d = locale === 'cs' ? defs[key] : enDefs[key];
  const path = LOCALIZED_PATH[key][locale];
  const canonical = canonicalUrl(path);
  const csUrl = canonicalUrl(LOCALIZED_PATH[key].cs);
  const enUrl = canonicalUrl(LOCALIZED_PATH[key].en);
  const image = d.ogImage ?? ogRodina;

  return {
    title: { absolute: d.title },
    description: d.description,
    ...(d.keywords?.length ? { keywords: d.keywords } : {}),
    alternates: {
      canonical,
      languages: {
        cs: csUrl,
        en: enUrl,
        'x-default': csUrl,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      url: canonical,
      siteName: 'VRzazitek.cz',
      title: d.ogTitle ?? d.title,
      description: d.ogDescription ?? d.description,
      images: [{ url: image, alt: d.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.ogTitle ?? d.title,
      description: d.ogDescription ?? d.description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

export function metadataFor(key: SeoPageKey): Metadata {
  return pageMetadata('cs', key);
}

export function rootLayoutDefaultDescription(): string {
  return defs.home.description;
}

export function rootLayoutDefaultDescriptionEn(): string {
  return enDefs.home.description;
}
