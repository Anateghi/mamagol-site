export const site = {
  name: 'ماماگل',
  nameEn: 'Mamagol',
  slug: 'mamagol',
  domain: 'mamagol.ir',
  tagline: 'همراه مهربان مادر و کودک',
  description: 'ماماگل؛ ابزارهای رایگان بارداری و کودک با تاریخ شمسی: محاسبه تاریخ زایمان، تقویم تخمک‌گذاری، صدک رشد WHO، مقدار شیر خشک و سایز کفش و لباس کودک.',
  locale: 'fa_IR',
  colors: { pomegranate: '#B8405E', teal: '#1E5560', saffron: '#E9A23B', cream: '#FBF5EC', ink: '#2B2320' },
  nav: [
    { href: '/tools/', label: 'ابزارها' },
    { href: '/blog/', label: 'مقالات' },
    { href: '/about/', label: 'درباره ما' },
  ],
};

/**
 * Affiliate partner IDs — the ONLY place to change them.
 * Placeholders until the Digikala / Torob affiliate accounts are approved.
 */
export const affiliate = {
  digikala: { id: 'DIGIKALA_PARTNER_ID', param: 'aff_id', base: 'https://www.digikala.com/search/?q=' },
  torob: { id: 'TOROB_PARTNER_ID', param: 'ref', base: 'https://torob.com/search/?query=' },
} as const;
export type Partner = keyof typeof affiliate;
