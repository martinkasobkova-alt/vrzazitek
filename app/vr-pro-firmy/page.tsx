import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';
import ReferenceLogoMarquee from '@/components/ReferenceLogoMarquee';

export const metadata: Metadata = {
  title: 'Pronájem virtuální reality (VR) & AR pro firmy | Eventy & teambuilding',
  description: 'Rozšířená a virtuální realita pro firmy: eventy, teambuilding, AR prezentace, vzdělávání ve VR. Kompletní realizace na klíč, Praha a celá ČR.',
  alternates: { canonical: 'https://www.vrzazitek.cz/vr-pro-firmy' },
};

const pillars = [
  {
    num: '01',
    title: 'Eventy a VR teambuilding',
    desc: 'Od firemní akce pro pár lidí až po velké eventy. Virtuální realita pro firmy je ideální atrakcí, která zabaví na hodiny a vytvoří „wow" efekt.',
    bullets: ['Škálování: 10 → 5 000+ účastníků', 'VR zóna na míru (interiér / exteriér)', 'Organizace rotací a profi VR obsluha'],
    image: images.pillarEventsVr,
  },
  {
    num: '02',
    title: 'Prezentace v VR & AR',
    desc: 'Veletrh, konference či meeting s klienty. Rozšířená realita (AR) a virtuální realita (VR) jsou jedinečnou cestou, jak interaktivně ukázat produkt či službu.',
    bullets: ['Pomoc s návrhem a instalací 3D obsahu', 'Kompletní zajištění: technika, setup', 'Tým plně k dispozici po celou dobu akce'],
    image: images.pillarPresentations,
  },
  {
    num: '03',
    title: 'Vzdělávání ve VR a AR',
    desc: 'Efektivní trénink zaměstnanců. Vzdělávání ve VR a AR umožňuje simulovat situace bezpečně a rychle. Vedeme workshopy s reálným dopadem.',
    bullets: ['Pomoc s obsahem a aplikacemi na školení', 'Vedené workshopy (HR, obchod, safety)', 'Asistence při školení od A do Z'],
    image: images.pillarEducation,
  },
];

const process = [
  { num: '1', title: 'Cíl a scénář', desc: 'Zadáte typ akce (VR event, VR/AR prezentace). Navrhneme formát a počet headsetů.' },
  { num: '2', title: 'Obsah & technika', desc: 'Zajistíme nebo pomůžeme s přípravou 3D obsahu. Hardware a setup na klíč.' },
  { num: '3', title: 'Realizace na místě', desc: 'Postavíme VR zónu, zaškolíme personál nebo s naším týmem zajistíme plynulý chod.' },
  { num: '4', title: 'Vyhodnocení', desc: 'Po akci zhodnotíme přínos nasazení VR/AR. V případě zájmu dodáme mediální obsah z akce.' },
];

const pricing = [
  {
    title: 'VR na firemní akci',
    desc: 'Kompletní zapůjčení VR headsetu včetně techniky a obsluhy.',
    items: [
      { label: 'Meta Quest 2 / den', value: '2 999 Kč' },
      { label: 'Meta Quest 3 / den', value: '4 499 Kč' },
    ],
  },
  {
    title: 'AR brýle Ray-Ban Meta',
    desc: 'Chytré brýle pro rozšířenou realitu a firemní využití.',
    items: [{ label: 'Cena', value: '2 999 Kč' }],
  },
  {
    title: 'Technika & vybavení',
    desc: 'Doplňkové vybavení pro vaši VR zónu.',
    items: [
      { label: 'Herní PC (VR ready)', value: '1 500 Kč / den' },
      { label: 'LCD panel', value: '300–500 Kč' },
      { label: 'Podstavec pod LCD', value: '400 Kč' },
    ],
  },
  {
    title: 'Asistence & servis',
    desc: 'Personál a doprava na místo.',
    items: [
      { label: 'VR Technik', value: '1 000 Kč / h' },
      { label: 'Asistent', value: '500 Kč / h' },
      { label: 'Doprava', value: '10 Kč / km' },
    ],
  },
  {
    title: 'VR simulátor',
    desc: 'Kompletní zprovoznění simulátoru pro maximální zážitek.',
    items: [{ label: 'Cena za den', value: '7 999 Kč' }],
  },
  {
    title: 'PlayStation VR2',
    desc: 'PlayStation 5 + PS VR2 včetně instalace herní zóny.',
    items: [{ label: 'Cena', value: '4 999 Kč' }],
  },
];

