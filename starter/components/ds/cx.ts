/** Joins class names, skipping empty values: cx('btn', isOn && 'on', s.local). */
export function cx(...names: Array<string | false | null | undefined>): string | undefined {
  const out = names.filter(Boolean).join(' ');
  return out || undefined;
}
