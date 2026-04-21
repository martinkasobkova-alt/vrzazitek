export type OrderInterest = 'purchase' | 'voucher' | 'review' | 'other';
export type OrderDuration = '1' | '2' | '3' | '4' | 'other';
export type OrderDelivery = 'pickup' | 'courier';
export type OrderReferral = 'google' | 'seznam' | 'other';
export type OrderLocale = 'cs' | 'en';

export type OrderInquiryPayload = {
  locale: OrderLocale;
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
  gdprConsent: boolean;
  /** Honeypot — must stay empty */
  company?: string;
};
