// "Your focus" (compact, right column): the goal, its pathway's approval bar and the next step, with the page's
// ONE contained button ("Open training").
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { DsIcon } from '@/mui/components/icons';
import { SectionLabel } from '@/mui/components/labels';
import type { FocusGoal } from '@/mui/data/home';
import { ArrowLink, Panel, SegmentedBar, Swatch, type Segment } from './parts';

export function FocusCard({ focus, onRecord }: { focus: FocusGoal; onRecord: () => void }) {
  const p = focus.pathway;
  const toGo = p.total - p.approved - p.inReview;
  const parts: Segment[] = [
    { key: 'approved', n: p.approved, label: 'approved', color: 'success.main' },
    { key: 'review', n: p.inReview, label: 'in review', color: 'warning.main' },
    { key: 'togo', n: toGo, label: 'to go', color: 'ds.surface3' },
  ];
  return (
    <Panel id="home-focus-title"
      title={<>
        <Chip color="primary" label="Your focus" />
        <Box component="span">Due {focus.due} · {focus.daysLeft} days left</Box>
      </>}>
      <Box sx={{ px: 5, pt: 3.5, pb: 4 }}>
        <Typography component="h3" sx={{ fontSize: 16, fontWeight: 650, lineHeight: 1.35, fontFamily: t => t.typography.h5.fontFamily }}>{focus.goal}</Typography>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
          <Box component="ul" aria-label={`${p.title}: progress`} sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
            <Box component="li" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, fontSize: 13, color: 'text.secondary' }}>
              <Swatch color="success.main" />
              <Box component="b" sx={{ color: 'text.primary', fontWeight: 650 }}>{p.approved} of {p.total}</Box> approved
            </Box>
            <Box component="li" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, fontSize: 13, color: 'text.secondary' }}>
              <Swatch color="warning.main" />
              <Box component="b" sx={{ color: 'text.primary', fontWeight: 650 }}>{p.inReview}</Box> in review
            </Box>
          </Box>
          <ArrowLink href="/mui/pathways" sx={{ mr: -2, height: 26, flexShrink: 0 }}>View pathway</ArrowLink>
        </Box>
        <Box sx={{ mt: 2 }}>
          <SegmentedBar parts={parts} label={`${p.approved} of ${p.total} approved, ${p.inReview} in review, ${toGo} to go`} />
        </Box>
        {focus.next ? (
          <Box sx={{ mt: 3.5, pt: 3, borderTop: 1, borderColor: 'divider' }}>
            <SectionLabel sx={{ fontSize: 11 }}>Next step</SectionLabel>
            <Typography sx={{ mt: 1, fontSize: 14.5, fontWeight: 600, lineHeight: 1.4 }}>
              {focus.next.title}
              {focus.next.code && <Typography component="span" variant="mono" sx={{ ml: 2, fontSize: 12, color: 'text.secondary' }}>{focus.next.code}</Typography>}
            </Typography>
            <Box sx={{ mt: 2.5, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained" size="small" endIcon={<DsIcon name="ext" />} href={focus.next.url} target="_blank" rel="noopener noreferrer">Open training</Button>
              <Button variant="text" size="small" startIcon={<DsIcon name="record" />} onClick={onRecord}>Record learning</Button>
            </Box>
          </Box>
        ) : (
          <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>Nothing to start right now: everything left is approved or in review.</Typography>
        )}
      </Box>
    </Panel>
  );
}
