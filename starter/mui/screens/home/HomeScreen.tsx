// Home (/mui/home): the app's current Home, same sections in the same order, polished.
//   header (MY DEVELOPMENT · Welcome back · refresh) → 3 stat cards → level info strip →
//   left: Your focus · Your next steps · Keep your progress moving | right: Your learning progress · Relevant from the intranet
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { me } from '@/mui/components/AppFrame';
import { DsIcon } from '@/mui/components/icons';
import { SectionLabel } from '@/mui/components/labels';
import { focus, homeStats, intranetUpdates, learningProgress, levelPrompt, nextSteps, progressNudges } from '@/mui/data/home';
import { FocusCard } from './FocusCard';
import { IntranetUpdates } from './IntranetUpdates';
import { KeepProgress } from './KeepProgress';
import { LearningProgress } from './LearningProgress';
import { NextSteps } from './NextSteps';
import { StatCards } from './StatCards';

export function HomeScreen() {
  return (
    <>
      <Box component="header" sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 4, mb: 6 }}>
        <Box>
          <SectionLabel>My development</SectionLabel>
          <Typography variant="h4" sx={{ mt: 1 }}>Welcome back, {me.firstName}</Typography>
        </Box>
        <Tooltip title="Refresh">
          <IconButton aria-label="Refresh" sx={{ border: 1, borderColor: 'ds.line2', bgcolor: 'background.paper' }}>
            <DsIcon name="refresh" />
          </IconButton>
        </Tooltip>
      </Box>

      <StatCards stats={homeStats} />

      <Alert severity="info" icon={<DsIcon name="info" />} sx={{ mt: 5 }}
        action={<Button variant="outlined" size="small">Choose level</Button>}>
        {levelPrompt}
      </Alert>

      <Box sx={{ mt: 5, display: 'grid', gap: 5, alignItems: 'start', gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 2fr) minmax(0, 1fr)' } }}>
        <Box sx={{ display: 'grid', gap: 5, minWidth: 0 }}>
          <FocusCard title={focus.title} text={focus.text} />
          <NextSteps steps={nextSteps} />
          <KeepProgress nudges={progressNudges} />
        </Box>
        <Box component="aside" aria-label="Progress and community" sx={{ display: 'grid', gap: 5, minWidth: 0 }}>
          <LearningProgress text={learningProgress.text} />
          <IntranetUpdates updates={intranetUpdates} />
        </Box>
      </Box>
    </>
  );
}
