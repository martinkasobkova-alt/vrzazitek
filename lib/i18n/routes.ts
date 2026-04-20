export type SeoPageKey =
  | 'home'
  | 'zapujceni-vr'
  | 'vr-pro-firmy'
  | 'teambuilding-ve-vr'
  | 'oslavy-vr'
  | 'o-nas'
  | 'objednani-vr';

export const LOCALIZED_PATH: Record<SeoPageKey, { cs: string; en: string }> = {
  home: { cs: '/', en: '/en/' },
  'zapujceni-vr': { cs: '/zapujceni-vr/', en: '/en/vr-home/' },
  'vr-pro-firmy': { cs: '/vr-pro-firmy/', en: '/en/for-businessess/' },
  'teambuilding-ve-vr': { cs: '/teambuilding-ve-vr/', en: '/en/vr-teambuilding/' },
  'oslavy-vr': { cs: '/oslavy-vr/', en: '/en/vr-party-experience/' },
  'o-nas': { cs: '/o-nas/', en: '/en/contact-team/' },
  'objednani-vr': { cs: '/objednani-vr/', en: '/en/order/' },
};

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function isEnglishPath(pathname: string): boolean {
  const p = pathname.toLowerCase();
  return p === '/en' || p === '/en/' || p.startsWith('/en/');
}

export function getSeoKeyFromPath(pathname: string): SeoPageKey | null {
  const p = normalizePath(pathname).toLowerCase();
  for (const key of Object.keys(LOCALIZED_PATH) as SeoPageKey[]) {
    const { cs, en } = LOCALIZED_PATH[key];
    if (p === normalizePath(cs).toLowerCase() || p === normalizePath(en).toLowerCase()) {
      return key;
    }
  }
  return null;
}

/** href pro Next <Link> (trailingSlash v configu doplní lomítko) */
export function hrefFor(key: SeoPageKey, locale: 'cs' | 'en'): string {
  const path = LOCALIZED_PATH[key][locale];
  if (path === '/') return '/';
  return path.replace(/\/$/, '');
}

const NAV_KEYS: SeoPageKey[] = [
  'home',
  'zapujceni-vr',
  'vr-pro-firmy',
  'teambuilding-ve-vr',
  'oslavy-vr',
  'o-nas',
];

const NAV_LABELS_CS: Record<SeoPageKey, string> = {
  home: 'Úvod',
  'zapujceni-vr': 'VR domů',
  'vr-pro-firmy': 'VR pro firmy',
  'teambuilding-ve-vr': 'Teambuilding',
  'oslavy-vr': 'Oslavy',
  'o-nas': 'Kontakt',
  'objednani-vr': 'Objednat',
};

const NAV_LABELS_EN: Record<SeoPageKey, string> = {
  home: 'Home',
  'zapujceni-vr': 'VR Home',
  'vr-pro-firmy': 'For Business',
  'teambuilding-ve-vr': 'Team Building',
  'oslavy-vr': 'Parties',
  'o-nas': 'Contact',
  'objednani-vr': 'Order',
};

export function navItems(locale: 'cs' | 'en'): { href: string; label: string }[] {
  const labels = locale === 'cs' ? NAV_LABELS_CS : NAV_LABELS_EN;
  return NAV_KEYS.map((key) => ({ href: hrefFor(key, locale), label: labels[key] }));
}

export function orderCtaLabel(locale: 'cs' | 'en'): string {
  return locale === 'cs' ? 'Objednat' : 'Order';
}
