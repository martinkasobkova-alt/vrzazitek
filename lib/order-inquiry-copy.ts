import type { OrderDelivery, OrderDuration, OrderInterest, OrderLocale, OrderReferral } from '@/lib/order-inquiry-types';

export const orderPageHero = {
  cs: {
    eyebrow: 'Objednání VR',
    titleBefore: 'Objednejte si VR ',
    titleAccent: 'ještě dnes',
    lead: 'Vyplňte údaje a ozveme se obvykle ještě ten samý den.',
  },
  en: {
    eyebrow: 'Order VR',
    titleBefore: 'Order VR ',
    titleAccent: 'today',
    lead: 'Fill in your details — we usually get back the same day.',
  },
} satisfies Record<OrderLocale, { eyebrow: string; titleBefore: string; titleAccent: string; lead: string }>;

export const orderInquiryCopy = {
  cs: {
    formTitle: 'Objednávkový formulář',
    formTip:
      'Tip: Napište rovnou „Quest 3 na 3 dny + Chromecast“ a pošleme hotovou nabídku.',
    name: 'Jméno a příjmení',
    email: 'E-mail',
    phone: 'Telefonní číslo',
    preferredDate: 'Preferované datum',
    interestLegend: 'Mám zájem o:',
    interestPurchase: 'Zakoupení zážitku',
    interestVoucher: 'Uplatnění voucheru',
    interestReview: 'Zanechání recenze',
    interestOther: 'Jiný dotaz',
    durationLegend: 'Na jak dlouho:',
    duration1: '1 den',
    duration2: '2 dny',
    duration3: '3 dny',
    duration4: '4 dny',
    durationOther: 'jiné',
    durationOtherPlaceholder: 'Upřesněte…',
    deliveryLegend: 'Doprava:',
    deliveryPickup: 'Osobní vyzvednutí Praha/Beroun',
    deliveryCourier: 'Doprava kurýrem',
    referralLegend: 'Jak jste se o nás dozvěděli:',
    referralGoogle: 'Google',
    referralSeznam: 'Seznam',
    referralOther: 'Jiné',
    referralOtherPlaceholder: 'Upřesněte…',
    voucherNumber: 'Číslo voucheru',
    message: 'Zpráva',
    gdprLabel:
      'Souhlasím se zpracováním osobních údajů za účelem vyřízení poptávky',
    submit: 'Odeslat',
    sending: 'Odesílám…',
    submitNote:
      'Odesláním souhlasíte se zpracováním údajů pro účely vyřízení poptávky. Smluvní vztahy mezi společností VR Zážitek a klienty se řídí individuální smlouvou a případně platnými obchodními podmínkami.',
    successTitle: 'Děkujeme, zpráva je odeslána',
    successBody: 'Brzy vás budeme kontaktovat. Pokud spěcháte, zavolejte na ',
    tryAgain: 'Odeslat další poptávku',
    errorGeneric: 'Odeslání se nepovedlo. Zkuste to prosím znovu nebo napište na info@vrzazitek.cz.',
  },
  en: {
    formTitle: 'Order form',
    formTip:
      'Tip: Write e.g. “Quest 3 for 3 days + Chromecast” and we’ll send a ready-made quote.',
    name: 'Full name',
    email: 'Email',
    phone: 'Phone number',
    preferredDate: 'Preferred date',
    interestLegend: 'I am interested in:',
    interestPurchase: 'Purchasing an experience',
    interestVoucher: 'Redeeming a voucher',
    interestReview: 'Leaving a review',
    interestOther: 'Other inquiry',
    durationLegend: 'Rental length:',
    duration1: '1 day',
    duration2: '2 days',
    duration3: '3 days',
    duration4: '4 days',
    durationOther: 'other',
    durationOtherPlaceholder: 'Please specify…',
    deliveryLegend: 'Delivery:',
    deliveryPickup: 'Personal pickup Prague/Beroun',
    deliveryCourier: 'Courier delivery',
    referralLegend: 'How did you hear about us?',
    referralGoogle: 'Google',
    referralSeznam: 'Seznam.cz',
    referralOther: 'Other',
    referralOtherPlaceholder: 'Please specify…',
    voucherNumber: 'Voucher number',
    message: 'Message',
    gdprLabel:
      'I agree to the processing of personal data for the purpose of handling this inquiry',
    submit: 'Submit',
    sending: 'Sending…',
    submitNote:
      'By submitting you agree to processing of data for handling this inquiry. Relationships between VR Zážitek and clients are governed by individual agreements and applicable terms where relevant.',
    successTitle: 'Thank you — your message was sent',
    successBody: 'We’ll be in touch soon. If you’re in a hurry, call ',
    tryAgain: 'Send another inquiry',
    errorGeneric: 'Something went wrong. Please try again or email info@vrzazitek.cz.',
  },
} satisfies Record<OrderLocale, Record<string, string>>;

/** Popisky hodnot pro tělo e-mailu na info@ (česky pro obsluhu) */
export const emailValueLabelsCs: {
  interest: Record<OrderInterest, string>;
  duration: Record<OrderDuration, string>;
  delivery: Record<OrderDelivery, string>;
  referral: Record<OrderReferral, string>;
} = {
  interest: {
    purchase: 'Zakoupení zážitku',
    voucher: 'Uplatnění voucheru',
    review: 'Zanechání recenze',
    other: 'Jiný dotaz',
  },
  duration: {
    '1': '1 den',
    '2': '2 dny',
    '3': '3 dny',
    '4': '4 dny',
    other: 'jiné (viz poznámka)',
  },
  delivery: {
    pickup: 'Osobní vyzvednutí Praha/Beroun',
    courier: 'Doprava kurýrem',
  },
  referral: {
    google: 'Google',
    seznam: 'Seznam',
    other: 'Jiné',
  },
};
