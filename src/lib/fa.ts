const nf = new Intl.NumberFormat('fa-IR');
export const faNum = (n: number | string) => (typeof n === 'number' ? nf.format(n) : String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]));
export const toEnDigits = (s: string) => s.replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))).replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d))).replace(/[٫,]/g, '.');
export const faDate = (d: Date, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) => new Intl.DateTimeFormat('fa-IR-u-ca-persian', opts).format(d);
export const faWeekday = (d: Date) => new Intl.DateTimeFormat('fa-IR-u-ca-persian', { weekday: 'long' }).format(d);
