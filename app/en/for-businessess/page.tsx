import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';
import ReferenceLogoMarquee from '@/components/ReferenceLogoMarquee';
import ContactMapCard from '@/components/ContactMapCard';
import { hrefFor } from '@/lib/i18n/routes';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', 'vr-pro-firmy');

const order = hrefFor('objednani-vr', 'en');

const pillars = [
  {
    num: '01',
    title: 'Events & VR team building',
    desc: 'From small meetings to large conferences. VR for business is the attraction that keeps people engaged for hours with a real wow effect.',
    bullets: ['Scale: 10 → 5,000+ attendees', 'Custom VR zone (indoor / outdoor)', 'Rotation flow & professional VR staff'],
    image: images.pillarEventsVr,
  },
  {
    num: '02',
    title: 'VR & AR presentations',
    desc: 'Trade shows, conferences or client meetings. Augmented and virtual reality are a unique way to present products and services interactively.',
    bullets: ['Support with 3D content design', 'Full service: hardware & setup', 'Team on site for the whole event'],
    image: images.pillarPresentations,
  },
  {
    num: '03',
    title: 'VR & AR training',
    desc: 'Effective employee training. VR and AR let you simulate situations safely and quickly. We run workshops with real impact.',
    bullets: ['Help choosing training apps', 'Facilitated workshops (HR, sales, safety)', 'Support from A to Z'],
    image: images.pillarEducation,
  },
];

const process = [
  { num: '1', title: 'Goals & scenario', desc: 'You share the event type (VR activation, AR demo). We propose format and headset count.' },
  { num: '2', title: 'Content & hardware', desc: 'We prepare or help with 3D content. Hardware and setup turnkey.' },
  { num: '3', title: 'On-site delivery', desc: 'We build the VR zone, train your team or run everything with our crew.' },
  { num: '4', title: 'Review', desc: 'After the event we review results and next steps. Optional media from the activation.' },
];

const pricing = [
  {
    title: 'VR for corporate events',
    desc: 'Full VR headset rental including equipment and crew.',
    items: [
      { label: 'Meta Quest 2 / day', value: '2 999 CZK' },
      { label: 'Meta Quest 3 / day', value: '4 499 CZK' },
    ],
  },
  {
    title: 'Ray-Ban Meta AR glasses',
    desc: 'Smart glasses for augmented reality and business use.',
    items: [{ label: 'Price', value: '2 999 CZK' }],
  },
  {
    title: 'Equipment',
    desc: 'Add-ons for your VR zone.',
    items: [
      { label: 'Gaming PC (VR ready)', value: '1 500 CZK / day' },
      { label: 'LCD panel', value: '300–500 CZK' },
      { label: 'LCD stand', value: '400 CZK' },
    ],
  },
  {
    title: 'Assistance & service',
    desc: 'Staff and transport.',
    items: [
      { label: 'VR technician', value: '1 000 CZK / h' },
      { label: 'Assistant', value: '500 CZK / h' },
      { label: 'Transport', value: '10 CZK / km' },
    ],
  },
  {
    title: 'VR simulator',
    desc: 'Full simulator setup for maximum immersion.',
    items: [{ label: 'Per day', value: '7 999 CZK' }],
  },
  {
    title: 'PlayStation VR2',
    desc: 'PS5 + PS VR2 including gaming zone setup.',
    items: [{ label: 'Price', value: '4 999 CZK' }],
  },
];

