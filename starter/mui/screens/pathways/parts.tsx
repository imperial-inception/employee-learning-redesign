// Small shared pieces of the Pathways screen: type tile, level chip (with the framework wording), status as icon +
// text, the slim progress bar, and a "⋯" menu.
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';
import type { IconName } from '@/components/ds/icon-paths.generated';
import { STATUS, type ApiStatus } from '@/lib/status';
import { DsIcon, StatusGlyph } from '@/mui/components/icons';
import type { Kind } from '@/mui/components/labels';
import { LEVELS, type Level } from '@/mui/data/pathways';

/** One icon per learning type, the same as on Home and Learning: course · with people · on the job. */
export const KIND_ICON: Record<Kind, IconName> = { formal: 'cap', rel: 'users', exp: 'brief' };

export function KindTile({ kind, size = 32 }: { kind: Kind; size?: number }) {
  return (
    <Box aria-hidden sx={{
      width: size, height: size, flexShrink: 0, borderRadius: size > 36 ? '10px' : '8px', display: 'grid', placeItems: 'center',
      color: 'primary.light', bgcolor: t => alpha(t.palette.primary.main, t.palette.mode === 'dark' ? 0.2 : 0.09),
      boxShadow: t => `inset 0 0 0 1px ${alpha(t.palette.primary.light, 0.22)}`,
    }}>
      <DsIcon name={KIND_ICON[kind]} sx={{ fontSize: Math.round(size * 0.5) }} />
    </Box>
  );
}

/** "L2" chip; the tooltip gives the framework's description of the level. */
export function LevelChip({ level }: { level: Level }) {
  return (
    <Tooltip title={`${level} · ${LEVELS[level]}`}>
      <Chip color="primary" label={level} aria-label={`Level ${level}: ${LEVELS[level]}`} tabIndex={0}
        sx={{ fontFamily: t => t.typography.mono.fontFamily, fontSize: 11.5, minWidth: 32 }} />
    </Tooltip>
  );
}

/** Status as glyph + text (never colour alone). Pathways count only approved activities, so "Approved" stays. */
export function StatusText({ status, label }: { status: ApiStatus; label?: string }) {
  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, fontSize: 13, color: 'text.secondary', whiteSpace: 'nowrap' }}>
      <StatusGlyph status={status} label="" sx={{ fontSize: 15 }} />
      {label ?? STATUS[status].label}
    </Box>
  );
}

/** Slim bar for the pathway list. */
export function SlimBar({ value, label }: { value: number; label: string }) {
  return (
    <Box role="progressbar" aria-label={label} aria-valuenow={Math.round(value)} aria-valuemin={0} aria-valuemax={100}
      sx={{ height: 4, borderRadius: 2, bgcolor: 'ds.surface3', overflow: 'hidden', flex: 1 }}>
      <Box sx={{ height: '100%', width: `${value}%`, bgcolor: 'success.main', borderRadius: 2 }} />
    </Box>
  );
}

export type MenuAction = { label: string; icon: IconName; danger?: boolean; onClick?: () => void };

/** "⋯" button with a small menu. */
export function MoreMenu({ label, actions, size }: { label: string; actions: MenuAction[]; size?: 'small' }) {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  return (
    <>
      <Tooltip title="More actions">
        <IconButton size={size} aria-label={label} aria-haspopup="menu" onClick={e => setAnchor(e.currentTarget)}><DsIcon name="more" /></IconButton>
      </Tooltip>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        {actions.map(a => (
          <MenuItem key={a.label} onClick={() => { a.onClick?.(); setAnchor(null); }} sx={{ color: a.danger ? 'error.main' : undefined }}>
            <DsIcon name={a.icon} sx={{ fontSize: 17 }} />
            <Typography component="span" sx={{ fontSize: 14 }}>{a.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
