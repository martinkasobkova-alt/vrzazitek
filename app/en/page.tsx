import Link from 'next/link';
import type { Metadata } from 'next';
import HeroVisual from '@/components/HeroVisual';
import ContactMapCard from '@/components/ContactMapCard';
import { images } from '@/lib/images';
import { hrefFor } from '@/lib/i18n/routes';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', 'home');

export default function HomeEn() {
  const L = {
    order: hrefFor('objednani-vr', 'en'),
    biz: hrefFor('vr-pro-firmy', 'en'),
    homeRental: hrefFor('zapujceni-vr', 'en'),
  };

  return (
    <>
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
          <div className="container split split-stack-title">
            <div>
              <span className="eyebrow hero-intro-item hero-intro-item--1">Virtual reality turnkey</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: 0 }}>
                Virtual reality <span className="gradient-text">for business &amp; home</span>
              </h1>
            </div>

            <div className="hero-intro-visual">
              <HeroVisual />
            </div>

            <div>
              <p
                className="lead hero-intro-item hero-intro-item--3"
                style={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                Corporate events, team building and VR at home. We bring hardware, content and on-site crew — you enjoy the experience.
              </p>
              <div
                className="hero-intro-item hero-intro-item--4"
                style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
              >
                <Link href={L.order} className="btn btn-primary">Get a quote →</Link>
                <Link href={L.biz} className="btn btn-ghost">VR for business</Link>
                <Link href={L.homeRental} className="btn btn-ghost">VR at home</Link>
              </div>

              <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
                <div className="stat-item">
                  <div className="stat-val">24h</div>
                  <div className="stat-lbl">Delivery</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">On-site</div>
                  <div className="stat-lbl">Crew</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">Prague + CZ</div>
                  <div className="stat-lbl">Coverage</div>
                </div>
              </div>

              <p
                className="hero-intro-item hero-intro-item--6"
                style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}
              >
                Official Partner of <strong style={{ color: 'var(--cyan)' }}>Synthesis VR</strong>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, left: -50 }}></div>
        <div className="orb orb-purple" style={{ width: 250, height: 250, bottom: -50, right: '10%' }}></div>

        <section style={{ paddingTop: 'clamp(2rem, 4vw, 3.25rem)', paddingBottom: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}>
          <div className="container">
            <div className="split split-stack-title split-stack-title--visual-top" style={{ gap: 'clamp(1.35rem, 3.5vw, 2.25rem)' }}>
              <div data-sr>
                <span className="tag-pill">Services</span>
                <h2 style={{ marginBottom: 0 }}>What we do <span className="gradient-text">best.</span></h2>
              </div>

              <div data-sr data-sr-delay={40} style={{ display: 'flex', minWidth: 0, width: '100%', alignSelf: 'start' }}>
                <div
                  className="media-card"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    background: 'none',
                    flex: 1,
                    width: '100%',
                    aspectRatio: 'auto',
                    minHeight: 'clamp(320px, 42vw, 540px)',
                    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.12)',
                  }}
                >
                  <img
                    src={images.whatWeDo}
                    alt="Corporate VR event — headsets, crew and on-site support, VRzazitek.cz"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.35), rgba(124, 58, 237, 0.25))',
                    mixBlendMode: 'multiply',
                  }}></div>
                </div>
              </div>

              <div data-sr data-sr-delay={80}>
                <p className="lead" style={{ marginBottom: '1.15rem' }}>
                  <strong style={{ color: 'var(--text)' }}>VRzazitek.cz</strong> delivers virtual reality for companies and households in Prague, Beroun and across the Czech Republic. We focus on <strong style={{ color: 'var(--text)' }}>corporate events</strong>, conferences, brand activations and <strong style={{ color: 'var(--text)' }}>VR team building</strong>.
                </p>
                <p className="lead" style={{ marginBottom: 0 }}>
                  We bring equipment, prepare content, set up screen sharing and provide on-site staff. For individuals we offer <strong style={{ color: 'var(--text)' }}>VR home rental</strong> — Meta Quest with curated games, delivered and explained.
                </p>

                <div style={{ marginTop: 'clamp(1.25rem, 2.5vw, 1.85rem)', maxWidth: 540 }}>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '1.1rem' }}>What we ship fast</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {['Events & conferences', 'Tailored team building', 'Hassle-free VR at home', 'End-to-end production'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '0.98rem' }}>
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
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: -80, right: '20%' }}></div>
        <div className="orb orb-blue" style={{ width: 250, height: 250, bottom: '10%', left: -50 }}></div>

        <section style={{ paddingBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Three pillars</span>
              <h2 style={{ maxWidth: 780, margin: '0 auto' }}>
                Virtual reality for <span className="gradient-text">business &amp; home.</span>
              </h2>
            </div>

            <div className="grid-3">
              <Link href={L.biz} className="svc-card pillar-card home-svc-tile" data-sr>
                <img
                  className="pillar-card__bg"
                  src={images.pillarEventsVr}
                  alt="Corporate VR zone — conferences and brand experiences"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="pillar-card__scrim" aria-hidden />
                <div className="pillar-card__body">
                  <div className="num">01 — CORPORATE EVENTS</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Corporate events</h3>
                  <p style={{ marginBottom: 0, fontSize: '0.88rem', lineHeight: 1.55 }}>
                    An interactive VR or AR zone elevates conferences, launches and company days. We deliver hardware, install everything
                    and host guests from first headset to a smooth program flow — you focus on attendees and timing, we handle the tech.
                  </p>
                  <div className="home-svc-tile__cta">Learn more →</div>
                </div>
              </Link>
              <Link href={hrefFor('teambuilding-ve-vr', 'en')} className="svc-card pillar-card home-svc-tile" data-sr data-sr-delay={45}>
                <img
                  className="pillar-card__bg"
                  src={images.homeTeambuildingTile}
                  alt="VR team building — cooperative games for companies"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="pillar-card__scrim" aria-hidden />
                <div className="pillar-card__body">
                  <div className="num">02 — TEAM BUILDING</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>Team building</h3>
                  <p style={{ marginBottom: 0, fontSize: '0.88rem', lineHeight: 1.55 }}>
                    Cooperative games and team missions that build communication, trust and friendly competition — without awkward icebreakers.
                    We design the scenario for your team size, goals and culture; on-site at your office, offsite or a rented venue anywhere in the Czech Republic.
                  </p>
                  <div className="home-svc-tile__cta">Learn more →</div>
                </div>
              </Link>
              <Link href={L.homeRental} className="svc-card pillar-card home-svc-tile" data-sr data-sr-delay={90}>
                <img
                  className="pillar-card__bg"
                  src={images.heroHomeRental}
                  alt="VR home rental — Meta Quest for families and parties"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="pillar-card__scrim" aria-hidden />
                <div className="pillar-card__body">
                  <div className="num">03 — VR AT HOME</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>VR at home</h3>
                  <p style={{ marginBottom: 0, fontSize: '0.88rem', lineHeight: 1.55 }}>
                    Rent Meta Quest with games and apps for families, friends or quiet evenings. We deliver the full kit, brief you on controls
                    and stay available by phone or email during the rental. Turn it on, find your bearings and play.
                  </p>
                  <div className="home-svc-tile__cta">Learn more →</div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

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
            <div className="text-center" style={{ marginBottom: '2.25rem' }} data-sr>
              <span className="tag-pill">FAQ</span>
              <h2>
                <span className="gradient-text-light">Common questions</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: 'Which VR headsets do you rent?', a: 'Most often Meta Quest 2 and Meta Quest 3 — wireless and ready to use.' },
                { q: 'Are games pre-installed?', a: 'Yes. We prepare a library for your audience (beginners, parties, chill titles, team games). You just put on the headset.' },
                { q: 'Is VR OK for beginners at a company event?', a: 'Absolutely. We pick intuitive experiences and our staff guides guests and watches safety.' },
                { q: 'How many people can try VR at an event?', a: 'It depends on headset count and slot length. Typically dozens to hundreds of guests in one event.' },
                { q: 'How much space do we need?', a: 'About 2×2 m per headset is usually enough. We adapt the setup to your venue (office, conference room, hall).' },
              ].map((item, i) => (
                <details key={i} className="svc-card" style={{ cursor: 'pointer', padding: '1.25rem 1.75rem' }} data-sr data-sr-delay={Math.min(i * 35, 140)}>
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

      <div className="block block-sky" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <div className="orb orb-purple" style={{ width: 250, height: 250, bottom: -50, left: '10%' }}></div>

        <section>
          <div className="container split split-stack-title">
            <div data-sr>
              <span className="tag-pill">Let’s talk</span>
              <h2 style={{ marginBottom: 0 }}>Want a <span className="gradient-text">VR experience?</span></h2>
            </div>

            <div data-sr data-sr-delay={45}>
              <ContactMapCard />
            </div>

            <div data-sr data-sr-delay={90}>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Send your city, date and headcount — we’ll reply with a proposal and price, usually within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href={L.order} className="btn btn-primary">Non-binding inquiry →</Link>
                <a href="tel:+420604160718" className="btn btn-ghost">+420 604 160 718</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
