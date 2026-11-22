// "Your pathways", restructured (approved by the founder): one header with the page's single primary action
// ("Explore pathways") and refresh; two panes: "Mine" + "Suggested" on the left, the selected pathway on the right
// (?id=<pathwayId>, default the first). Adding a pathway happens in one place: the Explore drawer.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DsIcon } from '@/mui/components/icons';
import { PATHWAYS } from '@/mui/data/pathways';
import { ExploreDrawer } from './ExploreDrawer';
import { MyPathways } from './MyPathways';
import { PathwayDetail } from './PathwayDetail';

export function PathwaysScreen() {
  const router = useRouter();
  const [exploring, setExploring] = useState(false);
  const id = typeof router.query.id === 'string' ? router.query.id : undefined;
  const selected = PATHWAYS.find(p => p.id === id) ?? PATHWAYS[0];

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, mb: 6 }}>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="h4">Your pathways</Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>Follow a pathway stage by stage. Only approved activities count.</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Tooltip title="Refresh pathways">
            <IconButton aria-label="Refresh pathways" sx={{ border: 1, borderColor: 'ds.line2', width: 36, height: 36 }}><DsIcon name="refresh" /></IconButton>
          </Tooltip>
          <Button variant="contained" startIcon={<DsIcon name="search" />} onClick={() => setExploring(true)}>Explore pathways</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: '340px minmax(0, 1fr)' }, gap: 6, alignItems: 'start' }}>
        <Box sx={{ position: { lg: 'sticky' }, top: { lg: 84 } }}>
          <MyPathways pathways={PATHWAYS} selectedId={selected.id} />
        </Box>
        <PathwayDetail key={selected.id} p={selected} />
      </Box>

      <ExploreDrawer open={exploring} onClose={() => setExploring(false)} />
    </>
  );
}
