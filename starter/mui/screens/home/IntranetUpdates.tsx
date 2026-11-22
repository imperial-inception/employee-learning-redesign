// "Relevant from the intranet": community posts that match the person's topics. Hide one, or show all.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { DsIcon } from '@/mui/components/icons';
import type { IntranetUpdate } from '@/mui/data/home';
import { CardHead, HomeCard } from './parts';

const SHOWN = 3;

function UpdateItem({ u, onHide }: { u: IntranetUpdate; onHide: () => void }) {
  return (
    <Box component="li" sx={{ p: 4, borderRadius: '10px', border: 1, borderColor: 'divider', bgcolor: 'ds.surface2' }}>
      <Chip label="Community content" />
      <Typography variant="meta" component="div" sx={{ mt: 2 }}>Intranet · {u.kind} · {u.date}</Typography>
      <Box sx={{ mt: 1, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
        <Typography variant="subtitle2" component="h3" sx={{ flex: 1, minWidth: 0, fontSize: 14, lineHeight: 1.4 }}>{u.title}</Typography>
        <Tooltip title="Hide this update">
          <IconButton size="small" aria-label={`Hide ${u.title}`} onClick={onHide} sx={{ mt: '-4px', mr: '-6px' }}>
            <DsIcon name="eyeoff" />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography variant="meta" component="p" sx={{ m: 0, mt: 1 }}>{u.match}</Typography>
      <Button href={u.href} target="_blank" rel="noopener noreferrer" variant="text" size="small" endIcon={<DsIcon name="ext" />} sx={{ mt: 2, ml: '-8px' }}>
        Open in Intranet
      </Button>
    </Box>
  );
}

export function IntranetUpdates({ updates }: { updates: IntranetUpdate[] }) {
  const [hidden, setHidden] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);
  const visible = updates.filter(u => !hidden.includes(u.id));
  const list = showAll ? visible : visible.slice(0, SHOWN);

  return (
    <HomeCard component="section" aria-labelledby="home-intranet-title">
      <CardHead id="home-intranet-title" title="Relevant from the intranet"
        subtitle="Community articles, questions and events related to your focus goal and interests."
        action={<Button variant="text" size="small">Choose topics</Button>} />
      {list.length ? (
        <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: 4, p: 0, display: 'grid', gap: 3 }}>
          {list.map(u => <UpdateItem key={u.id} u={u} onHide={() => setHidden(h => [...h, u.id])} />)}
        </Box>
      ) : (
        <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>No updates right now. Choose topics to see more.</Typography>
      )}
      {visible.length > SHOWN && (
        <Box sx={{ mt: 3, ml: '-8px' }}>
          <Button variant="text" size="small" onClick={() => setShowAll(s => !s)} aria-expanded={showAll}>
            {showAll ? 'Show fewer' : `Show all ${visible.length} updates`}
          </Button>
        </Box>
      )}
    </HomeCard>
  );
}
