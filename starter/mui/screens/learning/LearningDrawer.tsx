// The item detail drawer (right): type, title + code, status and duration, Provider / Format, the specific
// reason this learning fits Jordan, and the actions (Open training, Copy link, Record your learning, plan).
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { DsIcon } from '@/mui/components/icons';
import { SectionLabel, StatusChip, kindLabel } from '@/mui/components/labels';
import type { LearningItem } from '@/mui/data/learning';
import { useLearning } from './context';
import { LevelChip, PlanAction, TypeTile, copyLink, hoursLabel, statusLabel } from './LearningRow';

function Fact({ label, value }: { label: string; value?: string }) {
  return (
    <Box sx={{ display: 'grid', gap: 1 }}>
      <Typography variant="meta">{label}</Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>{value ?? '—'}</Typography>
    </Box>
  );
}

export function LearningDrawer({ item, onClose }: { item: LearningItem | null; onClose: () => void }) {
  const { notify } = useLearning();
  return (
    <Drawer anchor="right" open={Boolean(item)} onClose={onClose}
      PaperProps={{ role: 'dialog', 'aria-labelledby': 'learning-drawer-title', sx: { width: { xs: '100%', sm: 440 }, p: 6, display: 'flex', flexDirection: 'column', gap: 5 } }}>
      {item && (
        <>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <TypeTile kind={item.kind} size={44} />
            <IconButton aria-label="Close details" onClick={onClose} sx={{ mr: -2, mt: -1 }}><DsIcon name="x" /></IconButton>
          </Box>

          <Box sx={{ display: 'grid', gap: 2 }}>
            <SectionLabel>{kindLabel(item.kind)}</SectionLabel>
            <Typography variant="h5" component="h2" id="learning-drawer-title" sx={{ fontSize: 21 }}>{item.title}</Typography>
            {item.code && <Typography variant="mono" sx={{ color: 'text.secondary', mt: -1 }}>{item.code}</Typography>}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1, flexWrap: 'wrap' }}>
              <StatusChip status={item.status} label={statusLabel(item.status)} />
              <Chip variant="outlined" icon={<DsIcon name="clock" />} label={hoursLabel(item.hours) ?? 'Duration not set'} />
              <LevelChip level={item.level} />
              {item.requirement === 'mandatory' && <Chip color="warning" label="Mandatory" />}
            </Box>
            {item.description && <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>{item.description}</Typography>}
          </Box>

          <Divider />
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            <Fact label="Provider" value={item.provider} />
            <Fact label="Format" value={item.format} />
          </Box>
          <Divider />

          <Box sx={{
            p: 5, borderRadius: '12px', border: 1, borderColor: t => alpha(t.palette.primary.light, 0.28),
            background: t => `linear-gradient(135deg, ${t.palette.ds.heroWash}, transparent 70%), ${t.palette.ds.surface2}`,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <DsIcon name="target" sx={{ fontSize: 17, color: 'primary.light' }} />
              <Typography variant="h6" component="h3">Why this learning fits</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.primary', fontSize: 13.5 }}>{item.why}</Typography>
          </Box>

          <Box sx={{ display: 'grid', gap: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button variant="contained" endIcon={<DsIcon name="ext" />} href={item.url} target="_blank" rel="noopener noreferrer">Open training</Button>
              <Button variant="text" startIcon={<DsIcon name="link" />} onClick={() => copyLink(item.url, notify)}>Copy link</Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button variant="outlined" startIcon={<DsIcon name="record" />} onClick={() => notify('Recording opens the learning record form')}>Record your learning</Button>
              <PlanAction item={item} size="medium" />
            </Box>
          </Box>
        </>
      )}
    </Drawer>
  );
}
