// GENERATED from design/html/31-manager-home.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Today (manager)";

export default function View_31_manager_home() {
  return (
    <div className={s.v}>
      <AppShell active="today" manager>
        <main id="page">
          <header className="ph">
            <div>
              <div className={s.eyebrow}>
                FRI 21 NOV
              </div>
              <h1>
                Good afternoon, Jordan
              </h1>
              <p className="sub">
                <b>
                  {"Start with Priya's review: it's due tomorrow."}
                </b>
                {" Everything else can wait until Monday."}
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="record" size="sm" />
                {" Record learning "}
                <Kbd>
                  R
                </Kbd>
              </Button>
              <Button>
                <Icon name="chart" size="sm" />
                {" Team insights"}
              </Button>
            </div>
          </header>
          <section className={cx("panel", s.focus)}>
            <Pill tone="acc">
              <Icon name="target" size="xs" />
              {" My focus"}
            </Pill>
            <span className={cx("ellipsis grow", s.gt)}>
              Become confident using SysML v2 to describe system architecture
            </span>
            <div className={s.mini}>
              <b>
                2/5
              </b>
              {" approved "}
              <div className={s.tbar} title="Approved 2 · In review 1 · Not started 2">
                <span className="a" style={{ flexGrow: "2" }} />
                <span className="r" style={{ flexGrow: "1" }} />
                <span className="n" style={{ flexGrow: "2" }} />
              </div>
            </div>
            <div className={s.vr} />
            <div className={s.nx}>
              <span className={s.k}>
                NEXT STEP · 0.5 H · DUE 31 DEC
              </span>
              <span className="t">
                SysML Overview
              </span>
            </div>
            <Button size="sm">
              {"Open in LMS "}
              <Icon name="ext" size="xs" />
            </Button>
          </section>
          <div className={s.sh}>
            <h2>
              Your team today
            </h2>
            <span className="m">
              11 people · 3 things want you
            </span>
            <span className="lnk">
              {"Team insights "}
              <Icon name="cr" size="xs" />
            </span>
          </div>
          <div className={s.cards}>
            <section className={cx("panel glow", s.card)}>
              <div className="panel-h">
                <Icon name="inbox" size="sm" />
                <h2>
                  Waiting for you
                </h2>
                <Pill tone="acc">
                  <Icon name="arrow" size="xs" />
                  {" Do this first"}
                </Pill>
              </div>
              <div className={s.cb}>
                <div className={s["hero-n"]}>
                  <span className="big">
                    4
                  </span>
                  <div>
                    <div className={s.l1}>
                      oldest 6 days
                    </div>
                    <div className={s.l2}>
                      none overdue · 7-day window from submission
                    </div>
                  </div>
                </div>
                <div className={cx("on", s.rq)}>
                  <Avatar initials="PN" />
                  <span className="n">
                    Priya Nair
                  </span>
                  <span className="c">
                    {"Functional Architecture "}
                    <span className="mono">
                      FA-110 v2
                    </span>
                  </span>
                  <Pill tone="rev">
                    due tomorrow
                  </Pill>
                </div>
                <div className={s.rq}>
                  <Avatar initials="AK" tone={2} />
                  <span className="n">
                    Alex Kim
                  </span>
                  <span className="c">
                    {"Interface Management "}
                    <span className="mono">
                      IM-201
                    </span>
                  </span>
                  <span className={s["rq-d"]}>
                    in 3 d
                  </span>
                </div>
                <div className={s.rq}>
                  <Avatar initials="WC" tone={5} />
                  <span className="n">
                    Wei Chen
                  </span>
                  <span className="c">
                    Run a requirements trace audit
                  </span>
                  <span className={s["rq-d"]}>
                    in 5 d
                  </span>
                </div>
                <div className={s.rq}>
                  <Avatar initials="MG" tone={3} />
                  <span className="n">
                    Maria Gomez
                  </span>
                  <span className="c">
                    Shadow an interface review board
                  </span>
                  <span className={s["rq-d"]}>
                    in 6 d
                  </span>
                </div>
                <div className={s.cf}>
                  <Button variant="primary">
                    {"Review Priya's FA-110 "}
                    <Kbd style={{ background: "transparent", borderColor: "rgba(127,127,127,.4)" }}>
                      Enter
                    </Kbd>
                  </Button>
                  <Button variant="ghost">
                    Open in Team
                  </Button>
                </div>
              </div>
            </section>
            <section className={cx("panel", s.card)}>
              <div className="panel-h">
                <Icon name="users" size="sm" />
                <h2>
                  Could use a hand
                </h2>
                <span className="cnt">
                  3
                </span>
                <span className="lnk">
                  {"Team "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={s.cb}>
                <div className={s.hp}>
                  <Avatar initials="TB" tone={5} />
                  <div className="grow">
                    <div className="n">
                      Tom Becker
                    </div>
                    <div className="r">
                      <span className={s["ic-o"]}>
                        <StatusIcon status="returned" />
                      </span>
                      Returned twice, last on 3 Nov
                    </div>
                  </div>
                  <Button size="sm">
                    Offer help
                  </Button>
                </div>
                <div className={s.hp}>
                  <Avatar initials="OH" tone={6} />
                  <div className="grow">
                    <div className="n">
                      Omar Haddad
                    </div>
                    <div className="r">
                      <span className={s["ic-a"]}>
                        <Icon name="target" size="xs" />
                      </span>
                      New since 3 Nov · no goal yet
                    </div>
                  </div>
                  <Button size="sm">
                    Start a goal
                  </Button>
                </div>
                <div className={s.hp}>
                  <Avatar initials="AK" tone={2} />
                  <div className="grow">
                    <div className="n">
                      Alex Kim
                    </div>
                    <div className="r">
                      <span className={s["ic-w"]}>
                        <Icon name="clock" size="xs" />
                      </span>
                      Required LMS item due in 5 days
                    </div>
                  </div>
                  <Button size="sm">
                    Remind
                  </Button>
                </div>
                <div className={s.cf}>
                  <Icon name="eyeoff" size="xs" style={{ color: "var(--faint)" }} />
                  <span className={s.note}>
                    Prompts to support, not ratings. Only you see this.
                  </span>
                </div>
              </div>
            </section>
            <section className={cx("panel", s.card)}>
              <div className="panel-h">
                <Icon name="cal" size="sm" />
                <h2>
                  1:1s coming up
                </h2>
                <span className="cnt">
                  2 · next 7 days
                </span>
                <span className="lnk">
                  {"Calendar "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={s.cb}>
                <div className={s.oo}>
                  <div className={s.dt}>
                    <small>
                      MON
                    </small>
                    <b>
                      24
                    </b>
                    <i>
                      10:00
                    </i>
                  </div>
                  <div className="grow">
                    <div className="n">
                      Omar Haddad
                    </div>
                    <div className="c">
                      First development talk
                    </div>
                    <div className="why">
                      <b>
                        Talk about
                      </b>
                      a first goal together
                    </div>
                  </div>
                  <Button size="sm">
                    Prep
                  </Button>
                </div>
                <div className={s.oo}>
                  <div className={s.dt}>
                    <small>
                      WED
                    </small>
                    <b>
                      26
                    </b>
                    <i>
                      14:30
                    </i>
                  </div>
                  <div className="grow">
                    <div className="n">
                      Lucas Silva
                    </div>
                    <div className="c">
                      Last development talk 11 Oct
                    </div>
                    <div className="why">
                      <b>
                        Talk about
                      </b>
                      his next goal
                    </div>
                  </div>
                  <Button size="sm">
                    Prep
                  </Button>
                </div>
                <div className={s.cf}>
                  <Icon name="clock" size="xs" style={{ color: "var(--faint)" }} />
                  <span className={cx("grow", s.note)}>
                    Daniel and Tom: over 30 days since their last.
                  </span>
                  <Button variant="ghost" size="sm">
                    Book
                  </Button>
                </div>
              </div>
            </section>
          </div>
          <section className={cx("panel", s.pulse)}>
            <div className={s.cell}>
              <div className={s.k}>
                Approved this quarter
              </div>
              <div className="row">
                <span className={s.v}>
                  23
                </span>
                <span className={cx("ok", s.dl)}>
                  +6 vs Q3
                </span>
                <span className={cx("sp", s.dl)} title="Formal 12 · Relational 4 · Experiential 7">
                  Formal 12 · Rel 4 · Exp 7
                </span>
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                Your review median
              </div>
              <div className="row">
                <span className={s.v}>
                  2.8
                  <small>
                    {" days"}
                  </small>
                </span>
                <span className={s.dl}>
                  window 7
                </span>
                <div className={s.meter} title="2.8 of 7 days">
                  <span style={{ width: "40%" }} />
                </div>
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                Goal coverage
              </div>
              <div className="row">
                <span className={s.v}>
                  8
                  <small>
                    /11
                  </small>
                </span>
                <span className={s.dl}>
                  have a goal
                </span>
                <div className={s.meter} title="8 of 11 people">
                  <span style={{ width: "72.7%" }} />
                </div>
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                <span className={s["ic-w"]}>
                  <Icon name="alert" size="xs" />
                </span>
                Skills resting on one person
              </div>
              <div className="row">
                <span className={s.v}>
                  2
                </span>
                <span className={s.dl}>
                  {"Interface mgmt · Integration & test"}
                </span>
              </div>
            </div>
          </section>
          <div className={s.bottom}>
            <section className="panel">
              <div className="panel-h">
                <h2>
                  Recently approved
                </h2>
                <span className="cnt">
                  team wins
                </span>
                <span className="lnk">
                  {"All "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div>
                <div className={cx("hover", s.win)}>
                  <StatusIcon status="approved" />
                  <span className="t">
                    Requirements Quality
                    <span className="mono">
                      RQ-120
                    </span>
                  </span>
                  <span className={s.who}>
                    Daniel Okafor
                  </span>
                  <span className={s.tg}>
                    <Button variant="ghost" size="sm">
                      <Icon name="msg" size="xs" />
                      {" Say well done"}
                    </Button>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <span className="m">
                      19 Nov
                    </span>
                  </span>
                </div>
                <div className={s.win}>
                  <StatusIcon status="approved" />
                  <span className="t">
                    Lead a model review
                  </span>
                  <span className={s.who}>
                    Aisha Khan
                  </span>
                  <span className={s.tg}>
                    <Tag>
                      <TypeDot kind="exp" />
                      Experiential
                    </Tag>
                    <span className="m">
                      17 Nov
                    </span>
                  </span>
                </div>
                <div className={s.win}>
                  <StatusIcon status="approved" />
                  <span className="t">
                    {"V&V Planning Essentials"}
                    <span className="mono">
                      VV-230
                    </span>
                  </span>
                  <span className={s.who}>
                    Maria Gomez
                  </span>
                  <span className={s.tg}>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <span className="m">
                      14 Nov
                    </span>
                  </span>
                </div>
                <div className={s.win}>
                  <StatusIcon status="approved" />
                  <span className="t">
                    Configuration Control
                    <span className="mono">
                      CM-140
                    </span>
                  </span>
                  <span className={s.who}>
                    Fatima Rahman
                  </span>
                  <span className={s.tg}>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <span className="m">
                      12 Nov
                    </span>
                  </span>
                </div>
                <div className={s.win}>
                  <StatusIcon status="approved" />
                  <span className="t">
                    Peer design walkthrough
                  </span>
                  <span className={s.who}>
                    Wei Chen
                  </span>
                  <span className={s.tg}>
                    <Tag>
                      <TypeDot kind="exp" />
                      Experiential
                    </Tag>
                    <span className="m">
                      7 Nov
                    </span>
                  </span>
                </div>
                <div className={s.win}>
                  <StatusIcon status="approved" />
                  <span className="t">
                    Trade study write-up
                  </span>
                  <span className={s.who}>
                    Daniel Okafor
                  </span>
                  <span className={s.tg}>
                    <Tag>
                      <TypeDot kind="exp" />
                      Experiential
                    </Tag>
                    <span className="m">
                      5 Nov
                    </span>
                  </span>
                </div>
              </div>
            </section>
            <section className="panel">
              <div className="panel-h">
                <h2>
                  Coming up
                </h2>
                <span className="cnt">
                  next 7 days
                </span>
                <span className="lnk">
                  {"Calendar "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={s.ag}>
                <div className={s.day}>
                  <span className={s.dd}>
                    SAT 22
                  </span>
                  <div>
                    <div className={s.it}>
                      <span className={cx("dot", s.w)} />
                      <span className={s.k}>
                        REVIEW
                      </span>
                      <span>
                        <b>
                          Priya Nair
                        </b>
                        {" · FA-110 due"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.day}>
                  <span className={s.dd}>
                    MON 24
                  </span>
                  <div>
                    <div className={s.it}>
                      <span className="dot a" />
                      <span className={s.k}>
                        1:1
                      </span>
                      <span>
                        <b>
                          Omar Haddad
                        </b>
                        {" · first development talk"}
                      </span>
                    </div>
                    <div className={s.it}>
                      <span className="dot" />
                      <span className={s.k}>
                        REVIEW
                      </span>
                      <span>
                        <b>
                          Alex Kim
                        </b>
                        {" · IM-201 due"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.day}>
                  <span className={s.dd}>
                    WED 26
                  </span>
                  <div>
                    <div className={s.it}>
                      <span className="dot a" />
                      <span className={s.k}>
                        1:1
                      </span>
                      <span>
                        <b>
                          Lucas Silva
                        </b>
                        {" · development talk"}
                      </span>
                    </div>
                    <div className={s.it}>
                      <span className="dot" />
                      <span className={s.k}>
                        LMS
                      </span>
                      <span>
                        <b>
                          Alex Kim
                        </b>
                        {" · export compliance due"}
                      </span>
                    </div>
                    <div className={s.it}>
                      <span className="dot" />
                      <span className={s.k}>
                        REVIEW
                      </span>
                      <span>
                        <b>
                          Wei Chen
                        </b>
                        {" · trace audit due"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.day}>
                  <span className={s.dd}>
                    THU 27
                  </span>
                  <div>
                    <div className={s.it}>
                      <span className="dot" />
                      <span className={s.k}>
                        REVIEW
                      </span>
                      <span>
                        <b>
                          Maria Gomez
                        </b>
                        {" · shadowing due"}
                      </span>
                    </div>
                  </div>
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
