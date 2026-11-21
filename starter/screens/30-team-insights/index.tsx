// GENERATED from design/html/30-team-insights.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Team insights";

export default function View_30_team_insights() {
  return (
    <div className={s.v}>
      <AppShell active="insights" manager>
        <main id="page">
          <header className="ph">
            <div>
              <h1>
                Team insights
              </h1>
              <p className="sub">
                {"Your 11 direct reports: where they're stuck, where skills are thin and what's due, so you know where to help."}
              </p>
            </div>
            <div className="acts">
              <span className={s.fresh}>
                <Icon name="refresh" size="xs" />
                HR directory 06:10 · LMS 2 h ago
              </span>
              <div className="seg">
                <span>
                  30 days
                </span>
                <span className="on">
                  Quarter
                </span>
                <span>
                  12 months
                </span>
              </div>
              <Button size="sm">
                <Icon name="grid" size="xs" />
                {" Table view"}
              </Button>
            </div>
          </header>
          <div className={s.dash}>
            <section className={cx("panel glow", s.cp)}>
              <div className="panel-h">
                <h2>
                  Waiting for you
                </h2>
                <span className="cnt">
                  4
                </span>
                <Button variant="primary" size="sm">
                  {"Open in Team "}
                  <Icon name="arrow" size="xs" />
                </Button>
              </div>
              <div className={s.pb}>
                <p className={s.tk}>
                  <b>
                    None overdue
                  </b>
                  , but decisions are slowing: 2.1 → 4.0 days.
                </p>
                <div className={s.eb}>
                  WAITING NOW · BY DAYS SINCE SUBMITTED
                </div>
                <svg className={s.cv} viewBox="0 0 418 82" role="img" aria-label="Records waiting for your decision, by age: 0 to 2 days, 2; 3 to 5 days, 1; 6 to 7 days, 1, due tomorrow; overdue, 0.">
                  <line className={s.base} x1="0" y1="60" x2="418" y2="60" />
                  <line className={s.ref} x1="318" y1="2" x2="318" y2="66" />
                  <text className={s.fa} x="324" y="10">
                    7-day window
                  </text>
                  <g>
                    <title>
                      Wei Chen · Requirements trace audit · 2 days
                    </title>
                    <circle className={s.unit} cx="22" cy="47" r="11" />
                    <text className={s.ut} x="22" y="50.5" textAnchor="middle">
                      WC
                    </text>
                  </g>
                  <g>
                    <title>
                      Maria Gomez · Shadow an interface review board · 1 day
                    </title>
                    <circle className={s.unit} cx="22" cy="22" r="11" />
                    <text className={s.ut} x="22" y="25.5" textAnchor="middle">
                      MG
                    </text>
                  </g>
                  <g>
                    <title>
                      Alex Kim · IM-201 · 4 days
                    </title>
                    <circle className={s.unit} cx="122" cy="47" r="11" />
                    <text className={s.ut} x="122" y="50.5" textAnchor="middle">
                      AK
                    </text>
                  </g>
                  <g>
                    <title>
                      Priya Nair · FA-110 v2 · 6 days · due tomorrow
                    </title>
                    <circle className={cx(s.unit, s.w)} cx="222" cy="47" r="11" />
                    <text className={s.ut} x="222" y="50.5" textAnchor="middle">
                      PN
                    </text>
                  </g>
                  <text className={cx(s.sans, s.tx)} x="240" y="51" style={{ fontSize: "11.5px" }}>
                    due tomorrow
                  </text>
                  <text className={cx(s.fa, s.sans)} x="330" y="51" style={{ fontSize: "11.5px" }}>
                    none
                  </text>
                  <text x="0" y="77">
                    {"0–2 d "}
                    <tspan className={s.tt}>
                      2
                    </tspan>
                  </text>
                  <text x="100" y="77">
                    {"3–5 d "}
                    <tspan className={s.tt}>
                      1
                    </tspan>
                  </text>
                  <text x="200" y="77">
                    {"6–7 d "}
                    <tspan className={s.tt}>
                      1
                    </tspan>
                  </text>
                  <text x="324" y="77">
                    {"overdue "}
                    <tspan className={s.tt}>
                      0
                    </tspan>
                  </text>
                </svg>
                <div className={s.eb} style={{ marginTop: "16px" }}>
                  MEDIAN DAYS TO DECIDE · WEEKLY
                </div>
                <svg className={s.cv} viewBox="0 0 418 156" role="img" aria-label="Median days to decide a review, weekly from 3 Oct to 21 Nov: 2.1, 2.4, 1.9, 2.6, 3.0, 2.8, 3.5, 4.0. The review window is 7 days.">
                  <line className={s.gl} x1="26" y1="104.5" x2="372" y2="104.5" />
                  <line className={s.gl} x1="26" y1="73" x2="372" y2="73" />
                  <line className={s.gl} x1="26" y1="41.5" x2="372" y2="41.5" />
                  <line className={s.base} x1="26" y1="136" x2="372" y2="136" />
                  <line className={s.ref} x1="26" y1="25.75" x2="372" y2="25.75" />
                  <text x="372" y="18" textAnchor="end">
                    7-day window
                  </text>
                  <text x="18" y="139.5" textAnchor="end">
                    0
                  </text>
                  <text x="18" y="108" textAnchor="end">
                    2
                  </text>
                  <text x="18" y="76.5" textAnchor="end">
                    4
                  </text>
                  <text x="18" y="45" textAnchor="end">
                    6
                  </text>
                  <polygon className={s.wash} points="26,102.9 75.4,98.2 124.9,106.1 174.3,95.05 223.7,88.75 273.1,91.9 322.6,80.9 372,73 372,136 26,136" />
                  <polyline className={s.ln} points="26,102.9 75.4,98.2 124.9,106.1 174.3,95.05 223.7,88.75 273.1,91.9 322.6,80.9 372,73" />
                  <circle className="dot" cx="26" cy="102.9" r="3.5">
                    <title>
                      Week to 3 Oct · 2.1 days
                    </title>
                  </circle>
                  <circle className="dot" cx="372" cy="73" r="4.5">
                    <title>
                      Week to 21 Nov · 4.0 days
                    </title>
                  </circle>
                  <text className={s.tx} x="34" y="120">
                    2.1
                  </text>
                  <text className={cx(s.tt, s.b6)} x="381" y="72">
                    4.0 d
                  </text>
                  <text className={s.fa} x="381" y="85">
                    this wk
                  </text>
                  <text x="26" y="152">
                    3 Oct
                  </text>
                  <text x="124.9" y="152" textAnchor="middle">
                    17 Oct
                  </text>
                  <text x="223.7" y="152" textAnchor="middle">
                    31 Oct
                  </text>
                  <text x="322.6" y="152" textAnchor="middle">
                    14 Nov
                  </text>
                </svg>
              </div>
            </section>
            <section className={cx("panel", s.cp)}>
              <div className="panel-h">
                <h2>
                  Learning mix
                </h2>
                <span className="cnt">
                  approved items
                </span>
                <span className="lnk">
                  {"By type "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={s.pb}>
                <p className={s.tk}>
                  <b>
                    Relational learning is the thinnest:
                  </b>
                  {" 4 of 23 this quarter."}
                </p>
                <div className="lg">
                  <span>
                    <svg viewBox="0 0 9 9">
                      <rect className={s["f-formal"]} width="9" height="9" rx="2" />
                    </svg>
                    Formal
                  </span>
                  <span>
                    <svg viewBox="0 0 9 9">
                      <rect className={s["f-rel"]} width="9" height="9" rx="2" />
                    </svg>
                    Relational
                  </span>
                  <span>
                    <svg viewBox="0 0 9 9">
                      <rect className={s["f-exp"]} width="9" height="9" rx="2" />
                    </svg>
                    Experiential
                  </span>
                </div>
                <svg className={s.cv} viewBox="0 0 370 242" role="img" aria-label="Approved learning per month by type. Aug: formal 5, relational 0, experiential 1. Sep: 5, 1, 1. Oct: 7, 2, 4. Nov so far: 5, 2, 3. Q4 so far: 23 (formal 12, relational 4, experiential 7).">
                  <rect className={s.band} x="194" y="4" width="168" height="217" rx="6" />
                  <text className={s.fa} x="202" y="17">
                    Q4 · SO FAR
                  </text>
                  <line className={s.gl} x1="24" y1="156" x2="362" y2="156" />
                  <line className={s.gl} x1="24" y1="91" x2="362" y2="91" />
                  <line className={s.gl} x1="24" y1="26" x2="362" y2="26" />
                  <text x="16" y="224.5" textAnchor="end">
                    0
                  </text>
                  <text x="16" y="159.5" textAnchor="end">
                    5
                  </text>
                  <text x="16" y="94.5" textAnchor="end">
                    10
                  </text>
                  <text x="16" y="29.5" textAnchor="end">
                    15
                  </text>
                  <g>
                    <title>
                      Aug · Formal 5 · Relational 0 · Experiential 1 · total 6
                    </title>
                    <rect className={s["f-formal"]} x="54" y="157" width="24" height="64" />
                    <path className={s["f-exp"]} d="M54,155V147a4,4 0 0 1 4,-4H74a4,4 0 0 1 4,4V155Z" />
                  </g>
                  <g>
                    <title>
                      Sep · Formal 5 · Relational 1 · Experiential 1 · total 7
                    </title>
                    <rect className={s["f-formal"]} x="138" y="157" width="24" height="64" />
                    <rect className={s["f-rel"]} x="138" y="144" width="24" height="11" />
                    <path className={s["f-exp"]} d="M138,142V134a4,4 0 0 1 4,-4H158a4,4 0 0 1 4,4V142Z" />
                  </g>
                  <g>
                    <title>
                      Oct · Formal 7 · Relational 2 · Experiential 4 · total 13
                    </title>
                    <rect className={s["f-formal"]} x="222" y="131" width="24" height="90" />
                    <rect className={s["f-rel"]} x="222" y="105" width="24" height="24" />
                    <path className={s["f-exp"]} d="M222,103V56a4,4 0 0 1 4,-4H242a4,4 0 0 1 4,4V103Z" />
                  </g>
                  <g>
                    <title>
                      Nov so far · Formal 5 · Relational 2 · Experiential 3 · total 10
                    </title>
                    <rect className={s["f-formal"]} x="306" y="157" width="24" height="64" />
                    <rect className={s["f-rel"]} x="306" y="131" width="24" height="24" />
                    <path className={s["f-exp"]} d="M306,129V95a4,4 0 0 1 4,-4H326a4,4 0 0 1 4,4V129Z" />
                  </g>
                  <line className={s.base} x1="24" y1="221" x2="362" y2="221" />
                  <text className={s.tx} x="66" y="137" textAnchor="middle">
                    6
                  </text>
                  <text className={s.tx} x="150" y="124" textAnchor="middle">
                    7
                  </text>
                  <text className={s.tx} x="234" y="46" textAnchor="middle">
                    13
                  </text>
                  <text className={s.tx} x="318" y="85" textAnchor="middle">
                    10
                  </text>
                  <text x="66" y="238" textAnchor="middle">
                    Aug
                  </text>
                  <text x="150" y="238" textAnchor="middle">
                    Sep
                  </text>
                  <text x="234" y="238" textAnchor="middle">
                    Oct
                  </text>
                  <text x="318" y="238" textAnchor="middle">
                    Nov so far
                  </text>
                </svg>
                <div className={s.pf}>
                  <Icon name="brief" size="xs" />
                  <span className="grow">
                    Pair people up: shadowing counts as relational.
                  </span>
                  <a>
                    Ideas
                  </a>
                </div>
              </div>
            </section>
            <section className={cx("panel", s.cp)}>
              <div className="panel-h">
                <h2>
                  Skill coverage
                </h2>
                <span className="cnt">
                  people with evidence
                </span>
                <span className="lnk">
                  {"Find cover "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={s.pb}>
                <p className={s.tk}>
                  <b>
                    2 skills rest on one person.
                  </b>
                  {" If they're away, nobody can cover."}
                </p>
                <svg className={s.cv} viewBox="0 0 370 244" role="img" aria-label="People with approved evidence or confirmed experience per skill, of 11: Requirements quality 8, Functional architecture 6, Systems modeling 5, Configuration control 4, Verification planning 3, Trade studies 2, Interface management 1 with 1 more in review, Integration and test 1. Two skills are below the 2-person minimum.">
                  <line className={s.thr} x1="182.9" y1="16" x2="182.9" y2="226" />
                  <text className={s.tx} x="188" y="11">
                    2-person minimum
                  </text>
                  <line className={s.base} x1="148" y1="20" x2="148" y2="226" />
                  <g>
                    <title>
                      Requirements quality · 8 people
                    </title>
                    <text className={cx(s.sans, s.tx)} x="0" y="38">
                      Requirements quality
                    </text>
                    <path className={s["bar-n"]} d="M148,29H283.6a4,4 0 0 1 4,4V35a4,4 0 0 1 -4,4H148Z" />
                    <text className={s.tx} x="294" y="37.5">
                      8
                    </text>
                  </g>
                  <g>
                    <title>
                      Functional architecture · 6 people
                    </title>
                    <text className={cx(s.sans, s.tx)} x="0" y="64">
                      Functional architecture
                    </text>
                    <path className={s["bar-n"]} d="M148,55H248.7a4,4 0 0 1 4,4V61a4,4 0 0 1 -4,4H148Z" />
                    <text className={s.tx} x="259" y="63.5">
                      6
                    </text>
                  </g>
                  <g>
                    <title>
                      Systems modeling · 5 people
                    </title>
                    <text className={cx(s.sans, s.tx)} x="0" y="90">
                      Systems modeling
                    </text>
                    <path className={s["bar-n"]} d="M148,81H231.3a4,4 0 0 1 4,4V87a4,4 0 0 1 -4,4H148Z" />
                    <text className={s.tx} x="241" y="89.5">
                      5
                    </text>
                  </g>
                  <g>
                    <title>
                      Configuration control · 4 people
                    </title>
                    <text className={cx(s.sans, s.tx)} x="0" y="116">
                      Configuration control
                    </text>
                    <path className={s["bar-n"]} d="M148,107H213.8a4,4 0 0 1 4,4V113a4,4 0 0 1 -4,4H148Z" />
                    <text className={s.tx} x="224" y="115.5">
                      4
                    </text>
                  </g>
                  <g>
                    <title>
                      Verification planning · 3 people
                    </title>
                    <text className={cx(s.sans, s.tx)} x="0" y="142">
                      Verification planning
                    </text>
                    <path className={s["bar-n"]} d="M148,133H196.4a4,4 0 0 1 4,4V139a4,4 0 0 1 -4,4H148Z" />
                    <text className={s.tx} x="206" y="141.5">
                      3
                    </text>
                  </g>
                  <g>
                    <title>
                      Trade studies · 2 people
                    </title>
                    <text className={cx(s.sans, s.tx)} x="0" y="168">
                      Trade studies
                    </text>
                    <path className={s["bar-n"]} d="M148,159H178.9a4,4 0 0 1 4,4V165a4,4 0 0 1 -4,4H148Z" />
                    <text className={s.tx} x="191" y="167.5">
                      2
                    </text>
                  </g>
                  <g>
                    <title>
                      Interface management · 1 person · 1 more in review (not counted until approved)
                    </title>
                    <use href="#i-alert" x="0" y="183" width="13" height="13" style={{ color: "var(--warn)" }} />
                    <text className={cx(s.sans, s.tt)} x="18" y="194">
                      Interface mgmt
                    </text>
                    <path className={s["bar-w"]} d="M148,185H161.5a4,4 0 0 1 4,4V191a4,4 0 0 1 -4,4H148Z" />
                    <rect className="ghost" x="167.5" y="185.5" width="15" height="9" rx="3" />
                    <text className={s.tt} x="190" y="193.5">
                      {"1 "}
                      <tspan className={s.fa}>
                        +1 in review
                      </tspan>
                    </text>
                  </g>
                  <g>
                    <title>
                      {"Integration & test · 1 person"}
                    </title>
                    <use href="#i-alert" x="0" y="209" width="13" height="13" style={{ color: "var(--warn)" }} />
                    <text className={cx(s.sans, s.tt)} x="18" y="220">
                      {"Integration & test"}
                    </text>
                    <path className={s["bar-w"]} d="M148,211H161.5a4,4 0 0 1 4,4V217a4,4 0 0 1 -4,4H148Z" />
                    <text className={s.tt} x="172" y="219.5">
                      1
                    </text>
                  </g>
                  <text className={s.fa} x="0" y="241">
                    people, of 11
                  </text>
                  <text className={s.fa} x="148" y="241" textAnchor="middle">
                    0
                  </text>
                  <text className={s.fa} x="235.3" y="241" textAnchor="middle">
                    5
                  </text>
                  <text className={s.fa} x="322.5" y="241" textAnchor="middle">
                    10
                  </text>
                </svg>
                <div className={s.pf} style={{ alignItems: "flex-start" }}>
                  <Icon name="info" size="xs" />
                  <span className="grow">
                    Counts approved evidence + experience you confirmed.
                    <br />
                    {"Not recorded doesn't mean none."}
                  </span>
                </div>
              </div>
            </section>
            <section className={cx("panel", s.cp)}>
              <div className="panel-h">
                <h2>
                  Goals
                </h2>
                <span className="cnt">
                  11 people
                </span>
                <span className="lnk">
                  {"All goals "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={s.pb}>
                <p className={s.tk}>
                  <b>
                    8 of 11 have a goal.
                  </b>
                  {" 3 don't yet, including Omar, who joined on 3 Nov."}
                </p>
                <div className={s.tall} role="img" aria-label="Goals: on track 5, needs attention 3, no goal yet 3, of 11 people.">
                  <span className={s["g-ok"]} style={{ flexGrow: "5" }} title="On track · 5 of 11">
                    5
                  </span>
                  <span className={s["g-att"]} style={{ flexGrow: "3" }} title="Needs attention · 3 of 11">
                    3
                  </span>
                  <span className={s["g-no"]} style={{ flexGrow: "3" }} title="No goal yet · 3 of 11">
                    3
                  </span>
                </div>
                <div className={s.glg}>
                  <span>
                    <StatusIcon status="approved" />
                    On track
                  </span>
                  <span>
                    <span className={s["ic-w"]}>
                      <Icon name="alert" size="sm" />
                    </span>
                    Needs attention
                  </span>
                  <span>
                    <StatusIcon status="not_started" />
                    No goal yet
                  </span>
                </div>
                <p className={s.def}>
                  Needs attention = no approved step in 30 days, or due soon with steps left.
                </p>
                <div className={s.eb} style={{ marginBottom: "2px" }}>
                  START A GOAL TOGETHER
                </div>
                <div className={s.pr}>
                  <Avatar initials="OH" tone={6} />
                  <div className="grow">
                    <div className="n">
                      Omar Haddad
                    </div>
                    <div className="c">
                      New, joined 3 Nov · 1:1 Mon 24 Nov
                    </div>
                  </div>
                  <Button size="sm">
                    <Icon name="target" size="xs" />
                    {" Start a goal together"}
                  </Button>
                </div>
                <div className={s.pr}>
                  <Avatar initials="NR" tone={4} />
                  <div className="grow">
                    <div className="n">
                      Nina Rossi
                    </div>
                    <div className="c">
                      No active goal yet
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Start
                  </Button>
                </div>
                <div className={s.pr}>
                  <Avatar initials="LS" tone={2} />
                  <div className="grow">
                    <div className="n">
                      Lucas Silva
                    </div>
                    <div className="c">
                      Last goal ended 30 Sep · 1:1 Wed 26 Nov
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Start
                  </Button>
                </div>
                <div className={s.pf}>
                  <Icon name="users" size="xs" />
                  <span className="grow">
                    Set a goal for someone or let them set their own; both always see who set it.
                  </span>
                </div>
              </div>
            </section>
            <section className={cx("panel", s.cp)}>
              <div className="panel-h">
                <h2>
                  Required training due
                </h2>
                <span className="cnt">
                  next 30 days
                </span>
                <span className="lnk">
                  {"LMS "}
                  <Icon name="ext" size="xs" />
                </span>
              </div>
              <div className={s.pb}>
                <p className={s.tk}>
                  <b>
                    4 items due.
                  </b>
                  {" Alex's is first, in 5 days. A word in your 1:1 helps."}
                </p>
                <svg className={s.cv} viewBox="0 0 370 52" role="img" aria-label="Required training due dates: Alex Kim 26 Nov, Fatima Rahman 3 Dec, Daniel Okafor 10 Dec, Omar Haddad 15 Dec.">
                  <line className={s.base} x1="8" y1="30" x2="362" y2="30" />
                  <line className={s.base} x1="8" y1="25" x2="8" y2="35" />
                  <line className={s.gl} x1="43.4" y1="26" x2="43.4" y2="34" />
                  <line className={s.gl} x1="126" y1="26" x2="126" y2="34" />
                  <line className={s.gl} x1="208.6" y1="26" x2="208.6" y2="34" />
                  <line className={s.gl} x1="291.2" y1="26" x2="291.2" y2="34" />
                  <line className={s.gl} x1="362" y1="26" x2="362" y2="34" />
                  <g>
                    <title>
                      Alex Kim · Export compliance refresher · due 26 Nov
                    </title>
                    <circle className={cx("dot", s.w)} cx="67" cy="30" r="5" />
                    <text className={s.tx} x="67" y="15" textAnchor="middle">
                      AK
                    </text>
                  </g>
                  <g>
                    <title>
                      Fatima Rahman · Information security 2026 · due 3 Dec
                    </title>
                    <circle className="dot" cx="149.6" cy="30" r="5" />
                    <text className={s.tx} x="149.6" y="15" textAnchor="middle">
                      FR
                    </text>
                  </g>
                  <g>
                    <title>
                      {"Daniel Okafor · Ethics & business conduct · due 10 Dec"}
                    </title>
                    <circle className="dot" cx="232.2" cy="30" r="5" />
                    <text className={s.tx} x="232.2" y="15" textAnchor="middle">
                      DO
                    </text>
                  </g>
                  <g>
                    <title>
                      Omar Haddad · New-joiner safety induction · due 15 Dec
                    </title>
                    <circle className="dot" cx="291.2" cy="30" r="5" />
                    <text className={s.tx} x="291.2" y="15" textAnchor="middle">
                      OH
                    </text>
                  </g>
                  <text className={s.tx} x="8" y="48">
                    Today
                  </text>
                  <text x="126" y="48" textAnchor="middle">
                    1 Dec
                  </text>
                  <text x="208.6" y="48" textAnchor="middle">
                    8 Dec
                  </text>
                  <text x="291.2" y="48" textAnchor="middle">
                    15 Dec
                  </text>
                  <text x="362" y="48" textAnchor="end">
                    21 Dec
                  </text>
                </svg>
                <div style={{ marginTop: "8px" }}>
                  <div className={s.dr}>
                    <div className={s.dt}>
                      <b>
                        26 Nov
                      </b>
                      <small className={s.w}>
                        in 5 d
                      </small>
                    </div>
                    <Avatar initials="AK" tone={2} />
                    <div className="grow">
                      <div className="n">
                        Alex Kim
                      </div>
                      <div className="c">
                        Export compliance refresher
                      </div>
                    </div>
                    <Button size="sm">
                      <Icon name="bell" size="xs" />
                      {" Remind"}
                    </Button>
                  </div>
                  <div className={s.dr}>
                    <div className={s.dt}>
                      <b>
                        3 Dec
                      </b>
                      <small>
                        in 12 d
                      </small>
                    </div>
                    <Avatar initials="FR" tone={3} />
                    <div className="grow">
                      <div className="n">
                        Fatima Rahman
                      </div>
                      <div className="c">
                        Information security 2026
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Remind
                    </Button>
                  </div>
                  <div className={s.dr}>
                    <div className={s.dt}>
                      <b>
                        10 Dec
                      </b>
                      <small>
                        in 19 d
                      </small>
                    </div>
                    <Avatar initials="DO" tone={3} />
                    <div className="grow">
                      <div className="n">
                        Daniel Okafor
                      </div>
                      <div className="c">
                        {"Ethics & business conduct"}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Remind
                    </Button>
                  </div>
                  <div className={s.dr}>
                    <div className={s.dt}>
                      <b>
                        15 Dec
                      </b>
                      <small>
                        in 24 d
                      </small>
                    </div>
                    <Avatar initials="OH" tone={6} />
                    <div className="grow">
                      <div className="n">
                        Omar Haddad
                      </div>
                      <div className="c">
                        New-joiner safety induction
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Remind
                    </Button>
                  </div>
                </div>
                <div className={s.pf}>
                  <Icon name="info" size="xs" />
                  <span className="grow">
                    From the LMS, which also sends its own reminders.
                  </span>
                </div>
              </div>
            </section>
            <section className={cx("panel", s.cp)}>
              <div className="panel-h">
                <h2>
                  Development 1:1s
                </h2>
                <span className="cnt">
                  A–Z
                </span>
                <Button size="sm">
                  <Icon name="cal" size="xs" />
                  {" Book 1:1s"}
                </Button>
              </div>
              <div className={s.pb}>
                <p className={s.tk}>
                  <b>
                    3 people are past 30 days
                  </b>
                  {" since their last development talk."}
                </p>
                <svg className={s.cv} viewBox="0 0 370 258" role="img" aria-label="Days since last development one-to-one, alphabetical: Aisha 12, Alex 9, Daniel 34, Fatima 18, Lucas 41, Maria 6, Nina 22, Omar new with first one booked, Priya 15, Tom 38, Wei 27. Guide: every 30 days.">
                  <rect className={s.zone} x="269.3" y="20" width="80.7" height="220" rx="4" />
                  <text className={s.tx} x="269.3" y="11" textAnchor="middle">
                    every 30 days
                  </text>
                  <line className={s.ref} x1="269.3" y1="16" x2="269.3" y2="240" />
                  <text className={cx(s.sans, s.tx)} x="0" y="34">
                    Aisha Khan
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="54">
                    Alex Kim
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="74">
                    Daniel Okafor
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="94">
                    Fatima Rahman
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="114">
                    Lucas Silva
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="134">
                    Maria Gomez
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="154">
                    Nina Rossi
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="174">
                    Omar Haddad
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="194">
                    Priya Nair
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="214">
                    Tom Becker
                  </text>
                  <text className={cx(s.sans, s.tx)} x="0" y="234">
                    Wei Chen
                  </text>
                  <g>
                    <line className={s.trk} x1="108" y1="30" x2="350" y2="30" />
                    <line className={s.trk} x1="108" y1="50" x2="350" y2="50" />
                    <line className={s.trk} x1="108" y1="70" x2="350" y2="70" />
                    <line className={s.trk} x1="108" y1="90" x2="350" y2="90" />
                    <line className={s.trk} x1="108" y1="110" x2="350" y2="110" />
                    <line className={s.trk} x1="108" y1="130" x2="350" y2="130" />
                    <line className={s.trk} x1="108" y1="150" x2="350" y2="150" />
                    <line className={s.trk} x1="108" y1="170" x2="350" y2="170" />
                    <line className={s.trk} x1="108" y1="190" x2="350" y2="190" />
                    <line className={s.trk} x1="108" y1="210" x2="350" y2="210" />
                    <line className={s.trk} x1="108" y1="230" x2="350" y2="230" />
                  </g>
                  <circle className="dot" cx="172.5" cy="30" r="4.5">
                    <title>
                      Aisha Khan · 12 days
                    </title>
                  </circle>
                  <circle className="dot" cx="156.4" cy="50" r="4.5">
                    <title>
                      Alex Kim · 9 days
                    </title>
                  </circle>
                  <circle className={cx("dot", s.w)} cx="290.9" cy="70" r="4.5">
                    <title>
                      Daniel Okafor · 34 days · not booked
                    </title>
                  </circle>
                  <text className={s.tt} x="300" y="73.5">
                    34 d
                  </text>
                  <circle className="dot" cx="204.8" cy="90" r="4.5">
                    <title>
                      Fatima Rahman · 18 days
                    </title>
                  </circle>
                  <circle className={cx("dot", s.w)} cx="328.5" cy="110" r="4.5">
                    <title>
                      Lucas Silva · 41 days · booked Wed 26 Nov
                    </title>
                  </circle>
                  <text className={s.tt} x="337.5" y="113.5">
                    41 d
                  </text>
                  <circle className="dot" cx="140.3" cy="130" r="4.5">
                    <title>
                      Maria Gomez · 6 days
                    </title>
                  </circle>
                  <circle className="dot" cx="226.3" cy="150" r="4.5">
                    <title>
                      Nina Rossi · 22 days
                    </title>
                  </circle>
                  <circle className={cx("dot", s.o)} cx="204.8" cy="170" r="4">
                    <title>
                      Omar Haddad · joined 3 Nov (18 days) · first development 1:1 Mon 24 Nov
                    </title>
                  </circle>
                  <text className={s.fa} x="214" y="173.5">
                    new
                  </text>
                  <circle className="dot" cx="188.7" cy="190" r="4.5">
                    <title>
                      Priya Nair · 15 days
                    </title>
                  </circle>
                  <circle className={cx("dot", s.w)} cx="312.4" cy="210" r="4.5">
                    <title>
                      Tom Becker · 38 days · not booked
                    </title>
                  </circle>
                  <text className={s.tt} x="321.4" y="213.5">
                    38 d
                  </text>
                  <circle className="dot" cx="253.2" cy="230" r="4.5">
                    <title>
                      Wei Chen · 27 days
                    </title>
                  </circle>
                  <text className={s.fa} x="108" y="255" textAnchor="middle">
                    0
                  </text>
                  <text className={s.fa} x="188.7" y="255" textAnchor="middle">
                    15
                  </text>
                  <text className={s.fa} x="269.3" y="255" textAnchor="middle">
                    30
                  </text>
                  <text className={s.fa} x="350" y="255" textAnchor="end">
                    45 days
                  </text>
                </svg>
                <div className={s.pf}>
                  <Icon name="cal" size="xs" />
                  <span className="grow">
                    Booked: Omar 24 Nov, Lucas 26 Nov. Not yet: Daniel, Tom.
                  </span>
                </div>
              </div>
            </section>
          </div>
          <div className={s.foot}>
            <Icon name="shield" size="xs" />
            <span>
              <b>
                To help, not to monitor:
              </b>
              {" no activity, time or login tracking and no rankings · each person counted once · only Approved learning counts · skill strength = approved evidence + confirmed experience; not recorded ≠ none."}
            </span>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
