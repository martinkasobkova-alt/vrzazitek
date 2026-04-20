import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';
import ContactMapCard from '@/components/ContactMapCard';

export const metadata: Metadata = {
  title: 'Zapůjčení VR headsetů domů | Pronájem virtuální reality – VR Zážitek',
  description: 'Pronájem virtuální reality pro domácnosti. Meta Quest 2 od 999 Kč, Meta Quest 3 od 1 299 Kč. Doručíme kurýrem po celé ČR nebo osobně v Praze a Berouně.',
  alternates: { canonical: 'https://www.vrzazitek.cz/zapujceni-vr' },
};

const steps = [
  { icon: '📅', title: 'Délka pronájmu', desc: 'VR si můžete půjčit na víkend nebo libovolně dlouhou dobu. Vše je plně flexibilní dle vašich možností.' },
  { icon: '📞', title: 'Objednávka VR', desc: 'Kontaktujte nás pro rezervaci mailem, formulářem či telefonicky. Naše VR půjčovna vás obslouží do 24 hodin.' },
  { icon: '🚚', title: 'Doprava (Praha, Beroun)', desc: 'VR si můžete převzít osobně v Praze nebo v Berouně, nebo vám jej doručíme kurýrem po celé ČR.' },
  { icon: '📦', title: 'Vrácení headsetu', desc: 'Po skončení výpůjčky nám VR headset vrátíte osobně, nebo jej vložíte s vybavením zpět do krabice a předáte kurýrovi. Vrácení je stejně snadné jako zapůjčení.' },
  { icon: '⭐', title: 'Zpětná vazba', desc: 'Budeme rádi za recenzi. Vaše spokojenost s pronájmem virtuální reality je pro nás klíčová.' },
  { icon: '🎉', title: 'VR na větší akce', desc: 'Plánujete větší akci jako je oslava narozenin, svatba či něco jiného? Pro tyto příležitosti nabízíme pronájem více headsetů a kompletní servis.' },
];

const accessories = [
  { icon: '🔌', title: 'Link Cable', desc: 'Propojte headset s PC pro maximální výkon a přístup k PCVR hrám.' },
  { icon: '📡', title: 'LTE internet', desc: 'Nemáte pevnou síť? Přibalíme LTE modem. Ideální pro VR na chatu.' },
  { icon: '📺', title: 'Chromecast 3', desc: 'Sdílejte obraz z brýlí na TV. VR domů je pak zábava pro všechny diváky.' },
];

const reviews = [
  { name: 'Marie Sobková', location: 'Strážnice', device: 'Quest 2', text: 'Brýle jsem dostala jako dárek od vnučky. Zprvu jsem vůči nim byla skeptická, ale to mě velmi brzo přešlo. Naopak jsem se díky nim podívala na místa, kam bych se už v životě nedostala a kam jsem vždycky chtěla. Díky moc!' },
  { name: 'Václav Plášil', location: 'České Budějovice', device: 'Quest 2', text: 'Celý život jsem pracoval v oblasti technologií a tak jsem si brýle chtěl vyzkoušet. Upřímně předčily mé očekávání - především pak cestovatelské aplikace.' },
  { name: 'Alex Bártová', location: 'Beroun', device: 'Quest 3', text: 'Brýle jsem dostala od kamarádek k narozeninám. Ačkoliv tvrzení "Staňte se hrdinou ve vlastním filmu" mi přišlo zprvu absurdní, v rámci mnoha her jsem se tak skutečně cítila. Super zábava na párty.' },
  { name: 'Filip Jaroševský', location: 'Praha', device: 'Quest 2', text: 'Půjčili jsme si VR na oslavu. Zejména pro menší děti během dne to byla naprosto nejlepší atrakce. Kdyby se o headsety nehádaly, věřím, že bychom o nich ani nevěděli.' },
  { name: 'Kateřina Lukášová', location: 'Praha', device: 'Quest 2', text: 'VR jsme si půjčili pro vnoučata na víkend a musím uznat, že to byl skvělý nápad. Děti si s brýlemi maximálně vyhrály. Doporučuji půjčit rovnou dvoje!' },
  { name: 'Lucie Rašková', location: 'Strážnice', device: 'Quest 3', text: 'VR headset jsme měli zapůjčený na víkend. Musím uznat, že pro děti, ale také pro mého hravého manžela to byl rozhodně nezapomenutelný zážitek.' },
];

