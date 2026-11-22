// Tab "For your role": (level hint only if no learning level is chosen) · filter bar · one panel with the role
// learning grouped by level in collapsible sections ("L2 · … · 1 of 5 done" + slim progress). Your level is open.
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { DsIcon } from '@/mui/components/icons';
import { LEVELS, PROFILE, ROLE_ITEMS, type LearningItem, type Level } from '@/mui/data/learning';
import { FilterBar, useFilters } from './FilterBar';
import { LearningRow, RowList } from './LearningRow';
import { ListPanel, PanelEmpty, SortSelect, sortItems, type SortKey } from './ListPanel';

const ROLE_LEVELS = (Object.keys(LEVELS) as Level[]).filter(l => ROLE_ITEMS.some(i => i.level === l));
const doneIn = (l: Level) => ROLE_ITEMS.filter(i => i.level === l && i.status === 'approved').length;
const totalIn = (l: Level) => ROLE_ITEMS.filter(i => i.level === l).length;

function LevelSection({ level, items, open, onToggle, first }: { level: Level; items: LearningItem[]; open: boolean; onToggle: () => void; first: boolean }) {
  const done = doneIn(level);
  const total = totalIn(level);
  const mine = level === PROFILE.learningLevel;
  return (
    <Box component="section" aria-labelledby={`lvl-${level}`} sx={{ ...(!first && { borderTop: 1, borderColor: 'divider' }) }}>
      <ButtonBase onClick={onToggle} aria-expanded={open} aria-controls={`lvl-${level}-rows`} sx={{
        width: '100%', px: 5, py: 3, display: 'grid', gridTemplateColumns: '18px auto minmax(0, 1fr) auto 104px', columnGap: 3, alignItems: 'center',
        textAlign: 'left', bgcolor: 'ds.surface2', '&:hover': { bgcolor: 'action.hover' }, '&.Mui-focusVisible': { outline: t => `2px solid ${t.palette.primary.light}`, outlineOffset: -2 },
      }}>
        <DsIcon name={open ? 'cd' : 'cr'} sx={{ fontSize: 18, color: 'text.secondary' }} />
        <Typography id={`lvl-${level}`} component="h3" sx={{ fontSize: 14.5, fontWeight: 700, fontFamily: t => t.typography.mono.fontFamily }}>{level}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{LEVELS[level]}</Typography>
          {mine && <Chip color="primary" label="Your learning level" sx={{ flexShrink: 0 }} />}
        </Box>
        <Typography variant="meta" sx={{ whiteSpace: 'nowrap' }}><Box component="b" sx={{ color: 'text.primary', fontWeight: 650 }}>{done} of {total}</Box> done</Typography>
        <LinearProgress variant="determinate" value={(done / total) * 100} color={done === total ? 'success' : 'primary'} aria-label={`${level}: ${done} of ${total} done`}
          sx={{ height: 5, borderRadius: 3 }} />
      </ButtonBase>
      <Collapse in={open} id={`lvl-${level}-rows`} unmountOnExit>
        <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
          <RowList label={`${level} learning`}>{items.map(it => <LearningRow key={it.id} item={it} />)}</RowList>
        </Box>
      </Collapse>
    </Box>
  );
}

export function RoleTab() {
  const { f, set, active, shown, clear } = useFilters(ROLE_ITEMS);
  const [sort, setSort] = useState<SortKey>('relevance');
  const [openLv, setOpenLv] = useState<Partial<Record<Level, boolean>>>({ [PROFILE.learningLevel ?? 'L1']: true });
  // filtering opens every level, so matches are never hidden in a closed section
  useEffect(() => { if (active) setOpenLv(Object.fromEntries(ROLE_LEVELS.map(l => [l, true]))); }, [active]);

  const sorted = sortItems(shown, sort);
  const levels = ROLE_LEVELS.filter(l => sorted.some(i => i.level === l));
  const done = ROLE_ITEMS.filter(i => i.status === 'approved').length;

  return (
    <Box sx={{ display: 'grid', gap: 4 }}>
      {!PROFILE.learningLevel && (
        <Alert severity="info" icon={<DsIcon name="info" />} sx={{ py: 0 }}>
          Choose your learning level in Profile to see role and level requirements. Existing organization requirements still apply.
        </Alert>
      )}
      <FilterBar id="role-search" f={f} set={set} clear={clear} placeholder="Title, skill or topic" requirements={['mandatory', 'optional']} />
      <ListPanel id="role-list"
        title={active
          ? <><b>{shown.length}</b> of {ROLE_ITEMS.length} role learning items match</>
          : <><b>{ROLE_ITEMS.length}</b> role learning items for Systems Engineer · <b>{done}</b> done</>}
        action={<SortSelect id="role-sort" value={sort} onChange={setSort} />}>
        {levels.length === 0
          ? <PanelEmpty text="No role learning matches these filters." onClear={clear} />
          : levels.map((l, i) => (
            <LevelSection key={l} level={l} first={i === 0} items={sorted.filter(it => it.level === l)} open={Boolean(openLv[l])}
              onToggle={() => setOpenLv(s => ({ ...s, [l]: !s[l] }))} />
          ))}
      </ListPanel>
    </Box>
  );
}
