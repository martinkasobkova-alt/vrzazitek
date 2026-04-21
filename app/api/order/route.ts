import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { buildOrderNotificationEmail } from '@/lib/order-email';
import type {
  OrderDelivery,
  OrderDuration,
  OrderInterest,
  OrderInquiryPayload,
  OrderLocale,
  OrderReferral,
} from '@/lib/order-inquiry-types';

const INTERESTS: OrderInterest[] = ['purchase', 'voucher', 'review', 'other'];
const DURATIONS: OrderDuration[] = ['1', '2', '3', '4', 'other'];
const DELIVERIES: OrderDelivery[] = ['pickup', 'courier'];
const REFERRALS: OrderReferral[] = ['google', 'seznam', 'other'];

function isOrderLocale(v: unknown): v is OrderLocale {
  return v === 'cs' || v === 'en';
}

function parsePayload(body: unknown): OrderInquiryPayload | null {
  if (!body || typeof body !== 'object') return null;
  const o = body as Record<string, unknown>;

  if (!isOrderLocale(o.locale)) return null;
  if (typeof o.name !== 'string' || o.name.trim().length < 2) return null;
  if (typeof o.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email.trim())) return null;
  if (typeof o.phone !== 'string' || o.phone.trim().length < 5) return null;
  if (typeof o.preferredDate !== 'string') return null;
  if (typeof o.interest !== 'string' || !INTERESTS.includes(o.interest as OrderInterest)) return null;
  if (typeof o.duration !== 'string' || !DURATIONS.includes(o.duration as OrderDuration)) return null;
  if (typeof o.durationOther !== 'string') return null;
  if (typeof o.delivery !== 'string' || !DELIVERIES.includes(o.delivery as OrderDelivery)) return null;
  if (typeof o.referral !== 'string' || !REFERRALS.includes(o.referral as OrderReferral)) return null;
  if (typeof o.referralOther !== 'string') return null;
  if (typeof o.voucherNumber !== 'string') return null;
  if (typeof o.message !== 'string') return null;
  if (o.gdprConsent !== true) return null;

  return {
    locale: o.locale,
    name: o.name.trim(),
    email: o.email.trim(),
    phone: o.phone.trim(),
    preferredDate: o.preferredDate.trim(),
    interest: o.interest as OrderInterest,
    duration: o.duration as OrderDuration,
    durationOther: o.durationOther.trim(),
    delivery: o.delivery as OrderDelivery,
    referral: o.referral as OrderReferral,
    referralOther: o.referralOther.trim(),
    voucherNumber: o.voucherNumber.trim(),
    message: o.message.trim(),
    gdprConsent: true,
  };
}

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: 'missing_config' }, { status: 503 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (json && typeof json === 'object' && 'company' in json) {
    const c = (json as Record<string, unknown>).company;
    if (typeof c === 'string' && c.trim() !== '') {
      return NextResponse.json({ ok: true });
    }
  }

  const payload = parsePayload(json);
  if (!payload) {
    return NextResponse.json({ ok: false, error: 'invalid_payload' }, { status: 400 });
  }

  const to = process.env.ORDER_NOTIFY_EMAIL?.trim() || 'info@vrzazitek.cz';
  const from =
    process.env.RESEND_FROM?.trim() || 'VR Zážitek <onboarding@resend.dev>';

  const { subject, text, html } = buildOrderNotificationEmail(payload);

  const resend = new Resend(key);
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error('[order]', error);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
