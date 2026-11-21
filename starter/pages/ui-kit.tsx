import Head from 'next/head';
import type { ReactNode } from 'react';
import Link from 'next/link';
import MuiButton from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Icon, Kbd, Pill, StatusIcon, StatusPill, Tag, ThemeSegment, TypeDot } from '@/components/ds';
import { iconPaths, type IconName } from '@/components/ds/icon-paths.generated';
import { STATUS, type ApiStatus } from '@/lib/status';
import { site } from '@/lib/site';
import css from './ui-kit.module.css';

const STATUSES = Object.keys(STATUS) as ApiStatus[];

function Section({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <section className={`panel ${css.section}`}>
      <div className="panel-h"><h2>{title}</h2>{note && <span className="cnt">{note}</span>}</div>
      <div className={css.body}>{children}</div>
    </section>
  );
}

export default function UiKit() {
  return (
    <>
      <Head><title>{`${site.name}: component kit`}</title></Head>
      <main className={css.wrap}>
        <header className="ph">
          <div>
            <div className="crumbs"><Link href="/">Reference views</Link><span className="sl">/</span><span>Component kit</span></div>
            <h1>Component kit</h1>
            <p className="sub">Everything in components/ds, in both themes. Press <Kbd>T</Kbd> or use the switch.</p>
          </div>
          <div className="acts"><ThemeSegment /></div>
        </header>

        <div className={css.cols}>
          <Section title="Buttons" note="one primary per screen">
            <div className="row">
              <Button variant="primary">Approve <Kbd>A</Kbd></Button>
              <Button>Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="ok">Ok</Button>
              <Button variant="ghost" danger>Reject</Button>
            </div>
            <div className="row">
              <Button size="sm"><Icon name="plus" size="xs" /> Add to plan</Button>
              <Button size="lg" variant="primary">Large primary</Button>
              <Button href="/views/01-home" variant="ghost" size="sm">Link button <Icon name="arrow" size="xs" /></Button>
              <Button disabled>Disabled</Button>
            </div>
          </Section>

          <Section title="Status" note="map only from the API enum">
            <div className={css.statusGrid}>
              {STATUSES.map(s => (
                <div key={s} className="row"><StatusIcon status={s} /><span className="t2">{STATUS[s].label}</span><code className="mono faint">{s}</code></div>
              ))}
            </div>
            <div className="row" style={{ flexWrap: 'wrap' }}>
              {STATUSES.map(s => <StatusPill key={s} status={s} size="sm" />)}
            </div>
          </Section>

          <Section title="Pills, tags, keys">
            <div className="row" style={{ flexWrap: 'wrap' }}>
              <Pill tone="ok">Approved</Pill><Pill tone="rev">In review</Pill><Pill tone="ret">Returned</Pill>
              <Pill tone="bad">Rejected</Pill><Pill tone="acc"><Icon name="target" size="xs" /> Focus goal</Pill>
              <Pill tone="info">Notice</Pill><Pill tone="neu">Neutral</Pill><Pill tone="rev" size="sm">small</Pill>
            </div>
            <div className="row">
              <Tag><TypeDot kind="formal" />Formal</Tag><Tag><TypeDot kind="rel" />Relational</Tag>
              <Tag><TypeDot kind="exp" />Experiential</Tag><Tag className="mono">0.5 h</Tag><Tag>LMS</Tag>
              <Kbd>Ctrl K</Kbd><Kbd>/</Kbd>
            </div>
          </Section>

          <Section title="People">
            <div className="row">
              <Avatar initials="JL" /><Avatar initials="PN" tone={2} /><Avatar initials="OH" tone={3} />
              <Avatar initials="DO" tone={4} /><Avatar initials="FA" tone={5} /><Avatar initials="WC" tone={6} />
              <Avatar initials="JL" size="xs" /><Avatar initials="JL" size="sm" /><Avatar initials="JL" size="lg" />
            </div>
          </Section>

          <Section title="List rows" note="title + at most two metadata items">
            <div className={css.flush}>
              <div className="li"><StatusIcon status="returned" /><div className="grow"><div className="t">Clear Status &amp; Issue Communication</div><div className="c">Sam: “Add one example from the CDR prep.”</div></div><Button size="sm">Revise</Button></div>
              <div className="li hover"><StatusIcon status="submitted" /><div className="grow"><div className="t">Functional Architecture <span className="mono faint">FA-110</span></div><div className="c">Sam reviews by 25 Nov</div></div><span className="m">3d</span></div>
              <div className="li"><StatusIcon status="locked" /><div className="grow"><div className="t">Interface Management</div><div className="c">Opens when Requirements 101 is approved</div></div></div>
            </div>
          </Section>

          <Section title="Progress">
            <div className="bar"><span className="a" style={{ width: '40%' }} /><span className="r" style={{ width: '20%' }} /><span className="p" style={{ width: '20%' }} /><span className="n" style={{ width: '20%' }} /></div>
            <div className="legend"><span><i style={{ background: 'var(--ok)' }} />Approved 2</span><span><i style={{ background: 'var(--warn)' }} />In review 1</span><span><i style={{ background: 'var(--brand)' }} />In progress 1</span><span><i className="hatch" />Not recorded</span></div>
            <div className="why"><b>Why</b>closes your “Integration &amp; interfaces” gap</div>
          </Section>

          <Section title="Controls">
            <div className="row">
              <div className="input grow"><Icon name="search" size="sm" className="faint" /><span className="faint">Search learning…</span></div>
              <span className="seg"><span className="on">All</span><span>Formal</span><span>With people</span></span>
            </div>
            <div className="tabs"><span className="on">Overview</span><span>Experience <span className="n">5</span></span><span>Tools <span className="n">5</span></span></div>
            <div className="row">
              <span className="check on"><Icon name="check" size="xs" /></span><span className="t2">Checked</span>
              <span className="check" /><span className="t2">Unchecked</span>
              <span className="toggle on" /><span className="t2">On</span>
              <span className="radio on" /><span className="t2">Selected</span>
            </div>
          </Section>

          <Section title="Banners">
            <div className="banner warn"><Icon name="alert" className="c-warn" /><span>2 items are due this week.</span><div className="acts"><Button size="sm">Open</Button></div></div>
            <div className="banner info"><Icon name="info" className="c-accent" /><span>Your manager set a goal for you.</span></div>
          </Section>

          <Section title={`Icons · ${Object.keys(iconPaths).length}`} note="the design's own set">
            <div className={css.icons}>
              {(Object.keys(iconPaths) as IconName[]).map(n => (
                <span key={n} className={css.icon} title={n}><Icon name={n} /><code className="mono faint">{n}</code></span>
              ))}
            </div>
          </Section>

          <Section title="MUI, themed from the tokens" note="lib/mui-theme.ts">
            <div className="row">
              <MuiButton variant="contained">Contained</MuiButton>
              <MuiButton>Outlined</MuiButton>
              <MuiButton variant="text">Text</MuiButton>
              <Chip label="Chip" variant="outlined" size="small" />
            </div>
            <TextField placeholder="MUI text field" size="small" fullWidth />
            <MuiTabs value={0}><MuiTab label="First" /><MuiTab label="Second" /></MuiTabs>
            <Table size="small">
              <TableHead><TableRow><TableCell>Person</TableCell><TableCell>Role</TableCell><TableCell align="right">Approved</TableCell></TableRow></TableHead>
              <TableBody>
                <TableRow><TableCell>Priya Nair</TableCell><TableCell>Interface Architect</TableCell><TableCell align="right" className="mono">12</TableCell></TableRow>
                <TableRow><TableCell>Daniel Okafor</TableCell><TableCell>Systems Engineer</TableCell><TableCell align="right" className="mono">4</TableCell></TableRow>
              </TableBody>
            </Table>
          </Section>

          <Section title="Tailwind, with the ds- tokens" note="styles/tailwind-tokens.css">
            <div className="bg-ds-surface-2 border border-ds-line rounded-ds-control p-3 text-ds-muted">
              bg-ds-surface-2 · border-ds-line · rounded-ds-control · text-ds-muted (utilities still work inside the design area)
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}
