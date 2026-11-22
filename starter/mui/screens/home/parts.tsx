// Small building blocks shared by the Home cards, in the same visual language as Learning and Pathways:
// a panel with a 50px header bar (bold title · muted meta on the left, one action on the right), hairline rows,
// the segmented approval bar, a slim bar, arrow links and an honest empty line.
import Box from '@mui/material/Box';
import Button, { type ButtonProps } from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import type { ReactNode } from 'react';
import type { IconName } from '@/components/ds/icon-paths.generated';
import { DsIcon } from '@/mui/components/icons';
import { heroSx } from '@/mui/theme';

/** Card with a 50px header bar. `hero` gives it the page's one highlight (heroSx). Fills its grid cell (equal heights). */
export function Panel({ id, title, action, footer, hero, children }: {
  id: string; title: ReactNode; action?: ReactNode; footer?: ReactNode; hero?: boolean; children: ReactNode;
}) {
  return (
    <Card component="section" aria-labelledby={id} sx={[{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }, Boolean(hero) && heroSx]}>
      <Box sx={{ minHeight: 50, px: 5, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Typography id={id} component="h2" variant="body2" sx={{
          display: 'flex', alignItems: 'center', gap: 2, minWidth: 0, fontSize: 13.5, color: 'text.secondary', scrollMarginTop: 120,
          '& b': { color: 'text.primary', fontWeight: 650, fontSize: 14.5, whiteSpace: 'nowrap' },
          '& > span': { minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
        }}>{title}</Typography>
        {action && <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 2, mr: -2 }}>{action}</Box>}
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>{children}</Box>
      {footer && <Box sx={{ px: 5, py: 2, minHeight: 44, display: 'flex', alignItems: 'center', borderTop: 1, borderColor: 'divider' }}>{footer}</Box>}
    </Card>
  );
}

/** Small inset label band above a group of rows ("In review"), like Learning's section labels. */
export function PanelSection({ label, sub }: { label: string; sub?: string }) {
  return (
    <Box sx={{ px: 5, py: 1.5, display: 'flex', alignItems: 'baseline', gap: 3, bgcolor: 'ds.surface2', borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
      <Typography variant="overline" component="div" sx={{ fontSize: 11 }}>{label}</Typography>
      {sub && <Typography variant="meta">{sub}</Typography>}
    </Box>
  );
}

/** One honest line, centred in the panel body (keeps equal heights without a big blank box). */
export function EmptyLine({ icon = 'check', text, action }: { icon?: IconName; text: string; action?: ReactNode }) {
  return (
    <Box sx={{ flex: 1, px: 5, py: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, textAlign: 'center' }}>
      <Box aria-hidden sx={{ width: 32, height: 32, borderRadius: '50%', display: 'grid', placeItems: 'center', color: 'text.secondary', bgcolor: 'ds.surface3' }}>
        <DsIcon name={icon} sx={{ fontSize: 17 }} />
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{text}</Typography>
      {action}
    </Box>
  );
}

/** Text button with a trailing arrow ("View pathway →", "All my learning →") that navigates inside the app. */
export function ArrowLink({ href, children, ...props }: { href: string; children: ReactNode } & Omit<ButtonProps, 'href' | 'children'>) {
  return (
    <Button component={NextLink} href={href} variant="text" size="small" endIcon={<DsIcon name="arrow" />} {...props}>{children}</Button>
  );
}

export type Segment = { key: string; n: number; label: string; color: string };

/** Approved / in review / to go in one 8px bar (the same bar as Pathways). */
export function SegmentedBar({ parts, label }: { parts: Segment[]; label: string }) {
  return (
    <Box role="img" aria-label={label} sx={{ display: 'flex', gap: '3px', height: 8, borderRadius: 4, overflow: 'hidden' }}>
      {parts.filter(s => s.n > 0).map(s => <Box key={s.key} sx={{ flex: s.n, bgcolor: s.color }} />)}
    </Box>
  );
}

/** Small coloured square for a bar legend. */
export function Swatch({ color }: { color: string }) {
  return <Box component="span" aria-hidden sx={{ display: 'inline-block', width: 8, height: 8, borderRadius: '2px', bgcolor: color, boxShadow: t => (color === 'ds.surface3' ? `inset 0 0 0 1px ${t.palette.ds.line2}` : 'none') }} />;
}

/** Slim progress bar (6px). */
export function SlimBar({ value, label, color = 'success.main' }: { value: number; label: string; color?: string }) {
  return (
    <Box role="progressbar" aria-label={label} aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100}
      sx={{ height: 6, borderRadius: 3, bgcolor: 'ds.surface3', overflow: 'hidden' }}>
      <Box sx={{ height: '100%', width: `${value}%`, bgcolor: color, borderRadius: 3 }} />
    </Box>
  );
}
