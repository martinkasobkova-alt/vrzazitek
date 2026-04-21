import { emailValueLabelsCs } from '@/lib/order-inquiry-copy';
import type { OrderInquiryPayload } from '@/lib/order-inquiry-types';

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildOrderNotificationEmail(data: OrderInquiryPayload): { subject: string; text: string; html: string } {
  const langNote = data.locale === 'en' ? 'Jazyk formuláře: angličtina (EN)' : 'Jazyk formuláře: čeština';
  const i = emailValueLabelsCs.interest[data.interest];
  const d =
    data.duration === 'other' && data.durationOther.trim()
      ? `${emailValueLabelsCs.duration.other}: ${data.durationOther.trim()}`
      : emailValueLabelsCs.duration[data.duration];
  const del = emailValueLabelsCs.delivery[data.delivery];
  const ref =
    data.referral === 'other' && data.referralOther.trim()
      ? `${emailValueLabelsCs.referral.other}: ${data.referralOther.trim()}`
      : emailValueLabelsCs.referral[data.referral];

  const lines = [
    langNote,
    '',
    `Jméno: ${data.name}`,
    `E-mail: ${data.email}`,
    `Telefon: ${data.phone}`,
    `Preferované datum: ${data.preferredDate || '—'}`,
    `Zájem: ${i}`,
    `Délka: ${d}`,
    `Doprava: ${del}`,
    `Zdroj: ${ref}`,
    `Číslo voucheru: ${data.voucherNumber.trim() || '—'}`,
    '',
    'Zpráva:',
    data.message.trim() || '—',
  ];

  const text = lines.join('\n');

  const row = (k: string, v: string) =>
    `<tr><td style="padding:6px 12px;border:1px solid #e5e7eb;font-weight:600;width:180px;">${esc(k)}</td><td style="padding:6px 12px;border:1px solid #e5e7eb;">${esc(v)}</td></tr>`;

  const html = `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#111">
<p style="margin:0 0 16px;"><strong>${esc(langNote)}</strong></p>
<table style="border-collapse:collapse;margin-bottom:16px;">${[
    row('Jméno', data.name),
    row('E-mail', data.email),
    row('Telefon', data.phone),
    row('Preferované datum', data.preferredDate || '—'),
    row('Zájem', i),
    row('Délka', d),
    row('Doprava', del),
    row('Zdroj', ref),
    row('Číslo voucheru', data.voucherNumber.trim() || '—'),
  ].join('')}</table>
<p style="margin:0 0 8px;font-weight:600;">Zpráva</p>
<p style="margin:0;white-space:pre-wrap;">${esc(data.message.trim() || '—')}</p>
</body></html>`;

  const subject =
    data.locale === 'en'
      ? `[VRzazitek EN] Nová poptávka — ${data.name}`
      : `[VRzazitek] Nová poptávka — ${data.name}`;

  return { subject, text, html };
}
