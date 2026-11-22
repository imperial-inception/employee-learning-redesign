import Box from '@mui/material/Box';
import Chip, { type ChipProps } from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';
import { STATUS, type ApiStatus } from '@/lib/status';
import { StatusGlyph } from './icons';
export type Kind = 'formal' | 'rel' | 'exp'; // Formal course · learning with people · learning on the job

const KIND: Record<Kind, { label: string; token: 'tFormal' | 'tRel' | 'tExp' }> = {
  formal: { label: 'Formal', token: 'tFormal' },
  rel: { label: 'Relational', token: 'tRel' },
  exp: { label: 'Experiential', token: 'tExp' },
};
export const kindLabel = (k: Kind) => KIND[k].label;

/** Learning type: outline chip with the type's coloured dot (Formal · Relational · Experiential, the app's own words). */
export function KindChip({ kind, ...props }: { kind: Kind } & Omit<ChipProps, 'label'>) {
  return (
    <Chip variant="outlined" {...props}
      sx={{ '& .MuiChip-label': { display: 'flex', alignItems: 'center' }, ...props.sx }}
      label={<Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
        <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: t => t.palette.ds[KIND[kind].token] }} />
        {KIND[kind].label}
      </Box>} />
  );
}

const TONE: Record<ApiStatus, ChipProps['color']> = {
  not_started: 'neutral', in_progress: 'primary', submitted: 'warning', approved: 'success', returned: 'secondary', rejected: 'error', locked: 'neutral',
};

/** Status as a tinted chip: glyph + text, from the API enum only. */
export function StatusChip({ status, label, ...props }: { status: ApiStatus; label?: string } & Omit<ChipProps, 'label' | 'color'>) {
  return <Chip color={TONE[status]} icon={<StatusGlyph status={status} label="" sx={{ fontSize: '13px !important', color: 'inherit' }} />} label={label ?? STATUS[status].label} {...props} />;
}

/** The specific reason an item is shown. Never generic: name the goal, the gap, the pathway step. */
export function WhyText({ children, sx }: { children: ReactNode; sx?: object }) {
  return (
    <Typography variant="meta" component="div" sx={{ ...sx }}>
      <Box component="b" sx={{ color: t => (t.palette.mode === 'dark' ? t.palette.ds.brand2 : t.palette.primary.main), fontWeight: 550, mr: 1 }}>Why</Box>
      {children}
    </Typography>
  );
}

/** Small mono section label: "FOR YOUR FOCUS GOAL". */
export function SectionLabel({ children, sx }: { children: ReactNode; sx?: object }) {
  return <Typography variant="overline" component="div" sx={{ display: 'block', ...sx }}>{children}</Typography>;
}

/** Mono count next to a title or tab: "Browse 536". */
export function Count({ children }: { children: ReactNode }) {
  return <Typography variant="mono" sx={{ color: 'text.disabled', fontSize: 11 }}>{children}</Typography>;
}