export default function ForBusinessEn() {
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

        <section style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container split split-stack-title">
            <div>
              <span className="eyebrow hero-intro-item hero-intro-item--1">VR &amp; AR for business</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: 0 }}>
                Augmented &amp; virtual reality <span className="gradient-text">for companies.</span>
              </h1>
            </div>
            <div className="hero-intro-visual">
              <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                <img
                  src={images.heroCorporate}
                  alt="VR and AR for corporate events — Prague and Czech Republic"
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
                style={{ marginBottom: '1.5rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                Looking for an original way to bring your team together? We design full VR team-building programs that combine fun, modern tech and real collaboration.
              </p>
              <p className="lead hero-intro-item hero-intro-item--4" style={{ marginBottom: '2rem' }}>
                VR for business is not “just games” — it is a tool that can turn a meeting room into a hi-tech play zone within minutes, with professional staff and content tailored to your culture.
              </p>
              <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="#cenik" className="btn btn-ghost">View pricing ↓</Link>
                <Link href={order} className="btn btn-primary">Request VR / AR →</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', left: -100 }}></div>
        <div className="orb orb-purple" style={{ width: 250, height: 250, bottom: '10%', right: -50 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Three pillars</span>
              <h2>VR &amp; AR <span className="gradient-text">in the workplace.</span></h2>
            </div>
            <div className="grid-3">
              {pillars.map((p, i) => (
                <div key={i} className="svc-card pillar-card" data-sr data-sr-delay={i * 40}>
                  <img
                    className="pillar-card__bg"
                    src={p.image}
                    alt={`${p.title} — VR and AR for business, VRzazitek`}
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                  <div className="pillar-card__scrim" aria-hidden />
                  <div className="pillar-card__body">
                    <div className="num">{p.num}</div>
                    <h3 style={{ marginBottom: '0.75rem' }}>{p.title}</h3>
                    <p style={{ marginBottom: '1.25rem' }}>{p.desc}</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {p.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem' }}>
                          <span style={{ fontWeight: 700, flexShrink: 0 }}>✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: '30%', right: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">How we work</span>
              <h2>Fast and <span className="gradient-text">transparent.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                You define the goal — we deliver a turnkey solution.
              </p>
            </div>
            <div className="grid-4">
              {process.map((p, i) => (
                <div key={i} className="svc-card" data-sr data-sr-delay={i * 35}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'var(--gradient-btn)',
                    display: 'grid', placeItems: 'center',
                    color: '#fff', fontWeight: 700, fontSize: '1.1rem',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3)',
                  }}>{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="block block-paper" id="cenik" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: '10%', left: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Pricing</span>
              <h2>VR &amp; AR rental <span className="gradient-text">rates.</span></h2>
              <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                Indicative prices — every event is quoted individually. Prices exclude VAT.
              </p>
            </div>
            <div className="grid-3">
              {pricing.map((p, i) => (
                <div key={i} className="svc-card" data-sr data-sr-delay={Math.min(i * 30, 150)}>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--cyan)' }}>{p.title}</h3>
                  <p style={{ marginBottom: '1.25rem' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {p.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontSize: '0.88rem' }}>
                        <span style={{ color: 'var(--text-dim)' }}>{item.label}</span>
                        <span className="gradient-text" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                Professional VR/AR training consulting &amp; custom content — <strong style={{ color: 'var(--cyan)' }}>on request</strong>
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '2rem' }} data-sr>
              <span className="tag-pill">Clients</span>
              <h2>Brands that used <span className="gradient-text-light">our VR services.</span></h2>
            </div>
            <div data-sr data-sr-delay={40}>
              <ReferenceLogoMarquee />
            </div>
            <p className="text-center" style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(224, 236, 255, 0.65)' }} data-sr data-sr-delay={80}>
              And many more VR &amp; AR projects…
            </p>
          </div>
        </section>
      </div>

      <div className="block block-sky" id="kontakt" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <section>
          <div className="container split split-stack-title">
            <div data-sr>
              <span className="tag-pill">Contact</span>
              <h2 style={{ marginBottom: 0 }}>Request VR <span className="gradient-text">for your company.</span></h2>
            </div>
            <div data-sr data-sr-delay={45}>
              <ContactMapCard />
            </div>
            <div data-sr data-sr-delay={90}>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Send your date and headcount — we’ll reply with a non-binding offer.
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
