import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';
import ContactMapCard from '@/components/ContactMapCard';

export const metadata: Metadata = {
  title: 'VR oslavy a narozeniny v Praze | VR zážitek – přivezeme VR k vám',
  description: 'Oslavte narozeniny, dětskou párty, rozlučku se svobodou nebo svatbu ve VR! Přivezeme vybavení, hry i obsluhu. Praha a celá ČR.',
  alternates: { canonical: 'https://www.vrzazitek.cz/oslavy-vr' },
};

const occasions = [
  {
    image: images.occasionBirthday,
    title: 'Narozeninové oslavy',
    desc: 'Darujte oslavenci i hostům nezapomenutelný zážitek. VR je hit pro děti i dospělé – akce, únikovky nebo společné hry.',
  },
  {
    image: images.occasionKids,
    title: 'Dětské párty',
    desc: 'Bezpečné a zábavné hry pro nejmenší. Žádné násilí, jen čistá radost z objevování virtuálních světů a společných her.',
  },
  {
    image: images.occasionBachelor,
    title: 'Rozlučky se svobodou',
    desc: 'Adrenalin, smích a nezapomenutelné momenty. VR rozlučka je originální alternativa – a fotky budou epic!',
  },
  {
    image: images.occasionWedding,
    title: 'Svatby a večírky',
    desc: 'Překvapte hosty originální atrakcí. VR kiosek zajistí zábavu, zatímco novomanželé fotí nebo odpočívají.',
  },
];

const howItWorks = [
  { icon: '🚚', title: 'Přivezeme a nastavíme', desc: 'Dorazíme s kompletním vybavením, vše připravíme a vysvětlíme. Vy nemusíte řešit nic.' },
  { icon: '🎮', title: 'Hry pro každý věk', desc: 'Máme desítky her – od dětských dobrodružství po adrenalinové zážitky pro dospělé.' },
  { icon: '👨‍💼', title: 'Profesionální obsluha', desc: 'Náš technik se postará o plynulý průběh, střídání hráčů a pomoc s ovládáním.' },
  { icon: '📸', title: 'Fotky a videa', desc: 'Zachytíme nejlepší momenty z VR – skvělá vzpomínka a obsah na sociální sítě!' },
];

const packages = [
  {
    name: 'Mini párty',
    subtitle: 'Ideální pro 5–10 hostů',
    price: '5 999 Kč',
    featured: false,
    features: ['1× VR headset Meta Quest 3', '2 hodiny zábavy', 'Neomezený výběr her', 'Instalace a zaškolení'],
  },
  {
    name: 'Párty balíček',
    subtitle: 'Ideální pro 10–20 hostů',
    price: '8 999 Kč',
    featured: true,
    badge: 'Nejoblíbenější',
    features: ['2× VR headset Meta Quest 3', '3 hodiny zábavy', 'Multiplayer hry pro 2 hráče', 'Profesionální obsluha', 'Fotky z akce zdarma'],
  },
  {
    name: 'Mega oslava',
    subtitle: 'Ideální pro 20–40 hostů',
    price: '13 999 Kč',
    featured: false,
    features: ['3× VR headset Meta Quest 3', '4 hodiny zábavy', 'Turnajový režim', '2 technici na místě', 'Fotky a video sestřih'],
  },
];

const testimonials = [
  { name: 'Petra K.', occasion: 'Dětské narozeniny, Praha', text: 'Syn měl 10. narozeniny a VR byla naprostý hit! Děti se střídaly a bavily se celé 3 hodiny. Určitě objednáme znovu.' },
  { name: 'Tomáš M.', occasion: 'Rozlučka se svobodou', text: 'Rozlučka se svobodou s VR byla geniální nápad. Kluci se báli výšek ve VR, holky střílely zombíky – skvělá zábava pro všechny!' },
  { name: 'Jana a Petr', occasion: 'Svatba, Brno', text: 'Na svatbě jsme měli VR kiosek a hosté se u něj bavili celý večer. Fotky s headsetem jsou teď nejsdílenější ze svatby 😄' },
  { name: 'Lucie S.', occasion: 'Narozeniny dospělého', text: 'Objednali jsme VR na manželovy 40. narozeniny. On i kamarádi byli nadšení – prý nejlepší dárek za poslední roky!' },
];

