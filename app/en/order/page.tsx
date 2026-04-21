'use client';

import Link from 'next/link';
import OrderInquiryForm from '@/components/OrderInquiryForm';
import { orderPageHero } from '@/lib/order-inquiry-copy';
import { hrefFor } from '@/lib/i18n/routes';

const h = orderPageHero.en;
const vrHome = hrefFor('zapujceni-vr', 'en');
const vrBiz = hrefFor('vr-pro-firmy', 'en');
const team = hrefFor('teambuilding-ve-vr', 'en');
const party = hrefFor('oslavy-vr', 'en');

export default function OrderEnPage() {
  return (
    <>
      <div className="block block-sky">
        <div className="grid-bg"></div>
        <div
          className="orb orb-cyan hero-orb-in hero-orb-in--a"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        ></div>
        <div
          className="orb orb-purple hero-orb-in hero-orb-in--b"
          style={{ width: 300, height: 300, bottom: -50, left: '10%' }}
        ></div>

        <section style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <span className="eyebrow hero-intro-item hero-intro-item--1">{h.eyebrow}</span>
            <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: '1.5rem' }}>
              {h.titleBefore}
              <span className="gradient-text">{h.titleAccent}</span>
            </h1>
            <p className="lead hero-intro-item hero-intro-item--3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
              {h.lead}
            </p>
          </div>
        </section>
      </div>

      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <div className="orb orb-cyan" style={{ width: 250, height: 250, bottom: '20%', left: -80 }}></div>

        <section>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: 1100, margin: '0 auto' }}>
              <div className="svc-card" style={{ padding: '2.5rem', background: 'rgba(255, 255, 255, 0.85)' }} data-sr data-sr-delay={0}>
                <OrderInquiryForm locale="en" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="svc-card" data-sr data-sr-delay={40}>
                  <h3 style={{ marginBottom: '1rem', color: 'var(--cyan)' }}>Quick contact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <a href="tel:+420604160718" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>📞</span>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Zuzka</div>
                        <div style={{ fontWeight: 600 }}>+420 604 160 718</div>
                      </div>
                    </a>
                    <a href="tel:+420737627000" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>📞</span>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Marťa</div>
                        <div style={{ fontWeight: 600 }}>+420 737 627 000</div>
                      </div>
                    </a>
                    <a href="mailto:info@vrzazitek.cz" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>✉️</span>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email</div>
                        <div style={{ fontWeight: 600 }}>info@vrzazitek.cz</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="svc-card">
                  <h3 style={{ marginBottom: '1rem', color: 'var(--cyan)' }}>Why choose us</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                    {['We reply within 24 hours', 'Non-binding quotes', 'Delivery across the Czech Republic', 'Professional crew', 'Flexible arrangements'].map((x, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>✓</span>
                        <span className="text-dim">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="svc-card" style={{ background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.06), rgba(124, 58, 237, 0.04))', borderColor: 'var(--border-mid)' }} data-sr data-sr-delay={120}>
                  <h3 style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }}>Browse services</h3>
                  <p className="text-dim" style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
                    Explore our offers and pricing pages.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <Link href={vrHome} style={{ color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>→ VR at home</Link>
                    <Link href={vrBiz} style={{ color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>→ VR for business</Link>
                    <Link href={team} style={{ color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>→ Team building</Link>
                    <Link href={party} style={{ color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>→ VR parties</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
