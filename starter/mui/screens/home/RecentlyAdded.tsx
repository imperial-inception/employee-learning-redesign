// "Recently added": the latest approved evidence and the skill each one raised (+1 Architecture modelling …).
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StatusGlyph } from '@/mui/components/icons';
import type { RecentEvidence } from '@/mui/data/home';
import { ArrowLink, Panel } from './parts';

export function RecentlyAdded({ items }: { items: RecentEvidence[] }) {
  return (
    <Panel id="recently-added" title={<><b>Recently added</b><span>· approved evidence</span></>}
      action={<ArrowLink href="/mui/learning">All my learning</ArrowLink>}>
      <Box component="ul" aria-label="Recently approved evidence" sx={{ listStyle: 'none', m: 0, p: 0, flex: 1, display: 'flex', flexDirection: 'column' }}>
        {items.slice(0, 3).map(r => (
          <Box component="li" key={r.id} sx={{
            flex: 1, display: 'grid', gridTemplateColumns: '16px minmax(0, 1fr)', columnGap: 3, alignItems: 'center', px: 5, py: 2.5,
            '&:not(:first-of-type)': { borderTop: 1, borderColor: 'divider' },
          }}>
            <StatusGlyph status="approved" label="Approved" sx={{ fontSize: 16 }} />
            <Box sx={{ minWidth: 0 }}>
              <Typography sx={{ fontSize: 13.5, fontWeight: 600, lineHeight: 1.4 }}>
                <Box component="span" sx={{ color: 'success.main', fontVariantNumeric: 'tabular-nums', mr: 1.5 }}>+{r.delta}</Box>{r.areaName}
              </Typography>
              <Typography variant="meta" component="p" sx={{ m: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {r.title}{r.code ? ` ${r.code}` : ''} · {r.verb} {r.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Panel>
  );
}
