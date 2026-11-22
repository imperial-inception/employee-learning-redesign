// "Your next steps": one useful activity at a time. Each row: icon · title · chip + provider · why it's here · View.
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import { DsIcon } from '@/mui/components/icons';
import type { NextStep } from '@/mui/data/home';
import { ArrowLink, CardHead, HomeCard, IconTile } from './parts';

function StepRow({ step }: { step: NextStep }) {
  return (
    <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 4, py: 4 }}>
      <IconTile name={step.icon} />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="subtitle2" component="h3" sx={{ fontSize: 14, lineHeight: 1.4 }}>{step.title}</Typography>
        <Box sx={{ mt: '6px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
          <Chip label={step.requirement} color={step.requirement === 'Required' ? 'primary' : 'default'} />
          <Typography variant="meta">{step.provider}</Typography>
        </Box>
        <Typography variant="meta" component="p" sx={{ m: 0, mt: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <DsIcon name="target" aria-hidden sx={{ fontSize: 14, color: 'primary.light' }} />
          {step.reason}
        </Typography>
      </Box>
      <ArrowLink href={step.href} aria-label={`View ${step.title}`} sx={{ flexShrink: 0 }}>View</ArrowLink>
    </Box>
  );
}

export function NextSteps({ steps }: { steps: NextStep[] }) {
  return (
    <HomeCard component="section" aria-labelledby="home-next-title">
      <CardHead id="home-next-title" title="Your next steps" subtitle="One useful activity at a time."
        action={<ArrowLink href="/mui/learning">View all</ArrowLink>} />
      <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: 2, p: 0 }}>
        {steps.map((s, i) => (
          <Fragment key={s.id}>
            {i > 0 && <Divider component="li" aria-hidden />}
            <StepRow step={s} />
          </Fragment>
        ))}
      </Box>
    </HomeCard>
  );
}
