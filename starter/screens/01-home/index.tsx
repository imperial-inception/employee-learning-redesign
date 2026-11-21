// HAND-MAINTAINED (no "GENERATED" header, so scripts/convert-mockups.mjs leaves it alone).
// Home, data-driven: the pattern for every screen. Same markup and classes as the generated reference views,
// but every name, number, status and date comes from `HomeData` (types.ts), which the app fills from the API.
// The view only lays data out: no status, count, due date or "why" is computed here.
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import { ProgressRing } from '@/components/ds/ProgressRing';
import { dayLabel, greeting, hours, meta } from '@/lib/format';
import type { FeedItem, FocusGoal, HomeData, InboxItem, SkillArea } from './types';
import { jordanHome } from './fixture';
import s from './view.module.css';

export const title = 'Home';

export function HomeView({ data }: { data: HomeData }) {
  const { growth } = data;
  return (
    <main id="page">
      <header className="ph" style={{ marginBottom: '14px' }}>
        <div>
          <div className="mono faint" style={{ fontSize: '11.5px', letterSpacing: '.08em', marginBottom: '8px' }}>{dayLabel(data.now)}</div>
          <h1>{greeting(data.now)}, {data.user.firstName}</h1>
          <p className="sub">
            You have evidence in {growth.areasWithEvidence} of {growth.areasTotal} areas toward {growth.targetLevel}.
            {data.needsYouCount > 0 && ` ${data.needsYouCount === 1 ? 'One thing needs' : `${data.needsYouCount} things need`} you today.`}
          </p>
        </div>
        <div className="acts">
          <Button><Icon name="search" size="sm" />{' Find learning '}<Kbd>/</Kbd></Button>
        </div>
      </header>

      <div className={s.top}>
        {data.focusGoal ? <FocusGoalPanel goal={data.focusGoal} /> : <NoFocusGoal />}
        <InboxPanel inbox={data.inbox} />
      </div>

      <div className={s.bottom}>
        <SkillsPanel areas={data.skills} growth={growth} />
        <FeedPanel feed={data.feed} />
      </div>
    </main>
  );
}

function FocusGoalPanel({ goal }: { goal: FocusGoal }) {
  const c = goal.counts;
  const pct = (n: number) => `${(n / c.total) * 100}%`;
  const step = goal.nextStep;
  return (
    <section className={cx('panel glow', s.hero)}>
      <div className="row">
        <Pill tone="acc"><Icon name="target" size="xs" />{' Focus goal'}</Pill>
        <span className="mono faint" style={{ fontSize: '12px' }}>DUE {goal.dueLabel.toUpperCase()} · {goal.daysLeft} DAYS LEFT</span>
        <Button variant="ghost" size="sm" className="sp">{'Open goal '}<Icon name="arrow" size="xs" /></Button>
      </div>
      <h2>{goal.title}</h2>
      <div className={s.prog}>
        <ProgressRing className={s.ring} total={c.total} segments={[
          { value: c.approved, color: 'var(--ok)' },
          { value: c.submitted, color: 'var(--warn)' },
          { value: c.returned, color: 'var(--orange)' },
        ]}>
          <div className={s.lbl}><div><b>{c.approved}/{c.total}</b><small>approved</small></div></div>
        </ProgressRing>
        <div className="grow">
          <div className="bar">
            <span className="a" style={{ width: pct(c.approved) }} />
            <span className="r" style={{ width: pct(c.submitted) }} />
            <span className={s.o} style={{ width: pct(c.returned) }} />
            <span className="n" style={{ width: pct(c.notStarted) }} />
          </div>
          <div className="legend">
            <span><i style={{ background: 'var(--ok)' }} />Approved {c.approved}</span>
            <span><i style={{ background: 'var(--warn)' }} />In review {c.submitted}</span>
            <span><i style={{ background: 'var(--orange)' }} />Returned {c.returned}</span>
            <span><i style={{ background: 'var(--surface-3)', boxShadow: 'inset 0 0 0 1px var(--line-2)' }} />Not started {c.notStarted}</span>
          </div>
        </div>
      </div>
      {step && (
        <div className={s.next}>
          <StatusIcon status={step.status} />
          <div className="grow">
            <div className={s.k}>NEXT STEP · {step.position} OF {c.total}</div>
            <div className="t">{step.title}</div>
            <div className="row" style={{ gap: '8px', marginTop: '6px' }}>
              <Tag><TypeDot kind={step.kind} />{KIND_LABEL[step.kind]}</Tag>
              <Tag className="mono">{hours(step.hours)}</Tag>
              <Tag>{step.source}</Tag>
            </div>
          </div>
          <Button>Done? Record it</Button>
          {step.openUrl && <Button variant="primary" href={step.openUrl} target="_blank" rel="noreferrer">{`Open in ${step.source} `}<Icon name="ext" size="sm" /></Button>}
        </div>
      )}
      {goal.then.length > 0 && (
        <div className={s.then}>
          {'Then: '}
          {goal.then.map((t, i) => <span key={t}>{i > 0 && ' · '}<b>{t}</b></span>)}
        </div>
      )}
    </section>
  );
}

