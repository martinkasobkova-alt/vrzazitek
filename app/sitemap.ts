import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.vrzazitek.cz';
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/zapujceni-vr`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/vr-pro-firmy`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/teambuilding-ve-vr`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/oslavy-vr`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/objednani-vr`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/o-nas`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
