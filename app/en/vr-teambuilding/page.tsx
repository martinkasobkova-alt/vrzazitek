import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';
import ContactMapCard from '@/components/ContactMapCard';
import { hrefFor } from '@/lib/i18n/routes';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', 'teambuilding-ve-vr');

const order = hrefFor('objednani-vr', 'en');

const benefits = [
  { icon: '🚀', title: 'Innovative team building', desc: 'Technology grabs attention. People have fun immediately — no long explanations.' },
  { icon: '🛡️', title: 'Safe experience', desc: 'Simulations and missions without real-world risk. On-site supervision included.' },
  { icon: '🤝', title: 'Teamwork', desc: 'Cooperative missions naturally build communication, trust and coordination.' },
  { icon: '🎯', title: 'Flexibility', desc: 'At your office, hotel or conference venue. We adapt to space and headcount.' },
];

const packages = [
  {
    name: 'Team Start',
    subtitle: 'For smaller teams up to 16 people',
    price: '17 999 CZK',
    featured: false,
    features: ['4 VR headsets', '4 hours of play', 'Transport & setup included', 'Professional crew', '50+ games', 'Guest rotation'],
  },
  {
    name: 'Team Pro',
    subtitle: 'For medium teams up to 30 people',
    price: '24 999 CZK',
    featured: true,
    badge: 'Most popular',
    features: ['6 VR headsets', '5 hours of play', 'Transport & setup included', '2 VR operators', 'Tournament mode & leaderboard', 'Cooperative team missions', 'Event photos'],
  },
  {
    name: 'Team Enterprise',
    subtitle: 'Large teams & full-day programs',
    price: '34 999 CZK',
    featured: false,
    features: ['8 VR headsets', 'Up to 8 hours', 'Transport & setup included', '3 VR operators', 'Tournament branding', 'Multiplayer battles', 'Video highlight on request'],
  },
];

const activities = [
  {
    title: 'VR sports & competitions',
    desc: 'Movement and healthy competition — great to break the ice and boost energy.',
    image: images.teamActivitySport,
  },
  {
    title: 'Cooperative VR',
    desc: 'Real team building: communication, support and coordination show immediately in-game.',
    image: images.teamActivityCoop,
  },
  {
    title: 'Racing & adrenaline',
    desc: 'Fast decisions under pressure — fun, emotion and wow moments for competitive segments.',
    image: images.teamActivityRacing,
  },
  {
    title: 'VR escape-style puzzles',
    desc: 'Creativity, logic and brainstorming in impossible worlds — for teams that want more than “just games”.',
    image: images.teamActivityPuzzle,
  },
];

export default function TeambuildingEn() {
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

        <section style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container split split-stack-title">
            <div>
              <span className="eyebrow hero-intro-item hero-intro-item--1">VR team building</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: 0 }}>
                Team building people <span className="gradient-text">actually enjoy.</span>
              </h1>
            </div>
            <div className="hero-intro-visual">
              <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                <img
                  src={images.heroTeam}
                  alt="Corporate VR team building — cooperative games for companies"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.35), rgba(124, 58, 237, 0.25))',
                    mixBlendMode: 'multiply',
                  }}
                ></div>
              </div>
            </div>
            <div>
              <p
                className="lead hero-intro-item hero-intro-item--3"
                style={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                We produce VR team-building programs end to end — from installation and game selection to on-site crew. Your meeting room becomes a VR zone in no time.
              </p>
              <div className="hero-intro-item hero-intro-item--4" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="#cenik" className="btn btn-ghost">View pricing ↓</Link>
                <Link href={order} className="btn btn-primary">Request team building →</Link>
              </div>
            </div>
          </div>

          <div className="container hero-intro-item hero-intro-item--6" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="grid-3">
              {[
                { icon: '⚡', title: 'Fast setup', desc: 'Transport, install, crew.' },
                { icon: '🎯', title: 'Built for teams', desc: 'Co-op, contests, puzzles.' },
                { icon: '🧑‍💼', title: '10–200 people', desc: 'Rotation + tournament mode.' },
              ].map((f, i) => (
                <div key={i} className="svc-card" data-sr data-sr-delay={i * 40}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Why VR</span>
              <h2>Why VR for companies <span className="gradient-text">works so well</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                A safe, innovative space for collaboration, communication and a memorable wow effect.
              </p>
            </div>
            <div className="grid-4">
              {benefits.map((b, i) => (
                <div key={i} className="svc-card" data-sr data-sr-delay={i * 30}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{b.icon}</div>
                  <h3 style={{ fontSize: '1.05rem' }}>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-blue" style={{ width: 350, height: 350, top: -80, left: '20%' }}></div>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, bottom: -40, right: '8%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Activities</span>
              <h2>Pick the right <span className="gradient-text">VR mix.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Sports, co-op, racing and logic experiences — we tailor the lineup to your culture.
              </p>
            </div>
            <div className="grid-activities">
              {activities.map((a, i) => (
                <div key={i} className="svc-card pillar-card occasion-tile" data-sr data-sr-delay={i * 35}>
                  <img
                    className="pillar-card__bg"
                    src={a.image}
                    alt={`${a.title} — VR team building, VRzazitek`}
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                  <div className="pillar-card__scrim" aria-hidden />
                  <div className="pillar-card__body">
                    <h3 style={{ marginBottom: '0.5rem' }}>{a.title}</h3>
                    <p style={{ marginBottom: 0, fontSize: '0.88rem', lineHeight: 1.55 }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="block block-deep" id="cenik" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <div className="orb orb-dark-purple" style={{ width: 300, height: 300, bottom: 0, right: '10%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Pricing</span>
              <h2>VR team building <span className="gradient-text-light">packages.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Prices include transport, installation, crew and technical support.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
              {packages.map((pkg, i) => (
                <div key={i} className={`price-card ${pkg.featured ? 'featured' : ''}`} data-sr data-sr-delay={i * 45}>
                  {pkg.badge && <div className="price-badge">{pkg.badge}</div>}
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.3rem' }}>{pkg.name}</h3>
                  <p className="text-muted" style={{ fontSize: '0.82rem', marginBottom: '1.25rem' }}>{pkg.subtitle}</p>
                  <div className="price-val">{pkg.price}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                    {pkg.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-dim)' }}>
                        <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={order}
                    className={`price-card-cta btn ${pkg.featured ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    I’m interested
                  </Link>
                </div>
              ))}
            </div>
            <div className="svc-card text-center" style={{ marginTop: '2rem', padding: '1.5rem 2rem' }} data-sr data-sr-delay={120}>
              💡 <strong>Larger team or special requirements?</strong>{' '}
              <span style={{ opacity: 0.88 }}>We’ll prepare a custom quote — up to 10 headsets available.</span>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-sky" id="kontakt" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <section>
          <div className="container split split-stack-title">
            <div data-sr>
              <span className="tag-pill">Contact</span>
              <h2 style={{ marginBottom: 0 }}>Book <span className="gradient-text">VR team building.</span></h2>
            </div>
            <div data-sr data-sr-delay={45}>
              <ContactMapCard />
            </div>
            <div data-sr data-sr-delay={90}>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Send your city, date and headcount — we’ll reply with a plan and price.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href={order} className="btn btn-primary">Get a quote →</Link>
                <a href="tel:+420737627000" className="btn btn-ghost">+420 737 627 000</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
