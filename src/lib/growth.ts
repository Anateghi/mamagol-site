import lms from '../data/who-lms.json';
type Key = keyof typeof lms;
/** Interpolated L,M,S for age in months (0..24) from WHO Child Growth Standards (CDC-distributed tables). */
export function lmsAt(key: Key, months: number) {
  const t = lms[key] as number[][];
  const a = Math.max(0, Math.min(24, months));
  const i = Math.min(23, Math.floor(a)), f = a - i;
  const [, L0, M0, S0] = t[i], [, L1, M1, S1] = t[i + 1];
  return { L: L0 + (L1 - L0) * f, M: M0 + (M1 - M0) * f, S: S0 + (S1 - S0) * f };
}
export const zScore = (x: number, { L, M, S }: { L: number; M: number; S: number }) => (L === 0 ? Math.log(x / M) / S : (Math.pow(x / M, L) - 1) / (L * S));
export const valueAtZ = (z: number, { L, M, S }: { L: number; M: number; S: number }) => (L === 0 ? M * Math.exp(S * z) : M * Math.pow(1 + L * S * z, 1 / L));
/** Standard normal CDF (Abramowitz–Stegun 7.1.26 approximation) */
export function normCdf(z: number) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-(z * z) / 2);
  return z >= 0 ? (1 + y) / 2 : (1 - y) / 2;
}
