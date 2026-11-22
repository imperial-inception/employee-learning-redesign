// The pathway's stages as a numbered vertical timeline. Each stage: number badge, title, state from the data
// (icon + text), "n of m approved", then its activities as compact rows with aligned columns. Activities without a
// stage (no level in the framework) close the list as "Other activities". "Hide completed" hides approved rows.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';
import { DsIcon } from '@/mui/components/icons';
import { KindChip } from '@/mui/components/labels';
import { groupsOf, stageState, type Activity, type ActivityGroup, type Pathway, type StageState } from '@/mui/data/pathways';
import { KindTile, LevelChip, MoreMenu, StatusText } from './parts';

const ROW_COLUMNS = '32px minmax(0, 1fr) 36px 112px 112px 56px 32px';

function hours(h: number) {
  return `${h} h`;
}

function ActivityRow({ a }: { a: Activity }) {
  const meta = [a.code, hours(a.hours)].filter(Boolean).join(' · ');
  return (
    <Box component="li" sx={{
      display: 'grid', gridTemplateColumns: ROW_COLUMNS, columnGap: 3, alignItems: 'center', minHeight: 56, px: 2.5, py: 2, borderRadius: '8px',
      transition: 'background-color .15s', '&:hover': { bgcolor: 'action.hover' },
    }}>
      <KindTile kind={a.kind} />
      <Box sx={{ minWidth: 0 }}>
        <Typography component="h4" title={a.title} sx={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.35, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.title}</Typography>
        <Typography variant="meta" component="div" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: '1px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
          <Box component="span" sx={{ fontFamily: t => (a.code ? t.typography.mono.fontFamily : undefined), fontSize: a.code ? 11.5 : undefined }}>{meta}</Box>
          {a.waitingOn && (
            <Tooltip title={`Waiting for an approved prerequisite: ${a.waitingOn}`}>
              <Box component="span" tabIndex={0} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                · <DsIcon name="clock" sx={{ fontSize: 13 }} /> After {a.waitingOn}
              </Box>
            </Tooltip>
          )}
        </Typography>
      </Box>
      <Box>{a.level ? <LevelChip level={a.level} /> : <Typography variant="meta" aria-label="No level">—</Typography>}</Box>
      <Box><KindChip kind={a.kind} /></Box>
      <StatusText status={a.status} />
      <Button variant="text" size="small" aria-label={`View ${a.title}`} sx={{ justifySelf: 'start' }}>View</Button>
      <MoreMenu size="small" label={`More actions for ${a.title}`} actions={[{ label: 'Remove from pathway', icon: 'x', danger: true }]} />
    </Box>
  );
}

function Badge({ group, state }: { group: ActivityGroup; state: StageState }) {
  const other = group.number === undefined; // 'Other activities' is not a step: always the quiet badge
  const done = !other && state.status === 'approved';
  const active = !other && state.status === 'in_progress';
  return (
    <Box aria-hidden sx={t => ({
      width: 28, height: 28, borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0,
      fontSize: 12.5, fontWeight: 700, fontVariantNumeric: 'tabular-nums',
      ...(done && { bgcolor: alpha(t.palette.success.main, t.palette.mode === 'dark' ? 0.18 : 0.12), color: 'success.main', boxShadow: `inset 0 0 0 1px ${alpha(t.palette.success.main, 0.4)}` }),
      ...(active && { bgcolor: 'primary.main', color: 'primary.contrastText', boxShadow: `0 0 0 4px ${alpha(t.palette.primary.main, 0.18)}` }),
      ...(!done && !active && { bgcolor: 'background.paper', color: 'text.secondary', boxShadow: `inset 0 0 0 1.5px ${t.palette.ds.line2}` }),
    })}>
      {done ? <DsIcon name="check" sx={{ fontSize: 15 }} /> : group.number ?? <DsIcon name="more" sx={{ fontSize: 15 }} />}
    </Box>
  );
}

function StageItem({ group, last, hideCompleted }: { group: ActivityGroup; last: boolean; hideCompleted: boolean }) {
  const state = stageState(group.activities);
  const rows = hideCompleted ? group.activities.filter(a => a.status !== 'approved') : group.activities;
  const hidden = group.activities.length - rows.length;
  return (
    <Box component="li" aria-label={group.number ? `Stage ${group.number}: ${group.title}` : group.title}
      sx={{ display: 'grid', gridTemplateColumns: '28px minmax(0, 1fr)', columnGap: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Badge group={group} state={state} />
        {!last && <Box sx={{ flex: 1, width: '2px', borderRadius: 1, bgcolor: state.status === 'approved' ? 'success.main' : 'divider', opacity: state.status === 'approved' ? 0.5 : 1, my: 1.5 }} />}
      </Box>
      <Box sx={{ minWidth: 0, pb: last ? 0 : 5 }}>
        <Box sx={{ minHeight: 28, display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
          <Typography component="h3" sx={{ fontSize: 15, fontWeight: 650, lineHeight: 1.35 }}>{group.title}</Typography>
          {group.number !== undefined && <StatusText status={state.status} label={state.label} />}
          <Typography variant="meta" sx={{ ml: 'auto', fontVariantNumeric: 'tabular-nums' }}>{state.approved} of {state.total} approved</Typography>
        </Box>
        {group.number === undefined && (
          <Typography variant="meta" component="div" sx={{ mt: '2px' }}>These activities have no level in your framework.</Typography>
        )}
        {rows.length > 0 && (
          <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mt: 2, mx: -2.5, display: 'grid', gap: '2px' }}>
            {rows.map(a => <ActivityRow key={a.id} a={a} />)}
          </Box>
        )}
        {hidden > 0 && (
          <Typography variant="meta" component="div" sx={{ mt: rows.length ? 1 : 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <DsIcon name="check" sx={{ fontSize: 14, color: 'success.main' }} />
            {hidden === group.activities.length ? 'All activities approved' : `${hidden} approved ${hidden === 1 ? 'activity' : 'activities'} hidden`}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export function StageTimeline({ p }: { p: Pathway }) {
  const [hideCompleted, setHideCompleted] = useState(false);
  const groups = groupsOf(p);
  return (
    <Box component="section" aria-labelledby="stages-title" sx={{ px: 6, pt: 4, pb: 6 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <Typography variant="h6" component="h2" id="stages-title">{p.stages.length ? 'Stages' : 'Activities'}</Typography>
          <Typography variant="meta">{p.stages.length ? `${p.stages.length} stages · ` : ''}{p.activities.length} activities</Typography>
        </Box>
        <FormControlLabel control={<Switch checked={hideCompleted} onChange={e => setHideCompleted(e.target.checked)} />} label="Hide completed"
          sx={{ mr: 0, '& .MuiFormControlLabel-label': { fontSize: 13.5, color: 'text.secondary' } }} />
      </Box>
      <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {groups.map((g, i) => <StageItem key={g.id} group={g} last={i === groups.length - 1} hideCompleted={hideCompleted} />)}
      </Box>
    </Box>
  );
}
