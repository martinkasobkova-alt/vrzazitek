'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandLogo from '@/components/BrandLogo';
import { hrefFor, isEnglishPath } from '@/lib/i18n/routes';

export default function Footer() {
  const pathname = usePathname() || '/';
  const en = isEnglishPath(pathname);

  const t = en
    ? {
        blurb:
          'Professional virtual and augmented reality for companies, team building and households across the Czech Republic.',
        services: 'Services',
        vrHome: 'VR at home',
        vrBiz: 'VR for business',
        team: 'Team building',
        parties: 'VR parties',
        contact: 'Contact',
        address: 'Address',
        rights: `© ${new Date().getFullYear()} VR zážitek — All rights reserved.`,
        region: 'Prague • Beroun • Czech Republic',
      }
    : {
        blurb:
          'Profesionální realizace virtuální a rozšířené reality pro firmy, teambuilding a domácnosti v ČR.',
        services: 'Služby',
        vrHome: 'VR domů',
        vrBiz: 'VR pro firmy',
        team: 'Teambuilding',
        parties: 'Oslavy ve VR',
        contact: 'Kontakt',
        address: 'Sídlo',
        rights: `© ${new Date().getFullYear()} VR zážitek — Všechna práva vyhrazena.`,
        region: 'Praha • Beroun • celá ČR',
      };

  const loc = en ? 'en' : 'cs';

  return (
    <footer
      className="block block-deep site-footer"
      data-scroll-reveal
      style={{ position: 'relative' }}
    >
      <div className="grid-bg"></div>
      <div className="orb orb-dark-cyan" style={{ width: 300, height: 300, top: -100, right: '10%' }}></div>
      <div className="orb orb-dark-purple" style={{ width: 250, height: 250, bottom: -50, left: '20%' }}></div>

      <div className="container" style={{ padding: '4rem 1.5rem 2rem', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          <div data-sr data-sr-delay={0}>
            <BrandLogo variant="footer" locale={loc} />
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(224, 236, 255, 0.75)' }}>
              {t.blurb}
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(224, 236, 255, 0.6)' }}>
              Official Partner of <strong style={{ color: 'var(--cyan-bright)' }}>Synthesis VR</strong>
            </p>
          </div>

          <div data-sr data-sr-delay={35}>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--cyan-bright)', marginBottom: '1rem', fontWeight: 600 }}>
              {t.services}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link href={hrefFor('zapujceni-vr', loc)} style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>{t.vrHome}</Link></li>
              <li><Link href={hrefFor('vr-pro-firmy', loc)} style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>{t.vrBiz}</Link></li>
              <li><Link href={hrefFor('teambuilding-ve-vr', loc)} style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>{t.team}</Link></li>
              <li><Link href={hrefFor('oslavy-vr', loc)} style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>{t.parties}</Link></li>
            </ul>
          </div>

          <div data-sr data-sr-delay={70}>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--cyan-bright)', marginBottom: '1rem', fontWeight: 600 }}>
              {t.contact}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="mailto:info@vrzazitek.cz" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>info@vrzazitek.cz</a></li>
              <li><a href="tel:+420604160718" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>+420 604 160 718</a></li>
              <li><a href="tel:+420737627000" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>+420 737 627 000</a></li>
              <li><Link href={hrefFor('o-nas', loc)} style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>{en ? 'About us →' : 'O nás →'}</Link></li>
            </ul>
          </div>

          <div data-sr data-sr-delay={105}>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--cyan-bright)', marginBottom: '1rem', fontWeight: 600 }}>
              {t.address}
            </h4>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(224, 236, 255, 0.75)' }}>
              Na Lucberku 245<br />
              267 01, Králův Dvůr - Levín<br />
              <span style={{ color: 'rgba(224, 236, 255, 0.5)', fontSize: '0.8rem' }}>IČO: 04146620</span>
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <a href="https://www.instagram.com/vrzazitek.cz/" target="_blank" rel="noopener noreferrer" style={{
                padding: '0.5rem 0.9rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 8, fontSize: '0.8rem', color: 'rgba(224, 236, 255, 0.85)',
              }}>Instagram</a>
              <a href="https://www.facebook.com/vrzazitek/" target="_blank" rel="noopener noreferrer" style={{
                padding: '0.5rem 0.9rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 8, fontSize: '0.8rem', color: 'rgba(224, 236, 255, 0.85)',
              }}>Facebook</a>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'rgba(224, 236, 255, 0.5)',
        }} data-sr data-sr-delay={130}>
          <p>{t.rights}</p>
          <p>{t.region}</p>
        </div>
      </div>
    </footer>
  );
}
