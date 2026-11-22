// "Explore pathways": the one place to add a published pathway. Search + topic chips, then the list (title, topic,
// size · time · colleagues, the reason when it is suggested, Add / Added). Static: Add does nothing here.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { DsIcon } from '@/mui/components/icons';
import { Count, WhyText } from '@/mui/components/labels';
import { PUBLISHED, TOPICS, hoursText, type Topic } from '@/mui/data/pathways';

export function ExploreDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const [topic, setTopic] = useState<Topic | 'all'>('all');
  const query = q.trim().toLowerCase();
  const list = PUBLISHED
    .filter(p => (topic === 'all' || p.topic === topic) && (!query || `${p.title} ${p.topic}`.toLowerCase().includes(query)))
    .sort((a, b) => Number(Boolean(b.why)) - Number(Boolean(a.why))); // suggested first

  return (
    <Drawer anchor="right" open={open} onClose={onClose}
      PaperProps={{ role: 'dialog', 'aria-labelledby': 'explore-title', sx: { width: { xs: '100%', sm: 480 }, display: 'flex', flexDirection: 'column' } }}>
      <Box sx={{ px: 6, pt: 5, pb: 4, display: 'grid', gap: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" component="h2" id="explore-title">Explore pathways</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: '2px' }}>Published pathways you can add to Mine.</Typography>
          </Box>
          <IconButton aria-label="Close" onClick={onClose} sx={{ mr: -2, mt: -1 }}><DsIcon name="x" /></IconButton>
        </Box>
        <TextField placeholder="Search pathways" value={q} onChange={e => setQ(e.target.value)} inputProps={{ 'aria-label': 'Search pathways' }}
          InputProps={{ startAdornment: <InputAdornment position="start"><DsIcon name="search" /></InputAdornment> }} />
        <Box role="group" aria-label="Topics" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          {(['all', ...TOPICS] as const).map(t => (
            <Chip key={t} label={t === 'all' ? 'All topics' : t} clickable onClick={() => setTopic(t)} aria-pressed={topic === t}
              color={topic === t ? 'primary' : undefined} variant={topic === t ? 'filled' : 'outlined'} sx={{ height: 26 }} />
          ))}
        </Box>
      </Box>

      <Box sx={{ flex: 1, overflowY: 'auto', px: 6, py: 4 }}>
        <Typography variant="meta" component="div" sx={{ mb: 3, display: 'flex', alignItems: 'baseline', gap: 2 }}>
          Published pathways <Count>{list.length}</Count>
        </Typography>
        {list.length === 0 && <Typography variant="body2" sx={{ color: 'text.secondary', py: 6, textAlign: 'center' }}>No published pathways match. Try another topic.</Typography>}
        <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 3 }}>
          {list.map(p => (
            <Box component="li" key={p.id} sx={{
              p: 4, border: 1, borderColor: 'divider', borderRadius: '12px', bgcolor: 'background.paper',
              display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) auto', columnGap: 4, alignItems: 'start',
              transition: 'border-color .15s', '&:hover': { borderColor: 'ds.line2' },
            }}>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="overline" component="div" sx={{ fontSize: 10.5, lineHeight: 1.5 }}>{p.topic}</Typography>
                <Typography component="h3" sx={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.4 }}>{p.title}</Typography>
                <Typography variant="meta" component="div" sx={{ mt: 1 }}>
                  {p.activities} activities · {hoursText(p.hours)} · {p.colleagues} colleagues
                </Typography>
                {p.why && <WhyText sx={{ mt: 2 }}>{p.why}</WhyText>}
              </Box>
              {p.added
                ? <Chip color="success" icon={<DsIcon name="check" />} label="Added" sx={{ mt: 4 }} />
                : <Button variant="outlined" size="small" startIcon={<DsIcon name="plus" />} sx={{ mt: 3.5 }} aria-label={`Add ${p.title}`}>Add</Button>}
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
