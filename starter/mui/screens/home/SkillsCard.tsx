// "Your skills": the centrepiece of Home. One row per skill area in aligned columns: name (+ FOCUS tag) · strength
// meter (3 segments: approved, in review, empty; striped when nothing is recorded) · evidence · "Gap for L3".
// Footer: how many areas have approved evidence for the next level. New users see the areas with empty meters.
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';
import { hasEvidence, isGap, type SkillArea, type SkillsSummary } from '@/mui/data/home';
import { ArrowLink, Panel, SlimBar } from './parts';

const SEGMENTS = [1, 2, 3] as const;

const striped = (t: Theme) => `repeating-linear-gradient(135deg, ${t.palette.ds.line2} 0 1.5px, transparent 1.5px 5px)`;

function meterLabel(a: SkillArea) {
  if (a.strength === null) return 'Strength not recorded';
  const review = a.inReview ? `, ${a.inReview} more in review` : '';
  const expects = a.expected !== null ? `; next level expects ${a.expected}` : '';
  return `Strength ${a.strength} of 3${review}${expects}`;
}

/** Three segments: filled = approved strength, amber = in review, empty; striped outline when not recorded. */
export function StrengthMeter({ area }: { area: SkillArea }) {
  const s = area.strength;
  const label = meterLabel(area);
  return (
    <Tooltip title={label}>
      <Box role="img" aria-label={label} tabIndex={0} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', width: '100%', py: 1, borderRadius: '4px', '&:focus-visible': { outline: t => `2px solid ${t.palette.primary.light}`, outlineOffset: 2 } }}>
        {SEGMENTS.map(n => {
          const approved = s !== null && n <= s;
          const review = s !== null && !approved && n <= s + area.inReview;
          return (
            <Box key={n} sx={{
              height: 8, borderRadius: '3px',
              ...(s === null
                ? { backgroundImage: striped, boxShadow: t => `inset 0 0 0 1px ${t.palette.ds.line2}` }
                : { bgcolor: approved ? 'success.main' : review ? 'warning.main' : 'ds.surface3', opacity: review ? 0.75 : 1 }),
            }} />
          );
        })}
      </Box>
    </Tooltip>
  );
}

function evidenceLabel(a: SkillArea) {
  if (a.strength === null) return 'Not recorded';
  if (a.approved === 0 && a.inReview === 0) return 'None yet';
  const pieces = `${a.approved} ${a.approved === 1 ? 'piece' : 'pieces'}`;
  return a.inReview ? `${a.approved} · ${a.inReview} in review` : pieces;
}

function SkillRow({ area, target, onGrow }: { area: SkillArea; target: string | null; onGrow?: (areaId: string) => void }) {
  const gap = isGap(area);
  return (
    <Box component="li" sx={{
      flex: 1, minHeight: 50, display: 'grid', alignItems: 'center', columnGap: { xs: 4, xl: 5 }, px: 5, py: 2,
      gridTemplateColumns: COLUMNS,
      '&:not(:first-of-type)': { borderTop: 1, borderColor: 'divider' },
    }}>
      <Box sx={{ minWidth: 0, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography component="h3" sx={{ minWidth: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.35 }}>{area.name}</Typography>
        {area.focus && (
          <Chip color="primary" label="Focus" sx={{ height: 18, fontSize: 10.5, letterSpacing: '.08em', textTransform: 'uppercase', '& .MuiChip-label': { px: '6px' } }} />
        )}
      </Box>
      <StrengthMeter area={area} />
      <Typography variant="meta" sx={{ whiteSpace: 'nowrap', color: area.strength === null ? 'text.secondary' : area.approved ? 'text.primary' : 'text.secondary', fontStyle: area.strength === null ? 'italic' : 'normal' }}>
        {evidenceLabel(area)}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {gap && target && (onGrow
          ? <Tooltip title="See ways to grow it"><Chip clickable color="warning" label={`Gap for ${target}`} aria-label={`Gap for ${target}: see ways to grow ${area.name}`} onClick={() => onGrow(area.id)} /></Tooltip>
          : <Chip color="warning" label={`Gap for ${target}`} />)}
      </Box>
    </Box>
  );
}

const COLUMNS = { xs: 'minmax(0, 1fr) 96px 92px 84px', xl: 'minmax(0, 1fr) 132px 116px 92px' };

/** Light column labels above the rows (only when a level is set). */
function ColumnLabels({ target }: { target: string }) {
  return (
    <Box aria-hidden sx={{
      display: 'grid', gridTemplateColumns: COLUMNS, columnGap: { xs: 4, xl: 5 }, px: 5, py: 1.5, bgcolor: 'ds.surface2', borderBottom: 1, borderColor: 'divider',
      '& > *': { fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'text.secondary' },
    }}>
      <span>Skill area</span><span>Strength</span><span>Evidence</span><Box component="span" sx={{ textAlign: 'right' }}>For {target}</Box>
    </Box>
  );
}

export function SkillsCard({ skills, hero, onGrow }: { skills: SkillsSummary; hero?: boolean; onGrow?: (areaId: string) => void }) {
  const target = skills.targetLevel;
  const withEvidence = skills.areas.filter(hasEvidence).length;
  const total = skills.areas.length;
  return (
    <Panel id="your-skills" hero={hero}
      title={<><b>Your skills</b><Box component="span" sx={{ display: { xs: 'none', xl: 'inline' } }}>· Strength = approved learning + experience your manager confirmed</Box></>}
      action={target ? <ArrowLink href="/mui/learning?tab=role">Next level</ArrowLink> : undefined}
      footer={target ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, width: '100%' }}>
          <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
            <Box component="b" sx={{ fontWeight: 650 }}>{withEvidence} of {total}</Box> areas have approved evidence for {target}
          </Typography>
          <Box sx={{ flex: 1, maxWidth: 240, ml: 'auto' }}><SlimBar value={(withEvidence / total) * 100} label={`${withEvidence} of ${total} areas with approved evidence`} /></Box>
        </Box>
      ) : undefined}>
      {target && <ColumnLabels target={target} />}
      {skills.emptyHint && (
        <Typography variant="body2" sx={{ px: 5, pt: 3, pb: 1, color: 'text.secondary' }}>{skills.emptyHint}</Typography>
      )}
      <Box component="ul" aria-label="Skill areas" sx={{
        listStyle: 'none', m: 0, p: 0, flex: 1, display: target ? 'flex' : 'grid', flexDirection: 'column',
        ...(!target && { gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' }, columnGap: 0, '& > li:not(:first-of-type)': { borderTop: 0 }, '& > li': { borderBottom: 1, borderColor: 'divider' }, '& > li:nth-last-of-type(-n+2)': { borderBottom: 0 } }),
      }}>
        {skills.areas.map(a => <SkillRow key={a.id} area={a} target={target} onGrow={onGrow} />)}
      </Box>
    </Panel>
  );
}