export default function VrProFirmy() {
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
              <span className="eyebrow hero-intro-item hero-intro-item--1">VR a AR pro firmy</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: '1.5rem' }}>
                Rozšířená a virtuální realita <span className="gradient-text">pro firmy.</span>
              </h1>
              <p
                className="lead hero-intro-item hero-intro-item--3"
                style={{ marginBottom: '1.5rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                Hledáte originální způsob, jak stmelit kolektiv? Připravíme komplexní teambuilding ve VR, který v sobě pojí zábavu, nejmodernější technologie a rozvoj týmové spolupráce.
              </p>
              <p className="lead hero-intro-item hero-intro-item--4" style={{ marginBottom: '2rem' }}>
                Virtuální realita pro firmy není jen o hrách — je to nástroj, který během pár minut promění zasedací místnosti v hi-tech hernu s profesionální obsluhou.
              </p>
              <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="#cenik" className="btn btn-ghost">Zobrazit ceník ↓</Link>
                <Link href="/objednani-vr" className="btn btn-primary">Chci nabídku VR/AR →</Link>
              </div>
            </div>
            <div className="hero-intro-visual">
              <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                <img
                  src={images.heroCorporate}
                  alt="Firemní konference a technologie – VR pro firmy"
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

      {/* THREE PILLARS */}
      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', left: -100 }}></div>
        <div className="orb orb-purple" style={{ width: 250, height: 250, bottom: '10%', right: -50 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Tři pilíře</span>
              <h2>Využití virtuální a rozšířené reality <span className="gradient-text">ve firmách.</span></h2>
            </div>
            <div className="grid-3">
              {pillars.map((p, i) => (
                <div key={i} className="svc-card pillar-card">
                  <img
                    className="pillar-card__bg"
                    src={p.image}
                    alt=""
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

      {/* PROCESS */}
      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: '30%', right: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Jak probíhá spolupráce</span>
              <h2>Rychle a <span className="gradient-text">přehledně.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Vy definujete cíl. My dodáme řešení na klíč.
              </p>
            </div>
            <div className="grid-4">
              {process.map((p, i) => (
                <div key={i} className="svc-card">
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

      {/* PRICING */}
      <div className="block block-paper" id="cenik" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: '10%', left: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Ceník</span>
              <h2>Ceník pronájmu <span className="gradient-text">VR a AR.</span></h2>
              <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                Orientační ceny. Každou akci naceníme individuálně. Ceny bez DPH.
              </p>
            </div>
            <div className="grid-3">
              {pricing.map((p, i) => (
                <div key={i} className="svc-card">
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
                Profesionální konzultace vzdělávání ve VR/AR a obsah na míru — <strong style={{ color: 'var(--cyan)' }}>dle domluvy</strong>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CLIENTS (DEEP) */}
      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '2rem' }}>
              <span className="tag-pill">Reference</span>
              <h2>Firmy, které využily <span className="gradient-text-light">naše VR služby.</span></h2>
            </div>
            <ReferenceLogoMarquee />
            <p className="text-center" style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(224, 236, 255, 0.65)' }}>
              A spousta dalších projektů ve VR a AR…
            </p>
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
              <h2>Poptat VR <span className="gradient-text">pro firmu.</span></h2>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Napište detaily akce (termín, počet lidí). Obratem pošleme nezávaznou nabídku.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/objednani-vr" className="btn btn-primary">Chci nabídku →</Link>
                <a href="tel:+420737627000" className="btn btn-ghost">+420 737 627 000</a>
              </div>
            </div>
            <div className="media-card-dark">
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
                  Firemní akce
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.85 }}>
                  od 10 po 5 000+ účastníků
                </div>
                <div className="gradient-text-light" style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '1rem' }}>
                  Na klíč
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
