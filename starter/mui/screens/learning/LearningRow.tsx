// One compact learning row, the same on every tab: type tile · title + code · one meta line · one "Why" line ·
// right-hand columns for status, plan and the ⋯ menu (fixed widths, so they line up from row to row).
// Clicking the row or its title opens the detail drawer; the open row stays highlighted.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { useState, type MouseEvent, type ReactNode } from 'react';
import type { IconName } from '@/components/ds/icon-paths.generated';
import type { ApiStatus } from '@/lib/status';
import { DsIcon } from '@/mui/components/icons';
import { KindChip, StatusChip, WhyText, type Kind } from '@/mui/components/labels';
import { LEVELS, type LearningItem } from '@/mui/data/learning';
import { useLearning } from './context';

/** One icon per learning type, the same as Home and Pathways: course · with people · on the job. */
export const KIND_ICON: Record<Kind, IconName> = { formal: 'cap', rel: 'users', exp: 'brief' };
const KIND_TOKEN = { formal: 'tFormal', rel: 'tRel', exp: 'tExp' } as const;

export const hoursLabel = (h?: number) => (h === undefined ? undefined : `${h} h`);
/** Learning is "Completed", not "Approved". Everything else uses the shared status words. */
export const statusLabel = (s: ApiStatus) => (s === 'approved' ? 'Completed' : undefined);
/** Format · duration · provider, always in that order (the type has its own chip). */
export const itemMeta = (i: Pick<LearningItem, 'format' | 'hours' | 'provider'>) => [i.format, hoursLabel(i.hours), i.provider].filter(Boolean).join(' · ');

export async function copyLink(url: string, notify: (m: string) => void) {
  try { await navigator.clipboard.writeText(url); notify('Link copied'); } catch { notify(`Copy this link: ${url}`); }
}

/** Square tile tinted by the learning type (blue course, green people, orange on the job). */
export function TypeTile({ kind, size = 36 }: { kind: Kind; size?: number }) {
  return (
    <Box aria-hidden sx={{
      width: size, height: size, flexShrink: 0, borderRadius: size > 40 ? '11px' : '9px', display: 'grid', placeItems: 'center',
      color: t => t.palette.ds[KIND_TOKEN[kind]], bgcolor: t => alpha(t.palette.ds[KIND_TOKEN[kind]], t.palette.mode === 'dark' ? 0.14 : 0.1),
    }}>
      <DsIcon name={KIND_ICON[kind]} sx={{ fontSize: Math.round(size / 2) }} />
    </Box>
  );
}

export function LevelChip({ level }: { level: LearningItem['level'] }) {
  return (
    <Tooltip title={`${level} · ${LEVELS[level]}`}>
      <Chip color="primary" label={level} aria-label={`Level ${level}`} sx={{ fontFamily: t => t.typography.mono.fontFamily, fontSize: 11.5 }} />
    </Tooltip>
  );
}

/** Small round number that ties a row to a citation in the AI answer. */
export function CiteBadge({ n }: { n: number }) {
  return (
    <Box component="span" aria-label={`Source ${n}`} sx={{
      display: 'inline-grid', placeItems: 'center', minWidth: 18, height: 18, px: '4px', borderRadius: '9px', verticalAlign: '1px',
      fontFamily: t => t.typography.mono.fontFamily, fontSize: 11, fontWeight: 700, lineHeight: 1,
      color: 'primary.light', bgcolor: t => alpha(t.palette.primary.main, t.palette.mode === 'dark' ? 0.24 : 0.1),
    }}>{n}</Box>
  );
}

