// "Your learning progress" (right column). The level prompt lives only in the info strip above, not repeated here.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { CardHead, HomeCard } from './parts';

export function LearningProgress({ text }: { text: string }) {
  return (
    <HomeCard component="section" aria-labelledby="home-progress-title">
      <CardHead id="home-progress-title" title="Your learning progress" />
      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>{text}</Typography>
      <Box sx={{ mt: 4 }}>
        <Button component={NextLink} href="/mui/learning" variant="outlined" size="small">Browse learning</Button>
      </Box>
    </HomeCard>
  );
}
