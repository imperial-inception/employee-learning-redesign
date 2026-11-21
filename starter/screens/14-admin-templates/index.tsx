// GENERATED from design/html/14-admin-templates.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Pill, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Pathway templates";

export default function View_14_admin_templates() {
  return (
    <div className={s.v}>
      <AppShell workspace="admin" active="templates">
        <main id="page">
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <h1>
                Pathway templates
              </h1>
              <p className="sub">
                Ready-made pathways for a population. Employees decide when to move to a new revision.
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="plus" size="sm" />
                {" New template"}
              </Button>
            </div>
          </header>
          <div className={s.lay}>
            <div className={s.col}>
              <section className={cx("panel", s.tl)}>
                <div className="panel-h">
                  <h2>
                    Templates
                  </h2>
                  <span className="cnt">
                    4
                  </span>
                  <span className="lnk">
                    <Icon name="search" size="sm" />
                  </span>
                </div>
                <div className="li on">
                  <span className={s.ic}>
                    <Icon name="route" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      {"MBSE foundations & digital-thread integration"}
                    </div>
                    <div className={s.meta}>
                      <Pill tone="rev" size="sm">
                        Draft rev 2
                      </Pill>
                      <span>
                        <span className="mono">
                          142
                        </span>
                        {" on rev 1"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="li">
                  <span className={s.ic}>
                    <Icon name="route" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Systems integration and verification
                    </div>
                    <div className={s.meta}>
                      <Pill tone="ok" size="sm">
                        Published rev 1
                      </Pill>
                      <span>
                        <span className="mono">
                          88
                        </span>
                        {" employees"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="li">
                  <span className={s.ic}>
                    <Icon name="route" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Requirements engineering essentials
                    </div>
                    <div className={s.meta}>
                      <Pill tone="ok" size="sm">
                        Published
                      </Pill>
                      <span>
                        <span className="mono">
                          61
                        </span>
                        {" employees"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={cx("li", s.ret)}>
                  <span className={s.ic}>
                    <Icon name="route" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      SysML 1.x modeling basics
                    </div>
                    <div className={s.meta}>
                      <Pill tone="neu" size="sm">
                        Retired
                      </Pill>
                      <span>
                        <span className="mono">
                          0
                        </span>
                        {" active · "}
                        <span className="mono">
                          23
                        </span>
                        {" finished"}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section className={cx("panel", s.ed)}>
              <div className="panel-h">
                <span className={s.nm}>
                  {"MBSE foundations & digital-thread integration"}
                </span>
                <Pill tone="rev" size="sm">
                  Draft · revision 2
                </Pill>
                <span className={cx("sp", s.saved)}>
                  <Icon name="check" size="xs" />
                  Saved 14:20
                </span>
                <Button variant="ghost" size="sm" style={{ padding: "0 6px" }}>
                  <Icon name="more" size="sm" />
                </Button>
              </div>
              <div className={s.form}>
                <span className={s.k}>
                  Title
                </span>
                <div className="input">
                  {"MBSE foundations & digital-thread integration"}
                </div>
                <span className={s.k}>
                  Population
                </span>
                <div className={s.chips}>
                  <span className={s.chip}>
                    <Icon name="users" size="xs" />
                    {"Systems Engineering & Integration"}
                    <span className="n">
                      214
                    </span>
                  </span>
                  <span className={s.chip}>
                    <Icon name="users" size="xs" />
                    Digital Thread
                    <span className="n">
                      96
                    </span>
                  </span>
                  <span className={cx(s.chip, s.add)}>
                    <Icon name="plus" size="xs" />
                    Population
                  </span>
                </div>
                <span className={cx(s.k, s.top)}>
                  Description
                </span>
                <div className="textarea">
                  Learn to describe a system with SysML v2 and RFLP, connect requirements through the digital thread, then apply it to one real interface on your project.
                </div>
              </div>
              <div className={s.msh}>
                <h3>
                  Milestones
                </h3>
                <span className="cnt">
                  3 · 9 activities · ~22 h
                </span>
                <Button variant="ghost" size="sm" className="sp">
                  <Icon name="plus" size="xs" />
                  {" Add milestone"}
                </Button>
              </div>
              <div className={s.ms}>
                <div className={s["ms-h"]}>
                  <span className={s.no}>
                    1
                  </span>
                  <b>
                    Explore MBSE and RFLP
                  </b>
                  <span className={s.ren}>
                    Renamed
                  </span>
                  <span className="m">
                    11 h
                  </span>
                  <span className={s.ib}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s.ac}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    1
                  </span>
                  <span className={s.tt}>
                    Systems Engineering Fundamentals
                    <span className={s.cd}>
                      SE-101
                    </span>
                  </span>
                  <span className={s.ty}>
                    <span className={cx("d formal", s.dd)} />
                    Formal
                  </span>
                  <span className={s.du}>
                    6 h
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s.ac}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    2
                  </span>
                  <span className={s.tt}>
                    Functional Architecture
                    <span className={s.cd}>
                      FA-110
                    </span>
                  </span>
                  <span className={s.pre}>
                    <Icon name="lock" size="xs" />
                    after SE-101
                  </span>
                  <span className={s.ty}>
                    <span className={cx("d formal", s.dd)} />
                    Formal
                  </span>
                  <span className={s.du}>
                    4 h
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s.ac}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    3
                  </span>
                  <span className={s.tt}>
                    Walk through an RFLP model with a lead
                  </span>
                  <span className={s.pre}>
                    <Icon name="lock" size="xs" />
                    after FA-110
                  </span>
                  <span className={s.ty}>
                    <span className={cx("d rel", s.dd)} />
                    Relational
                  </span>
                  <span className={s.du}>
                    1 h
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
              </div>
              <div className={s.ms}>
                <div className={s["ms-h"]}>
                  <span className={s.no}>
                    2
                  </span>
                  <b>
                    Connect requirements and traceability
                  </b>
                  <span className="m">
                    ~4 h
                  </span>
                  <span className={s.ib}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s.ac}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    1
                  </span>
                  <span className={s.tt}>
                    Requirements 101
                    <span className={s.cd}>
                      RQ-101
                    </span>
                  </span>
                  <span className={s.ty}>
                    <span className={cx("d formal", s.dd)} />
                    Formal
                  </span>
                  <span className={s.du}>
                    45 m
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={cx(s.ac, s.new)}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    2
                  </span>
                  <span className={s.tt}>
                    Build a subsystem traceability matrix
                    <span className={s.newp}>
                      NEW
                    </span>
                  </span>
                  <span className={s.pre}>
                    <Icon name="lock" size="xs" />
                    after RQ-101
                  </span>
                  <span className={s.ty}>
                    <span className={cx("d exp", s.dd)} />
                    Experiential
                  </span>
                  <span className={s.du}>
                    ~3 h
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={cx(s.ac, s.pl)}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    3
                  </span>
                  <span className={s.tt}>
                    Plan a review with your manager
                  </span>
                  <span className={s.plan}>
                    <Icon name="cal" size="xs" />
                    Planning activity · no completion credit
                  </span>
                  <span className={s.du}>
                    15 m
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
              </div>
              <div className={s.ms}>
                <div className={s["ms-h"]}>
                  <span className={s.no}>
                    3
                  </span>
                  <b>
                    Apply on a project
                  </b>
                  <span className="m">
                    ~7 h
                  </span>
                  <span className={s.ib}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s.ac}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    1
                  </span>
                  <span className={s.tt}>
                    Interface Management
                    <span className={s.cd}>
                      IM-201
                    </span>
                  </span>
                  <span className={s.pre}>
                    <Icon name="lock" size="xs" />
                    after FA-110
                  </span>
                  <span className={s.ty}>
                    <span className={cx("d formal", s.dd)} />
                    Formal
                  </span>
                  <span className={s.du}>
                    2 h
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s.ac}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    2
                  </span>
                  <span className={s.tt}>
                    Model one project interface in SysML v2
                  </span>
                  <span className={s.pre}>
                    <Icon name="lock" size="xs" />
                    after IM-201
                  </span>
                  <span className={s.ty}>
                    <span className={cx("d exp", s.dd)} />
                    Experiential
                  </span>
                  <span className={s.du}>
                    ~4 h
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s.ac}>
                  <span className={s.grip} />
                  <span className={s.ix}>
                    3
                  </span>
                  <span className={s.tt}>
                    Present your model at the MBSE community call
                  </span>
                  <span className={s.ty}>
                    <span className={cx("d rel", s.dd)} />
                    Relational
                  </span>
                  <span className={s.du}>
                    1 h
                  </span>
                  <span className={s.mo}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s.addrow}>
                  <Icon name="plus" size="xs" />
                  Add activity from the catalog
                </div>
              </div>
            </section>
            <aside className={cx("panel glow", s.pub)}>
              <div className="panel-h">
                <h2>
                  Revision 2 vs 1
                </h2>
                <span className="lnk">
                  {"Full diff "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={s.sec}>
                <div className="row" style={{ gap: "6px", marginBottom: "12px" }}>
                  <Pill tone="ok" size="sm">
                    +1 activity
                  </Pill>
                  <Pill tone="acc" size="sm">
                    1 milestone renamed
                  </Pill>
                  <Pill tone="neu" size="sm">
                    0 removed
                  </Pill>
                </div>
                <div className={s.dl}>
                  <div className={s.df}>
                    <span className={cx(s.sg, s.add)}>
                      +
                    </span>
                    <div>
                      <b>
                        Build a subsystem traceability matrix
                      </b>
                      <div className="c">
                        Milestone 2 · experiential · after RQ-101
                      </div>
                    </div>
                  </div>
                  <div className={s.df}>
                    <span className={cx(s.sg, s.chg)}>
                      ~
                    </span>
                    <div>
                      Milestone 1 renamed
                      <div className="c">
                        <s>
                          Explore MBSE
                        </s>
                        {" → Explore MBSE and RFLP"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.sec}>
                <h3>
                  IMPACT
                </h3>
                <div className={s.imp}>
                  <span className="big">
                    142
                  </span>
                  <span className={s.lb}>
                    employees on revision 1
                  </span>
                </div>
                <div className="bar">
                  <span className="p" style={{ width: "68%" }} />
                  <span className="n" style={{ width: "22%" }} />
                  <span className="a" style={{ width: "10%" }} />
                </div>
                <div className="legend">
                  <span>
                    <i style={{ background: "var(--brand)" }} />
                    In progress 97
                  </span>
                  <span>
                    <i style={{ background: "var(--surface-3)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                    Not started 31
                  </span>
                  <span>
                    <i style={{ background: "var(--ok)" }} />
                    Finished 14
                  </span>
                </div>
                <p className={s.note}>
                  Nobody is moved automatically. Each employee chooses when to update, and work already approved keeps its credit.
                </p>
              </div>
              <div className={s.sec}>
                <h3>
                  CHECKS
                </h3>
                <div className={s.chk}>
                  <div>
                    <Icon name="check" size="sm" />
                    All 4 formal activities have a working course link
                  </div>
                  <div>
                    <Icon name="check" size="sm" />
                    Every prerequisite comes earlier in the pathway
                  </div>
                  <div>
                    <Icon name="check" size="sm" />
                    Population matches 310 employees today
                  </div>
                </div>
              </div>
              <div className={s.sec}>
                <h3>
                  WHEN YOU PUBLISH
                </h3>
                <div className={s.opt}>
                  <span className="toggle on" />
                  Require update by a date
                </div>
                <div className={s.dt}>
                  <div className="input">
                    <Icon name="cal" size="sm" />
                    15 Jan 2027
                  </div>
                </div>
                <p className={s.note} style={{ marginTop: "8px" }}>
                  The 128 employees not yet finished are asked to update by then. Reminders start 14 days before.
                </p>
              </div>
              <div className={s.acts2}>
                <Button style={{ flex: "1" }}>
                  Save draft
                </Button>
                <Button variant="primary" style={{ flex: "1.5" }}>
                  Publish revision 2
                </Button>
              </div>
            </aside>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
