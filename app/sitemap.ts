import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { LOCALIZED_PATH, type SeoPageKey } from '@/lib/i18n/routes';

const PRIORITY: Record<SeoPageKey, number> = {
  home: 1,
  'zapujceni-vr': 0.9,
  'vr-pro-firmy': 0.9,
  'teambuilding-ve-vr': 0.9,
  'oslavy-vr': 0.85,
  'objednani-vr': 0.8,
  'o-nas': 0.7,
};

const WEEKLY: SeoPageKey[] = [
  'home',
  'zapujceni-vr',
  'vr-pro-firmy',
  'teambuilding-ve-vr',
  'oslavy-vr',
];

/**
 * České i anglické URL (shodné struktury jako na www.vrzazitek.cz) + hreflang v alternates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const keys = Object.keys(LOCALIZED_PATH) as SeoPageKey[];
  const out: MetadataRoute.Sitemap = [];

  for (const key of keys) {
    const csUrl = `${SITE_URL.replace(/\/$/, '')}${LOCALIZED_PATH[key].cs}`;
    const enUrl = `${SITE_URL.replace(/\/$/, '')}${LOCALIZED_PATH[key].en}`;
    const freq = WEEKLY.includes(key) ? 'weekly' : 'monthly';
    const p = PRIORITY[key];
    const enP = key === 'home' ? p : Math.min(p, 0.95);

    out.push({
      url: csUrl,
      lastModified,
      changeFrequency: freq,
      priority: p,
      alternates: { languages: { en: enUrl } },
    });
    out.push({
      url: enUrl,
      lastModified,
      changeFrequency: freq,
      priority: enP,
      alternates: { languages: { cs: csUrl } },
    });
  }

  return out;
}
