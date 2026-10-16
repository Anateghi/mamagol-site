import { newDate, getYear, getMonth, getDate, getDaysInMonth } from 'date-fns-jalali';
export const MONTHS = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'];
const fa = (n: number) => new Intl.NumberFormat('fa-IR', { useGrouping: false }).format(n);

/** Fill a [data-jdate] group (3 selects: d, m, y) with Jalali options; default = today - offsetDays */
export function setupJalali(root: HTMLElement, offsetDays = 0, yearsBack = 2, yearsFwd = 1) {
  const [d, m, y] = ['d', 'm', 'y'].map((k) => root.querySelector<HTMLSelectElement>(`[data-part="${k}"]`)!);
  const base = new Date(Date.now() - offsetDays * 864e5);
  const ty = getYear(new Date());
  y.innerHTML = ''; for (let i = ty + yearsFwd; i >= ty - yearsBack; i--) y.add(new Option(fa(i), String(i)));
  m.innerHTML = ''; MONTHS.forEach((n, i) => m.add(new Option(n, String(i))));
  const fillDays = () => {
    const keep = +d.value || getDate(base);
    const max = getDaysInMonth(newDate(+y.value, +m.value, 1));
    d.innerHTML = ''; for (let i = 1; i <= max; i++) d.add(new Option(fa(i), String(i)));
    d.value = String(Math.min(keep, max));
  };
  y.value = String(getYear(base)); m.value = String(getMonth(base)); d.add(new Option('', String(getDate(base)))); d.value = String(getDate(base));
  fillDays();
  y.addEventListener('change', fillDays); m.addEventListener('change', fillDays);
  return () => newDate(+y.value, +m.value, +d.value);
}
export const toEn = (s: string) => s.replace(/[۰-۹]/g, (c) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(c))).replace(/[٠-٩]/g, (c) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(c))).replace(/[٫,]/g, '.').trim();
export const num = (el: HTMLInputElement) => parseFloat(toEn(el.value));
export const faN = (n: number, frac = 0) => new Intl.NumberFormat('fa-IR', { maximumFractionDigits: frac }).format(n);
export const faD = (dt: Date, withWeekday = false) => (withWeekday ? new Intl.DateTimeFormat('fa-IR-u-ca-persian', { weekday: 'long' }).format(dt) + ' ' : '') + new Intl.DateTimeFormat('fa-IR-u-ca-persian', { day: 'numeric', month: 'long', year: 'numeric' }).format(dt);
