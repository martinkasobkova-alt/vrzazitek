'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const nav = [
  { href: '/', label: 'Úvod' },
  { href: '/zapujceni-vr', label: 'VR domů' },
  { href: '/vr-pro-firmy', label: 'VR pro firmy' },
  { href: '/teambuilding-ve-vr', label: 'Teambuilding' },
  { href: '/oslavy-vr', label: 'Oslavy' },
  { href: '/o-nas', label: 'Kontakt' },
];

export default function Header() {
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: 36, height: 36,
            borderRadius: 10,
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
            display: 'grid', placeItems: 'center',
            fontWeight: 700, color: '#fff', fontSize: 13,
            boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)',
          }}>VR</div>
          <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', color: 'var(--text)' }}>
            VRzazitek<span style={{ color: 'var(--cyan)' }}>.cz</span>
          </span>
        </Link>

        <nav className="desktop-nav" style={{
          display: 'flex', gap: '0.25rem', alignItems: 'center',
        }}>
          {nav.map(item => (
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
          <Link href="/objednani-vr" className="btn btn-primary" style={{ marginLeft: '0.5rem', padding: '0.65rem 1.2rem', fontSize: '0.85rem' }}>
            Objednat
          </Link>
        </nav>

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

      {open && (
        <div style={{
          padding: '1rem 1.5rem 1.5rem',
          borderTop: '1px solid var(--border-light)',
          background: 'rgba(238, 244, 255, 0.95)',
          backdropFilter: 'blur(20px)',
        }}>
          {nav.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '0.75rem 0', color: 'var(--text-dim)',
              borderBottom: '1px solid rgba(59, 130, 246, 0.08)',
              fontWeight: 500,
            }}>{item.label}</Link>
          ))}
          <Link href="/objednani-vr" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
            Objednat VR
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
