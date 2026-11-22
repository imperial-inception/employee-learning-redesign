// One filter bar for "For your role" and "Browse all": search + Type, Status, Level, Requirement in the same row.
// Active filters show underneath as removable chips with "Clear all".
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useMemo, useState } from 'react';
import type { ApiStatus } from '@/lib/status';
import { DsIcon } from '@/mui/components/icons';
import { kindLabel, type Kind } from '@/mui/components/labels';
import { LEVELS, type LearningItem, type Level, type Requirement } from '@/mui/data/learning';

export type Filters = { q: string; kind: Kind | 'all'; status: ApiStatus | 'all'; level: Level | 'all'; req: Requirement | 'all' };
const EMPTY: Filters = { q: '', kind: 'all', status: 'all', level: 'all', req: 'all' };

type Opt<T extends string> = { v: T; label: string };
const KIND_OPTS: Opt<Kind>[] = (['formal', 'rel', 'exp'] as Kind[]).map(k => ({ v: k, label: kindLabel(k) }));
const STATUS_OPTS: Opt<ApiStatus>[] = [{ v: 'not_started', label: 'Not started' }, { v: 'in_progress', label: 'In progress' }, { v: 'approved', label: 'Completed' }];
const LEVEL_OPTS: Opt<Level>[] = (Object.keys(LEVELS) as Level[]).map(l => ({ v: l, label: l }));
const REQ_LABEL: Record<Requirement, string> = { mandatory: 'Mandatory', optional: 'Optional', catalog: 'Catalog only' };

export function useFilters(items: LearningItem[]) {
  const [f, setF] = useState<Filters>(EMPTY);
  const set = (patch: Partial<Filters>) => setF(prev => ({ ...prev, ...patch }));
  const active = f.q.trim() !== '' || f.kind !== 'all' || f.status !== 'all' || f.level !== 'all' || f.req !== 'all';
  const shown = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    return items.filter(it =>
      (f.kind === 'all' || it.kind === f.kind) && (f.status === 'all' || it.status === f.status) &&
      (f.level === 'all' || it.level === f.level) && (f.req === 'all' || it.requirement === f.req) &&
      (!q || `${it.title} ${it.code ?? ''} ${it.description ?? ''} ${it.why} ${it.provider}`.toLowerCase().includes(q)));
  }, [items, f]);
  return { f, set, active, shown, clear: () => setF(EMPTY) };
}

function FilterSelect<T extends string>({ label, value, options, onChange }: { label: string; value: T | 'all'; options: Opt<T>[]; onChange: (v: T | 'all') => void }) {
  const on = value !== 'all';
  return (
    <Select value={value} onChange={e => onChange(e.target.value as T | 'all')} inputProps={{ 'aria-label': label }}
      renderValue={v => (v === 'all' ? label : options.find(o => o.v === v)?.label)}
      sx={{
        minWidth: 124, fontSize: 13.5, fontWeight: on ? 600 : 500, color: on ? 'text.primary' : 'text.secondary',
        ...(on && { '& .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.light' } }),
      }}>
      <MenuItem value="all">All</MenuItem>
      {options.map(o => <MenuItem key={o.v} value={o.v}>{o.label}</MenuItem>)}
    </Select>
  );
}

export function FilterBar({ id, f, set, clear, placeholder, requirements }: {
  id: string; f: Filters; set: (p: Partial<Filters>) => void; clear: () => void; placeholder: string; requirements: Requirement[];
}) {
  const chips: Array<{ key: string; label: string; remove: () => void }> = [];
  if (f.q.trim()) chips.push({ key: 'q', label: `“${f.q.trim()}”`, remove: () => set({ q: '' }) });
  if (f.kind !== 'all') chips.push({ key: 'kind', label: `Type: ${kindLabel(f.kind)}`, remove: () => set({ kind: 'all' }) });
  if (f.status !== 'all') chips.push({ key: 'status', label: `Status: ${STATUS_OPTS.find(o => o.v === f.status)?.label}`, remove: () => set({ status: 'all' }) });
  if (f.level !== 'all') chips.push({ key: 'level', label: `Level: ${f.level}`, remove: () => set({ level: 'all' }) });
  if (f.req !== 'all') chips.push({ key: 'req', label: REQ_LABEL[f.req], remove: () => set({ req: 'all' }) });

  return (
    <Box role="search" sx={{ display: 'grid', gap: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        <OutlinedInput id={id} value={f.q} onChange={e => set({ q: e.target.value })} placeholder={placeholder} type="search"
          inputProps={{ 'aria-label': 'Search learning' }} sx={{ flex: 1, minWidth: 240 }}
          startAdornment={<InputAdornment position="start"><DsIcon name="search" /></InputAdornment>} />
        <FilterSelect label="Type" value={f.kind} options={KIND_OPTS} onChange={kind => set({ kind })} />
        <FilterSelect label="Status" value={f.status} options={STATUS_OPTS} onChange={status => set({ status })} />
        <FilterSelect label="Level" value={f.level} options={LEVEL_OPTS} onChange={level => set({ level })} />
        <FilterSelect label="Requirement" value={f.req} options={requirements.map(r => ({ v: r, label: REQ_LABEL[r] }))} onChange={req => set({ req })} />
      </Box>
      {chips.length > 0 && (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }} aria-label="Active filters">
          {chips.map(c => <Chip key={c.key} variant="outlined" label={c.label} onDelete={c.remove} sx={{ color: 'text.primary' }}
            deleteIcon={<DsIcon name="x" aria-label={`Remove ${c.label}`} />} />)}
          <Button variant="text" size="small" onClick={clear}>Clear all</Button>
        </Box>
      )}
    </Box>
  );
}
