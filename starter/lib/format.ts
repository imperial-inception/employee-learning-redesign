// Presentation-only formatting. Nothing here decides status, eligibility or progress: that comes from the API.

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/** "2026-11-21T14:30:00" → "FRI 21 NOV" (the mono date line above page titles). */
export function dayLabel(iso: string): string {
  const d = new Date(iso);
  return `${DAYS[d.getDay()]} ${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

/** Greeting by local hour of the given time. */
export function greeting(iso: string): string {
  const h = new Date(iso).getHours();
  return h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening';
}

/** 0.5 → "0.5 h", 2 → "2 h". */
export const hours = (h: number) => `${h} h`;

/** Joins metadata the way rows show it: "Learning · Formal · 2 h". */
export const meta = (parts: Array<string | null | undefined | false>) => parts.filter(Boolean).join(' · ');

/** Plural helper: plural(3, 'piece') → "3 pieces". */
export const plural = (n: number, word: string, many = `${word}s`) => `${n} ${n === 1 ? word : many}`;
