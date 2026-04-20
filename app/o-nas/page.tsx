import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'O nás | VR Zážitek – experti na virtuální realitu a firemní eventy',
  description: 'Jsme rodinná půjčovna virtuální reality. Zapůjčení VR, výběr her, doprava, instalace a podpora na místě. Kontakt: info@vrzazitek.cz, +420 604 160 718.',
  alternates: { canonical: 'https://www.vrzazitek.cz/o-nas' },
};

export default function ONas() {
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
          <div className="container" style={{ maxWidth: 900 }}>
            <span className="eyebrow hero-intro-item hero-intro-item--1">Kontakt a náš tým</span>
            <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: '1.5rem' }}>
              Zeptejte se nás <span className="gradient-text">na cokoliv.</span>
            </h1>
            <p
              className="lead hero-intro-item hero-intro-item--3"
              style={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
            >
              Ať už máte jakýkoliv dotaz ohledně zapůjčení VR, neváhejte se na nás obrátit. Rádi vám s čímkoliv poradíme! V Praze a Berouně nabízíme také možnost osobního setkání.
            </p>
            <div className="hero-intro-item hero-intro-item--4" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="mailto:info@vrzazitek.cz" className="btn btn-primary">✉️ info@vrzazitek.cz</a>
              <a href="tel:+420604160718" className="btn btn-ghost">+420 604 160 718</a>
            </div>
            <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a href="https://www.instagram.com/vrzazitek.cz/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                Instagram
              </a>
              <a href="https://www.facebook.com/vrzazitek/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
                Facebook
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* COMPANY INFO */}
      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', left: -100 }}></div>
        <section>
          <div className="container">
            <div className="grid-3">
              <div className="svc-card">
                <span className="tag-pill">Kontakt</span>
                <h3 style={{ marginBottom: '0.75rem' }}>Zuzana Hrabalová</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="tel:+420604160718" style={{ color: 'var(--cyan)', fontWeight: 500 }}>+420 604 160 718</a>
                  <a href="mailto:info@vrzazitek.cz" style={{ color: 'var(--text-dim)' }}>info@vrzazitek.cz</a>
                </div>
              </div>

              <div className="svc-card">
                <span className="tag-pill">Sídlo &amp; IČO</span>
                <h3 style={{ marginBottom: '0.75rem' }}>VRzazitek.cz</h3>
                <p className="text-dim" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Na Lucberku 245<br />
                  267 01, Králův Dvůr - Levín<br />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>IČO: 04146620</span>
                </p>
              </div>

              <div className="svc-card">
                <span className="tag-pill">Osobní setkání</span>
                <h3 style={{ marginBottom: '0.75rem' }}>Praha &amp; Beroun</h3>
                <p className="text-dim" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Rádi se potkáme osobně po předchozí domluvě. Napište nám termín a místo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* O NÁS + TÝM – jeden tmavý blok */}
      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <div className="orb orb-dark-purple" style={{ width: 300, height: 300, bottom: 0, right: '10%' }}></div>

        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '1.75rem' }}>
              <span className="tag-pill">O nás</span>
              <h2 style={{ marginBottom: '0.75rem' }}>
                Jsme rodinná <span className="gradient-text-light">půjčovna VR.</span>
              </h2>
            </div>
            <div className="svc-card" style={{ width: '100%', padding: '2.5rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Jsme rodinná půjčovna virtuální reality složená z nadšenkyň do virtuálních světů a metaversu.
                Naším cílem je dostat špičkový VR zážitek k lidem domů i na firemní akce —{' '}
                <strong style={{ color: 'var(--cyan-bright)' }}>rychle, jednoduše a s podporou</strong>, na kterou se můžete spolehnout.
              </p>
              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Co typicky řešíme</h3>
              <p style={{ marginBottom: 0 }}>
                Zapůjčení VR, výběr her, doprava, instalace, podpora na místě i doporučení programu podle cíle akce.
              </p>
            </div>

            <div
              className="text-center"
              style={{
                marginTop: '1.25rem',
                paddingTop: '1.35rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                marginBottom: '2rem',
              }}
            >
              <span className="tag-pill">Náš tým</span>
              <h2>Dvě role, <span className="gradient-text-light">jedna mise.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Aby vaše VR akce proběhla hladce a byla nezapomenutelná.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
              {/* Marťa */}
              <div className="svc-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
                    border: '2px solid rgba(103, 232, 249, 0.3)',
                    flexShrink: 0,
                  }}>
                    <img src={images.teamMarta} alt="Marťa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.2rem' }}>Marťa</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--cyan-bright)', fontStyle: 'italic' }}>
                      "Žádný technický problém není neřešitelný"
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Jmenuji se Marťa a spolu se Zuzkou považuji VRzazitek za naše společné „dítko". V rámci firmy mám na starost PR, technické záležitosti a virtuální obsah (hry a aplikace).
                </p>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.5rem', color: 'rgba(224, 236, 255, 0.75)' }}>
                  Už od dětství jsem měla pocit, že bych na chvíli potřebovala utéct do jiného světa. Ať už to bylo skrze knihu, film, či počítačovou hru. Doposud nezapomenu na můj první zážitek ve VR. Bylo to jako bych se ocitla v jiném světě. Netrvalo dlouho a pořídila jsem si první VR headset, který jsem začala půjčovat svým přátelům a známým. Po čase jsem si ale uvědomila, že by VR zajímalo mnohem více lidí a tak jsem se rozhodla půjčovat VR na zakázku skrze různé portály jak jednotlivcům, tak i na menší akci. Pak jsem ale potkala Zuzku, se kterou jsme se rozhodly založit VRzazitek.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href="tel:+420737627000" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '0.5rem 0.9rem' }}>+420 737 627 000</a>
                  <a href="mailto:info@vrzazitek.cz" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '0.5rem 0.9rem' }}>info@vrzazitek.cz</a>
                </div>
              </div>

              {/* Zuzka */}
              <div className="svc-card" style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
                    border: '2px solid rgba(196, 181, 253, 0.3)',
                    flexShrink: 0,
                  }}>
                    <img src={images.teamZuzka} alt="Zuzka" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.2rem' }}>Zuzka</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--cyan-bright)', fontStyle: 'italic' }}>
                      "Společně najdeme to nejlepší řešení"
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Jmenuji se Zuzka a v rámci VRzazazitku mám na starost brand management, komunikaci s Vámi - našimi klienty a také distribuci virtuální reality napříč celou Českou republikou tak, aby se dostala co nejrychleji k Vám domů.
                </p>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.5rem', color: 'rgba(224, 236, 255, 0.75)' }}>
                  Ještě před několika lety, kdy jsem studovala Marketing a zároveň pracovala v Edinburghu, by mě ve snu nenapadlo, že se budu živit virtuální realitou. Avšak poté, co mě moje partnerka a zároveň spoluzakladatelka Marťa dala poprvé na vyzkoušení VR brýle, doslova jsem tomuto fenoménu propadla. Dokonce jsem i omezila aerobik, protože s Beat Saberem nebo Fit VR si můžu dát fitko doma, kdykoliv se mi zachce. Ale samozřejmě, sociální kontakt jen tak nenahradíte a jak se říká, všeho s mírou :)
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href="tel:+420604160718" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '0.5rem 0.9rem' }}>+420 604 160 718</a>
                  <a href="mailto:info@vrzazitek.cz" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '0.5rem 0.9rem' }}>info@vrzazitek.cz</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="block block-sky" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <section>
          <div className="container split">
            <div>
              <span className="tag-pill">Pojďme se spojit</span>
              <h2>Rychle, jednoduše, <span className="gradient-text">spolehlivě.</span></h2>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Napište nám detaily akce nebo typ zápůjčky. Obratem vám pošleme nezávaznou nabídku.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/objednani-vr" className="btn btn-primary">Nezávazná poptávka →</Link>
                <a href="mailto:info@vrzazitek.cz" className="btn btn-ghost">✉️ info@vrzazitek.cz</a>
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
