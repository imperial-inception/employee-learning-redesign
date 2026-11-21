// GENERATED from design/html/20-person.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Priya Nair";

export default function View_20_person() {
  return (
    <div className={s.v}>
      <AppShell active="team" manager>
        <main id="page">
          <div className="crumbs">
            <Icon name="users" size="xs" />
            <span>
              Team
            </span>
            <span className="sl">
              /
            </span>
            <span style={{ color: "var(--text-2)" }}>
              Priya Nair
            </span>
            <span className="sp mono faint" style={{ fontSize: "11.5px" }}>
              {"2 OF 11 "}
              <Icon name="cu" size="xs" />
              <Icon name="cd" size="xs" />
            </span>
          </div>
          <header className={s.hd}>
            <div className={cx("avatar a2", s.xl)}>
              PN
            </div>
            <div>
              <h1>
                Priya Nair
              </h1>
              <div className="sub">
                <span>
                  Your direct report since Mar 2024
                </span>
                <span className="faint">
                  ·
                </span>
                <span>
                  Last recorded learning 19 Nov
                </span>
              </div>
            </div>
            <div className="acts">
              <Button>
                <Icon name="download" size="sm" />
                {" Export evidence"}
              </Button>
              <Button>
                <Icon name="target" size="sm" />
                {" Open her plan"}
              </Button>
            </div>
          </header>
          <section className={cx("panel", s.facts)}>
            <div className={s.cell}>
              <div className={s.k}>
                JOB TITLE · HR DIRECTORY
              </div>
              <div className={s.v}>
                Lead Systems Engineer
              </div>
              <div className={s.s}>
                <Icon name="alert" size="xs" className="c-warn" />
                <span>
                  {"As of 20 Nov · today's refresh failed"}
                </span>
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                PROFESSIONAL ROLE · SET BY YOU
              </div>
              <div className={s.v}>
                Interface Architect
              </div>
              <Button size="sm" className={s.chg}>
                Change role
              </Button>
              <div className={s.s}>
                Assigned 12 Sep · sets her job expectations
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                FOCUS GOAL
              </div>
              <div className={s.v}>
                <Icon name="target" size="sm" className="c-accent" />
                <span className="ellipsis">
                  Lead interface control for the flight-control upgrade
                </span>
              </div>
              <div className={s.s}>
                Due 15 Jan · short-term · 3 of 6 approved
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                COLLEAGUE DIRECTORY
              </div>
              <div className={s.v}>
                <Icon name="eye" size="sm" className="c-muted" />
                Visible
              </div>
              <div className={s.s}>
                Her choice · 4 skills shared
              </div>
            </div>
          </section>
          <div className={s.lay}>
            <div className={s.col}>
              <section className={cx("panel", s.pp)}>
                <div className="panel-h">
                  <h2>
                    Plan progress
                  </h2>
                  <span className="cnt">
                    3
                  </span>
                  <span className="lnk">
                    Only approved learning counts
                  </span>
                </div>
                <div className="r">
                  <Icon name="target" size="sm" className="c-accent" />
                  <div style={{ minWidth: "0" }}>
                    <div className="t ellipsis">
                      Lead interface control for the flight-control upgrade
                    </div>
                    <div className="c">
                      Focus goal · 2 milestones · 6 activities
                    </div>
                  </div>
                  <div className={s.tln}>
                    <span className={s.tr} />
                    <span className={s.el} style={{ width: "49%" }} />
                    <span className="dot ok" style={{ left: "10%" }} />
                    <span className="dot ok" style={{ left: "21%" }} />
                    <span className="dot ok" style={{ left: "31%" }} />
                    <span className={cx("dot", s.rv)} style={{ left: "41%" }} />
                    <span className={cx("dot", s.no)} style={{ left: "66%" }} />
                    <span className={cx("dot", s.no)} style={{ left: "88%" }} />
                    <span className={s.now} style={{ left: "49%" }} />
                    <div className={s.ax}>
                      <span>
                        1 SEP
                      </span>
                      <span className={s.tdy} style={{ left: "49%" }}>
                        TODAY
                      </span>
                      <span>
                        15 JAN
                      </span>
                    </div>
                  </div>
                  <span className="n">
                    <b>
                      3
                    </b>
                    /6
                  </span>
                </div>
                <div className="r">
                  <Icon name="route" size="sm" />
                  <div style={{ minWidth: "0" }}>
                    <div className="t ellipsis">
                      {"Interface definition & control"}
                    </div>
                    <div className="c">
                      Pathway · revision 2 · adopted 2 Sep
                    </div>
                  </div>
                  <div className={s.tln}>
                    <span className={s.tr} />
                    <span className={s.el} style={{ width: "72%" }} />
                    <span className="dot ok" style={{ left: "14%" }} />
                    <span className="dot ok" style={{ left: "36%" }} />
                    <span className="dot ok" style={{ left: "58%" }} />
                    <span className={cx("dot", s.pr)} style={{ left: "76%" }} />
                    <span className={s.now} style={{ left: "72%" }} />
                    <div className={s.ax}>
                      <span>
                        2 SEP
                      </span>
                      <span className={s.tdy} style={{ left: "72%" }}>
                        TODAY
                      </span>
                      <span>
                        19 DEC
                      </span>
                    </div>
                  </div>
                  <span className="n">
                    <b>
                      3
                    </b>
                    /4
                  </span>
                </div>
                <div className="r">
                  <Icon name="route" size="sm" />
                  <div style={{ minWidth: "0" }}>
                    <div className="t ellipsis">
                      Systems engineering development
                    </div>
                    <div className="c">
                      Pathway · revision 1 · adopted 14 Oct
                    </div>
                  </div>
                  <div className={s.tln}>
                    <span className={s.tr} />
                    <span className={s.el} style={{ width: "28%" }} />
                    <span className="dot ok" style={{ left: "10%" }} />
                    <span className={cx("dot", s.no)} style={{ left: "34%" }} />
                    <span className={cx("dot", s.no)} style={{ left: "54%" }} />
                    <span className={cx("dot", s.no)} style={{ left: "74%" }} />
                    <span className={cx("dot", s.no)} style={{ left: "92%" }} />
                    <span className={s.now} style={{ left: "28%" }} />
                    <div className={s.ax}>
                      <span>
                        14 OCT
                      </span>
                      <span className={s.tdy} style={{ left: "28%" }}>
                        TODAY
                      </span>
                      <span>
                        6 MAR
                      </span>
                    </div>
                  </div>
                  <span className="n">
                    <b>
                      1
                    </b>
                    /5
                  </span>
                </div>
                <div className={s.ft}>
                  <span>
                    <i className={s.sw} style={{ background: "var(--ok)" }} />
                    Approved
                  </span>
                  <span>
                    <i className={s.sw} style={{ background: "var(--warn)" }} />
                    In review
                  </span>
                  <span>
                    <i className={s.sw} style={{ background: "var(--brand)" }} />
                    In progress
                  </span>
                  <span>
                    <i className={s.sw} style={{ boxShadow: "inset 0 0 0 1.5px var(--faint)" }} />
                    Not started
                  </span>
                  <span className="sp">
                    {"Dots sit on each activity's planned date"}
                  </span>
                </div>
              </section>
              <div className={s.two}>
                <section className={cx("panel", s.ev)}>
                  <div className="panel-h">
                    <h2>
                      Recent evidence
                    </h2>
                    <span className="cnt">
                      9
                    </span>
                    <span className="lnk">
                      This year
                    </span>
                  </div>
                  <div className="li">
                    <StatusIcon status="approved" />
                    <div className="grow ellipsis">
                      <span className="t">
                        Interface Management
                      </span>
                      <span className={s.code}>
                        IM-201
                      </span>
                    </div>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <span className="m">
                      12 Nov
                    </span>
                  </div>
                  <div className="li">
                    <StatusIcon status="approved" />
                    <div className="grow ellipsis">
                      <span className="t">
                        ICD walkthrough with avionics
                      </span>
                    </div>
                    <Tag>
                      <TypeDot kind="rel" />
                      Relational
                    </Tag>
                    <span className="m">
                      4 Nov
                    </span>
                  </div>
                  <div className="li">
                    <StatusIcon status="approved" />
                    <div className="grow ellipsis">
                      <span className="t">
                        Requirements Traceability
                      </span>
                      <span className={s.code}>
                        RQ-102
                      </span>
                    </div>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <span className="m">
                      22 Oct
                    </span>
                  </div>
                  <div className="li">
                    <StatusIcon status="approved" />
                    <div className="grow ellipsis">
                      <span className="t">
                        Ran the actuation ICD board
                      </span>
                    </div>
                    <Tag>
                      <TypeDot kind="exp" />
                      Experiential
                    </Tag>
                    <span className="m">
                      9 Oct
                    </span>
                  </div>
                  <div className="li">
                    <StatusIcon status="approved" />
                    <div className="grow ellipsis">
                      <span className="t">
                        Configuration Control
                      </span>
                      <span className={s.code}>
                        CM-140
                      </span>
                    </div>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <span className="m">
                      30 Sep
                    </span>
                  </div>
                  <div className="li">
                    <StatusIcon status="approved" />
                    <div className="grow ellipsis">
                      <span className="t">
                        Interface peer review with Wei Chen
                      </span>
                    </div>
                    <Tag>
                      <TypeDot kind="rel" />
                      Relational
                    </Tag>
                    <span className="m">
                      18 Sep
                    </span>
                  </div>
                  <div className={s.ft}>
                    <span>
                      All 9 approved · all submitted on time
                    </span>
                    <span className="sp">
                      {"Full record "}
                      <Icon name="cr" size="xs" />
                    </span>
                  </div>
                </section>
                <section className={cx("panel glow", s.nd)}>
                  <div className="panel-h">
                    <h2>
                      Needs you
                    </h2>
                    <span className="cnt">
                      3
                    </span>
                    <span className="lnk">
                      {"Waiting for you "}
                      <Icon name="cr" size="xs" />
                    </span>
                  </div>
                  <div className={s.gp}>
                    IN REVIEW
                  </div>
                  <div className="li">
                    <StatusIcon status="submitted" />
                    <div className="grow">
                      <div className="t">
                        {"V&V Planning Essentials "}
                        <span className={s.code}>
                          VV-230
                        </span>
                      </div>
                      <div className="c">
                        <span style={{ color: "var(--warn)" }}>
                          Due 26 Nov
                        </span>
                        {" · submitted "}
                        <span className={s["ok-t"]}>
                          on time
                        </span>
                      </div>
                    </div>
                    <Button variant="primary" size="sm">
                      {"Review "}
                      <Kbd>
                        Enter
                      </Kbd>
                    </Button>
                  </div>
                  <div className={s.gp}>
                    EXPERIENCE TO CONFIRM
                  </div>
                  <div className="li">
                    <Icon name="brief" size="sm" />
                    <div className="grow">
                      <div className="t">
                        Led ICD reconciliation, avionics and actuation
                      </div>
                      <div className="c">
                        Feb–Sep 2025 · self-reported 17 Nov
                      </div>
                      <div className="acts">
                        <Button size="sm">
                          <Icon name="check" size="xs" />
                          {" Confirm"}
                        </Button>
                        <Button variant="ghost" size="sm">
                          Not sure
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="li">
                    <Icon name="grid" size="sm" />
                    <div className="grow">
                      <div className="t">
                        {"SysML v2 textual notation "}
                        <span className="faint" style={{ fontSize: "12.5px" }}>
                          · tool
                        </span>
                      </div>
                      <div className="c">
                        Used on 2 programs · self-reported 17 Nov
                      </div>
                      <div className="acts">
                        <Button size="sm">
                          <Icon name="check" size="xs" />
                          {" Confirm"}
                        </Button>
                        <Button variant="ghost" size="sm">
                          Not sure
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className={s.col}>
              <section className={cx("panel", s.fb)}>
                <div className="panel-h">
                  <Icon name="msg" size="sm" className="c-muted" />
                  <h2>
                    Shared feedback
                  </h2>
                  <span className={s.hdv}>
                    <Icon name="eye" size="xs" />
                    Priya sees this
                  </span>
                </div>
                <div className={s.msg}>
                  <Avatar initials="JL" />
                  <div className="grow">
                    <div className={s.w}>
                      <b>
                        You
                      </b>
                      <span className="mono">
                        12 NOV
                      </span>
                    </div>
                    <p>
                      {"Your IM-201 evidence was the clearest I've seen this year. The interface matrix is exactly what the board needs."}
                    </p>
                    <span className={s.ref}>
                      <StatusIcon status="approved" />
                      Interface Management IM-201
                    </span>
                  </div>
                </div>
                <div className={s.msg}>
                  <Avatar initials="PN" tone={2} />
                  <div className="grow">
                    <div className={s.w}>
                      <b>
                        Priya Nair
                      </b>
                      <span className="mono">
                        19 NOV
                      </span>
                    </div>
                    <p>
                      Thanks. Could I start SysML v2 for architects next quarter, so the models are ready for the January board?
                    </p>
                  </div>
                </div>
                <div className={s.msg}>
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
                      {"Yes. Let's add it once VV-230 is approved and talk dates at our 1:1."}
                    </p>
                  </div>
                </div>
                <div className={s.cmp}>
                  <div className="input">
                    <span className="muted">
                      Write feedback Priya will see…
                    </span>
                    <span className="sp">
                      <Icon name="send" size="sm" />
                    </span>
                  </div>
                </div>
              </section>
              <section className={cx("priv", s.pn)}>
                <div className={s.h}>
                  <span className={s.lk}>
                    <Icon name="lock" size="sm" />
                  </span>
                  <h2>
                    Private notes
                  </h2>
                  <span className={s.only}>
                    <Icon name="eyeoff" size="xs" />
                    Only you can see this
                  </span>
                </div>
                <div className={s.nt}>
                  <span className="mono">
                    20 NOV
                  </span>
                  Wants to lead the interface review board in Q1. Check her load on the flight-control upgrade before adding the SysML pathway.
                </div>
                <div className={s.nt}>
                  <span className="mono">
                    4 NOV
                  </span>
                  Asked about the lead role. Revisit after the ICD board results.
                </div>
                <div className={s.in}>
                  <Icon name="plus" size="sm" />
                  Add a private note
                </div>
                <div className={s.rule}>
                  <Icon name="lock" size="xs" className={s.mt2} />
                  <span>
                    Never shown to Priya or her next manager, never in reports, never sent to AI.
                  </span>
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
