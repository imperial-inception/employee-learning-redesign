// GENERATED from design/html/04-goals.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Goals & pathways";

export default function View_04_goals() {
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
                    2
                  </span>
                </div>
                <div className="li sel">
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
                <div className="li sel">
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
                    <Pill tone="acc">
                      <Icon name="target" size="xs" />
                      {" Focus goal"}
                    </Pill>
                    <Tag>
                      Short-term
                    </Tag>
                    <span className="faint" style={{ fontSize: "12px" }}>
                      set from due date
                    </span>
                    <span className="sp row" style={{ gap: "6px" }}>
                      <Button size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Unfocus
                      </Button>
                    </span>
                  </div>
                  <h2>
                    Become confident using SysML v2 to describe system architecture
                  </h2>
                  <p className={s.whyl}>
                    <b>
                      Why:
                    </b>
                    {" the actuation architecture moves to SysML v2 models in Q1, and I'll own the interface views."}
                  </p>
                  <div className={s.gfacts}>
                    <div className={s.f}>
                      <div className={s.k}>
                        DUE
                      </div>
                      <div className={s.v}>
                        31 Dec
                        <small>
                          40 days
                        </small>
                      </div>
                    </div>
                    <div className={s.f}>
                      <div className="row" style={{ gap: "8px" }}>
                        <span className={s.k} title="An activity counts once Sam approves it. Submitted work shows as in review until then; on time is judged by the day you submit." style={{ cursor: "help" }}>
                          PROGRESS
                        </span>
                        <span className="sp" style={{ fontSize: "12.5px" }}>
                          <b className="mono" style={{ fontWeight: "600" }}>
                            2/5
                          </b>
                          {" "}
                          <span className="muted">
                            approved
                          </span>
                        </span>
                      </div>
                      <div className="bar" style={{ marginTop: "10px" }}>
                        <span className="a" style={{ width: "40%" }} />
                        <span className="r" style={{ width: "20%" }} />
                        <span className={s.o} style={{ width: "20%" }} />
                        <span className="n" style={{ width: "20%" }} />
                      </div>
                      <div className="legend">
                        <span>
                          <i style={{ background: "var(--ok)" }} />
                          Approved 2
                        </span>
                        <span>
                          <i style={{ background: "var(--warn)" }} />
                          In review 1
                        </span>
                        <span>
                          <i className={s["sw-o"]} />
                          Returned 1
                        </span>
                        <span>
                          <i style={{ background: "var(--surface-3)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                          Not started 1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.gl}>
                  <div className={s.hd}>
                    {"Linked learning "}
                    <span className={s.count}>
                      5
                    </span>
                    <span className="sp faint" style={{ fontWeight: "400", fontSize: "12px" }}>
                      3 from this pathway
                    </span>
                  </div>
                  <div className="r">
                    <StatusIcon status="returned" />
                    <span className="ellipsis">
                      {"Clear Status & Issue Communication"}
                    </span>
                    <span className={s.s} style={{ color: "var(--orange)" }}>
                      Returned
                    </span>
                  </div>
                  <div className="r">
                    <StatusIcon status="submitted" />
                    <span className="ellipsis">
                      {"Functional Architecture "}
                      <span className="mono faint" style={{ fontSize: "11.5px" }}>
                        FA-110
                      </span>
                    </span>
                    <span className={s.s}>
                      In review
                    </span>
                  </div>
                  <div className="r">
                    <StatusIcon status="not_started" />
                    <span className="ellipsis">
                      SysML v2 language overview
                    </span>
                    <span className={s.s}>
                      Not started
                    </span>
                  </div>
                  <div className="r">
                    <StatusIcon status="approved" />
                    <span className="ellipsis">
                      RFLP model walkthrough
                    </span>
                    <span className={cx("mono", s.s)}>
                      29 Oct
                    </span>
                  </div>
                  <div className="r">
                    <StatusIcon status="approved" />
                    <span className="ellipsis">
                      {"Systems Engineering Fundamentals "}
                      <span className="mono faint" style={{ fontSize: "11.5px" }}>
                        SE-101
                      </span>
                    </span>
                    <span className={cx("mono", s.s)}>
                      14 Oct
                    </span>
                  </div>
                  <div className={cx("row", s.ft)} style={{ gap: "7px" }}>
                    <Icon name="plus" size="xs" />
                    Link learning
                    <span className="sp">
                      2 added directly
                    </span>
                  </div>
                </div>
              </section>
              <section className={cx("panel", s.pw)}>
                <div className={s["pw-h"]}>
                  <div className={s["pw-ic"]}>
                    <Icon name="route" />
                  </div>
                  <div className="grow">
                    <h2>
                      {"MBSE foundations & digital-thread integration"}
                    </h2>
                    <div className="c">
                      Pathway · revision 1 · adopted 6 Oct · 3 milestones · 5 activities · about 12 h
                    </div>
                  </div>
                  <div className={s["pw-prog"]}>
                    <div className="row" style={{ gap: "6px", fontSize: "12.5px" }}>
                      <span className="mono" style={{ fontWeight: "600" }}>
                        2/5
                      </span>
                      <span className="muted">
                        approved
                      </span>
                    </div>
                    <div className="bar">
                      <span className="a" style={{ width: "40%" }} />
                      <span className="r" style={{ width: "20%" }} />
                      <span className="n" style={{ width: "40%" }} />
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" style={{ padding: "0 7px" }}>
                    <Icon name="more" size="sm" />
                  </Button>
                </div>
                <div className={cx("banner info", s.rev)}>
                  <span className={s.ic}>
                    <Icon name="refresh" size="sm" />
                  </span>
                  <span>
                    <b style={{ fontWeight: "600" }}>
                      Revision 2 is available:
                    </b>
                    {" "}
                    <span className="t2">
                      adds 1 activity. Your progress carries over.
                    </span>
                  </span>
                  <span className="acts">
                    <Button size="sm">
                      Review changes
                    </Button>
                    <Button variant="ghost" size="sm">
                      Later
                    </Button>
                  </span>
                </div>
                <div className={s.tl}>
                  <div className={cx(s.ms, s.done)}>
                    <span className={s.node}>
                      <StatusIcon status="approved" />
                    </span>
                    <div className={s["ms-h"]}>
                      <span className={s.mk}>
                        M1
                      </span>
                      <b>
                        Explore MBSE and RFLP
                      </b>
                      <span className="c">
                        Done · 2 of 2 approved
                      </span>
                      <span className="sp">
                        COMPLETED 29 OCT
                      </span>
                    </div>
                    <div className={s.box}>
                      <div className={s.ar}>
                        <StatusIcon status="approved" />
                        <div>
                          <div className="t">
                            Systems Engineering Fundamentals
                            <span className={s.code}>
                              SE-101
                            </span>
                          </div>
                          <div className="c">
                            LMS · L1 · course
                          </div>
                        </div>
                        <Tag>
                          <TypeDot kind="formal" />
                          Formal
                        </Tag>
                        <span className={s.du}>
                          2 h
                        </span>
                        <span className={s["st-col"]}>
                          <span className="ok">
                            Approved
                          </span>
                          <span className="mono">
                            14 Oct
                          </span>
                          <span className="faint">
                            · v2
                          </span>
                        </span>
                      </div>
                      <div className={s.ar}>
                        <StatusIcon status="approved" />
                        <div>
                          <div className="t">
                            RFLP model walkthrough
                          </div>
                          <div className="c">
                            One-to-one session with Priya Nair
                          </div>
                        </div>
                        <Tag>
                          <TypeDot kind="rel" />
                          Relational
                        </Tag>
                        <span className={s.du}>
                          1 h
                        </span>
                        <span className={s["st-col"]}>
                          <span className="ok">
                            Approved
                          </span>
                          <span className="mono">
                            29 Oct
                          </span>
                          <span className="faint">
                            · v1
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={cx(s.ms, s.prog)}>
                    <span className={s.node}>
                      <StatusIcon status="in_progress" />
                    </span>
                    <div className={s["ms-h"]}>
                      <span className={s.mk}>
                        M2
                      </span>
                      <b>
                        Connect requirements and traceability
                      </b>
                      <span className="c">
                        In progress · 0 of 2 approved · 1 in review
                      </span>
                    </div>
                    <div className={s.box}>
                      <div className={s.ar}>
                        <StatusIcon status="submitted" />
                        <div>
                          <div className="t">
                            Functional Architecture
                            <span className={s.code}>
                              FA-110
                            </span>
                          </div>
                          <div className="c">
                            LMS · L2 · submitted 18 Nov, on time
                          </div>
                        </div>
                        <Tag>
                          <TypeDot kind="formal" />
                          Formal
                        </Tag>
                        <span className={s.du}>
                          3 h
                        </span>
                        <span className={s["st-col"]}>
                          <span>
                            <span className={s.rv}>
                              In review
                            </span>
                            {" · Sam reviews by "}
                            <span className="mono">
                              25 Nov
                            </span>
                          </span>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </span>
                      </div>
                      <div className={cx(s.ar, s.next)}>
                        <StatusIcon status="not_started" />
                        <div>
                          <div className="t">
                            Model-to-PLM requirements demo
                          </div>
                          <div className="c">
                            LMS · L1 · recorded demo with a guided walkthrough
                          </div>
                        </div>
                        <Tag>
                          <TypeDot kind="formal" />
                          Formal
                        </Tag>
                        <span className={s.du}>
                          1 h
                        </span>
                        <span className={s["st-col"]}>
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
                    </div>
                  </div>
                  <div className={cx(s.ms, s.lock)}>
                    <span className={s.node}>
                      <StatusIcon status="locked" />
                    </span>
                    <div className={s["ms-h"]}>
                      <span className={s.mk}>
                        M3
                      </span>
                      <b>
                        Apply on a project
                      </b>
                      <span className="c">
                        {"Locked until M2's prerequisite is approved"}
                      </span>
                    </div>
                    <div className={s.box}>
                      <div className={cx(s.ar, s.locked)}>
                        <StatusIcon status="locked" />
                        <div>
                          <div className="t">
                            Model governance at team scale
                          </div>
                          <div className="c">
                            Done on the job: you record evidence and Sam reviews it
                          </div>
                        </div>
                        <Tag>
                          <TypeDot kind="exp" />
                          Experiential
                        </Tag>
                        <span className={s.du}>
                          ~8 h
                        </span>
                        <span className={s["st-col"]}>
                          <Icon name="lock" size="xs" />
                          <span>
                            Opens when FA-110 is approved
                          </span>
                        </span>
                      </div>
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
