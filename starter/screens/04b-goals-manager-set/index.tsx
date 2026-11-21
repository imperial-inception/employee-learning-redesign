// GENERATED from design/html/04b-goals-manager-set.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Goal set by your manager";

export default function View_04b_goals_manager_set() {
  return (
    <div className={s.v}>
      <AppShell active="plan" manager>
        <main id="page">
          <header className="ph" style={{ marginBottom: "20px" }}>
            <div>
              <h1>
                {"Goals & pathways"}
              </h1>
              <p className="sub">
                {"Your goals and the pathways you've adopted. Only learning your manager approves counts toward them."}
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="route" size="sm" />
                {" Browse pathways"}
              </Button>
              <Button>
                <Icon name="arrow" size="sm" />
                {" Next level"}
              </Button>
            </div>
          </header>
          <div className={s.lay}>
            <div className={s.col}>
              <section className={cx("panel", s.nl)}>
                <div className="panel-h">
                  <h2>
                    Goals
                  </h2>
                  <span className="cnt">
                    3
                  </span>
                </div>
                <div className="li">
                  <Icon name="target" size="sm" className={s.acc} />
                  <div className="grow">
                    <div className="t">
                      Become confident using SysML v2 to describe system architecture
                    </div>
                    <div className={s.mini}>
                      <div className="bar">
                        <span className="a" style={{ width: "40%" }} />
                        <span className="r" style={{ width: "20%" }} />
                        <span className={s.o} style={{ width: "20%" }} />
                        <span className="n" style={{ width: "20%" }} />
                      </div>
                      <span className="m">
                        2/5
                      </span>
                    </div>
                    <div className="c">
                      Focus · due 31 Dec
                    </div>
                  </div>
                </div>
                <div className="li sel">
                  <Icon name="target" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Write the actuation verification plan
                    </div>
                    <div className={s.mini}>
                      <div className="bar">
                        <span className="n" style={{ width: "100%" }} />
                      </div>
                      <span className="m">
                        0/3
                      </span>
                    </div>
                    <div className={cx("c", s["gs-c"])}>
                      <Avatar initials="SP" tone={3} />
                      Set by Sam · 18 Nov · due 27 Feb
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="target" size="sm" className="faint" />
                  <div className="grow">
                    <div className="t">
                      Lead an interface review
                    </div>
                    <div className="c">
                      Draft · no due date · nothing linked yet
                    </div>
                  </div>
                </div>
                <div className={cx("li", s.add)}>
                  <Icon name="plus" size="sm" />
                  <span>
                    New goal
                  </span>
                  <Kbd className="sp">
                    G
                  </Kbd>
                </div>
              </section>
              <section className={cx("panel", s.nl)}>
                <div className="panel-h">
                  <h2>
                    Pathways
                  </h2>
                  <span className="cnt">
                    3
                  </span>
                  <span className="lnk">
                    {"Browse "}
                    <Icon name="cr" size="xs" />
                  </span>
                </div>
                <div className="li">
                  <Icon name="route" size="sm" />
                  <div className="grow">
                    <div className="t">
                      {"MBSE foundations & digital-thread integration"}
                    </div>
                    <div className={s.mini}>
                      <div className="bar">
                        <span className="a" style={{ width: "40%" }} />
                        <span className="r" style={{ width: "20%" }} />
                        <span className="n" style={{ width: "40%" }} />
                      </div>
                      <span className="m">
                        2/5
                      </span>
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="route" size="sm" />
                  <div className="grow">
                    <div className="t">
                      {"Systems integration & verification"}
                    </div>
                    <div className={s.mini}>
                      <div className="bar">
                        <span className="a" style={{ width: "25%" }} />
                        <span className="p" style={{ width: "25%" }} />
                        <span className="n" style={{ width: "50%" }} />
                      </div>
                      <span className="m">
                        1/4
                      </span>
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="route" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Systems engineering development
                    </div>
                    <div className={s.mini}>
                      <div className="bar">
                        <span className="n" style={{ width: "100%" }} />
                      </div>
                      <span className="m">
                        0/5
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={s.col}>
              <section className={cx("panel glow", s.goal)}>
                <div className={s.gm}>
                  <div className="row" style={{ gap: "8px" }}>
                    <Pill tone="neu" className={s["gs-by"]}>
                      <Avatar initials="SP" tone={3} />
                      Set by Sam · 18 Nov
                    </Pill>
                    <Tag title="Set from the due date">
                      Medium-term
                    </Tag>
                    <span className={cx("sp", s["gs-acts"])}>
                      <Button size="sm">
                        <Icon name="msg" size="xs" />
                        {" Discuss in 1:1"}
                      </Button>
                      <Button variant="ghost" size="sm" className={s["gs-dis"]} aria-disabled="true">
                        <Icon name="lock" size="xs" />
                        {" Delete"}
                      </Button>
                      <span className={s["gs-tip"]} role="tooltip">
                        <Icon name="lock" size="xs" />
                        Only Sam can remove a goal he set
                      </span>
                    </span>
                  </div>
                  <h2>
                    Write the actuation verification plan
                  </h2>
                  <p className={s.whyl}>
                    <b>
                      Why, from Sam:
                    </b>
                    {" V&V planning is the open gap on your Next level page, and the actuation CDR needs a verification plan by March."}
                  </p>
                  <div className={s.gfacts}>
                    <div className={s.f}>
                      <div className={s.k}>
                        DUE
                      </div>
                      <div className={s.v}>
                        27 Feb
                        <small>
                          98 days
                        </small>
                      </div>
                    </div>
                    <div className={s.f}>
                      <div className="row" style={{ gap: "8px" }}>
                        <span className={s.k}>
                          PROGRESS
                        </span>
                        <span className="sp" style={{ fontSize: "12.5px" }}>
                          <b className="mono" style={{ fontWeight: "600" }}>
                            0/3
                          </b>
                          {" "}
                          <span className="muted">
                            approved
                          </span>
                        </span>
                      </div>
                      <div className="bar" style={{ marginTop: "10px" }}>
                        <span className="n" style={{ width: "100%" }} />
                      </div>
                      <div className="legend">
                        <span>
                          <i style={{ background: "var(--surface-3)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                          Not started 3
                        </span>
                        <span className="faint">
                          Set 3 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.gl}>
                  <div className={s.hd}>
                    {"Milestones "}
                    <span className={s.count}>
                      3
                    </span>
                    <span className="sp faint" style={{ fontWeight: "400", fontSize: "12px" }}>
                      You can update them
                    </span>
                  </div>
                  <div className="r">
                    <StatusIcon status="not_started" />
                    <span className={s["gs-n"]}>
                      M1
                    </span>
                    <span className="ellipsis">
                      Learn verification planning
                    </span>
                    <span className={cx("mono", s.s)}>
                      19 Dec
                    </span>
                  </div>
                  <div className="r">
                    <StatusIcon status="not_started" />
                    <span className={s["gs-n"]}>
                      M2
                    </span>
                    <span className="ellipsis">
                      Draft the actuation verification plan
                    </span>
                    <span className={cx("mono", s.s)}>
                      30 Jan
                    </span>
                  </div>
                  <div className="r">
                    <StatusIcon status="not_started" />
                    <span className={s["gs-n"]}>
                      M3
                    </span>
                    <span className="ellipsis">
                      Walk Sam through the plan
                    </span>
                    <span className={cx("mono", s.s)}>
                      26 Feb
                    </span>
                  </div>
                  <div className={cx("row", s.ft)} style={{ gap: "7px" }}>
                    <Icon name="plus" size="xs" />
                    Add milestone
                    <span className="sp">
                      Sam sees your changes
                    </span>
                  </div>
                </div>
              </section>
              <section className={cx("panel", s["gs-low"])}>
                <div className={s["gs-ll"]}>
                  <div className="panel-h">
                    <h2>
                      Linked learning
                    </h2>
                    <span className="cnt">
                      3
                    </span>
                    <span className="lnk">
                      Sam linked 2 · you added 1
                    </span>
                  </div>
                  <div className={cx(s["gs-ar"], s.next)}>
                    <StatusIcon status="not_started" />
                    <div style={{ minWidth: "0" }}>
                      <div className="t ellipsis">
                        {"V&V Planning Essentials"}
                        <span className={s.code}>
                          VV-230
                        </span>
                      </div>
                      <div className="c">
                        <TypeDot kind="formal" />
                        Formal · LMS · L2 · 3 h · linked by Sam
                      </div>
                    </div>
                    <span className={s.rt}>
                      <Button size="sm">
                        {"Record "}
                        <Kbd>
                          R
                        </Kbd>
                      </Button>
                      <Button variant="primary" size="sm">
                        {"Open in LMS "}
                        <Icon name="ext" size="xs" />
                      </Button>
                    </span>
                  </div>
                  <div className={s["gs-ar"]}>
                    <StatusIcon status="not_started" />
                    <div style={{ minWidth: "0" }}>
                      <div className="t ellipsis">
                        {"V&V plan walkthrough with Wei Chen"}
                      </div>
                      <div className="c">
                        <TypeDot kind="rel" />
                        Relational · 1 h · added by you
                      </div>
                    </div>
                    <span className={s.rt}>
                      Not started
                      <span className={s.rm}>
                        <Icon name="x" size="xs" />
                      </span>
                    </span>
                  </div>
                  <div className={s["gs-ar"]}>
                    <StatusIcon status="not_started" />
                    <div style={{ minWidth: "0" }}>
                      <div className="t ellipsis">
                        Actuation verification plan
                      </div>
                      <div className="c">
                        <TypeDot kind="exp" />
                        Experiential · ~10 h · done on the job, Sam reviews it
                      </div>
                    </div>
                    <span className={s.rt}>
                      Not started
                    </span>
                  </div>
                  <div className={s["gs-lf"]}>
                    <Icon name="plus" size="xs" />
                    Link learning
                    <span className="sp">
                      Only approved learning counts
                    </span>
                  </div>
                  <div className={s["gs-perm"]}>
                    <Icon name="info" size="xs" />
                    <span>
                      <b>
                        Sam set this goal.
                      </b>
                      {" You can link learning, update milestones, comment and make it your focus. The title, why and due date are his to change."}
                    </span>
                  </div>
                </div>
                <div className={s["gs-cm"]}>
                  <div className="panel-h">
                    <Icon name="msg" size="sm" className="c-muted" />
                    <h2>
                      Comments
                    </h2>
                    <span className={s.hdv}>
                      <Icon name="eye" size="xs" />
                      Sam sees these
                    </span>
                  </div>
                  <div className={s["gs-msg"]}>
                    <Avatar initials="SP" tone={3} />
                    <div className="grow">
                      <div className={s.w}>
                        <b>
                          Sam Patel
                        </b>
                        <span className="mono">
                          18 NOV
                        </span>
                      </div>
                      <p>
                        {"Setting this so V&V planning has a date before the actuation CDR. Start with VV-230; Wei Chen can walk you through his plan."}
                      </p>
                    </div>
                  </div>
                  <div className={s["gs-msg"]}>
                    <Avatar initials="JL" />
                    <div className="grow">
                      <div className={s.w}>
                        <b>
                          You
                        </b>
                        <span className="mono">
                          19 NOV
                        </span>
                      </div>
                      <p>
                        {"Makes sense. I'll finish VV-230 before the holidays and book an hour with Wei."}
                      </p>
                    </div>
                  </div>
                  <div className={s["gs-cmp"]}>
                    <div className="input">
                      <span className="muted">
                        Comment… Sam sees this
                      </span>
                      <span className="sp">
                        <Icon name="send" size="sm" />
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
