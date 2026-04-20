import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="block block-deep"
      data-scroll-reveal
      style={{ marginTop: 'clamp(2rem, 5vw, 4rem)', position: 'relative' }}
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
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)',
                display: 'grid', placeItems: 'center',
                fontWeight: 700, color: '#fff',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)',
              }}>VR</div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>VRzazitek.cz</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(224, 236, 255, 0.75)' }}>
              Profesionální realizace virtuální a rozšířené reality pro firmy, teambuilding a domácnosti v ČR.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'rgba(224, 236, 255, 0.6)' }}>
              Official Partner of <strong style={{ color: 'var(--cyan-bright)' }}>Synthesis VR</strong>
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--cyan-bright)', marginBottom: '1rem', fontWeight: 600 }}>
              Služby
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link href="/zapujceni-vr" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>VR domů</Link></li>
              <li><Link href="/vr-pro-firmy" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>VR pro firmy</Link></li>
              <li><Link href="/teambuilding-ve-vr" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>Teambuilding</Link></li>
              <li><Link href="/oslavy-vr" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>Oslavy ve VR</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--cyan-bright)', marginBottom: '1rem', fontWeight: 600 }}>
              Kontakt
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><a href="mailto:info@vrzazitek.cz" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>info@vrzazitek.cz</a></li>
              <li><a href="tel:+420604160718" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>+420 604 160 718</a></li>
              <li><a href="tel:+420737627000" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>+420 737 627 000</a></li>
              <li><Link href="/o-nas" style={{ color: 'rgba(224, 236, 255, 0.75)', fontSize: '0.9rem' }}>O nás &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--cyan-bright)', marginBottom: '1rem', fontWeight: 600 }}>
              Sídlo
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
        }}>
          <p>© {new Date().getFullYear()} VR zážitek — Všechna práva vyhrazena.</p>
          <p>Praha • Beroun • celá ČR</p>
        </div>
      </div>
    </footer>
  );
}
