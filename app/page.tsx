import Link from 'next/link';
import type { Metadata } from 'next';
import HeroVisual from '@/components/HeroVisual';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Pronájem VR domů i pro firmy | Půjčovna Praha a Beroun od 999 Kč',
  description: 'Firemní eventy, teambuildingy a VR domů. Přivezeme techniku, obsah i obsluhu — vy si užijete zážitek. Praha, Beroun, celá ČR.',
  alternates: { canonical: 'https://www.vrzazitek.cz' },
};

export default function Home() {
  return (
    <>
      {/* BLOCK 1: LIGHT SKY HERO */}
      <div className="block block-sky">
        <div className="grid-bg"></div>
        <div
          className="orb orb-cyan hero-orb-in hero-orb-in--a"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        ></div>
        <div
          className="orb orb-blue hero-orb-in hero-orb-in--b"
          style={{ width: 300, height: 300, bottom: -50, left: '10%' }}
        ></div>
        <div
          className="orb orb-purple hero-orb-in hero-orb-in--c"
          style={{ width: 250, height: 250, top: '40%', left: '50%' }}
        ></div>

        <section className="hero-home" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container split">
            <div>
              <span className="eyebrow hero-intro-item hero-intro-item--1">Virtuální realita na klíč</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: '1.5rem' }}>
                Virtuální realita <span className="gradient-text">pro firmy i domů</span>
              </h1>
              <p
                className="lead hero-intro-item hero-intro-item--3"
                style={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                Firemní eventy, teambuildingy a VR domů. Přivezeme techniku, obsah i obsluhu — vy si užijete zážitek.
              </p>
              <div
                className="hero-intro-item hero-intro-item--4"
                style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
              >
                <Link href="/objednani-vr" className="btn btn-primary">Poptat →</Link>
                <Link href="/vr-pro-firmy" className="btn btn-ghost">VR pro firmy</Link>
              </div>

              <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
                <div className="stat-item">
                  <div className="stat-val">24h</div>
                  <div className="stat-lbl">Doručení</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">On-site</div>
                  <div className="stat-lbl">Obsluha</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">Praha + ČR</div>
                  <div className="stat-lbl">Výjezdy</div>
                </div>
              </div>

              <p
                className="hero-intro-item hero-intro-item--6"
                style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}
              >
                Official Partner of <strong style={{ color: 'var(--cyan)' }}>Synthesis VR</strong>
              </p>
            </div>

            <div className="hero-intro-visual">
              <HeroVisual />
            </div>
          </div>
        </section>
      </div>

      {/* BLOCK 2: PAPER - What we do */}
      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, left: -50 }}></div>
        <div className="orb orb-purple" style={{ width: 250, height: 250, bottom: -50, right: '10%' }}></div>

        <section>
          <div className="container split">
            <div>
              <span className="tag-pill">Služby</span>
              <h2>Co <span className="gradient-text">umíme</span> nejlépe.</h2>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--text)' }}>VRzazitek.cz</strong> zajišťuje virtuální realitu pro firmy i domácnosti v Praze, Berouně a po celé ČR. Specializujeme se na <strong style={{ color: 'var(--text)' }}>firemní eventy</strong>, konference, promo akce a <strong style={{ color: 'var(--text)' }}>teambuilding ve VR</strong>.
              </p>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Doručíme techniku, připravíme obsah, zajistíme sdílení obrazu a obsluhu na místě. Pro jednotlivce nabízíme službu <strong style={{ color: 'var(--text)' }}>půjčovna VR domů</strong> – headset s vybranými hrami doručíme a vysvětlíme ovládání.
              </p>
              <Link href="/vr-pro-firmy" className="btn btn-primary">VR pro firmy →</Link>
            </div>

            <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
              <img
                src={images.whatWeDo}
                alt="VR event a technologie"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
              {/* Gradient overlay for brand consistency */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.35), rgba(124, 58, 237, 0.25))',
                mixBlendMode: 'multiply',
              }}></div>
            </div>
          </div>
        </section>
      </div>

      {/* BLOCK 3: MINT - 3 pillars (services) */}
      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: -80, right: '20%' }}></div>
        <div className="orb orb-blue" style={{ width: 250, height: 250, bottom: '10%', left: -50 }}></div>

        <section style={{ paddingBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Tři pilíře</span>
              <h2 style={{ maxWidth: 780, margin: '0 auto' }}>
                Virtuální realita pro <span className="gradient-text">firmy i domů.</span>
              </h2>
            </div>

            <div className="grid-3">
              <Link href="/vr-pro-firmy" className="svc-card pillar-card home-svc-tile">
                <img
                  className="pillar-card__bg"
                  src={images.pillarEventsVr}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="pillar-card__scrim" aria-hidden />
                <div className="pillar-card__body">
                  <div className="num">01 — FIREMNÍ EVENTY</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Firemní eventy</h3>
                  <p style={{ marginBottom: 0 }}>VR/AR zóna na konferenci nebo večírku. Vše přivezeme a obsloužíme.</p>
                  <div className="home-svc-tile__cta">Zjistit více →</div>
                </div>
              </Link>
              <Link href="/teambuilding-ve-vr" className="svc-card pillar-card home-svc-tile">
                <img
                  className="pillar-card__bg"
                  src={images.homeTeambuildingTile}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="pillar-card__scrim" aria-hidden />
                <div className="pillar-card__body">
                  <div className="num">02 — TEAMBUILDING</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Teambuilding</h3>
                  <p style={{ marginBottom: 0 }}>Kooperativní zážitky pro tým. Scénář na míru, kdekoliv.</p>
                  <div className="home-svc-tile__cta">Zjistit více →</div>
                </div>
              </Link>
              <Link href="/zapujceni-vr" className="svc-card pillar-card home-svc-tile">
                <img
                  className="pillar-card__bg"
                  src={images.heroHomeRental}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="pillar-card__scrim" aria-hidden />
                <div className="pillar-card__body">
                  <div className="num">03 — VR DOMŮ</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>VR domů</h3>
                  <p style={{ marginBottom: 0 }}>Headset s hrami doručíme. Jednoduše a rychle.</p>
                  <div className="home-svc-tile__cta">Zjistit více →</div>
                </div>
              </Link>
            </div>

            {/* What we deliver */}
            <div className="split" style={{ marginTop: '4rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Co umíme rychle dodat</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {['Eventy a konference', 'Teambuilding na míru', 'VR domů bez starostí', 'Kompletní realizace bez starostí'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '1rem' }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: '50%',
                        background: 'var(--gradient-btn)', color: '#fff',
                        display: 'grid', placeItems: 'center',
                        fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="svc-card" style={{ background: 'rgba(255, 255, 255, 0.85)' }}>
                <h3 style={{ marginBottom: '1rem' }}>Co dodáváme v balíčku</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { icon: '🥽', text: 'Headsety + připravený obsah' },
                    { icon: '📺', text: 'Sdílení obrazu (TV / plátno)' },
                    { icon: '👩‍💻', text: 'Technická podpora na místě' },
                    { icon: '⚡', text: 'Flexibilní setup dle prostoru' },
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '0.92rem' }}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BLOCK 4: DEEP BLUE - FAQ */}
      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <div className="orb orb-dark-purple" style={{ width: 300, height: 300, bottom: 0, right: '10%' }}></div>

        <section
          style={{
            paddingTop: 'clamp(1.25rem, 2.5vw, 2rem)',
            paddingBottom: 'clamp(4rem, 8vw, 6rem)',
          }}
        >
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="text-center" style={{ marginBottom: '2.25rem' }}>
              <span className="tag-pill">FAQ</span>
              <h2>
                <span className="gradient-text-light">Časté dotazy</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: 'Jaké VR headsety půjčujete?', a: 'Nejčastěji Meta Quest 2 a Meta Quest 3. Bezdrátově, připravené k použití.' },
                { q: 'Jsou v headsetech předinstalované hry?', a: 'Ano. Připravíme výběr podle publika (začátečníci, akce, relax, týmové hry). Vy jen nasadíte brýle.' },
                { q: 'Je VR vhodná pro začátečníky na firemní akci?', a: 'Ano. Obsah vybíráme tak, aby byl intuitivní. Na eventu je naše obsluha a dohlíží na bezpečnost.' },
                { q: 'Kolik lidí může VR vyzkoušet na akci?', a: 'Záleží na počtu headsetů a délce zážitku. Běžně to bývá desítky až stovky lidí během jednoho eventu.' },
                { q: 'Jak velký prostor je potřeba pro VR?', a: 'Pro jeden headset obvykle stačí cca 2×2 m. Setup upravíme podle prostoru (konference, kancelář, sál).' },
              ].map((item, i) => (
                <details key={i} className="svc-card" style={{ cursor: 'pointer', padding: '1.25rem 1.75rem' }}>
                  <summary style={{ fontWeight: 600, fontSize: '1rem', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-on-dark)' }}>
                    <span>{item.q}</span>
                    <span className="plus">+</span>
                  </summary>
                  <p style={{ marginTop: '1rem', fontSize: '0.93rem', lineHeight: 1.65 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* BLOCK 5: SKY - Final CTA */}
      <div className="block block-sky" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <div className="orb orb-purple" style={{ width: 250, height: 250, bottom: -50, left: '10%' }}></div>

        <section>
          <div className="container split">
            <div>
              <span className="tag-pill">Pojďme se spojit</span>
              <h2>Chcete <span className="gradient-text">VR zážitek?</span></h2>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Napište město, termín a počet lidí. Pošleme rychlý návrh řešení a cenu — obvykle do 24 hodin.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/objednani-vr" className="btn btn-primary">Nezávazná poptávka →</Link>
                <a href="tel:+420604160718" className="btn btn-ghost">+420 604 160 718</a>
              </div>
            </div>

            <div className="media-card-dark">
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>info@</div>
                <div style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>vrzazitek.cz</div>
                <div style={{ marginTop: '1.25rem', fontSize: '0.75rem', letterSpacing: '0.18em', opacity: 0.9 }}>
                  PRAHA • BEROUN • CELÁ ČR
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
