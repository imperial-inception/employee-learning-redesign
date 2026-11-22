// "Your focus": the one highlighted card on Home (heroSx). Prompts for the next goal.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { DsIcon } from '@/mui/components/icons';
import { SectionLabel } from '@/mui/components/labels';
import { heroSx } from '@/mui/theme';
import { HomeCard } from './parts';

export function FocusCard({ title, text }: { title: string; text: string }) {
  return (
    <HomeCard component="section" aria-labelledby="home-focus-title" sx={heroSx}>
      <SectionLabel>Your focus</SectionLabel>
      <Typography id="home-focus-title" variant="h3" component="h2" sx={{ mt: 2 }}>{title}</Typography>
      <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', maxWidth: 680 }}>{text}</Typography>
      <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 3 }}>
        <Button component={NextLink} href="/mui" variant="contained" endIcon={<DsIcon name="arrow" />}>Create a goal</Button>
        <Button component={NextLink} href="/mui/learning" variant="text">Browse learning</Button>
      </Box>
    </HomeCard>
  );
}
