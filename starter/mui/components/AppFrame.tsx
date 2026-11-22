// The app's CURRENT frame, polished: the blue top bar (menu button, logo, Skill Portal, notifications, help,
// theme, avatar), the left menu with "My development" and "Administration", and breadcrumbs above the page.
// Same structure and items as today. Only fix: the admin "Pathways" item is called "Pathway templates", so the menu
// no longer has two items with the same name.
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SvgIcon from '@mui/material/SvgIcon';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import NextLink from 'next/link';
import { useState, type ReactNode } from 'react';
import { DsIcon } from './icons';
import type { IconName } from '@/components/ds/icon-paths.generated';
import { site } from '@/lib/site';
import { getTheme, setTheme, useThemeMode } from '@/lib/theme';

export const DRAWER_WIDTH = 248;
export const me = { name: 'Jordan Lee', firstName: 'Jordan', initials: 'JL', role: 'Systems Engineer' };

type NavItem = { id: string; label: string; icon: IconName; href: string };
const MY_DEVELOPMENT: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home', href: '/mui/home' },
  { id: 'learning', label: 'Learning', icon: 'book', href: '/mui/learning' },
  { id: 'pathways', label: 'Pathways', icon: 'route', href: '/mui/pathways' },
  { id: 'goals', label: 'Goals', icon: 'flag', href: '/mui' },
  { id: 'profile', label: 'Profile', icon: 'user', href: '/mui' },
  { id: 'colleagues', label: 'Colleagues', icon: 'users', href: '/mui' },
  { id: 'agents', label: 'Agent access', icon: 'sliders', href: '/mui' },
];
const ADMINISTRATION: NavItem[] = [
  { id: 'catalog', label: 'Catalog', icon: 'book', href: '/mui' },
  { id: 'settings', label: 'Settings', icon: 'sliders', href: '/mui' },
  { id: 'templates', label: 'Pathway templates', icon: 'route', href: '/mui' },
  { id: 'sources', label: 'Sources', icon: 'cloud', href: '/mui' },
];

const MenuIcon = () => (
  <SvgIcon viewBox="0 0 24 24" sx={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' }}><path d="M4 7h16M4 12h16M4 17h16" /></SvgIcon>
);

function NavList({ items, active }: { items: NavItem[]; active: string }) {
  return (
    <List sx={{ display: 'grid', gap: '2px' }}>
      {items.map(it => (
        <ListItemButton key={it.id} component={NextLink} href={it.href} selected={active === it.id} aria-current={active === it.id ? 'page' : undefined}>
          <ListItemIcon><DsIcon name={it.icon} /></ListItemIcon>
          <ListItemText primary={it.label} />
        </ListItemButton>
      ))}
    </List>
  );
}

export function AppFrame({ active, crumbs, children }: { active: string; crumbs: Array<{ label: string; href?: string }>; children: ReactNode }) {
  const mode = useThemeMode();
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="fixed" sx={{ zIndex: t => t.zIndex.drawer + 1 }}>
        <Toolbar sx={{ gap: 2 }}>
          <IconButton aria-label={open ? 'Hide menu' : 'Show menu'} onClick={() => setOpen(o => !o)} sx={{ color: '#fff', '&:hover': { color: '#fff', bgcolor: alpha('#fff', 0.12) } }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ width: 32, height: 32, borderRadius: '9px', display: 'grid', placeItems: 'center', bgcolor: alpha('#fff', 0.16), boxShadow: `inset 0 0 0 1px ${alpha('#fff', 0.28)}` }}>
            <DsIcon name="cap" sx={{ fontSize: 19, color: '#fff' }} />
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em', fontFamily: t => t.typography.h5.fontFamily }}>{site.name}</Typography>
          <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1, '& .MuiIconButton-root': { color: alpha('#fff', 0.88), '&:hover': { color: '#fff', bgcolor: alpha('#fff', 0.12) } } }}>
            <Tooltip title="Notifications">
              <IconButton aria-label="Notifications, 2 new"><Badge color="error" variant="dot" overlap="circular"><DsIcon name="bell" /></Badge></IconButton>
            </Tooltip>
            <Tooltip title="Help"><IconButton aria-label="Help"><DsIcon name="help" /></IconButton></Tooltip>
            <Tooltip title={mode === 'dark' ? 'Light theme' : 'Dark theme'}>
              <IconButton aria-label="Switch theme" onClick={() => setTheme(getTheme() === 'light' ? 'dark' : 'light')}><DsIcon name={mode === 'dark' ? 'sun2' : 'moon'} /></IconButton>
            </Tooltip>
            <Tooltip title={`${me.name} · ${me.role}`}>
              <IconButton aria-label="Account" sx={{ p: '4px', ml: 1 }}>
                <Avatar sx={{ width: 30, height: 30, fontSize: 12, background: alpha('#fff', 0.22), boxShadow: `inset 0 0 0 1px ${alpha('#fff', 0.35)}` }}>{me.initials}</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" open={open}
        sx={{ width: open ? DRAWER_WIDTH : 0, flexShrink: 0, transition: 'width .2s', '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box', px: 3, pt: '68px', pb: 4 } }}>
        <ListSubheader disableSticky sx={{ pt: '4px' }}>My development</ListSubheader>
        <NavList items={MY_DEVELOPMENT} active={active} />
        <ListSubheader disableSticky>Administration</ListSubheader>
        <NavList items={ADMINISTRATION} active={active} />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, minWidth: 0, pt: '56px' }}>
        <Box sx={{ px: 8, height: 46, display: 'flex', alignItems: 'center', borderBottom: 1, borderColor: 'divider', bgcolor: t => alpha(t.palette.background.paper, 0.5) }}>
          <Breadcrumbs separator={<DsIcon name="cr" sx={{ fontSize: 14 }} />}>
            {crumbs.map((c, i) => c.href && i < crumbs.length - 1
              ? <Link key={c.label} component={NextLink} href={c.href} underline="hover" color="inherit" sx={{ fontWeight: 500 }}>{c.label}</Link>
              : <Typography key={c.label} sx={{ fontSize: 13, fontWeight: i === crumbs.length - 1 ? 600 : 500, color: i === crumbs.length - 1 ? 'text.primary' : 'text.secondary' }}>{c.label}</Typography>)}
          </Breadcrumbs>
        </Box>
        <Box sx={{ maxWidth: 1320, mx: 'auto', px: 8, pt: 7, pb: 12 }}>{children}</Box>
      </Box>
    </Box>
  );
}
