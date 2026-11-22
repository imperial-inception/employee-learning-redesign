// The three numbers under the welcome: Required learning · Development goals · Awaiting review. Equal heights.
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DsIcon } from '@/mui/components/icons';
import type { HomeStat } from '@/mui/data/home';
import { CheckCircleIcon, HomeCard } from './parts';

export function StatCards({ stats }: { stats: HomeStat[] }) {
  return (
    <Box component="ul" aria-label="Your development at a glance"
      sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 5, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' } }}>
      {stats.map(s => (
        <Box component="li" key={s.id} sx={{ display: 'flex' }}>
          <HomeCard sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
              <Typography variant="subtitle2" component="div" sx={{ color: 'text.secondary', fontWeight: 600 }}>{s.label}</Typography>
              <Box aria-hidden sx={{ color: 'primary.light', display: 'flex' }}>
                {s.icon === 'check-circle' ? <CheckCircleIcon sx={{ fontSize: 20 }} /> : <DsIcon name={s.icon} sx={{ fontSize: 20 }} />}
              </Box>
            </Box>
            <Typography sx={{ mt: 3, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: t => t.typography.h1.fontFamily, fontVariantNumeric: 'tabular-nums', color: s.value === '—' ? 'text.secondary' : 'text.primary' }}>
              {s.value}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>{s.sub}</Typography>
          </HomeCard>
        </Box>
      ))}
    </Box>
  );
}