export default function Oslavy() {
  return (
    <>
      {/* HERO */}
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
          <div className="container split">
            <div>
              <span className="eyebrow hero-intro-item hero-intro-item--1">Oslavy ve virtuální realitě</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: '1.5rem' }}>
                Oslavte to jinak. <span className="gradient-text">Oslavte to ve VR!</span>
              </h1>
              <p
                className="lead hero-intro-item hero-intro-item--3"
                style={{ marginBottom: '1.5rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                Hledáte nezapomenutelný zážitek pro vaši oslavu? <strong style={{ color: 'var(--text)' }}>Virtuální realita</strong> promění každou párty v dobrodružství, na které budou hosté vzpomínat ještě dlouho.
              </p>
              <p className="lead hero-intro-item hero-intro-item--4" style={{ marginBottom: '2rem' }}>
                Ať už plánujete <strong style={{ color: 'var(--text)' }}>narozeniny</strong>, <strong style={{ color: 'var(--text)' }}>dětskou párty</strong>, <strong style={{ color: 'var(--text)' }}>rozlučku se svobodou</strong> nebo originální <strong style={{ color: 'var(--text)' }}>svatební zábavu</strong> – přivezeme VR přímo k vám a postaráme se o vše. Díky tomu si vy i vaši hosté můžete snadno vyzkoušet různé VR zážitky – od akčních her až po zábavné soutěže. Vy si užíváte oslavu, o techniku i průběh se postaráme my.
              </p>
              <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="#cenik" className="btn btn-ghost">💰 Zobrazit ceník</Link>
                <Link href="/objednani-vr" className="btn btn-primary">🥽 Chci VR na oslavu</Link>
              </div>
            </div>
            <div className="hero-intro-visual">
              <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                <img
                  src={images.heroParty}
                  alt="Oslava a zábava – VR na párty nebo svatbu"
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
          </div>
        </section>
      </div>

      {/* OCCASIONS */}
      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', left: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Příležitosti</span>
              <h2>Pro jakou příležitost <span className="gradient-text">je VR ideální?</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Každá oslava si zaslouží být výjimečná. VR zážitek nadchne hosty všech věkových kategorií.
              </p>
            </div>
            <div className="grid-activities">
              {occasions.map((o, i) => (
                <div key={i} className="svc-card pillar-card occasion-tile">
                  <img
                    className="pillar-card__bg"
                    src={o.image}
                    alt=""
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

      {/* HOW IT WORKS */}
      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: -80, right: '20%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Jak probíhá oslava</span>
              <h2>Přivezeme vybavení, <span className="gradient-text">vy se staráte o dort 🎂</span></h2>
            </div>
            <div className="grid-4">
              {howItWorks.map((h, i) => (
                <div key={i} className="svc-card">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{h.icon}</div>
                  <h3 style={{ fontSize: '1.05rem' }}>{h.title}</h3>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* PRICING */}
      <div className="block block-paper" id="cenik" data-scroll-reveal>
        <div className="orb orb-purple" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Ceník</span>
              <h2>Ceník <span className="gradient-text">VR oslav.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Ceny zahrnují dopravu po Praze, vybavení i obsluhu.
              </p>
              <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                Ceny jsou bez DPH, nejsme plátci DPH. Doprava na místo je 10 Kč/km.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
              {packages.map((pkg, i) => (
                <div key={i} className={`price-card ${pkg.featured ? 'featured' : ''}`}>
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
                    href="/objednani-vr"
                    className={`price-card-cta btn ${pkg.featured ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    Objednat
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* TESTIMONIALS (DEEP) */}
      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Reference</span>
              <h2>Co říkají <span className="gradient-text-light">naši zákazníci.</span></h2>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((t, i) => (
                <div key={i} className="svc-card testimonial-card">
                  <div className="testimonial-stars" style={{ color: 'var(--cyan-bright)' }}>
                    ★★★★★
                  </div>
                  <p className="testimonial-quote">„{t.text}“</p>
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

      {/* CTA */}
      <div className="block block-sky" id="kontakt" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <section>
          <div className="container split">
            <div>
              <span className="tag-pill">Pojďme se spojit</span>
              <h2>Objednejte VR <span className="gradient-text">na vaši oslavu.</span></h2>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Napište termín a typ akce. Do 24 hodin pošleme nezávaznou nabídku na míru.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/objednani-vr" className="btn btn-primary">Objednat online →</Link>
                <a href="tel:+420737627000" className="btn btn-ghost">+420 737 627 000</a>
              </div>
            </div>
            <ContactMapCard />
          </div>
        </section>
      </div>
    </>
  );
}
