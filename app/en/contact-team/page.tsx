import Link from 'next/link';
import type { Metadata } from 'next';
import ContactMapCard from '@/components/ContactMapCard';
import ContactHeroIllustration from '@/components/ContactHeroIllustration';
import { images } from '@/lib/images';
import { hrefFor } from '@/lib/i18n/routes';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', 'o-nas');

const order = hrefFor('objednani-vr', 'en');

export default function ContactTeamEn() {
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
              <span className="eyebrow hero-intro-item hero-intro-item--1">Contact &amp; our team</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: 0 }}>
                Ask us <span className="gradient-text">anything.</span>
              </h1>
            </div>
            <div
              className="hero-intro-visual"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'clamp(200px, 28vw, 340px)',
              }}
            >
              <ContactHeroIllustration />
            </div>
            <div>
              <p
                className="lead hero-intro-item hero-intro-item--3"
                style={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                Whatever your question about VR rental, we’re happy to help. In Prague and Beroun we can also meet in person by arrangement.
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
          </div>
        </section>
      </div>

      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', left: -100 }}></div>
        <section>
          <div className="container">
            <div className="grid-3">
              <div className="svc-card" data-sr data-sr-delay={0}>
                <span className="tag-pill">Contact</span>
                <h3 style={{ marginBottom: '0.75rem' }}>Zuzana Hrabalová</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="tel:+420604160718" style={{ color: 'var(--cyan)', fontWeight: 500 }}>+420 604 160 718</a>
                  <a href="mailto:info@vrzazitek.cz" style={{ color: 'var(--text-dim)' }}>info@vrzazitek.cz</a>
                </div>
              </div>

              <div className="svc-card" data-sr data-sr-delay={40}>
                <span className="tag-pill">Registered address</span>
                <h3 style={{ marginBottom: '0.75rem' }}>VRzazitek.cz</h3>
                <p className="text-dim" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Na Lucberku 245<br />
                  267 01, Králův Dvůr - Levín<br />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Company ID: 04146620</span>
                </p>
              </div>

              <div className="svc-card" data-sr data-sr-delay={80}>
                <span className="tag-pill">In person</span>
                <h3 style={{ marginBottom: '0.75rem' }}>Prague &amp; Beroun</h3>
                <p className="text-dim" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Happy to meet you after scheduling a time — just write us a message.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <div className="orb orb-dark-purple" style={{ width: 300, height: 300, bottom: 0, right: '10%' }}></div>

        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '1.75rem' }} data-sr>
              <span className="tag-pill">About us</span>
              <h2 style={{ marginBottom: '0.75rem' }}>
                A family-run <span className="gradient-text-light">VR rental.</span>
              </h2>
            </div>
            <div className="svc-card" style={{ width: '100%', padding: '2.5rem' }} data-sr data-sr-delay={40}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                We are a family virtual-reality rental team of people who love virtual worlds and the metaverse.
                Our goal is to bring a top-tier VR experience to homes and corporate events —{' '}
                <strong style={{ color: 'var(--cyan-bright)' }}>quickly, simply and with support</strong> you can rely on.
              </p>
              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>What we usually handle</h3>
              <p style={{ marginBottom: 0 }}>
                VR rental, game selection, transport, installation, on-site support and program recommendations based on your goals.
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
              data-sr
              data-sr-delay={60}
            >
              <span className="tag-pill">Our team</span>
              <h2>Two roles, <span className="gradient-text-light">one mission.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                Making your VR event smooth and unforgettable.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '2rem' }}>
              <div className="svc-card" style={{ padding: '2.5rem' }} data-sr data-sr-delay={0}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
                    border: '2px solid rgba(103, 232, 249, 0.3)',
                    flexShrink: 0,
                  }}>
                    <img
                      src={images.teamMarta}
                      alt="Marťa — VRzazitek co-founder, PR, tech and VR content"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.2rem' }}>Marťa</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--cyan-bright)', fontStyle: 'italic' }}>
                      “No technical problem is unsolvable”
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                  I’m Marťa — together with Zuzka I see VRzazitek as our shared “baby”. I lead PR, technical topics and VR content (games &amp; apps).
                </p>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.5rem', color: 'rgba(224, 236, 255, 0.75)' }}>
                  Since childhood I’ve needed to escape into another world — books, films or games. I’ll never forget my first VR experience; it felt like stepping into another world. Soon I bought my first headset and lent it to friends. I realised many more people would want VR, so I started renting through different platforms — until I met Zuzka and we founded VRzazitek together.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href="tel:+420737627000" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '0.5rem 0.9rem' }}>+420 737 627 000</a>
                  <a href="mailto:info@vrzazitek.cz" className="btn btn-ghost" style={{ fontSize: '0.82rem', padding: '0.5rem 0.9rem' }}>info@vrzazitek.cz</a>
                </div>
              </div>

              <div className="svc-card" style={{ padding: '2.5rem' }} data-sr data-sr-delay={50}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
                    border: '2px solid rgba(196, 181, 253, 0.3)',
                    flexShrink: 0,
                  }}>
                    <img
                      src={images.teamZuzka}
                      alt="Zuzka — VRzazitek co-founder, client communication and distribution"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.2rem' }}>Zuzka</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--cyan-bright)', fontStyle: 'italic' }}>
                      “Together we’ll find the best solution”
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1rem' }}>
                  I’m Zuzka — I take care of brand management, talking with you (our clients) and getting VR across the Czech Republic to your door as fast as possible.
                </p>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.5rem', color: 'rgba(224, 236, 255, 0.75)' }}>
                  A few years ago, while studying marketing and working in Edinburgh, I wouldn’t have dreamed I’d work in VR. After my partner and co-founder Marťa let me try a headset for the first time, I fell for it completely. I even cut back on aerobics — with Beat Saber or Fit VR I can work out at home anytime. Of course nothing replaces real human contact — everything in moderation :)
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

      <div className="block block-sky" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <section>
          <div className="container split split-stack-title">
            <div data-sr>
              <span className="tag-pill">Let’s talk</span>
              <h2 style={{ marginBottom: 0 }}>Fast, simple, <span className="gradient-text">reliable.</span></h2>
            </div>
            <div data-sr data-sr-delay={45}>
              <ContactMapCard />
            </div>
            <div data-sr data-sr-delay={90}>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Send your event or rental details — we’ll reply with a non-binding offer.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href={order} className="btn btn-primary">Non-binding inquiry →</Link>
                <a href="mailto:info@vrzazitek.cz" className="btn btn-ghost">✉️ info@vrzazitek.cz</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
