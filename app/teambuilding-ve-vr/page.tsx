import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';
import ContactMapCard from '@/components/ContactMapCard';

export const metadata: Metadata = {
  title: 'VR teambuilding pro firmy | Firemní akce ve virtuální realitě',
  description: 'Teambuilding ve virtuální realitě: 50+ her, kooperativní mise, turnaje. Pro týmy 10–200 lidí. Doprava, instalace i obsluha v ceně. Praha a celá ČR.',
  alternates: { canonical: 'https://www.vrzazitek.cz/teambuilding-ve-vr' },
};

const benefits = [
  { icon: '🚀', title: 'Inovativní teambuilding', desc: 'Technologie přitahuje pozornost. Lidi to baví hned – bez složitého vysvětlování.' },
  { icon: '🛡️', title: 'Bezpečný zážitek', desc: 'Simulace, úkoly i „nové světy" bez reálných rizik. Dohled na místě je samozřejmost.' },
  { icon: '🤝', title: 'Týmová spolupráce', desc: 'Kooperativní mise přirozeně budují komunikaci, důvěru a koordinaci v týmu.' },
  { icon: '🎯', title: 'Flexibilita', desc: 'U vás, v hotelu, na konferenci. Setup přizpůsobíme prostoru i počtu účastníků.' },
];

const packages = [
  {
    name: 'Team Start',
    subtitle: 'Pro menší týmy do 16 osob',
    price: '17 999 Kč',
    featured: false,
    features: ['4 VR headsety', '4 hodiny zábavy', 'Doprava a instalace v ceně', 'Profesionální obsluha', 'Výběr z 50+ her', 'Rotace účastníků'],
  },
  {
    name: 'Team Pro',
    subtitle: 'Pro středně velké týmy do 30 osob',
    price: '24 999 Kč',
    featured: true,
    badge: 'Nejoblíbenější',
    features: ['6 VR headsetů', '5 hodin zábavy', 'Doprava a instalace v ceně', '2 profesionální operátoři', 'Turnajový mód s žebříčkem', 'Týmové kooperativní mise', 'Fotodokumentace akce'],
  },
  {
    name: 'Team Enterprise',
    subtitle: 'Pro velké týmy a celodenní akce',
    price: '34 999 Kč',
    featured: false,
    features: ['8 VR headsetů', 'Až 8 hodin', 'Doprava a instalace v ceně', '3 profesionální operátoři', 'Branding turnaje', 'Multiplayer týmové bitvy', 'Po domluvě video sestřih'],
  },
];

const activities = [
  {
    title: 'VR Sportování a soutěže',
    desc: 'Pohybové aktivity a zdravá soutěživost. Skvělé na uvolnění stresu i „nakopnutí" atmosféry.',
    image: images.teamActivitySport,
  },
  {
    title: 'Týmové VR kooperace',
    desc: 'Opravdový teambuilding: komunikace, pomoc a koordinace. Sehrané týmy jsou ve VR vidět okamžitě.',
    image: images.teamActivityCoop,
  },
  {
    title: 'VR Závody a adrenalin',
    desc: 'Rychlé rozhodování pod tlakem. Zábava, emoce a wow efekt – ideální pro soutěžní část programu.',
    image: images.teamActivityRacing,
  },
  {
    title: 'Logické VR únikovky',
    desc: 'Kreativita, logika a brainstorming v nemožných světech. Skvělé pro týmy, co chtějí „víc než hry".',
    image: images.teamActivityPuzzle,
  },
];

export default function Teambuilding() {
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
          className="orb orb-blue hero-orb-in hero-orb-in--b"
          style={{ width: 300, height: 300, bottom: -50, left: '10%' }}
        ></div>

        <section style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="container split">
            <div>
              <span className="eyebrow hero-intro-item hero-intro-item--1">VR teambuilding</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: '1.5rem' }}>
                Teambuilding, který <span className="gradient-text">lidi fakt baví.</span>
              </h1>
              <p
                className="lead hero-intro-item hero-intro-item--3"
                style={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                Připravíme pro vás teambuilding ve virtuální realitě — od instalace přes výběr her až po obsluhu na místě. Zasedačka se během chvíle změní na VR zónu.
              </p>
              <div className="hero-intro-item hero-intro-item--4" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="#cenik" className="btn btn-ghost">Zobrazit ceník ↓</Link>
                <Link href="/objednani-vr" className="btn btn-primary">Poptat teambuilding →</Link>
              </div>
            </div>
            <div className="hero-intro-visual">
              <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                <img
                  src={images.heroTeam}
                  alt="Tým při spolupráci – firemní teambuilding"
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

          <div className="container hero-intro-item hero-intro-item--6" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="grid-3">
              {[
                { icon: '⚡', title: 'Rychlá realizace', desc: 'Doprava, instalace, obsluha.' },
                { icon: '🎯', title: 'Zážitky pro tým', desc: 'Kooperace, soutěže, únikovky.' },
                { icon: '🧑‍💼', title: 'Pro 10–200 lidí', desc: 'Rotace + turnajový režim.' },
              ].map((f, i) => (
                <div key={i} className="svc-card">
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{f.icon}</div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* WHY VR */}
      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Proč VR</span>
              <h2>Proč je VR pro firmy <span className="gradient-text">ideální volba?</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Bezpečné a inovativní prostředí pro spolupráci, komunikaci a nezapomenutelný wow efekt.
              </p>
            </div>
            <div className="grid-4">
              {benefits.map((b, i) => (
                <div key={i} className="svc-card">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{b.icon}</div>
                  <h3 style={{ fontSize: '1.05rem' }}>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ACTIVITIES */}
      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-blue" style={{ width: 350, height: 350, top: -80, left: '20%' }}></div>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, bottom: -40, right: '8%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Aktivity</span>
              <h2>Vyberte si nejlepší <span className="gradient-text">VR aktivity.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Sport, kooperace, závody i logické únikovky — vybereme mix, co sedí kultuře firmy.
              </p>
            </div>
            <div className="grid-activities">
              {activities.map((a, i) => (
                <div key={i} className="svc-card pillar-card occasion-tile">
                  <img
                    className="pillar-card__bg"
                    src={a.image}
                    alt=""
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

      {/* PRICING PACKAGES */}
      <div className="block block-deep" id="cenik" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <div className="orb orb-dark-purple" style={{ width: 300, height: 300, bottom: 0, right: '10%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Ceník</span>
              <h2>Ceník <span className="gradient-text-light">VR teambuildingu.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Ceny zahrnují dopravu, instalaci, obsluhu a technický servis.
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
                    Mám zájem
                  </Link>
                </div>
              ))}
            </div>
            <div className="svc-card text-center" style={{ marginTop: '2rem', padding: '1.5rem 2rem' }}>
              💡 <strong>Máte větší tým nebo speciální požadavky?</strong>{' '}
              <span style={{ opacity: 0.88 }}>Uděláme nabídku na míru. Možnost rozšíření až na 10 headsetů.</span>
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
              <h2>Poptat <span className="gradient-text">VR teambuilding.</span></h2>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Napište město, termín a počet lidí. Pošleme rychlý návrh řešení a cenu.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/objednani-vr" className="btn btn-primary">Chci nabídku →</Link>
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
