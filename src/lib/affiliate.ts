import { affiliate, site, type Partner } from '../config/site';
export function buildAffiliateUrl(partner: Partner, query: string, placement = 'content') {
  const p = affiliate[partner];
  const u = new URL(p.base + encodeURIComponent(query));
  u.searchParams.set(p.param, p.id);
  u.searchParams.set('utm_source', site.slug);
  u.searchParams.set('utm_medium', 'affiliate');
  u.searchParams.set('utm_content', placement);
  return u.toString();
}
