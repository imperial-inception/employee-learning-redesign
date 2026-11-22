// "Get started" (new user): replaces Your focus and takes its highlight. A numbered 3-step checklist with
// "1 of 3 done"; done steps show a check and muted text. "Choose level" is the page's one contained button.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { DsIcon } from '@/mui/components/icons';
import type { SetupStep } from '@/mui/data/home';
import { ArrowLink, Panel, SlimBar } from './parts';

function StepMarker({ n, done }: { n: number; done: boolean }) {
  return (
    <Box aria-hidden sx={{
      width: 28, height: 28, borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0,
      fontSize: 13, fontWeight: 700, fontVariantNumeric: 'tabular-nums',
      ...(done
        ? { bgcolor: 'success.main', color: 'background.paper' }
        : { border: 1.5, borderColor: 'primary.light', color: 'primary.light' }),
    }}>
      {done ? <DsIcon name="check" sx={{ fontSize: 16, strokeWidth: 2.5 }} /> : n}
    </Box>
  );
}

export function GetStarted({ steps }: { steps: SetupStep[] }) {
  const done = steps.filter(s => s.done).length;
  return (
    <Panel hero id="home-start-title"
      title={<><b>Get started</b><span>· {steps.length} steps</span></>}
      action={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mr: 2 }}>
          <Typography variant="meta" sx={{ whiteSpace: 'nowrap' }}><Box component="b" sx={{ color: 'text.primary', fontWeight: 650 }}>{done} of {steps.length}</Box> done</Typography>
          <Box sx={{ width: 96 }}><SlimBar value={(done / steps.length) * 100} label={`${done} of ${steps.length} setup steps done`} /></Box>
        </Box>
      }>
      <Box component="ol" aria-label="Setup steps" sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {steps.map((s, i) => (
          <Box component="li" key={s.id} aria-label={s.done ? `${s.title}, done` : undefined} sx={{
            display: 'grid', gridTemplateColumns: '28px minmax(0, 1fr) auto', columnGap: 4, alignItems: 'center', px: 5, py: 3.5, minHeight: 72,
            '&:not(:first-of-type)': { borderTop: 1, borderColor: 'divider' },
          }}>
            <StepMarker n={i + 1} done={s.done} />
            <Box sx={{ minWidth: 0 }}>
              <Typography component="h3" sx={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.4, color: s.done ? 'text.secondary' : 'text.primary' }}>{s.title}</Typography>
              <Typography variant="meta" component="p" sx={{ m: 0, mt: '2px' }}>{s.done ? `Done · ${s.why}` : s.why}</Typography>
            </Box>
            {s.action && (
              <Button component={NextLink} href={s.action.href} variant={s.action.primary ? 'contained' : 'outlined'} size="small">{s.action.label}</Button>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ mt: 'auto', px: 5, py: 2, minHeight: 44, display: 'flex', alignItems: 'center', gap: 2, borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="meta">Optional:</Typography>
        <ArrowLink href="/mui/pathways" sx={{ ml: -1 }}>Add a pathway</ArrowLink>
      </Box>
    </Panel>
  );
}
