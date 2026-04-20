import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

/**
 * Stejné URL jako na produkčním Webnode (https://www.vrzazitek.cz/sitemap.xml),
 * včetně jazykových alternativ u vybraných záznamů.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const t = new Date('2026-03-07T00:00:00.000Z');
  const w = { changeFrequency: 'weekly' as const, lastModified: t };
  const m = { changeFrequency: 'monthly' as const, lastModified: t };

  return [
    {
      url: `${SITE_URL}/`,
      ...w,
      priority: 1,
      alternates: { languages: { en: `${SITE_URL}/en/` } },
    },
    { url: `${SITE_URL}/objednani-vr/`, ...m, priority: 0.8 },
    { url: `${SITE_URL}/zapujceni-vr/`, ...w, priority: 0.9 },
    { url: `${SITE_URL}/o-nas/`, ...m, priority: 0.7 },
    {
      url: `${SITE_URL}/en/`,
      ...w,
      alternates: { languages: { cs: `${SITE_URL}/` } },
    },
    { url: `${SITE_URL}/en/vr-home/`, ...w },
    { url: `${SITE_URL}/en/vr-teambuilding/`, ...w },
    { url: `${SITE_URL}/en/order/`, ...m },
    { url: `${SITE_URL}/en/contact-team/`, ...m },
    { url: `${SITE_URL}/vr-pro-firmy/`, ...w, priority: 0.9 },
    { url: `${SITE_URL}/en/for-businessess/`, ...w },
    { url: `${SITE_URL}/obchodni-podminky/`, ...m, priority: 0.3 },
    { url: `${SITE_URL}/en/terms-and-conditions/`, ...m, priority: 0.3 },
    { url: `${SITE_URL}/en/privacy-policy/`, ...m, priority: 0.3 },
    { url: `${SITE_URL}/firemni-teambuilding/`, ...w, priority: 0.85 },
    { url: `${SITE_URL}/portfolio/`, ...w, priority: 0.6 },
    { url: `${SITE_URL}/dekujeme/`, ...m, priority: 0.2 },
    { url: `${SITE_URL}/oslavy-vr/`, ...w, priority: 0.85 },
    { url: `${SITE_URL}/en/thank-you/`, ...m, priority: 0.2 },
    { url: `${SITE_URL}/en/vr-party-experience/`, ...w },
    { url: `${SITE_URL}/teambuilding-ve-vr/`, ...w, priority: 0.9 },
    { url: `${SITE_URL}/ochrana-osobnich-udaju/`, ...m, priority: 0.3 },
  ];
}
