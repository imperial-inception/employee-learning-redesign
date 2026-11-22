// "Keep your progress moving": nudges to put learning to work (record takeaways, show strengths on the profile).
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import type { ProgressNudge } from '@/mui/data/home';
import { ArrowLink, CardHead, HomeCard, IconTile } from './parts';

export function KeepProgress({ nudges }: { nudges: ProgressNudge[] }) {
  return (
    <HomeCard component="section" aria-labelledby="home-keep-title">
      <CardHead id="home-keep-title" title="Keep your progress moving" subtitle="Learning becomes valuable when you put it to work." />
      <Box component="ul" sx={{ listStyle: 'none', m: 0, mt: 2, p: 0 }}>
        {nudges.map((n, i) => (
          <Fragment key={n.id}>
            {i > 0 && <Divider component="li" aria-hidden />}
            <Box component="li" sx={{ display: 'flex', alignItems: 'center', gap: 4, py: 4, minHeight: 72 }}>
              <IconTile name={n.icon} />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="subtitle2" component="h3" sx={{ fontSize: 14, lineHeight: 1.4 }}>{n.title}</Typography>
                <Typography variant="body2" sx={{ mt: '2px', color: 'text.secondary' }}>{n.text}</Typography>
              </Box>
              {n.action && <ArrowLink href={n.action.href} sx={{ flexShrink: 0 }}>{n.action.label}</ArrowLink>}
            </Box>
          </Fragment>
        ))}
      </Box>
    </HomeCard>
  );
}