const quest2Prices = [
  { label: '1 den', price: '999 Kč' },
  { label: '2 dny', price: '1 499 Kč' },
  { label: 'Víkend / 3 dny', price: '1 999 Kč' },
  { label: '4 dny', price: '2 499 Kč' },
  { label: '5 dní', price: '2 899 Kč' },
  { label: '7 dní', price: '3 299 Kč' },
];

const quest3Prices = [
  { label: '1 den', price: '1 299 Kč' },
  { label: '2 dny', price: '1 899 Kč' },
  { label: '3 dny', price: '2 449 Kč' },
  { label: '4 dny', price: '2 949 Kč' },
  { label: '5 dní', price: '3 399 Kč' },
  { label: '7 dní', price: '4 149 Kč' },
];

const extrasPrices = [
  { label: 'Link Kabel 5m (1 den)', price: '300 Kč' },
  { label: 'Chromecast 3 (1 den)', price: '100 Kč' },
  { label: 'LTE internet (20 Mbps)', price: '350 Kč' },
  { label: 'Kurýr (Praha/ČR)', price: '600 Kč' },
  { label: 'Dárkový voucher', price: 'Dle výběru' },
];

function PriceTable({ title, rows }: { title: string; rows: { label: string; price: string }[] }) {
  return (
    <div className="svc-card" style={{ padding: '1.75rem' }}>
      <h3 style={{ marginBottom: '1.25rem', color: 'var(--cyan)' }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            gap: '1rem', padding: '0.6rem 0',
            borderBottom: i < rows.length - 1 ? '1px solid var(--border-light)' : 'none',
          }}>
            <span style={{ fontWeight: 500, fontSize: '0.92rem' }}>{r.label}</span>
            <span className="gradient-text" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>{r.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Zapujceni() {
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
          <div className="container split split-stack-title">
            <div>
              <span className="eyebrow hero-intro-item hero-intro-item--1">Pronájem VR domů</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: 0 }}>
                Pronájem VR. <span className="gradient-text">Zábava bez starostí!</span>
              </h1>
            </div>
            <div className="hero-intro-visual">
              <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                <img
                  src={images.heroHomeRental}
                  alt="Domácí zábava s VR – pronájem virtuální reality"
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
                Využijte náš <strong style={{ color: 'var(--text)' }}>pronájem virtuální reality</strong> a nechte si doručit zábavu až k vám domů. Stačí zapnout VR brýle a jste v jiném světě.
              </p>
              <p className="lead hero-intro-item hero-intro-item--4" style={{ marginBottom: '2rem' }}>
                Půjčení VR je ideální pro odpočinkové hraní, oslavy i víkendové „wow" překvapení. Jako půjčovna virtuální reality obsluhujeme osobně v Praze a v Berouně a dodáváme po celé ČR.
              </p>
              <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/objednani-vr" className="btn btn-primary">🥽 Chci VR domů</Link>
                <Link href="#jaktofunguje" className="btn btn-ghost">📝 Jak to funguje</Link>
              </div>

              <div
                className="hero-intro-item hero-intro-item--6"
                style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', marginTop: '2.5rem' }}
              >
                <div className="stat-item">
                  <div className="stat-val">1000+</div>
                  <div className="stat-lbl">Realizovaných eventů</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">Stovky</div>
                  <div className="stat-lbl">Zábavných her</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">Dnes</div>
                  <div className="stat-lbl">Možnost doručení</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHY VR AT HOME - with image */}
      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <section>
          <div className="container split split-stack-title split-stack-title--visual-top">
            <div>
              <span className="tag-pill">Proč VR domů</span>
              <h2 style={{ marginBottom: 0 }}>Proč je půjčovna VR <span className="gradient-text">tak populární?</span></h2>
            </div>
            <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
              <img
                src={images.whatWeDo}
                alt="Rodina hraje VR hry doma - pronájem virtuální reality Praha"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.35), rgba(124, 58, 237, 0.25))',
                mixBlendMode: 'multiply',
              }}></div>
            </div>
            <div>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>
                Děti si virtuální realitu okamžitě zamilují a dospělí si u ní odpočinou. To nejlepší na službě <strong style={{ color: 'var(--text)' }}>VR domů</strong> je, že se do zábavy zapojí celá rodina. Díky Chromecastu vidíte na TV to, co hráč prožívá.
              </p>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                <strong style={{ color: 'var(--text)' }}>Půjčení virtuální reality</strong> je skvělý tip na dárek nebo víkendovou aktivitu. Doručíme vám kompletní set, ať už jste v Praze, Berouně nebo okolí. Není to „jen další film", ale zážitek, na který budete vzpomínat ještě dlouho poté.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="#cenik" className="btn btn-primary">💰 Ceník pronájmu VR</Link>
                <Link href="/oslavy-vr" className="btn btn-ghost">🎉 Oslavy a svatby</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHAT YOU CAN RENT */}
      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: -80, left: '20%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Co si můžete půjčit</span>
              <h2>Vyberte si <span className="gradient-text">headset podle svých představ.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Ke každému přibalíme vše potřebné.
              </p>
            </div>

            <div className="grid-2" style={{ gap: '1.5rem' }}>
              <div className="svc-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', aspectRatio: '16 / 10', background: 'linear-gradient(145deg, #e2e8f0, #f8fafc)' }}>
                  <img
                    src={images.productMetaQuest2}
                    alt="Meta Quest 2 – člověk s VR headsetem"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Meta Quest 2</h3>
                <p className="lead" style={{ marginBottom: '1.25rem' }}>
                  Osvědčená volba pro VR doma – jednoduché ovládání a skvělá cena pronájmu.
                </p>
                <h4 style={{ fontSize: '1rem', color: 'var(--cyan)', marginBottom: '0.75rem', fontWeight: 600 }}>Pro koho je Quest 2?</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  Ideální volba pro rodiny, začátečníky i uživatele, kteří se s virtuální realitou teprve seznamují. <strong style={{ color: 'var(--text)' }}>Meta Quest 2</strong> nabízí velmi intuitivní ovládání, pohodlný headset a přístup ke stovkám kvalitních her, aplikací a interaktivních zážitků. Díky jednoduchému nastavení a bezdrátovému provozu je připraven k použití během několika minut, bez nutnosti složité instalace nebo připojení k počítači.
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.65 }}>
                  Pokud hledáte cenově dostupný pronájem virtuální reality, který zároveň nabídne vysokou kvalitu obrazu a plynulý chod, Meta Quest 2 je osvědčená a spolehlivá volba. Hodí se jak pro domácí zábavu, tak pro narozeninové oslavy, rodinná setkání nebo menší akce. Bez problémů zabaví děti, teenagery i dospělé.
                </p>
                </div>
              </div>

              <div className="svc-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', aspectRatio: '16 / 10', background: 'linear-gradient(145deg, #e2e8f0, #f8fafc)' }}>
                  <img
                    src={images.productMetaQuest3}
                    alt="Meta Quest 3 – VR headset"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Meta Quest 3</h3>
                  <span style={{ padding: '0.2rem 0.6rem', background: 'var(--gradient-btn)', color: '#fff', borderRadius: 6, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em' }}>NOVINKA</span>
                </div>
                <p className="lead" style={{ marginBottom: '1.25rem' }}>
                  Nejnovější generace v naší půjčovně – špičkový obraz a výkon pro náročné.
                </p>
                <h4 style={{ fontSize: '1rem', color: 'var(--cyan)', marginBottom: '0.75rem', fontWeight: 600 }}>Proč půjčit Quest 3?</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.65, marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text)' }}>Meta Quest 3</strong> představuje to nejlepší, co naše půjčovna virtuální reality aktuálně nabízí, a je určen pro náročnější uživatele, kteří chtějí maximální kvalitu obrazu i celkového zážitku. Díky moderním pancake čočkám, vyššímu rozlišení a výrazně vyššímu výkonu je obraz mimořádně ostrý, realistický a plynulý i při náročných hrách a aplikacích.
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.65 }}>
                  Pokud si chcete domů přinést tu nejmodernější technologii a zažít skutečný „wow" efekt hned od prvního nasazení, je pronájem Meta Quest 3 tou nejlepší volbou. Hodí se nejen pro domácí hraní, ale také pro oslavy, speciální příležitosti, firemní akce nebo prezentace, kde chcete zaujmout a nadchnout hosty.
                </p>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div style={{ marginTop: '3rem' }}>
              <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Příslušenství k zapůjčení</h3>
                <p className="lead" style={{ margin: '0.75rem auto 0' }}>
                  Vylepšete si zážitek. K pronájmu VR nabízíme i doplňky pro lepší komfort.
                </p>
              </div>
              <div className="grid-3">
                {accessories.map((a, i) => (
                  <div key={i} className="svc-card">
                    <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{a.icon}</div>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* HOW IT WORKS */}
      <div className="block block-paper" id="jaktofunguje" data-scroll-reveal>
        <div className="orb orb-purple" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Jak funguje půjčovna VR</span>
              <h2>Od objednání až po vrácení — <span className="gradient-text">pronájem VR jednoduše.</span></h2>
            </div>
            <div className="grid-3">
              {steps.map((s, i) => (
                <div key={i} className="svc-card">
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/oslavy-vr" className="btn btn-ghost">🎉 Oslavy ve VR →</Link>
            </div>
          </div>
        </section>
      </div>

      {/* PRICING */}
      <div className="block block-mint" id="cenik" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: -80, right: '20%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Ceník</span>
              <h2>Ceník <span className="gradient-text">pronájmu VR.</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <PriceTable title="Meta Quest 2" rows={quest2Prices} />
              <PriceTable title="Meta Quest 3" rows={quest3Prices} />
              <PriceTable title="Doplňky & Doprava" rows={extrasPrices} />
            </div>
            <p className="text-center text-muted" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
              Tip: Poptávky jako „Quest 3 na víkend Praha" vyřizujeme obratem.
            </p>
          </div>
        </section>
      </div>

      {/* REVIEWS (DEEP) */}
      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <div className="orb orb-dark-purple" style={{ width: 300, height: 300, bottom: 0, right: 0 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <span className="tag-pill">Reference</span>
              <h2>Co říkají <span className="gradient-text-light">naši zákazníci.</span></h2>
            </div>
            <div className="grid-2">
              {reviews.map((r, i) => (
                <div key={i} className="svc-card">
                  <div style={{ color: 'var(--cyan-bright)', marginBottom: '0.75rem', fontSize: '1rem' }}>★★★★★</div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>"{r.text}"</p>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--cyan-bright)', letterSpacing: '0.05em' }}>
                    {r.name}
                    <span style={{ fontWeight: 400, color: 'rgba(224, 236, 255, 0.6)', marginLeft: '0.5rem' }}>
                      · {r.location} · {r.device}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="block block-sky" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <section>
          <div className="container split split-stack-title">
            <div>
              <span className="tag-pill">Kontakt a objednávky</span>
              <h2 style={{ marginBottom: 0 }}>Jsme vaše <span className="gradient-text">půjčovna VR.</span></h2>
            </div>
            <ContactMapCard />
            <div>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Zavolejte nebo napište, poradíme s výběrem.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/objednani-vr" className="btn btn-primary">📝 Rezervovat VR</Link>
                <a href="tel:+420604160718" className="btn btn-ghost">📞 +420 604 160 718</a>
                <a href="mailto:info@vrzazitek.cz" className="btn btn-ghost">✉️ info@vrzazitek.cz</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
