'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import BrandLogo from '@/components/BrandLogo';
import { FlagCz, FlagGb } from '@/components/LocaleFlagIcons';
import {
  getSeoKeyFromPath,
  hrefFor,
  isEnglishPath,
  navItems,
  orderCtaLabel,
} from '@/lib/i18n/routes';

/** Jedna viditelná vlajka; po kliknutí rozbalí přepnutí na druhý jazyk. */
function LanguageMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const key = getSeoKeyFromPath(pathname) ?? 'home';
  const en = isEnglishPath(pathname);
  const csHref = hrefFor(key, 'cs');
  const enHref = hrefFor(key, 'en');

  const alternate = en
    ? { href: csHref, flag: FlagCz, label: 'Čeština' }
    : { href: enHref, flag: FlagGb, label: 'English' };
  const AlternateFlag = alternate.flag;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="lang-menu-wrap" style={{ position: 'relative', marginLeft: '0.35rem', zIndex: 200 }}>
      <button
        type="button"
        className="lang-menu-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={en ? `Language: English. ${open ? 'Close menu' : 'Choose language'}` : `Jazyk: čeština. ${open ? 'Zavřít menu' : 'Změnit jazyk'}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.2rem',
          padding: '0.35rem 0.55rem',
          borderRadius: 999,
          border: '1px solid rgba(59, 130, 246, 0.28)',
          background: 'rgba(255, 255, 255, 0.72)',
          cursor: 'pointer',
          font: 'inherit',
          lineHeight: 1,
          boxShadow: open ? '0 4px 14px rgba(59, 130, 246, 0.12)' : 'none',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', lineHeight: 0 }} aria-hidden>
          {en ? <FlagGb width={22} /> : <FlagCz width={22} />}
        </span>
        <span
          aria-hidden
          style={{
            fontSize: '0.5rem',
            color: 'var(--text-muted)',
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s ease',
          }}
        >
          ▼
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          className="lang-menu-panel"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            minWidth: 148,
            padding: '0.35rem',
            borderRadius: 12,
            border: '1px solid rgba(59, 130, 246, 0.2)',
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.15)',
          }}
        >
          <Link
            href={alternate.href}
            role="option"
            onClick={() => setOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.55rem 0.75rem',
              borderRadius: 8,
              textDecoration: 'none',
              color: 'var(--text)',
              fontSize: '0.9rem',
              fontWeight: 500,
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(59, 130, 246, 0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <span style={{ display: 'flex', lineHeight: 0 }} aria-hidden>
              <AlternateFlag width={22} />
            </span>
            {alternate.label}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname() || '/';
  const locale = isEnglishPath(pathname) ? 'en' : 'cs';
  const nav = navItems(locale);
  const orderHref = hrefFor('objednani-vr', locale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(238, 244, 255, 0.85)' : 'transparent',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(59, 130, 246, 0.15)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
      }}>
        <BrandLogo locale={locale} />

        <nav className="desktop-nav" style={{
          display: 'flex', gap: '0.25rem', alignItems: 'center',
        }}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} style={{
              padding: '0.55rem 0.9rem',
              fontSize: '0.9rem',
              color: 'var(--text-dim)',
              borderRadius: 8,
              transition: 'all 0.2s',
              fontWeight: 500,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--blue-dark)'; e.currentTarget.style.background = 'rgba(59, 130, 246, 0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.background = 'transparent'; }}
            >{item.label}</Link>
          ))}
          <LanguageMenu pathname={pathname} />
          <Link href={orderHref} className="btn btn-primary" style={{ marginLeft: '0.5rem', padding: '0.65rem 1.2rem', fontSize: '0.85rem' }}>
            {orderCtaLabel(locale)}
          </Link>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="mobile-lang" style={{ display: 'none' }}>
            <LanguageMenu pathname={pathname} />
          </div>
          <button className="mobile-btn" onClick={() => setOpen(!open)} aria-label="Menu" style={{
            display: 'none',
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid var(--border-light)',
            borderRadius: 8,
            padding: '0.5rem 0.75rem',
            color: 'var(--text)',
            cursor: 'pointer',
          }}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div style={{
          padding: '1rem 1.5rem 1.5rem',
          borderTop: '1px solid var(--border-light)',
          background: 'rgba(238, 244, 255, 0.95)',
          backdropFilter: 'blur(20px)',
        }}>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '0.75rem 0', color: 'var(--text-dim)',
              borderBottom: '1px solid rgba(59, 130, 246, 0.08)',
              fontWeight: 500,
            }}>{item.label}</Link>
          ))}
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <LanguageMenu pathname={pathname} />
          </div>
          <Link href={orderHref} onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
            {locale === 'en' ? 'Order VR' : 'Objednat VR'}
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
          .mobile-lang { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
