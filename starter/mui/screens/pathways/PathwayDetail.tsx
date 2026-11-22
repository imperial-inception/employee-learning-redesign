// Right pane: the selected pathway. Header (title, template · size · time, goal, ⋯), the approval summary
// (approved / in review / to go), the ONE highlighted element of the page (Next step), then the stage timeline.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { DsIcon } from '@/mui/components/icons';
import { KindChip, SectionLabel, WhyText } from '@/mui/components/labels';
import { hoursText, nextActivity, progress, totalHours, type Pathway } from '@/mui/data/pathways';
import { heroSx } from '@/mui/theme';
import { KindTile, LevelChip, MoreMenu, StatusText } from './parts';
import { StageTimeline } from './StageTimeline';

function ProgressSummary({ p }: { p: Pathway }) {
  const pr = progress(p);
  const parts = [
    { key: 'approved', n: pr.approved, label: 'approved', color: 'success.main' },
    { key: 'review', n: pr.review, label: 'in review', color: 'warning.main' },
    { key: 'togo', n: pr.toGo, label: 'to go', color: 'ds.surface3' },
  ];
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 4, flexWrap: 'wrap' }}>
        <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
          <Box component="span" sx={{ fontSize: 20, fontWeight: 700, color: 'text.primary', fontVariantNumeric: 'tabular-nums', mr: 1.5, fontFamily: t => t.typography.h5.fontFamily }}>
            {pr.approved} of {pr.total}
          </Box>
          activities approved
        </Typography>
        <Box component="ul" aria-label="Progress breakdown" sx={{ display: 'flex', gap: 4, listStyle: 'none', m: 0, p: 0 }}>
          {parts.map(s => (
            <Box component="li" key={s.key} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, fontSize: 13, color: 'text.secondary' }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '2px', bgcolor: s.color, boxShadow: t => (s.key === 'togo' ? `inset 0 0 0 1px ${t.palette.ds.line2}` : 'none') }} />
              <Box component="span" sx={{ color: 'text.primary', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{s.n}</Box> {s.label}
            </Box>
          ))}
        </Box>
      </Box>
      <Box role="img" aria-label={`${pr.approved} approved, ${pr.review} in review, ${pr.toGo} to go`}
        sx={{ mt: 2.5, display: 'flex', gap: '3px', height: 8, borderRadius: 4, overflow: 'hidden' }}>
        {parts.filter(s => s.n > 0).map(s => <Box key={s.key} sx={{ flex: s.n, bgcolor: s.color }} />)}
      </Box>
    </Box>
  );
}

function NextStep({ p }: { p: Pathway }) {
  const next = nextActivity(p);
  if (!next) {
    return (
      <Box sx={t => ({ border: 1, ...heroSx(t), borderRadius: '12px', px: 5, py: 4 })}>
        <SectionLabel>Next step</SectionLabel>
        <Typography variant="body2" sx={{ mt: 1.5 }}>Nothing to start right now: everything left is approved or in review.</Typography>
      </Box>
    );
  }
  const { activity: a, group } = next;
  const continuing = a.status === 'in_progress' || a.status === 'returned';
  return (
    <Box component="section" aria-labelledby="next-step-title" sx={t => ({ border: 1, ...heroSx(t), borderRadius: '12px', px: 5, py: 4.5 })}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, flexWrap: 'wrap' }}>
        <SectionLabel>{continuing ? 'Next step · continue' : 'Next step'}</SectionLabel>
        <Typography variant="meta">{group.number ? `Stage ${group.number} · ${group.title}` : group.title}</Typography>
      </Box>
      <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: '40px minmax(0, 1fr) auto', columnGap: 4, alignItems: 'center' }}>
        <KindTile kind={a.kind} size={40} />
        <Box sx={{ minWidth: 0 }}>
          <Typography id="next-step-title" component="h3" sx={{ fontSize: 16, fontWeight: 650, lineHeight: 1.35 }}>
            {a.title}
            {a.code && <Typography component="span" variant="mono" sx={{ ml: 2, fontSize: 12, color: 'text.secondary' }}>{a.code}</Typography>}
          </Typography>
          <Box sx={{ mt: 1.5, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            {a.level && <LevelChip level={a.level} />}
            <KindChip kind={a.kind} />
            <Box sx={{ ml: 1 }}><StatusText status={a.status} /></Box>
            <Typography variant="meta">· {hoursText(a.hours)}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant="text" startIcon={<DsIcon name="record" />}>Record learning</Button>
          <Button variant="outlined" endIcon={<DsIcon name="ext" />} href={a.url} target="_blank" rel="noopener noreferrer">Open training</Button>
        </Box>
      </Box>
      <WhyText sx={{ mt: 3, ml: '56px', fontSize: 13.5 }}>{a.why}</WhyText>
    </Box>
  );
}

export function PathwayDetail({ p }: { p: Pathway }) {
  const [copied, setCopied] = useState(false);
  const meta = [
    p.revision ? `Template revision ${p.revision}` : 'Personal pathway',
    `${p.activities.length} activities`,
    hoursText(totalHours(p)),
  ].join(' · ');
  const copyLink = () => {
    navigator.clipboard?.writeText(window.location.href).then(() => setCopied(true), () => setCopied(false));
  };

  return (
    <Card component="article" aria-labelledby="pathway-title">
      <Box sx={{ px: 6, pt: 5, pb: 5, display: 'grid', gap: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h5" component="h2" id="pathway-title">{p.title}</Typography>
            <Typography variant="meta" component="div" sx={{ mt: 1 }}>{meta}</Typography>
            {p.goal && (
              <Typography variant="meta" component="div" sx={{ mt: 1.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <DsIcon name="target" sx={{ fontSize: 15, color: 'primary.light' }} />
                Supports your goal: <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>{p.goal}</Box>
              </Typography>
            )}
          </Box>
          <MoreMenu label={`More actions for ${p.title}`} actions={[
            { label: 'Copy link', icon: 'link', onClick: copyLink },
            { label: 'Remove pathway', icon: 'x', danger: true },
          ]} />
        </Box>
        <ProgressSummary p={p} />
        <NextStep p={p} />
      </Box>
      <Divider />
      <StageTimeline p={p} />
      <Snackbar open={copied} autoHideDuration={2500} onClose={() => setCopied(false)} message="Link copied" anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />
    </Card>
  );
}
