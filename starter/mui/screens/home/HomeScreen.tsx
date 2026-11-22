// Home (/mui/home): a Skill Portal home about SKILLS. What you can do, what is missing for the next level, and
// how to close the gap, with what needs you one glance away.
//   header  greeting · role and level · one summary line of links · Record learning · refresh
//   row 1   Your skills (the one highlight, 3/5)          | Your focus (compact) + Needs you (2/5)
//   row 2   Grow a skill: the biggest gap, three ways to grow it (full width)
//   row 3   Recently added (2/5)                         | From the intranet (3/5)
// ?state=new: Get started (highlight) | Needs you · Your skills with empty meters · From the intranet.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Snackbar from '@mui/material/Snackbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState, type ReactNode } from 'react';
import { me } from '@/mui/components/AppFrame';
import { DsIcon } from '@/mui/components/icons';
import { SectionLabel } from '@/mui/components/labels';
import { greetingFor, hasEvidence, HOME, needsAction, waitingOnManager, type HomeData, type HomeState } from '@/mui/data/home';
import { FocusCard } from './FocusCard';
import { GetStarted } from './GetStarted';
import { GrowSkill } from './GrowSkill';
import { IntranetRow } from './IntranetRow';
import { NeedsYou } from './NeedsYou';
import { RecentlyAdded } from './RecentlyAdded';
import { SkillsCard } from './SkillsCard';

const RECORD_MSG = 'Recording opens the learning record form';
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

function useGreeting() {
  const [greeting, setGreeting] = useState('Good afternoon');
  useEffect(() => { setGreeting(greetingFor(new Date().getHours())); }, []);
  return greeting;
}

/** "2 things need you · 1 in review · 3 of 6 skill areas for L3": each part jumps to the card that explains it. */
function SummaryLine({ data }: { data: HomeData }) {
  const target = data.skills.targetLevel;
  const parts = [
    { label: `${plural(needsAction(data.needsYou).length, 'thing needs', 'things need')} you`, href: '#needs-you' },
    { label: `${waitingOnManager(data.needsYou).length} in review`, href: '#needs-you' },
    ...(target ? [{ label: `${data.skills.areas.filter(hasEvidence).length} of ${data.skills.areas.length} skill areas for ${target}`, href: '#your-skills' }] : []),
  ];
  return (
    <Typography component="p" sx={{ m: 0, mt: 1, fontSize: 14, color: 'text.secondary' }}>
      {parts.map((p, i) => (
        <Fragment key={p.label}>
          {i > 0 && <Box component="span" aria-hidden sx={{ mx: 2, color: 'text.disabled' }}>·</Box>}
          <Link href={p.href} underline="hover" sx={{ fontSize: 14 }}>{p.label}</Link>
        </Fragment>
      ))}
    </Typography>
  );
}

/** Two columns from 1200px: `split` is the left share (3 = 3/5, 2 = 2/5). Cells stretch to equal heights. */
function Row({ split = 3, children }: { split?: 2 | 3; children: ReactNode }) {
  return (
    <Box sx={{ display: 'grid', gap: 5, alignItems: 'stretch', gridTemplateColumns: { xs: '1fr', lg: `minmax(0, ${split}fr) minmax(0, ${5 - split}fr)` } }}>
      {children}
    </Box>
  );
}

export function HomeScreen() {
  const router = useRouter();
  const state: HomeState = router.query.state === 'new' ? 'new' : 'active';
  const data = HOME[state];
  const fresh = state === 'new';
  const greeting = useGreeting();
  const [toast, setToast] = useState<string | null>(null);
  const notify = (m: string) => setToast(m);
  const record = () => notify(RECORD_MSG);
  const target = data.skills.targetLevel;
  // "Gap for L3" on Your skills selects that gap in Grow a skill.
  const [growArea, setGrowArea] = useState<string | undefined>(undefined);
  const growable = new Set(data.grow.map(g => g.areaId));
  const showGrow = (areaId: string) => {
    setGrowArea(areaId);
    document.getElementById('grow-skill')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  return (
    <>
      <Box component="header" sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 4, mb: 6 }}>
        <Box sx={{ minWidth: 0 }}>
          <SectionLabel>My development</SectionLabel>
          <Typography variant="h4" sx={{ mt: 1 }}>{fresh ? `Welcome, ${me.firstName}` : `${greeting}, ${me.firstName}`}</Typography>
          {fresh ? (
            <Typography sx={{ mt: 1.5, fontSize: 14, color: 'text.secondary' }}>{data.intro}</Typography>
          ) : (
            <>
              <Typography variant="meta" component="p" sx={{ m: 0, mt: 1, fontSize: 13.5 }}>
                {data.role}{data.level && data.nextLevel && <> · {data.level} → {data.nextLevel}</>}
              </Typography>
              <SummaryLine data={data} />
            </>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
          {!fresh && <Button variant="outlined" startIcon={<DsIcon name="record" />} onClick={record}>Record learning</Button>}
          <Tooltip title="Refresh">
            <IconButton aria-label="Refresh" sx={{ border: 1, borderColor: 'ds.line2', bgcolor: 'background.paper', width: 36, height: 36 }}>
              <DsIcon name="refresh" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gap: 5 }}>
        {fresh ? (
          <>
            <Row>
              {data.setup && <GetStarted steps={data.setup} />}
              <NeedsYou items={data.needsYou} onAction={i => notify(`Revising “${i.title}” opens your learning record`)} />
            </Row>
            <SkillsCard skills={data.skills} />
          </>
        ) : (
          <>
            <Row>
              <SkillsCard hero skills={data.skills} onGrow={id => growable.has(id) && showGrow(id)} />
              <Box sx={{ display: 'grid', gridTemplateRows: data.focus ? 'auto 1fr' : '1fr', gap: 5, minWidth: 0 }}>
                {data.focus && <FocusCard focus={data.focus} onRecord={record} />}
                <NeedsYou items={data.needsYou} onAction={i => notify(`Revising “${i.title}” opens your learning record`)} />
              </Box>
            </Row>
            {data.grow.length > 0 && target && <GrowSkill skills={data.grow} target={target} areaId={growArea} onAreaChange={setGrowArea} notify={notify} />}
          </>
        )}
        {data.recent.length > 0 ? (
          <Row split={2}>
            <RecentlyAdded items={data.recent} />
            <IntranetRow posts={data.intranet.posts} topics={data.intranet.topics} />
          </Row>
        ) : (
          <IntranetRow posts={data.intranet.posts} topics={data.intranet.topics} />
        )}
      </Box>

      <Snackbar open={Boolean(toast)} autoHideDuration={2600} onClose={() => setToast(null)} message={toast} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />
    </>
  );
}
