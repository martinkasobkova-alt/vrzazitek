'use client';

import { useState } from 'react';
import { orderInquiryCopy } from '@/lib/order-inquiry-copy';
import type { OrderDelivery, OrderDuration, OrderInterest, OrderLocale, OrderReferral } from '@/lib/order-inquiry-types';

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

const radioLabelStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.55rem',
  cursor: 'pointer',
  fontSize: '0.92rem',
  color: 'var(--text)',
};

const focusHandlers = {
  onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'var(--blue)';
    e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
    e.target.style.boxShadow = 'none';
  },
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  interest: OrderInterest;
  duration: OrderDuration;
  durationOther: string;
  delivery: OrderDelivery;
  referral: OrderReferral;
  referralOther: string;
  voucherNumber: string;
  message: string;
  gdpr: boolean;
  company: string;
};

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  interest: 'purchase',
  duration: '1',
  durationOther: '',
  delivery: 'pickup',
  referral: 'google',
  referralOther: '',
  voucherNumber: '',
  message: '',
  gdpr: false,
  company: '',
};

export default function OrderInquiryForm({ locale }: { locale: OrderLocale }) {
  const c = orderInquiryCopy[locale];
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setSending(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locale,
          name: form.name,
          email: form.email,
          phone: form.phone,
          preferredDate: form.preferredDate,
          interest: form.interest,
          duration: form.duration,
          durationOther: form.durationOther,
          delivery: form.delivery,
          referral: form.referral,
          referralOther: form.referralOther,
          voucherNumber: form.voucherNumber,
          message: form.message,
          gdprConsent: form.gdpr,
          company: form.company,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        setError(true);
        return;
      }
      setSent(true);
      setForm(initial);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="text-center" style={{ padding: '2rem 0' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }} aria-hidden>✉️</div>
        <h3>{c.successTitle}</h3>
        <p className="text-dim" style={{ marginTop: '1rem' }}>
          {c.successBody}
          <a href="tel:+420604160718" style={{ color: 'var(--cyan)' }}>
            +420 604 160 718
          </a>
          .
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn btn-ghost" style={{ marginTop: '2rem' }}>
          {c.tryAgain}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }} aria-hidden>
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            style={inputStyle}
          />
        </label>
      </div>

      <div>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{c.formTitle}</h2>
        <p className="text-dim" style={{ fontSize: '0.9rem', margin: 0 }}>
          {c.formTip}
        </p>
      </div>

      <FieldWrap label={`${c.name} *`}>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          style={inputStyle}
          {...focusHandlers}
        />
      </FieldWrap>

      <FieldWrap label={`${c.email} *`}>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          style={inputStyle}
          {...focusHandlers}
        />
      </FieldWrap>

      <FieldWrap label={`${c.phone} *`}>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={(e) => set('phone', e.target.value)}
          style={inputStyle}
          {...focusHandlers}
        />
      </FieldWrap>

      <FieldWrap label={c.preferredDate}>
        <input
          type="date"
          name="preferredDate"
          value={form.preferredDate}
          onChange={(e) => set('preferredDate', e.target.value)}
          style={inputStyle}
          {...focusHandlers}
        />
      </FieldWrap>

      <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
        <legend style={{ ...legendStyle }}>{c.interestLegend}</legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginTop: '0.45rem' }}>
          {(
            [
              ['purchase', c.interestPurchase],
              ['voucher', c.interestVoucher],
              ['review', c.interestReview],
              ['other', c.interestOther],
            ] as const
          ).map(([value, label]) => (
            <label key={value} style={radioLabelStyle}>
              <input
                type="radio"
                name="interest"
                value={value}
                checked={form.interest === value}
                onChange={() => set('interest', value)}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
        <legend style={{ ...legendStyle }}>{c.durationLegend}</legend>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem 1.25rem', marginTop: '0.45rem' }}>
          {(
            [
              ['1', c.duration1],
              ['2', c.duration2],
              ['3', c.duration3],
              ['4', c.duration4],
              ['other', c.durationOther],
            ] as const
          ).map(([value, label]) => (
            <label key={value} style={radioLabelStyle}>
              <input
                type="radio"
                name="duration"
                value={value}
                checked={form.duration === value}
                onChange={() => set('duration', value)}
              />
              {label}
            </label>
          ))}
        </div>
        {form.duration === 'other' && (
          <input
            type="text"
            name="durationOther"
            placeholder={c.durationOtherPlaceholder}
            value={form.durationOther}
            onChange={(e) => set('durationOther', e.target.value)}
            style={{ ...inputStyle, marginTop: '0.65rem' }}
            {...focusHandlers}
          />
        )}
      </fieldset>

      <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
        <legend style={{ ...legendStyle }}>{c.deliveryLegend}</legend>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginTop: '0.45rem' }}>
          {(
            [
              ['pickup', c.deliveryPickup],
              ['courier', c.deliveryCourier],
            ] as const
          ).map(([value, label]) => (
            <label key={value} style={radioLabelStyle}>
              <input
                type="radio"
                name="delivery"
                value={value}
                checked={form.delivery === value}
                onChange={() => set('delivery', value)}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
        <legend style={{ ...legendStyle }}>{c.referralLegend}</legend>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem 1.25rem', marginTop: '0.45rem' }}>
          {(
            [
              ['google', c.referralGoogle],
              ['seznam', c.referralSeznam],
              ['other', c.referralOther],
            ] as const
          ).map(([value, label]) => (
            <label key={value} style={radioLabelStyle}>
              <input
                type="radio"
                name="referral"
                value={value}
                checked={form.referral === value}
                onChange={() => set('referral', value)}
              />
              {label}
            </label>
          ))}
        </div>
        {form.referral === 'other' && (
          <input
            type="text"
            name="referralOther"
            placeholder={c.referralOtherPlaceholder}
            value={form.referralOther}
            onChange={(e) => set('referralOther', e.target.value)}
            style={{ ...inputStyle, marginTop: '0.65rem' }}
            {...focusHandlers}
          />
        )}
      </fieldset>

      <FieldWrap label={c.voucherNumber}>
        <input
          type="text"
          name="voucherNumber"
          value={form.voucherNumber}
          onChange={(e) => set('voucherNumber', e.target.value)}
          style={inputStyle}
          {...focusHandlers}
        />
      </FieldWrap>

      <FieldWrap label={c.message}>
        <textarea
          name="message"
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
          {...focusHandlers}
        />
      </FieldWrap>

      <label style={{ ...radioLabelStyle, alignItems: 'flex-start' }}>
        <input
          type="checkbox"
          checked={form.gdpr}
          required
          onChange={(e) => set('gdpr', e.target.checked)}
          style={{ marginTop: '0.2rem' }}
        />
        <span>
          {c.gdprLabel} <span style={{ color: 'var(--cyan)' }}>*</span>
        </span>
      </label>

      {error && (
        <p role="alert" style={{ color: '#b91c1c', fontSize: '0.9rem', margin: 0 }}>
          {c.errorGeneric}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary"
        disabled={sending}
        style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
      >
        {sending ? c.sending : `📤 ${c.submit}`}
      </button>

      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>{c.submitNote}</p>
    </form>
  );
}

const legendStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 500,
  marginBottom: 0,
  color: 'var(--text-dim)',
  padding: 0,
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