function RowMenu({ item }: { item: LearningItem }) {
  const { notify } = useLearning();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const close = () => setAnchor(null);
  return (
    <>
      <Tooltip title="More actions">
        <IconButton size="small" aria-label={`More actions for ${item.title}`} aria-haspopup="menu" aria-expanded={Boolean(anchor)}
          onClick={(e: MouseEvent<HTMLElement>) => setAnchor(e.currentTarget)}>
          <DsIcon name="more" />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={close} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MenuItem component="a" href={item.url} target="_blank" rel="noopener noreferrer" onClick={close}>
          <ListItemIcon><DsIcon name="ext" /></ListItemIcon>Open training
        </MenuItem>
        <MenuItem onClick={() => { close(); copyLink(item.url, notify); }}>
          <ListItemIcon><DsIcon name="link" /></ListItemIcon>Copy link
        </MenuItem>
        <MenuItem onClick={() => { close(); notify('Recording opens the learning record form'); }}>
          <ListItemIcon><DsIcon name="record" /></ListItemIcon>Record your learning
        </MenuItem>
      </Menu>
    </>
  );
}

export function PlanAction({ item, size = 'small' }: { item: LearningItem; size?: 'small' | 'medium' }) {
  const { inPlan, addToPlan } = useLearning();
  if (item.status === 'approved') return null;
  if (inPlan(item)) return <Chip variant="outlined" color="primary" icon={<DsIcon name="check" />} label="In your plan" size={size} sx={{ fontWeight: 600 }} />;
  return <Button variant="outlined" size={size} startIcon={<DsIcon name="plus" />} onClick={() => addToPlan(item)}>Add to plan</Button>;
}

const ROW_COLUMNS = { xs: '36px minmax(0, 1fr) 32px', md: '36px minmax(0, 1fr) 112px 124px 32px' };

export function LearningRow({ item, cite }: { item: LearningItem; cite?: number }) {
  const { open, openId } = useLearning();
  const selected = openId === item.id;
  const stop = (e: MouseEvent) => e.stopPropagation();
  return (
    <Box component="li" onClick={() => open(item)} sx={{
      display: 'grid', gridTemplateColumns: ROW_COLUMNS, columnGap: 4, alignItems: 'center', px: 5, py: 2.5, minHeight: 84, cursor: 'pointer',
      transition: 'background-color .12s', '&:not(:first-of-type)': { borderTop: 1, borderColor: 'divider' },
      '&:hover': { bgcolor: 'action.hover' },
      ...(selected && { bgcolor: 'action.selected', boxShadow: t => `inset 3px 0 0 ${t.palette.primary.light}`, '&:hover': { bgcolor: 'action.selected' } }),
    }}>
      <TypeTile kind={item.kind} />

      <Box sx={{ minWidth: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, minWidth: 0 }}>
          {cite !== undefined && <CiteBadge n={cite} />}
          <Box component="button" type="button" aria-haspopup="dialog" onClick={(e: MouseEvent) => { stop(e); open(item); }} sx={{
            all: 'unset', cursor: 'pointer', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            fontSize: 14.5, fontWeight: 600, lineHeight: 1.45, color: 'text.primary', borderRadius: '4px',
            '&:hover': { color: 'primary.light' }, '&:focus-visible': { outline: t => `2px solid ${t.palette.primary.light}`, outlineOffset: 2 },
          }}>{item.title}</Box>
          {item.code && <Typography variant="mono" sx={{ fontSize: 12, color: 'text.secondary', flexShrink: 0 }}>{item.code}</Typography>}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, flexWrap: 'wrap', rowGap: 1 }}>
          <KindChip kind={item.kind} />
          <Typography variant="meta">{itemMeta(item)}</Typography>
          <LevelChip level={item.level} />
          {item.requirement === 'mandatory' && <Chip color="warning" label="Mandatory" />}
        </Box>
        <WhyText sx={{ mt: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.why}</WhyText>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
        {item.status !== 'not_started' && <StatusChip status={item.status} label={statusLabel(item.status)} />}
      </Box>
      <Box onClick={stop} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}><PlanAction item={item} /></Box>
      <Box onClick={stop} sx={{ display: 'flex', justifyContent: 'flex-end' }}><RowMenu item={item} /></Box>
    </Box>
  );
}

/** Rows separated by hairlines (no list bullets). */
export function RowList({ children, label }: { children: ReactNode; label?: string }) {
  return <Box component="ul" aria-label={label} sx={{ listStyle: 'none', m: 0, p: 0 }}>{children}</Box>;
}