const KIND_LABEL = { formal: 'Formal', rel: 'Relational', exp: 'Experiential' } as const;

/** Empty state: one honest line and the one action, never a big empty box (DESIGN_SYSTEM.md §0.8). */
function NoFocusGoal() {
  return (
    <section className={cx('panel glow', s.hero)}>
      <Pill tone="acc"><Icon name="target" size="xs" />{' Focus goal'}</Pill>
      <h2>Pick one goal to focus on</h2>
      <Button variant="primary">Choose a focus goal</Button>
    </section>
  );
}

function InboxPanel({ inbox }: { inbox: HomeData['inbox'] }) {
  const count = inbox.needsYou.length + inbox.waitingOnOthers.length;
  return (
    <section className={cx('panel', s.inbox)}>
      <div className="panel-h">
        <h2>Inbox</h2><span className="cnt">{count}</span>
        <span className="lnk">{'My learning '}<Icon name="cr" size="xs" /></span>
      </div>
      {inbox.needsYou.length > 0 && <div className="grp">Needs you</div>}
      {inbox.needsYou.map(it => <InboxRow key={it.id} item={it} />)}
      {inbox.waitingOnOthers.length > 0 && <div className="grp">Waiting on others</div>}
      {inbox.waitingOnOthers.map(it => <InboxRow key={it.id} item={it} />)}
      {inbox.requiredNote && (
        <>
          <div className="grp">Required</div>
          <div className="li">
            <Icon name="info" size="sm" />
            <div className="grow"><div className="c" style={{ color: 'var(--text-2)' }}>{inbox.requiredNote}</div></div>
          </div>
        </>
      )}
    </section>
  );
}

function InboxRow({ item }: { item: InboxItem }) {
  return (
    <div className="li">
      <StatusIcon status={item.status} />
      <div className="grow">
        <div className="t">{item.title}{item.code && <>{' '}<span className="mono faint" style={{ fontSize: '11.5px' }}>{item.code}</span></>}</div>
        <div className="c">{item.context}{item.onTimeNote && <>{' · '}<span style={{ color: 'var(--ok)' }}>{item.onTimeNote}</span></>}</div>
      </div>
      {item.action === 'revise' && <Button size="sm">Revise</Button>}
      {item.meta && <span className="m">{item.meta}</span>}
    </div>
  );
}

