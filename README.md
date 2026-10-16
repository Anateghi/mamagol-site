# ماماگل (Mamagol) — mamagol.ir

Persian (fa-IR, RTL) mother & child information site with free client-side tools (Jalali dates).

- Astro 5 static + MDX content collection, Tailwind v4, self-hosted Vazirmatn, date-fns-jalali
- Tools: due date / pregnancy week, ovulation calendar, WHO growth percentile (0–24 m, official LMS tables), formula amount, kids shoe & clothing size
- SEO: canonical, OG/Twitter, JSON-LD (Organization, WebSite, WebApplication, FAQPage, HowTo, BreadcrumbList, MedicalWebPage), sitemap, robots.txt
- Affiliate partner IDs (Digikala/Torob placeholders): `src/config/site.ts`

```bash
npm ci && npm run build   # → dist/
PORT=8080 npm start       # static server (serve)
```
Set `SITE_URL` at build time for canonical URLs (default https://web-production-2d5f6.up.railway.app). Railway builds via `Dockerfile`.
