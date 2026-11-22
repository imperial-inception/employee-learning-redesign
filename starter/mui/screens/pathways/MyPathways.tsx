// Left pane: "Mine" (one row per saved pathway: title, kind, slim progress, the next activity; click selects it via
// ?id=…) and a smaller "Suggested" card with two published pathways.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { Fragment } from 'react';
import { Count, WhyText } from '@/mui/components/labels';
import { PATHWAY_KIND_LABEL, SUGGESTED, nextActivity, progress, type Pathway } from '@/mui/data/pathways';
import { SlimBar } from './parts';

const clamp = (lines: number) => ({ display: '-webkit-box', WebkitLineClamp: lines, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' });

function PathwayRow({ p, selected }: { p: Pathway; selected: boolean }) {
  const pr = progress(p);
  const next = nextActivity(p);
  return (
    <ListItemButton component={NextLink} href={`/mui/pathways?id=${encodeURIComponent(p.id)}`} shallow scroll={false}
      selected={selected} aria-current={selected ? 'true' : undefined}
      sx={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', width: '100%', gap: 2, alignItems: 'start', py: 3.5, px: 4, borderRadius: '10px', minHeight: 0, fontWeight: 400, color: 'text.primary',
        '&.Mui-selected': { color: 'text.primary', fontWeight: 400 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
        <Typography sx={{ flex: 1, fontSize: 14, fontWeight: 600, lineHeight: 1.4, ...clamp(2) }}>{p.title}</Typography>
        <Chip label={PATHWAY_KIND_LABEL[p.kind]} color={p.kind === 'mandatory' ? 'warning' : p.kind === 'personal' ? 'info' : undefined}
          sx={{ height: 20, fontSize: 11.5, mt: '1px' }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <SlimBar value={pr.total ? (pr.approved / pr.total) * 100 : 0} label={`${pr.approved} of ${pr.total} activities approved`} />
        <Typography variant="meta" sx={{ whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{pr.approved} of {pr.total} approved</Typography>
      </Box>
      <Typography variant="meta" component="div" sx={{ ...clamp(1) }}>
        {next ? <>Next: <Box component="span" sx={{ color: 'text.primary', fontWeight: 500 }}>{next.activity.title}</Box></> : 'Nothing to start: the rest is approved or in review'}
      </Typography>
    </ListItemButton>
  );
}

export function MyPathways({ pathways, selectedId }: { pathways: Pathway[]; selectedId: string }) {
  return (
    <Box sx={{ display: 'grid', gap: 5 }}>
      <Card component="nav" aria-label="My pathways">
        <CardHeader title={<Box component="span" sx={{ display: 'inline-flex', alignItems: 'baseline', gap: 2 }}>Mine <Count>{pathways.length}</Count></Box>} sx={{ pb: 2 }} />
        <List sx={{ px: 2, pb: 2, display: 'grid', gap: '2px' }}>
          {pathways.map((p, i) => (
            <Fragment key={p.id}>
              {i > 0 && <Divider component="li" aria-hidden sx={{ mx: 4 }} />}
              <li><PathwayRow p={p} selected={p.id === selectedId} /></li>
            </Fragment>
          ))}
        </List>
      </Card>

      <Card component="section" aria-label="Suggested pathways">
        <CardHeader title="Suggested" subheader="Published pathways that fit your role" sx={{ pb: 1 }} />
        <Box sx={{ px: 5, pb: 3 }}>
          {SUGGESTED.map((s, i) => (
            <Fragment key={s.id}>
              {i > 0 && <Divider />}
              <Box sx={{ py: 3, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', columnGap: 3, alignItems: 'start' }}>
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.4 }}>{s.title}</Typography>
                  {s.why && <WhyText sx={{ mt: '2px' }}>{s.why}</WhyText>}
                </Box>
                <Button variant="text" size="small" sx={{ mt: '-4px', mr: -2 }} aria-label={`Preview ${s.title}`}>Preview</Button>
              </Box>
            </Fragment>
          ))}
        </Box>
      </Card>
    </Box>
  );
}
