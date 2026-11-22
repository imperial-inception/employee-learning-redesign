// /mui: the re-skin at a glance. Every MUI component the app uses, styled by the brand-preserving theme
// (mui/theme), plus links to the recreated screens. Codex compares the themed app against this page.
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LinearProgress from '@mui/material/LinearProgress';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';
import Switch from '@mui/material/Switch';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import NextLink from 'next/link';
import { useState, type ReactNode } from 'react';
import { heroSx } from '@/mui/theme';
import { AppFrame } from '@/mui/components/AppFrame';
import { DsIcon } from '@/mui/components/icons';
import { KindChip, SectionLabel, StatusChip } from '@/mui/components/labels';
import { site } from '@/lib/site';

function Block({ title, sub, children, span }: { title: string; sub?: string; children: ReactNode; span?: boolean }) {
  return (
    <Card sx={{ gridColumn: span ? '1 / -1' : undefined }}>
      <CardHeader title={title} subheader={sub} />
      <CardContent sx={{ pt: '4px !important', display: 'grid', gap: 4 }}>{children}</CardContent>
    </Card>
  );
}
const Row = ({ children }: { children: ReactNode }) => <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>{children}</Box>;

const SCREENS = [
  { href: '/mui/home', title: 'Home', note: 'Your current Home, re-skinned; level prompt shown once; next steps with reasons' },
  { href: '/mui/learning', title: 'Learning', note: 'For your role · Discover learning · Recommendations, same tabs; no "course link missing"; real reasons' },
  { href: '/mui/pathways', title: 'Pathways', note: 'Same page; stage status from data; one structure; one refresh control' },
];