function SkillsPanel({ areas, growth }: { areas: SkillArea[]; growth: HomeData['growth'] }) {
  return (
    <section className="panel">
      <div className="panel-h">
        <h2>Your skills</h2><span className="cnt">toward {growth.targetLevel}</span>
        <span className="lnk">{'Next level '}<Icon name="cr" size="xs" /></span>
      </div>
      <div className={s.sumline}>
        <span className={s.big2}>{growth.areasWithEvidence} of {growth.areasTotal}</span>
        <span className="muted" style={{ fontSize: '12.5px' }}>areas have approved evidence. Strength = approved learning + experience your manager confirmed.</span>
      </div>
      {areas.map(a => (
        <div key={a.name} className={s.sk}>
          <span className={cx('n', a.strength === null && 'muted')}>{a.name}{a.focus && <span className={s.focus}>FOCUS</span>}</span>
          {a.strength === null
            ? <span className={cx('nr hatch', s.meter)} />
            : <span className={s.meter}>{[1, 2, 3].map(i => <i key={i} className={i <= (a.strength ?? 0) ? 'on' : undefined} />)}</span>}
          <span className={cx(a.strength === null && 'faint', s.ev)}>{a.evidenceLabel}</span>
        </div>
      ))}
    </section>
  );
}

const FEED_ICON = { learning: 'book', article: 'file', question: 'msg', event: 'cal' } as const;

function FeedPanel({ feed }: { feed: HomeData['feed'] }) {
  return (
    <section className={cx('panel', s.feed)}>
      <div className="panel-h">
        <h2>For your goal</h2>
        <div className="tabs">
          <span className="on">All</span>
          <span>{'Learning '}<span className="n">{feed.counts.learning}</span></span>
          <span>{'Community '}<span className="n">{feed.counts.community}</span></span>
          <span>{'People '}<span className="n">{feed.counts.people}</span></span>
        </div>
        <span className="lnk">{'More '}<Icon name="cr" size="xs" /></span>
      </div>
      <div className={s.topics}>
        {'Your topics '}
        {feed.topics.map(t => <Tag key={t}>{t}</Tag>)}
        <span className="sp" style={{ color: 'var(--brand-2)' }}>Edit topics</span>
      </div>
      {feed.items.map(it => <FeedRow key={it.id} item={it} />)}
    </section>
  );
}

function FeedRow({ item }: { item: FeedItem }) {
  return (
    <div className="li">
      {item.kind === 'person'
        ? <div className={cx('p', s.src)}><Avatar initials={item.initials} tone={item.tone} /></div>
        : <div className={item.kind === 'learning' ? cx(s.src, s.l) : cx('c', s.src)}><Icon name={FEED_ICON[item.kind]} size="sm" /></div>}
      <div className="grow">
        {item.kind === 'person'
          ? <div className="t">{item.name}{' '}<span className="muted" style={{ fontWeight: '400', fontSize: '12.5px' }}>· {item.jobTitle}</span></div>
          : <div className="t">{item.title}{item.kind === 'learning' && item.code && <>{' '}<span className="mono faint" style={{ fontSize: '11.5px' }}>{item.code}</span></>}</div>}
        <div className={s.meta}>
          {item.kind === 'person' && item.confirmedBy === 'manager'
            ? <><span style={{ color: 'var(--ok)' }}>Manager-confirmed</span>{` · ${meta(item.meta)}`}</>
            : meta(item.meta)}
        </div>
        <div className="why"><b>Why</b>{item.why}</div>
      </div>
      <div className={s.act}>
        {(item.kind === 'learning' || item.kind === 'event') && <Button size="sm"><Icon name="plus" size="xs" />{' Add to plan'}</Button>}
        {item.kind === 'article' && <><Button size="sm" href={item.url} target="_blank" rel="noreferrer">{'Read '}<Icon name="ext" size="xs" /></Button><Button variant="ghost" size="sm">Save</Button></>}
        {item.kind === 'question' && <Button size="sm" href={item.url} target="_blank" rel="noreferrer">Answer</Button>}
        {item.kind === 'person' && <Button size="sm"><Icon name="msg" size="xs" />{' Ask'}</Button>}
      </div>
    </div>
  );
}

/** Reference route /views/01-home: the manager variant of the shell with the sample data. */
export default function View_01_home() {
  return (
    <div className={s.v}>
      <AppShell active="today" manager>
        <HomeView data={jordanHome} />
      </AppShell>
    </div>
  );
}
