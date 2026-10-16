import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = process.env.SITE_URL || 'https://web-production-2d5f6.up.railway.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto', format: 'directory' },
  integrations: [mdx(), sitemap({ filter: (p) => !p.includes('/404'), i18n: { defaultLocale: 'fa', locales: { fa: 'fa-IR' } }, lastmod: new Date() })],
  vite: { plugins: [tailwindcss()] },
  compressHTML: true,
});
