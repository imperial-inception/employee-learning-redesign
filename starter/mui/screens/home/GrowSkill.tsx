// "Grow a skill": the biggest gap for the next level and three ways to grow it, side by side:
// learn (a course) · learn from someone (a colleague) · practise / community. A toggle switches between the gaps.
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import type { IconName } from '@/components/ds/icon-paths.generated';
import { DsIcon } from '@/mui/components/icons';
import { KindChip, SectionLabel, WhyText } from '@/mui/components/labels';
import type { GrowOption, GrowSkill as GrowSkillData } from '@/mui/data/home';
import { KindTile } from '@/mui/screens/pathways/parts';
import { Panel } from './parts';

const WAY: Record<GrowOption['way'], { label: string; icon: IconName }> = {
  learn: { label: 'Learn', icon: 'cap' },
  person: { label: 'Learn from someone', icon: 'users' },
  practice: { label: 'Practise · community', icon: 'brief' },
};

function OptionTile({ o, done, onAction }: { o: GrowOption; done: boolean; onAction: () => void }) {
  return (
    <Box component="li" sx={{ minWidth: 0, display: 'flex', flexDirection: 'column', p: 4, borderRadius: '10px', border: 1, borderColor: 'divider', bgcolor: 'ds.surface2' }}>
      <SectionLabel sx={{ fontSize: 10.5 }}>{WAY[o.way].label}</SectionLabel>
      <Box sx={{ mt: 2.5, display: 'grid', gridTemplateColumns: '36px minmax(0, 1fr)', columnGap: 3, alignItems: 'center' }}>
        {o.person
          ? <Avatar sx={{ width: 36, height: 36, fontSize: 12.5 }}>{o.person.initials}</Avatar>
          : o.kind ? <KindTile kind={o.kind} size={36} /> : (
            <Box aria-hidden sx={{ width: 36, height: 36, borderRadius: '9px', display: 'grid', placeItems: 'center', color: 'text.secondary', bgcolor: 'ds.surface3' }}>
              <DsIcon name={o.way === 'practice' ? 'cal' : WAY[o.way].icon} sx={{ fontSize: 18 }} />
            </Box>
          )}
        <Box sx={{ minWidth: 0 }}>
          <Typography component="h3" sx={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.35, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {o.title}
            {o.code && <Typography component="span" variant="mono" sx={{ ml: 1.5, fontSize: 11.5, color: 'text.secondary' }}>{o.code}</Typography>}
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
            {o.kind && <KindChip kind={o.kind} />}
            <Typography variant="meta" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.meta}</Typography>
          </Box>
        </Box>
      </Box>
      <WhyText sx={{ mt: 2.5, fontSize: 13 }}>{o.why}</WhyText>
      <Box sx={{ mt: 'auto', pt: 3.5 }}>
        {done ? (
          <Chip variant="outlined" color="primary" icon={<DsIcon name="check" />} label={o.action.label === 'Add to plan' ? 'In your plan' : 'Done'} sx={{ fontWeight: 600, height: 30 }} />
        ) : (
          <Button variant={o.action.variant} size="small" onClick={onAction} sx={o.action.variant === 'text' ? { ml: -2 } : undefined}
            startIcon={o.action.label === 'Add to plan' ? <DsIcon name="plus" /> : o.action.label === 'Add to calendar' ? <DsIcon name="cal" /> : undefined}>
            {o.action.label}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export function GrowSkill({ skills, target, areaId, onAreaChange, notify }: {
  skills: GrowSkillData[]; target: string; areaId?: string; onAreaChange: (areaId: string) => void; notify: (m: string) => void;
}) {
  const [done, setDone] = useState<string[]>([]);
  const skill = skills.find(s => s.areaId === areaId) ?? skills[0];
  if (!skill) return null;
  const act = (o: GrowOption) => {
    if (o.way === 'person') { notify(`A message to ${o.person?.name ?? o.title} opens in chat`); return; }
    setDone(d => [...d, o.id]);
    notify(o.action.label === 'Add to calendar' ? `“${o.title}” added to your calendar` : o.action.label === 'Add to plan' ? `Added “${o.title}” to your plan` : `Sam gets a note: ${o.title}`);
  };
  return (
    <Panel id="grow-skill"
      title={<>
        <b>Grow a skill: {skill.name}</b>
        <Chip color="warning" label={`Gap for ${target}`} />
      </>}
      action={
        <ToggleButtonGroup exclusive size="small" value={skill.areaId} onChange={(_, v: string | null) => v && onAreaChange(v)} aria-label="Choose a skill to grow" sx={{ mr: 2 }}>
          {skills.map(s => <ToggleButton key={s.areaId} value={s.areaId}>{s.name}</ToggleButton>)}
        </ToggleButtonGroup>
      }>
      <Box component="ul" aria-label={`Ways to grow ${skill.name}`} sx={{ listStyle: 'none', m: 0, p: 4, display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' } }}>
        {skill.options.map(o => <OptionTile key={o.id} o={o} done={done.includes(o.id)} onAction={() => act(o)} />)}
      </Box>
    </Panel>
  );
}