export default function MuiIndex() {
  const [tab, setTab] = useState(0);
  const [kind, setKind] = useState('all');
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  return (
    <>
      <Head><title>{`${site.name}: re-skin`}</title></Head>
      <AppFrame active="" crumbs={[{ label: 'My development' }, { label: 'Re-skin' }]}>
        <SectionLabel sx={{ mb: 2 }}>The re-skin</SectionLabel>
        <Typography variant="h4">Same app, polished</Typography>
        <Typography variant="subtitle1" sx={{ mt: 2, mb: 7, maxWidth: 760 }}>
          The app&apos;s own blue brand, layout and screens, with cleaner components: one theme file
          (<code>mui/theme</code>) restyles every MUI screen at once. Press <b>T</b> or use the sun/moon to switch themes.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5, mb: 8 }}>
          {SCREENS.map((s, i) => (
            <Card key={s.href} sx={i === 0 ? heroSx : undefined}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>{s.title}</Typography>
                <Typography variant="meta" component="p" sx={{ mb: 4, minHeight: 40 }}>{s.note}</Typography>
                <Button component={NextLink} href={s.href} variant={i === 0 ? 'contained' : 'outlined'} endIcon={<DsIcon name="arrow" />}>Open</Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 5, alignItems: 'start' }}>
          <Block title="Buttons" sub="One contained (primary) button per area; the rest outlined or text">
            <Row>
              <Button variant="contained" endIcon={<DsIcon name="arrow" />}>Create a goal</Button>
              <Button variant="outlined">Choose level</Button>
              <Button variant="text" endIcon={<DsIcon name="arrow" />}>Browse learning</Button>
              <Button variant="outlined" color="error">Remove</Button>
            </Row>
            <Row>
              <Button size="small" variant="contained">Small</Button>
              <Button size="small" variant="outlined" startIcon={<DsIcon name="ext" />}>Open training</Button>
              <Button size="large" variant="contained">Large</Button>
              <Button variant="outlined" disabled>Disabled</Button>
              <Tooltip title="Refresh"><IconButton aria-label="Refresh"><DsIcon name="refresh" /></IconButton></Tooltip>
            </Row>
          </Block>

          <Block title="Chips and status" sub="Small, tinted; status is always icon + text">
            <Row>
              <KindChip kind="formal" /><KindChip kind="rel" /><KindChip kind="exp" />
              <Chip label="Optional" /><Chip label="Mandatory" color="warning" /><Chip label="Suggested" color="primary" /><Chip variant="outlined" label="LMS" />
            </Row>
            <Row>
              <StatusChip status="not_started" /><StatusChip status="in_progress" /><StatusChip status="submitted" />
              <StatusChip status="approved" /><StatusChip status="returned" /><StatusChip status="rejected" />
            </Row>
          </Block>

          <Block title="Alerts" sub="Calm tinted strips with an accent edge instead of solid blocks">
            <Alert severity="info" action={<Button size="small" variant="outlined">Choose level</Button>}>Choose your current level to see the learning that is right for you.</Alert>
            <Alert severity="success">Your learning was approved. It now counts toward your goal.</Alert>
            <Alert severity="warning"><AlertTitle>Due soon</AlertTitle>Communicating Technical Risk is required by 15 Jan.</Alert>
            <Alert severity="error">The intranet source didn&apos;t refresh. Showing yesterday&apos;s items.</Alert>
          </Block>

          <Block title="Tabs, toggles, pagination">
            <Tabs value={tab} onChange={(_, v) => setTab(v)}>
              <Tab label="For your role" /><Tab label="Discover learning" /><Tab label="Recommendations" />
            </Tabs>
            <Row>
              <ToggleButtonGroup exclusive value={kind} onChange={(_, v) => v && setKind(v)} aria-label="Learning type">
                <ToggleButton value="all">All types</ToggleButton><ToggleButton value="formal">Formal</ToggleButton>
                <ToggleButton value="rel">Relational</ToggleButton><ToggleButton value="exp">Experiential</ToggleButton>
              </ToggleButtonGroup>
              <Pagination count={12} page={1} sx={{ ml: 'auto' }} />
            </Row>
          </Block>

          <Block title="Inputs">
            <TextField placeholder="Title, skill or topic" fullWidth
              InputProps={{ startAdornment: <InputAdornment position="start"><DsIcon name="search" /></InputAdornment> }} />
            <Row>
              <Select size="small" value="all" sx={{ minWidth: 160 }}><MenuItem value="all">All statuses</MenuItem><MenuItem value="ns">Not started</MenuItem></Select>
              <Select size="small" value="all" sx={{ minWidth: 140 }}><MenuItem value="all">All levels</MenuItem><MenuItem value="l1">L1</MenuItem></Select>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Explain with AI" />
              <FormControlLabel control={<Switch defaultChecked />} label="Reminders" />
              <FormControlLabel control={<Radio checked />} label="L2" />
            </Row>
            <TextField multiline minRows={2} fullWidth placeholder="What would you like to learn?" />
          </Block>

          <Block title="Progress, people, loading">
            <Box><Row><Typography variant="label">Systems engineering development</Typography><Typography variant="meta" sx={{ ml: 'auto' }}>2 / 5 activities approved</Typography></Row>
              <LinearProgress variant="determinate" value={40} color="success" sx={{ mt: 2 }} /></Box>
            <Row>
              <Avatar>JL</Avatar><AvatarGroup max={4}><Avatar>PN</Avatar><Avatar>WC</Avatar><Avatar>MG</Avatar><Avatar>DO</Avatar><Avatar>FA</Avatar></AvatarGroup>
              <Button variant="outlined" onClick={() => setOpen(true)}>Open dialog</Button>
              <Button variant="outlined" onClick={e => setMenu(e.currentTarget)} endIcon={<DsIcon name="cd" />}>Menu</Button>
              <Menu anchorEl={menu} open={!!menu} onClose={() => setMenu(null)}>
                <MenuItem onClick={() => setMenu(null)}><DsIcon name="ext" sx={{ fontSize: 16 }} />Open training</MenuItem>
                <MenuItem onClick={() => setMenu(null)}><DsIcon name="link" sx={{ fontSize: 16 }} />Copy link</MenuItem>
                <MenuItem onClick={() => setMenu(null)}><DsIcon name="clip" sx={{ fontSize: 16 }} />Record your learning</MenuItem>
              </Menu>
            </Row>
            <Box sx={{ display: 'grid', gap: 2 }}><Skeleton height={14} width="60%" /><Skeleton height={14} width="85%" /></Box>
          </Block>

          <Block title="Table" sub="Admin catalog style" span>
            <Table>
              <TableHead><TableRow><TableCell>Activity</TableCell><TableCell>Type</TableCell><TableCell>Provider</TableCell><TableCell>Level</TableCell><TableCell align="right">Duration</TableCell></TableRow></TableHead>
              <TableBody>
                {[['Interface Management', 'formal', 'Academy', 'L2', '2.0 h'], ['Shadow an interface review board', 'rel', 'Your team', 'L2', '—'], ['Multi-tool practice for issue resolution', 'exp', 'Your program', 'L3', '—']].map(r => (
                  <TableRow key={r[0]} hover>
                    <TableCell sx={{ fontWeight: 600 }}>{r[0]}</TableCell><TableCell><KindChip kind={r[1] as 'formal'} /></TableCell>
                    <TableCell>{r[2]}</TableCell><TableCell>{r[3]}</TableCell><TableCell align="right">{r[4]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Block>
        </Box>

        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
          <DialogTitle>Create a goal</DialogTitle>
          <DialogContent sx={{ display: 'grid', gap: 3 }}>
            <TextField label="Goal" fullWidth defaultValue="Lead interface control for the flight-control upgrade" />
            <TextField label="Due date" fullWidth defaultValue="31 Dec 2026" />
          </DialogContent>
          <DialogActions><Button variant="text" onClick={() => setOpen(false)}>Cancel</Button><Button variant="contained" onClick={() => setOpen(false)}>Create goal</Button></DialogActions>
        </Dialog>
      </AppFrame>
    </>
  );
}
