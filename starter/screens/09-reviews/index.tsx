// GENERATED from design/html/09-reviews.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Team › Waiting for you";

export default function View_09_reviews() {
  return (
    <div className={s.v}>
      <AppShell active="team" manager>
        <main id="page">
          <header className="ph" style={{ marginBottom: "16px" }}>
            <div>
              <h1>
                Team
              </h1>
              <p className="sub">
                Your 11 direct reports. For development conversations, not performance ratings.
              </p>
            </div>
            <div className="acts">
              <div className={s.fresh}>
                <Icon name="cloud" size="sm" />
                <span>
                  {"Org data from HR directory · last good update "}
                  <span className="mono">
                    20 Nov 00:57
                  </span>
                </span>
                <Pill tone="rev">
                  <Icon name="alert" size="xs" />
                  {" Today's refresh failed"}
                </Pill>
              </div>
            </div>
          </header>
          <div className={cx("tabs", s["tm-tabs"])}>
            <span>
              {"People "}
              <span className="n">
                11
              </span>
            </span>
            <span className="on">
              {"Waiting for you "}
              <span className="n">
                4
              </span>
            </span>
            <div className={s["tm-keys"]}>
              <span className={s.kh}>
                <Kbd>
                  J
                </Kbd>
                <Kbd>
                  K
                </Kbd>
                {" next / previous"}
              </span>
              <span className={s.kh}>
                <Kbd>
                  A
                </Kbd>
                {" approve"}
              </span>
              <span className={s.kh}>
                <Kbd>
                  R
                </Kbd>
                {" return"}
              </span>
            </div>
          </div>
          <div className={s.rv}>
            <div className={s.col}>
              <section className={cx("panel", s.q)}>
                <div className={s.qf}>
                  <div className="seg">
                    <span className="on">
                      {"Waiting "}
                      <span className="n">
                        4
                      </span>
                    </span>
                    <span>
                      {"Returned "}
                      <span className="n">
                        2
                      </span>
                    </span>
                    <span>
                      {"Done this month "}
                      <span className="n">
                        12
                      </span>
                    </span>
                  </div>
                </div>
                <div className="grp">
                  SORTED BY DUE DATE
                  <span className="sp">
                    7-DAY WINDOW FROM SUBMISSION
                  </span>
                </div>
                <div className="li on">
                  <Avatar initials="PN" tone={4} />
                  <div className="grow">
                    <div className={s.nm}>
                      <b>
                        Priya Nair
                      </b>
                      <Pill tone="rev" className="sp" style={{ height: "20px", fontSize: "11.5px" }}>
                        Due tomorrow
                      </Pill>
                    </div>
                    <div className={s.tt}>
                      Functional Architecture
                      <span className="mono">
                        FA-110
                      </span>
                    </div>
                    <div className={s.meta}>
                      <span className={cx("d formal", s.dt)} />
                      Formal
                      <span className={s.sep}>
                        ·
                      </span>
                      <span className={s.vchip}>
                        v2
                      </span>
                      resubmitted after changes
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="AK" tone={5} />
                  <div className="grow">
                    <div className={s.nm}>
                      <b>
                        Alex Kim
                      </b>
                      <span className={s.due}>
                        in 3 days
                      </span>
                    </div>
                    <div className={s.tt}>
                      Interface Management
                      <span className="mono">
                        IM-201
                      </span>
                    </div>
                    <div className={s.meta}>
                      <span className={cx("d formal", s.dt)} />
                      Formal
                      <span className={s.sep}>
                        ·
                      </span>
                      {"submitted "}
                      <span className="mono">
                        17 Nov
                      </span>
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="WC" />
                  <div className="grow">
                    <div className={s.nm}>
                      <b>
                        Wei Chen
                      </b>
                      <span className={s.due}>
                        in 5 days
                      </span>
                    </div>
                    <div className={s.tt}>
                      Run a requirements trace audit
                    </div>
                    <div className={s.meta}>
                      <span className={cx("d exp", s.dt)} />
                      Experiential
                      <span className={s.sep}>
                        ·
                      </span>
                      {"submitted "}
                      <span className="mono">
                        19 Nov
                      </span>
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="MG" tone={3} />
                  <div className="grow">
                    <div className={s.nm}>
                      <b>
                        Maria Gomez
                      </b>
                      <span className={s.due}>
                        in 6 days
                      </span>
                    </div>
                    <div className={s.tt}>
                      Shadow an interface review board
                    </div>
                    <div className={s.meta}>
                      <span className={cx("d rel", s.dt)} />
                      Relational
                      <span className={s.sep}>
                        ·
                      </span>
                      {"submitted "}
                      <span className="mono">
                        20 Nov
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={s.col}>
              <section className={cx("panel", s.det)}>
                <div className={s.dh}>
                  <div className={s.who}>
                    <Avatar initials="PN" tone={4} />
                    <b>
                      Priya Nair
                    </b>
                    <span className="muted">
                      Lead Systems Engineer · direct report
                    </span>
                    <div className={s.pnav}>
                      <span className="mono faint" style={{ fontSize: "11.5px", marginRight: "4px" }}>
                        1 OF 4
                      </span>
                      <Button variant="ghost" size="sm" style={{ padding: "0 6px" }}>
                        <Icon name="cu" size="sm" />
                      </Button>
                      <Button variant="ghost" size="sm" style={{ padding: "0 6px" }}>
                        <Icon name="cd" size="sm" />
                      </Button>
                      <Button size="sm">
                        Open profile
                      </Button>
                    </div>
                  </div>
                  <h2 className={s.ttl}>
                    {"Functional Architecture "}
                    <span className="mono">
                      FA-110
                    </span>
                  </h2>
                  <div className={s.tags}>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <Tag>
                      Academy
                    </Tag>
                    <Tag className="mono">
                      8 h
                    </Tag>
                    <Pill tone="ret">
                      v2 · resubmitted
                    </Pill>
                    <Pill tone="ok">
                      <Icon name="check" size="xs" />
                      {" Submitted on time"}
                    </Pill>
                  </div>
                </div>
                <div className={s.db}>
                  <div className={s.mn}>
                    <div>
                      <div className={s["sec-h"]}>
                        WHAT PRIYA LEARNED
                      </div>
                      <p className={s.prose}>
                        How to break a system function into sub-functions and allocate them to logical elements before choosing any hardware. Functional flow block diagrams made the line between what the system does and what does it finally click.
                      </p>
                    </div>
                    <div>
                      <div className={s["sec-h"]}>
                        HOW PRIYA APPLIED IT
                        <span className={cx("sp", s.v2mark)}>
                          <span className={s.sw} />
                          Added in v2
                        </span>
                      </div>
                      <p className={s.prose}>
                        {"I rebuilt the functional architecture for the hydraulic power unit controller on our test-rig upgrade: 14 functions allocated to 5 logical elements. "}
                        <span className={s.added}>
                          Doing this exposed a missing function, sensor health monitoring, which we added before the 13 Nov design review. The flow diagram is attached.
                        </span>
                      </p>
                    </div>
                    <div>
                      <div className={s["sec-h"]}>
                        {"EVIDENCE "}
                        <span className="mono" style={{ letterSpacing: "0" }}>
                          3
                        </span>
                        <span className="sp faint">
                          2 files · 1 link
                        </span>
                      </div>
                      <div className={s.ev}>
                        <div className={s.evc}>
                          <svg className={s.pv} viewBox="0 0 180 120" preserveAspectRatio="xMidYMid slice">
                            <rect className={s.pg} x="52" y="14" width="76" height="100" rx="3" style={{ stroke: "var(--line-2)" }} />
                            <rect className={s.ac} x="60" y="20" width="22" height="3" rx="1.5" />
                            <rect className={s.ln} x="60" y="30" width="56" height="4" rx="2" />
                            <rect className={s.ln2} x="60" y="39" width="46" height="3" rx="1.5" />
                            <rect className={s.ln2} x="60" y="46" width="52" height="3" rx="1.5" />
                            <rect className={s.ln2} x="60" y="53" width="38" height="3" rx="1.5" />
                            <circle cx="108" cy="70" r="9" className={s.acb} style={{ stroke: "var(--brand-line)" }} />
                            <path d="m104.5 70 2.5 2.5 4.5-5" style={{ stroke: "var(--brand)", fill: "none" }} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            <rect className={s.ln2} x="60" y="68" width="28" height="3" rx="1.5" />
                            <rect className={s.ln2} x="60" y="86" width="56" height="3" rx="1.5" />
                            <rect className={s.ln2} x="60" y="93" width="44" height="3" rx="1.5" />
                          </svg>
                          <div className={s.ef}>
                            <Icon name="file" size="sm" />
                            <div className="grow" style={{ minWidth: "0" }}>
                              <div className="t ellipsis">
                                fa-110-certificate.pdf
                              </div>
                              <div className="m">
                                PDF · 184 KB
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.evc}>
                          <div className={s.pw}>
                            <span className={s.badge}>
                              NEW IN v2
                            </span>
                            <svg className={s.pv} viewBox="0 0 180 120" preserveAspectRatio="xMidYMid slice">
                              <path className={s.grid} d="M0 26.5h180M0 52.5h180M0 78.5h180M30.5 0v104M60.5 0v104M90.5 0v104M120.5 0v104M150.5 0v104" strokeWidth="1" />
                              <rect className={s.bx} x="12" y="43" width="34" height="18" rx="3" />
                              <rect className={s.bx} x="70" y="25" width="38" height="18" rx="3" />
                              <rect className={s.bx} x="70" y="61" width="38" height="18" rx="3" />
                              <rect className={s.bxa} x="132" y="43" width="36" height="18" rx="3" />
                              <path className={s.ar} d="M46 52h10v-18h14M56 52v18h14M108 34h12v18h12M108 70h12v-18" strokeWidth="1.2" />
                              <rect className={s.ln} x="17" y="50.5" width="24" height="3" rx="1.5" />
                              <rect className={s.ln} x="76" y="32.5" width="26" height="3" rx="1.5" />
                              <rect className={s.ln} x="76" y="68.5" width="26" height="3" rx="1.5" />
                              <rect className={s.ac} x="138" y="50.5" width="24" height="3" rx="1.5" />
                            </svg>
                          </div>
                          <div className={s.ef}>
                            <Icon name="file" size="sm" />
                            <div className="grow" style={{ minWidth: "0" }}>
                              <div className="t ellipsis">
                                hpu-flow-diagram.png
                              </div>
                              <div className="m">
                                PNG · 1.2 MB
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={s.evc}>
                          <svg className={s.pv} viewBox="0 0 180 120" preserveAspectRatio="xMidYMid slice">
                            <rect className={s.pg} x="22" y="14" width="136" height="100" rx="5" style={{ stroke: "var(--line-2)" }} />
                            <path className={s.edge} d="M22 28h136" />
                            <circle cx="30" cy="21" r="2" className={s.ln} />
                            <circle cx="37" cy="21" r="2" className={s.ln} />
                            <circle cx="44" cy="21" r="2" className={s.ln} />
                            <rect className={s.ln2} x="54" y="19" width="72" height="4" rx="2" />
                            <rect className={s.ac} x="32" y="38" width="10" height="10" rx="2.5" />
                            <rect className={s.ln} x="48" y="39" width="62" height="4" rx="2" />
                            <rect className={s.ln2} x="48" y="46" width="40" height="3" rx="1.5" />
                            <rect className={s.ln2} x="32" y="60" width="114" height="3" rx="1.5" />
                            <rect className={s.ln2} x="32" y="67" width="100" height="3" rx="1.5" />
                            <rect className={s.ln2} x="32" y="74" width="108" height="3" rx="1.5" />
                            <rect className={s.ln2} x="32" y="86" width="86" height="3" rx="1.5" />
                            <rect className={s.ln2} x="32" y="93" width="104" height="3" rx="1.5" />
                          </svg>
                          <div className={s.ef}>
                            <Icon name="link" size="sm" />
                            <div className="grow" style={{ minWidth: "0" }}>
                              <div className="t ellipsis">
                                Design review notes
                              </div>
                              <div className="m">
                                Intranet · 13 Nov
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <aside className={s.rail}>
                    <div className={s.props}>
                      <span className={s.k}>
                        Goal
                      </span>
                      <span className={s.v}>
                        <span className="ellipsis" style={{ textDecoration: "underline", textDecorationColor: "var(--line-2)", textUnderlineOffset: "3px" }}>
                          Lead interface control for the flight-control upgrade
                        </span>
                      </span>
                      <span className={s.k}>
                        Plan step
                      </span>
                      <span className={s.v}>
                        <span className="mono">
                          4 of 6
                        </span>
                      </span>
                      <span className={s.k}>
                        Submitted
                      </span>
                      <span className={s.v}>
                        <span className="mono">
                          15 Nov
                        </span>
                        <span style={{ color: "var(--ok)" }}>
                          on time
                        </span>
                      </span>
                      <span className={s.k}>
                        Review by
                      </span>
                      <span className={s.v}>
                        <span className="mono">
                          22 Nov
                        </span>
                        <span style={{ color: "var(--warn)" }}>
                          tomorrow
                        </span>
                      </span>
                      <span className={s.k}>
                        Course
                      </span>
                      <span className={s.v}>
                        <span className={s.rate}>
                          <span className="on" />
                          <span className="on" />
                          <span className="on" />
                          <span className="on" />
                          <span />
                        </span>
                        <span className="mono">
                          4/5
                        </span>
                      </span>
                    </div>
                    <p className="muted" style={{ fontSize: "12px", marginTop: "-6px" }}>
                      “Clear examples. Exercises ran long.” Goes to the course owner; not part of your decision.
                    </p>
                    <div className={s.hr} />
                    <div>
                      <div className={s["sec-h"]}>
                        VERSIONS
                        <span className="sp muted">
                          Compare v1 / v2
                        </span>
                      </div>
                      <div className={s.tl}>
                        <div className={s.ev2}>
                          <StatusIcon status="submitted" />
                          <div>
                            <div className="t">
                              v1 submitted
                            </div>
                            <div className="m">
                              10 NOV
                            </div>
                          </div>
                        </div>
                        <div className={s.ev2}>
                          <StatusIcon status="returned" />
                          <div className="grow">
                            <div className="t">
                              Returned by you
                            </div>
                            <div className="m">
                              12 NOV
                            </div>
                            <div className={s.q2}>
                              “Add an example from your project.”
                            </div>
                          </div>
                        </div>
                        <div className={s.ev2}>
                          <StatusIcon status="submitted" />
                          <div>
                            <div className="t">
                              {"v2 submitted "}
                              <Pill tone="neu" style={{ height: "18px", fontSize: "11px", marginLeft: "4px" }}>
                                Current
                              </Pill>
                            </div>
                            <div className="m">
                              15 NOV · ON TIME
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </section>
              <section className={cx("panel glow", s.dec)}>
                <div className={s["fb-h"]}>
                  <span className="label">
                    Feedback to Priya
                  </span>
                  <span className={s.vis}>
                    <Icon name="eye" size="xs" />
                    Priya will see this and can reply
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    Required to return or reject
                  </span>
                </div>
                <div className={cx("textarea", s.fb)}>
                  {"The test-rig example is exactly what was missing. Catching sensor health monitoring before the design review is a good result; walk the team through that diagram at Thursday's stand-up?"}
                  <span className={s.caret} />
                </div>
                <div className={s.pn}>
                  <Icon name="lock" size="sm" />
                  <b>
                    Private note
                  </b>
                  <span className={s.only}>
                    ONLY YOU
                  </span>
                  <span>
                    Never shown to Priya or to the AI.
                  </span>
                  <span className={s.add}>
                    <Icon name="plus" size="xs" />
                    Add note
                  </span>
                </div>
                <div className={s["ar-row"]}>
                  <Button variant="ghost" danger>
                    <Icon name="x" size="sm" />
                    {" Reject"}
                  </Button>
                  <span className={s.impact}>
                    <Icon name="target" size="sm" />
                    <span>
                      {"Approving counts toward Priya's goal "}
                      <b title="Lead interface control for the flight-control upgrade">
                        ‘Lead interface control for…’
                      </b>
                    </span>
                  </span>
                  <Button>
                    {"Return for changes "}
                    <Kbd>
                      R
                    </Kbd>
                  </Button>
                  <Button variant="primary">
                    <Icon name="check" size="sm" />
                    {" Approve "}
                    <Kbd>
                      A
                    </Kbd>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
