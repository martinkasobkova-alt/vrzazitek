'use client';

import { useState } from 'react';
import Link from 'next/link';

const serviceOptions = [
  'VR domů - zapůjčení headsetu',
  'VR pro firmy - firemní event',
  'VR teambuilding',
  'VR oslava (narozeniny, svatba, apod.)',
  'Jiné / nevím',
];

export default function Objednani() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', date: '', people: '', city: '', message: '',
  });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Poptávka VR: ${form.service || 'Nová poptávka'}`);
    const body = encodeURIComponent(
      `Jméno: ${form.name}\n` +
      `E-mail: ${form.email}\n` +
      `Telefon: ${form.phone}\n` +
      `Typ služby: ${form.service}\n` +
      `Termín: ${form.date}\n` +
      `Počet lidí: ${form.people}\n` +
      `Město / místo: ${form.city}\n\n` +
      `Zpráva:\n${form.message}`
    );
    window.location.href = `mailto:info@vrzazitek.cz?subject=${subject}&body=${body}`;
    setSent(true);
  }

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

        <section style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: '2rem' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <span className="eyebrow hero-intro-item hero-intro-item--1">Objednání VR</span>
            <h1 className="hero-intro-item hero-intro-item--2" style={{ marginBottom: '1.5rem' }}>
              Poptejte <span className="gradient-text">VR zážitek.</span>
            </h1>
            <p className="lead hero-intro-item hero-intro-item--3" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
              Vyplňte formulář a my se vám ozveme co nejdříve — obvykle do 24 hodin. Pošleme nezávaznou nabídku na míru.
            </p>
          </div>
        </section>
      </div>

      {/* FORM */}
      <div className="block block-paper" data-scroll-reveal>
        <div className="orb orb-blue" style={{ width: 300, height: 300, top: '10%', right: -100 }}></div>
        <div className="orb orb-cyan" style={{ width: 250, height: 250, bottom: '20%', left: -80 }}></div>

        <section>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: 1100, margin: '0 auto' }}>
              {/* Form */}
              <div className="svc-card" style={{ padding: '2.5rem', background: 'rgba(255, 255, 255, 0.85)' }}>
                {sent ? (
                  <div className="text-center" style={{ padding: '2rem 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
                    <h3>Otevřel se váš e-mailový klient</h3>
                    <p className="text-dim" style={{ marginTop: '1rem' }}>
                      Pokud se nic neotevřelo, napište nám přímo na{' '}
                      <a href="mailto:info@vrzazitek.cz" style={{ color: 'var(--cyan)' }}>info@vrzazitek.cz</a>
                    </p>
                    <button onClick={() => setSent(false)} className="btn btn-ghost" style={{ marginTop: '2rem' }}>
                      Vyplnit znovu
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <Field label="Jméno a příjmení *" name="name" value={form.name} onChange={handleChange} required />
                      <Field label="Telefon *" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
                    </div>
                    <Field label="E-mail *" name="email" type="email" value={form.email} onChange={handleChange} required />

                    <FieldWrap label="Typ služby *">
                      <select name="service" value={form.service} onChange={handleChange} required style={inputStyle}>
                        <option value="">— Vyberte —</option>
                        {serviceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </FieldWrap>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <Field label="Termín akce" name="date" type="date" value={form.date} onChange={handleChange} />
                      <Field label="Počet lidí" name="people" type="number" value={form.people} onChange={handleChange} />
                    </div>

                    <Field label="Město / místo konání" name="city" value={form.city} onChange={handleChange} />

                    <FieldWrap label="Zpráva (volitelné)">
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Napište nám detaily vaší akce..." style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }} />
                    </FieldWrap>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                      📤 Odeslat poptávku
                    </button>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                      Po odeslání se otevře váš e-mailový klient s předvyplněnou zprávou.
                    </p>
                  </form>
                )}
              </div>

              {/* Info sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="svc-card">
                  <h3 style={{ marginBottom: '1rem', color: 'var(--cyan)' }}>Rychlý kontakt</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <a href="tel:+420604160718" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>📞</span>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Zuzka</div>
                        <div style={{ fontWeight: 600 }}>+420 604 160 718</div>
                      </div>
                    </a>
                    <a href="tel:+420737627000" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>📞</span>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Marťa</div>
                        <div style={{ fontWeight: 600 }}>+420 737 627 000</div>
                      </div>
                    </a>
                    <a href="mailto:info@vrzazitek.cz" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>✉️</span>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>E-mail</div>
                        <div style={{ fontWeight: 600 }}>info@vrzazitek.cz</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="svc-card">
                  <h3 style={{ marginBottom: '1rem', color: 'var(--cyan)' }}>Proč nás zvolit</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                    {['Odpovídáme do 24 hodin', 'Nezávazná cenová nabídka', 'Doprava po celé ČR', 'Profesionální obsluha', 'Flexibilní podmínky'].map((x, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>✓</span>
                        <span className="text-dim">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="svc-card" style={{ background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.06), rgba(124, 58, 237, 0.04))', borderColor: 'var(--border-mid)' }}>
                  <h3 style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }}>Chcete se podívat?</h3>
                  <p className="text-dim" style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
                    Projděte si naše služby a ceníky.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <Link href="/zapujceni-vr" style={{ color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>→ VR domů</Link>
                    <Link href="/vr-pro-firmy" style={{ color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>→ VR pro firmy</Link>
                    <Link href="/teambuilding-ve-vr" style={{ color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>→ Teambuilding</Link>
                    <Link href="/oslavy-vr" style={{ color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>→ Oslavy ve VR</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: '#fff',
  border: '1px solid rgba(59, 130, 246, 0.2)',
  borderRadius: 12,
  color: 'var(--text)',
  fontFamily: 'inherit',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

function FieldWrap({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.4rem', color: 'var(--text-dim)' }}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Field({ label, name, type = 'text', value, onChange, required }: {
  label: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <FieldWrap label={label}>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        style={inputStyle}
        onFocus={(e) => { e.target.style.borderColor = 'var(--blue)'; e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)'; e.target.style.boxShadow = 'none'; }}
      />
    </FieldWrap>
  );
}
