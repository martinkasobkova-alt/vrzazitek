import Link from 'next/link';
import type { Metadata } from 'next';
import { images } from '@/lib/images';
import ContactMapCard from '@/components/ContactMapCard';
import ExpandableText from '@/components/ExpandableText';
import { hrefFor } from '@/lib/i18n/routes';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('en', 'zapujceni-vr');

const order = hrefFor('objednani-vr', 'en');
const parties = hrefFor('oslavy-vr', 'en');

const steps = [
  { icon: '📅', title: 'Rental length', desc: 'Rent VR for a weekend or as long as you need. Fully flexible to your schedule.' },
  { icon: '📞', title: 'Booking', desc: 'Contact us by email, form or phone. We usually respond within 24 hours.' },
  { icon: '🚚', title: 'Delivery (Prague, Beroun)', desc: 'Pick up in person in Prague or Beroun, or we send a courier anywhere in the Czech Republic.' },
  { icon: '📦', title: 'Returning the headset', desc: 'Return in person or pack everything back in the box for the courier. Returning is as easy as renting.' },
  { icon: '⭐', title: 'Feedback', desc: 'We’d love your review. Your satisfaction with our VR rental matters to us.' },
  { icon: '🎉', title: 'Bigger celebrations', desc: 'Planning a bigger party, wedding or event? We can supply multiple headsets and full service.' },
];

const accessories = [
  { icon: '🔌', title: 'Link Cable', desc: 'Connect the headset to a PC for maximum performance and PCVR games.' },
  { icon: '📡', title: 'LTE internet', desc: 'No fixed line? We add an LTE modem — great for cabins and chalets.' },
  { icon: '📺', title: 'Chromecast 3', desc: 'Mirror the headset to a TV so everyone can watch the player.' },
];

const reviews = [
  { name: 'Marie Sobková', location: 'Strážnice', device: 'Quest 2', text: 'I got the headset as a gift from my granddaughter. I was sceptical at first, but that passed quickly. Thanks to VR I visited places I could never reach in real life but always wanted to see. Thank you!' },
  { name: 'Václav Plášil', location: 'České Budějovice', device: 'Quest 2', text: 'I worked in tech my whole life and wanted to try VR. Honestly it beat my expectations — especially travel apps.' },
  { name: 'Alex Bártová', location: 'Beroun', device: 'Quest 3', text: 'Friends gave me the headset for my birthday. “Become the hero of your own movie” sounded absurd at first — but in many games I really felt that way. Great party fun.' },
  { name: 'Filip Jaroševský', location: 'Prague', device: 'Quest 2', text: 'We rented VR for a celebration. For the younger kids it was the best attraction of the day. If they hadn’t fought over the headsets we might not have noticed them at all.' },
  { name: 'Kateřina Lukášová', location: 'Prague', device: 'Quest 2', text: 'We rented VR for our grandchildren for the weekend — a great idea. The kids had a blast. I recommend renting two headsets right away!' },
  { name: 'Lucie Rašková', location: 'Strážnice', device: 'Quest 3', text: 'We had a headset for the weekend. For the kids — and my playful husband — it was definitely unforgettable.' },
];

const quest2Prices = [
  { label: '1 day', price: '999 CZK' },
  { label: '2 days', price: '1 499 CZK' },
  { label: 'Weekend / 3 days', price: '1 999 CZK' },
  { label: '4 days', price: '2 499 CZK' },
  { label: '5 days', price: '2 899 CZK' },
  { label: '7 days', price: '3 299 CZK' },
];

const quest3Prices = [
  { label: '1 day', price: '1 299 CZK' },
  { label: '2 days', price: '1 899 CZK' },
  { label: '3 days', price: '2 449 CZK' },
  { label: '4 days', price: '2 949 CZK' },
  { label: '5 days', price: '3 399 CZK' },
  { label: '7 days', price: '4 149 CZK' },
];

const extrasPrices = [
  { label: 'Link cable 5m (1 day)', price: '300 CZK' },
  { label: 'Chromecast 3 (1 day)', price: '100 CZK' },
  { label: 'LTE internet (20 Mbps)', price: '350 CZK' },
  { label: 'Courier (Prague / CZ)', price: '600 CZK' },
  { label: 'Gift voucher', price: 'On request' },
];

