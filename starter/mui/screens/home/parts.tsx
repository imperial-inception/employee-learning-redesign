// Small building blocks shared by the Home cards: card shell with 20px padding, card header, icon tile, arrow link.
import Box from '@mui/material/Box';
import Button, { type ButtonProps } from '@mui/material/Button';
import Card, { type CardProps } from '@mui/material/Card';
import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import NextLink from 'next/link';
import type { ReactNode } from 'react';
import type { IconName } from '@/components/ds/icon-paths.generated';
import { DsIcon } from '@/mui/components/icons';

/** Card with the page's standard 20px padding. Extra sx (e.g. heroSx) goes on the card itself. */
export function HomeCard({ children, sx, ...props }: CardProps) {
  return (
    <Card {...props} sx={sx}>
      <Box sx={{ p: 5, height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</Box>
    </Card>
  );
}

/** One title per card, a muted subtitle, and an optional action at the top right. */
export function CardHead({ id, title, subtitle, action }: { id?: string; title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
        <Typography id={id} variant="h5" component="h2" sx={{ flex: 1, minWidth: 0 }}>{title}</Typography>
        {action && <Box sx={{ flexShrink: 0, mr: -2, mt: '-3px' }}>{action}</Box>}
      </Box>
      {subtitle && <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>{subtitle}</Typography>}
    </Box>
  );
}

/** Line-icon check in a circle (same stroke as the other icons): the "Required learning" mark. */
export function CheckCircleIcon(props: Omit<SvgIconProps, 'children'>) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props} sx={{ fill: 'none', ...props.sx }}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.2 2.5 2.5 4.8-5" />
    </SvgIcon>
  );
}

/** Tinted square that holds a row's icon (activities, nudges). */
export function IconTile({ name }: { name: IconName }) {
  return (
    <Box aria-hidden sx={{
      width: 40, height: 40, flexShrink: 0, borderRadius: '10px', display: 'grid', placeItems: 'center',
      color: 'primary.light', bgcolor: t => alpha(t.palette.primary.main, t.palette.mode === 'dark' ? 0.2 : 0.09),
      boxShadow: t => `inset 0 0 0 1px ${alpha(t.palette.primary.light, 0.18)}`,
    }}>
      <DsIcon name={name} sx={{ fontSize: 20 }} />
    </Box>
  );
}

/** Text button with a trailing arrow ("View →", "View all →", "Profile →") that navigates inside the app. */
export function ArrowLink({ href, children, ...props }: { href: string; children: ReactNode } & Omit<ButtonProps, 'href' | 'children'>) {
  return (
    <Button component={NextLink} href={href} variant="text" size="small" endIcon={<DsIcon name="arrow" />} {...props}>
      {children}
    </Button>
  );
}
