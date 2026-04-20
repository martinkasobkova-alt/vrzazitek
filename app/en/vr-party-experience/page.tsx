import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';
import ContactMapCard from '@/components/ContactMapCard';
import { hrefFor } from '@/lib/i18n/routes';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', 'oslavy-vr');

const order = hrefFor('objednani-vr', 'en');

const occasions = [
  {
    image: images.occasionBirthday,
    title: 'Birthday parties',
    desc: 'Give the birthday person and guests a memorable experience. VR is a hit for kids and adults — action, escape rooms or multiplayer games.',
  },
  {
    image: images.occasionKids,
    title: 'Kids’ parties',
    desc: 'Safe, fun games for children. No violence — just joy exploring virtual worlds and playing together.',
  },
  {
    image: images.occasionBachelor,
    title: 'Bachelor / bachelorette',
    desc: 'Adrenaline, laughter and unforgettable moments. A VR party is an original alternative — and the photos will be epic!',
  },
  {
    image: images.occasionWedding,
    title: 'Weddings & parties',
    desc: 'Surprise guests with a unique attraction. A VR kiosk keeps everyone entertained while the couple takes photos or rests.',
  },
];

const howItWorks = [
  { icon: '🚚', title: 'We bring & set up', desc: 'We arrive with full equipment, prepare everything and explain how it works. You don’t lift a finger.' },
  { icon: '🎮', title: 'Games for every age', desc: 'Dozens of titles — from kids’ adventures to adrenaline experiences for adults.' },
  { icon: '👨‍💼', title: 'Professional crew', desc: 'Our technician runs smooth rotation, helps with controls and watches safety.' },
  { icon: '📸', title: 'Photos & video', desc: 'We capture the best VR moments — great memories and content for social media.' },
];

const packages = [
  {
    name: 'Mini party',
    subtitle: 'Ideal for 5–10 guests',
    price: '5 999 CZK',
    featured: false,
    features: ['1× Meta Quest 3', '2 hours of play', 'Unlimited game selection', 'Setup & briefing'],
  },
  {
    name: 'Party package',
    subtitle: 'Ideal for 10–20 guests',
    price: '8 999 CZK',
    featured: true,
    badge: 'Most popular',
    features: ['2× Meta Quest 3', '3 hours of play', 'Multiplayer for 2 players', 'Professional crew', 'Event photos included'],
  },
  {
    name: 'Mega celebration',
    subtitle: 'Ideal for 20–40 guests',
    price: '13 999 CZK',
    featured: false,
    features: ['3× Meta Quest 3', '4 hours of play', 'Tournament mode', '2 technicians on site', 'Photos & highlight video'],
  },
];

const testimonials = [
  { name: 'Petra K.', occasion: 'Kids’ birthday, Prague', text: 'My son’s 10th birthday — VR was an absolute hit! Kids took turns and played the whole 3 hours. We’ll book again.' },
  { name: 'Tomáš M.', occasion: 'Bachelor party', text: 'Bachelor party in VR was a genius idea. The guys tried heights in VR, the girls fought zombies — fun for everyone!' },
  { name: 'Jana & Petr', occasion: 'Wedding, Brno', text: 'We had a VR kiosk at our wedding and guests loved it all evening. Headset photos are now the most shared from the wedding 😄' },
  { name: 'Lucie S.', occasion: 'Adult birthday', text: 'We booked VR for my husband’s 40th. He and his friends were thrilled — best gift in years, they said!' },
];

export default function PartyEn() {
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
              <span className="eyebrow hero-intro-item hero-intro-item--1">VR celebrations</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: 0 }}>
                Celebrate differently. <span className="gradient-text">Celebrate in VR!</span>
              </h1>
            </div>
            <div className="hero-intro-visual">
              <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                <img
                  src={images.heroParty}
                  alt="VR parties and birthdays — Meta Quest, Prague and Czech Republic"
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
                Want an unforgettable celebration? <strong style={{ color: 'var(--text)' }}>Virtual reality</strong> turns any party into an adventure guests remember.
              </p>
              <p className="lead hero-intro-item hero-intro-item--4" style={{ marginBottom: '2rem' }}>
                Birthdays, <strong style={{ color: 'var(--text)' }}>kids’ parties</strong>, <strong style={{ color: 'var(--text)' }}>stag &amp; hen nights</strong> or <strong style={{ color: 'var(--text)' }}>wedding entertainment</strong> — we bring VR to you and handle the tech. You enjoy the party; we run the experience.
              </p>
              <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="#cenik" className="btn btn-ghost">💰 View pricing</Link>
                <Link href={order} className="btn btn-primary">🥽 I want VR at my party</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', left: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Occasions</span>
              <h2>When is VR <span className="gradient-text">the perfect fit?</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Every celebration deserves to feel special. VR delights guests of all ages.
              </p>
            </div>
            <div className="grid-activities">
              {occasions.map((o, i) => (
                <div key={i} className="svc-card pillar-card occasion-tile" data-sr data-sr-delay={i * 35}>
                  <img
                    className="pillar-card__bg"
                    src={o.image}
                    alt={`${o.title} — VR party rental, VRzazitek`}
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                  <div className="pillar-card__scrim" aria-hidden />
                  <div className="pillar-card__body">
                    <h3 style={{ marginBottom: '0.5rem' }}>{o.title}</h3>
                    <p style={{ marginBottom: 0, fontSize: '0.88rem', lineHeight: 1.55 }}>{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: -80, right: '20%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">How it works</span>
              <h2>We bring the gear — <span className="gradient-text">you bring the cake 🎂</span></h2>
            </div>
            <div className="grid-4">
              {howItWorks.map((h, i) => (
                <div key={i} className="svc-card" data-sr data-sr-delay={i * 35}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{h.icon}</div>
                  <h3 style={{ fontSize: '1.05rem' }}>{h.title}</h3>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="block block-paper" id="cenik" data-scroll-reveal>
        <div className="orb orb-purple" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Pricing</span>
              <h2>VR party <span className="gradient-text">packages.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Prices include Prague transport, equipment and crew.
              </p>
              <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                Prices exclude VAT (non-VAT payer). Travel beyond Prague: 10 CZK/km.
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
                    Book
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Reviews</span>
              <h2>What our <span className="gradient-text-light">customers say.</span></h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="svc-card testimonial-card" data-sr data-sr-delay={i * 40}>
                  <div className="testimonial-stars" style={{ color: 'var(--cyan-bright)' }}>
                    ★★★★★
                  </div>
                  <p className="testimonial-quote">“{t.text}”</p>
                  <div>
                    <div className="testimonial-name" style={{ fontWeight: 600, color: 'var(--cyan-bright)' }}>
                      {t.name}
                    </div>
                    <div className="testimonial-occasion" style={{ color: 'rgba(224, 236, 255, 0.6)' }}>
                      {t.occasion}
                    </div>
                  </div>
                </div>
              ))}
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
              <h2 style={{ marginBottom: 0 }}>Book VR <span className="gradient-text">for your celebration.</span></h2>
            </div>
            <div data-sr data-sr-delay={45}>
              <ContactMapCard />
            </div>
            <div data-sr data-sr-delay={90}>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Send your date and event type — we reply with a custom offer within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href={order} className="btn btn-primary">Order online →</Link>
                <a href="tel:+420737627000" className="btn btn-ghost">+420 737 627 000</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