function PriceTable({ title, rows, revealIndex = 0 }: { title: string; rows: { label: string; price: string }[]; revealIndex?: number }) {
  return (
    <div className="svc-card" style={{ padding: '1.75rem' }} data-sr data-sr-delay={revealIndex * 40}>
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

export default function VrHomeEn() {
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
              <span className="eyebrow hero-intro-item hero-intro-item--1">VR home rental</span>
              <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: 0 }}>
                Virtual reality rental. <span className="gradient-text">Hassle-free fun!</span>
              </h1>
            </div>
            <div className="hero-intro-visual">
              <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }}>
                <img
                  src={images.heroHomeRental}
                  alt="VR home rental — Meta Quest, family fun, Prague, Beroun and Czech Republic"
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
                Use our <strong style={{ color: 'var(--text)' }}>virtual reality rental</strong> and have the fun delivered to your door. Turn on the headset and you’re in another world.
              </p>
              <p className="lead hero-intro-item hero-intro-item--4" style={{ marginBottom: '2rem' }}>
                VR rental is perfect for relaxed gaming, parties and weekend surprises. We serve Prague and Beroun in person and ship by courier across the Czech Republic.
              </p>
              <div className="hero-intro-item hero-intro-item--5" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href={order} className="btn btn-primary">🥽 I want VR at home</Link>
                <Link href="#jaktofunguje" className="btn btn-ghost">📝 How it works</Link>
              </div>

              <div
                className="hero-intro-item hero-intro-item--6"
                style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', marginTop: '2.5rem' }}
              >
                <div className="stat-item">
                  <div className="stat-val">1000+</div>
                  <div className="stat-lbl">Events delivered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">Hundreds</div>
                  <div className="stat-lbl">Of games</div>
                </div>
                <div className="stat-item">
                  <div className="stat-val">Today</div>
                  <div className="stat-lbl">Delivery possible</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <section>
          <div className="container split split-stack-title split-stack-title--visual-top">
            <div data-sr>
              <span className="tag-pill">Why VR at home</span>
              <h2 style={{ marginBottom: 0 }}>Why is VR rental <span className="gradient-text">so popular?</span></h2>
            </div>
            <div className="media-card" style={{ padding: 0, overflow: 'hidden', background: 'none' }} data-sr data-sr-delay={40}>
              <img
                src={images.whatWeDo}
                alt="Family playing VR at home — Meta Quest rental from VRzazitek"
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.35), rgba(124, 58, 237, 0.25))',
                mixBlendMode: 'multiply',
              }}></div>
            </div>
            <div data-sr data-sr-delay={80}>
              <p className="lead" style={{ marginBottom: '1.5rem' }}>
                Kids fall in love with VR instantly and adults can unwind. The best part of <strong style={{ color: 'var(--text)' }}>VR at home</strong> is that the whole family joins in. With Chromecast everyone sees on TV what the player experiences.
              </p>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                <strong style={{ color: 'var(--text)' }}>Renting virtual reality</strong> is a great gift or weekend plan. We deliver the full kit whether you’re in Prague, Beroun or nearby. It’s not “just another movie” — it’s a memory that lasts.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="#cenik" className="btn btn-primary">💰 Pricing</Link>
                <Link href={parties} className="btn btn-ghost">🎉 Parties &amp; weddings</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-mint" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: -80, left: '20%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">What you can rent</span>
              <h2>Pick a <span className="gradient-text">headset that fits you.</span></h2>
              <p className="lead" style={{ margin: '1rem auto 0' }}>
                We include everything you need with each rental.
              </p>
            </div>

            <div className="grid-2 grid-2--align-start" style={{ gap: '1.5rem' }}>
              <div className="svc-card" style={{ padding: 0, overflow: 'hidden' }} data-sr>
                <div style={{ position: 'relative', aspectRatio: '16 / 10', background: 'linear-gradient(145deg, #e2e8f0, #f8fafc)' }}>
                  <img
                    src={images.productMetaQuest2}
                    alt="Meta Quest 2 rental — wireless VR headset for home, VRzazitek.cz"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Meta Quest 2</h3>
                  <p className="lead" style={{ marginBottom: '1.25rem' }}>
                    A proven choice for home VR — easy controls and great rental value.
                  </p>
                  <h4 style={{ fontSize: '1rem', color: 'var(--cyan)', marginBottom: '0.75rem', fontWeight: 600 }}>Who is Quest 2 for?</h4>
                  <ExpandableText
                    readMoreLabel="Read more"
                    readLessLabel="Read less"
                    preview={(
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.65, margin: 0 }}>
                        Ideal for families, beginners and anyone new to VR. <strong style={{ color: 'var(--text)' }}>Meta Quest 2</strong> offers intuitive controls, a comfortable headset and hundreds of games and apps. Simple setup and wireless use — ready in minutes without a PC.
                      </p>
                    )}
                    extra={(
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.65, margin: '1rem 0 0' }}>
                        If you want affordable VR rental with solid image quality and smooth performance, Quest 2 is a reliable pick — home fun, birthdays, family gatherings or smaller events. It entertains kids, teens and adults alike.
                      </p>
                    )}
                  />
                </div>
              </div>

              <div className="svc-card" style={{ padding: 0, overflow: 'hidden' }} data-sr data-sr-delay={50}>
                <div style={{ position: 'relative', aspectRatio: '16 / 10', background: 'linear-gradient(145deg, #e2e8f0, #f8fafc)' }}>
                  <img
                    src={images.productMetaQuest3}
                    alt="Meta Quest 3 rental — latest VR headset, Prague and courier CZ"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.3rem', margin: 0 }}>Meta Quest 3</h3>
                    <span style={{ padding: '0.2rem 0.6rem', background: 'var(--gradient-btn)', color: '#fff', borderRadius: 6, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em' }}>NEW</span>
                  </div>
                  <p className="lead" style={{ marginBottom: '1.25rem' }}>
                    Our newest fleet headset — top image quality and performance for demanding users.
                  </p>
                  <h4 style={{ fontSize: '1rem', color: 'var(--cyan)', marginBottom: '0.75rem', fontWeight: 600 }}>Why rent Quest 3?</h4>
                  <ExpandableText
                    readMoreLabel="Read more"
                    readLessLabel="Read less"
                    preview={(
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.65, margin: 0 }}>
                        <strong style={{ color: 'var(--text)' }}>Meta Quest 3</strong> is the best we offer today — for users who want maximum clarity and immersion. Pancake lenses, higher resolution and more power mean a sharp, fluid picture even in demanding titles.
                      </p>
                    )}
                    extra={(
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-dim)', lineHeight: 1.65, margin: '1rem 0 0' }}>
                        Bring the latest tech home and get a real “wow” from the first session. Great for gaming, parties, special occasions, corporate events or demos where you want to impress guests.
                      </p>
                    )}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <div className="text-center" style={{ marginBottom: '2rem' }} data-sr>
                <h3 style={{ fontSize: '1.5rem' }}>Accessories for rent</h3>
                <p className="lead" style={{ margin: '0.75rem auto 0' }}>
                  Upgrade your setup — add-ons for comfort and sharing.
                </p>
              </div>
              <div className="grid-3">
                {accessories.map((a, i) => (
                  <div key={i} className="svc-card" data-sr data-sr-delay={i * 40}>
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

      <div className="block block-paper" id="jaktofunguje" data-scroll-reveal>
        <div className="orb orb-purple" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">How it works</span>
              <h2>From order to return — <span className="gradient-text">simple VR rental.</span></h2>
            </div>
            <div className="grid-3">
              {steps.map((s, i) => (
                <div key={i} className="svc-card" data-sr data-sr-delay={Math.min(i * 25, 125)}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href={parties} className="btn btn-ghost">🎉 VR parties →</Link>
            </div>
          </div>
        </section>
      </div>

      <div className="block block-mint" id="cenik" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-cyan" style={{ width: 350, height: 350, top: -80, right: '20%' }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Pricing</span>
              <h2>VR rental <span className="gradient-text">price list.</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <PriceTable title="Meta Quest 2" rows={quest2Prices} revealIndex={0} />
              <PriceTable title="Meta Quest 3" rows={quest3Prices} revealIndex={1} />
              <PriceTable title="Extras &amp; delivery" rows={extrasPrices} revealIndex={2} />
            </div>
            <p className="text-center text-muted" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }} data-sr data-sr-delay={100}>
              Tip: we handle requests like “Quest 3 for a weekend in Prague” right away.
            </p>
          </div>
        </section>
      </div>

      <div className="block block-deep" data-scroll-reveal>
        <div className="grid-bg"></div>
        <div className="orb orb-dark-cyan" style={{ width: 400, height: 400, top: -100, left: '30%' }}></div>
        <div className="orb orb-dark-purple" style={{ width: 300, height: 300, bottom: 0, right: 0 }}></div>
        <section>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '3rem' }} data-sr>
              <span className="tag-pill">Reviews</span>
              <h2>What our <span className="gradient-text-light">customers say.</span></h2>
            </div>
            <div className="grid-2">
              {reviews.map((r, i) => (
                <div key={i} className="svc-card" data-sr data-sr-delay={Math.min(i * 30, 120)}>
                  <div style={{ color: 'var(--cyan-bright)', marginBottom: '0.75rem', fontSize: '1rem' }}>★★★★★</div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1rem' }}>&ldquo;{r.text}&rdquo;</p>
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

      <div className="block block-sky" data-scroll-reveal>
        <div className="orb orb-cyan" style={{ width: 300, height: 300, top: -50, right: '20%' }}></div>
        <section>
          <div className="container split split-stack-title">
            <div data-sr>
              <span className="tag-pill">Contact &amp; orders</span>
              <h2 style={{ marginBottom: 0 }}>We are your <span className="gradient-text">VR rental.</span></h2>
            </div>
            <div data-sr data-sr-delay={45}>
              <ContactMapCard />
            </div>
            <div data-sr data-sr-delay={90}>
              <p className="lead" style={{ marginBottom: '2rem' }}>
                Call or write — we’ll help you choose the right setup.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href={order} className="btn btn-primary">📝 Book VR</Link>
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
