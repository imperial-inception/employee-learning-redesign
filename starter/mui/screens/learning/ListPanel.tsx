// The one list panel every tab uses: an outlined card with a 48px header (title or result count on the left,
// Sort on the right), rows separated by hairlines, small section labels, and an optional footer for pagination.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';
import { SectionLabel } from '@/mui/components/labels';
import type { LearningItem } from '@/mui/data/learning';

export function ListPanel({ id, title, action, footer, children }: { id: string; title: ReactNode; action?: ReactNode; footer?: ReactNode; children: ReactNode }) {
  return (
    <Card component="section" aria-labelledby={id} sx={{ overflow: 'hidden' }}>
      <Box sx={{ minHeight: 50, px: 5, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Typography id={id} component="h2" variant="body2" sx={{ color: 'text.secondary', '& b': { color: 'text.primary', fontWeight: 650 } }}>{title}</Typography>
        {action}
      </Box>
      <Box>{children}</Box>
      {footer && (
        <Box sx={{ px: 5, py: 3, borderTop: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>{footer}</Box>
      )}
    </Card>
  );
}

/** A small label above a group of rows ("For your goal · Own a subsystem architecture by Q3"). */
export function PanelSection({ label, sub, id }: { label: string; sub?: string; id?: string }) {
  return (
    <Box sx={{ px: 5, py: 2, display: 'flex', alignItems: 'baseline', gap: 3, bgcolor: 'ds.surface2', borderBottom: 1, borderColor: 'divider', '* + &': { borderTop: 1, borderTopColor: 'divider' } }}>
      <SectionLabel sx={{ fontSize: 11 }}><span id={id}>{label}</span></SectionLabel>
      {sub && <Typography variant="meta" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</Typography>}
    </Box>
  );
}

/** Nothing matches: one line and a way out. */
export function PanelEmpty({ text, onClear }: { text: string; onClear: () => void }) {
  return (
    <Box sx={{ px: 5, py: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{text}</Typography>
      <Button variant="text" size="small" onClick={onClear}>Clear filters</Button>
    </Box>
  );
}

export type SortKey = 'relevance' | 'shortest' | 'newest';
const SORTS: Record<SortKey, string> = { relevance: 'Relevance', shortest: 'Shortest', newest: 'Newest' };

export function sortItems(items: LearningItem[], key: SortKey) {
  if (key === 'relevance') return items;
  const out = [...items];
  if (key === 'shortest') out.sort((a, b) => (a.hours ?? Infinity) - (b.hours ?? Infinity));
  else out.sort((a, b) => b.added.localeCompare(a.added));
  return out;
}

export function SortSelect({ id, value, onChange }: { id: string; value: SortKey; onChange: (v: SortKey) => void }) {
  return (
    <Select size="small" value={value} onChange={e => onChange(e.target.value as SortKey)} inputProps={{ id, 'aria-label': 'Sort by' }}
      renderValue={v => <><Box component="span" sx={{ color: 'text.secondary' }}>Sort: </Box>{SORTS[v]}</>}
      sx={{ minWidth: 150, fontSize: 13, '& .MuiSelect-select': { py: '5px' } }}>
      {(Object.keys(SORTS) as SortKey[]).map(k => <MenuItem key={k} value={k}>{SORTS[k]}</MenuItem>)}
    </Select>
  );
}
