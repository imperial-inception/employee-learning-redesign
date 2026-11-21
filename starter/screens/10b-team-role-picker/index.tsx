// GENERATED from design/html/10b-team-role-picker.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Team · set a role";

export default function View_10b_team_role_picker() {
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
            <span className="on">
              {"People "}
              <span className="n">
                11
              </span>
            </span>
            <span>
              {"Waiting for you "}
              <span className="n">
                4
              </span>
            </span>
          </div>
          <section className={cx("panel", s.kpi)}>
            <div className={s.cell}>
              <div className={s.k}>
                <Icon name="inbox" size="xs" />
                Waiting for your review
              </div>
              <div className={s.bot}>
                <span className={s.v}>
                  4
                </span>
                <span className={cx("warn", s.dl)}>
                  oldest 6 days
                </span>
                <Button size="sm" style={{ marginLeft: "auto" }}>
                  {"Review "}
                  <Kbd>
                    G R
                  </Kbd>
                </Button>
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                Approved this quarter
              </div>
              <div className={s.bot}>
                <span className={s.v}>
                  23
                </span>
                <span className={cx("ok", s.dl)}>
                  +6 vs Q3
                </span>
                <svg className={s.spark} viewBox="0 0 118 30">
                  <polyline points="0,24 20,22 39,23 59,17 79,15 98,9 118,5" fill="none" style={{ stroke: "var(--brand)" }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                People with an active goal
              </div>
              <div className={s.bot}>
                <span className={s.v}>
                  8
                  <small>
                    {" of 11"}
                  </small>
                </span>
                <span className={s.dl}>
                  73%
                </span>
                <div className={s.frac}>
                  <span className="on" />
                  <span className="on" />
                  <span className="on" />
                  <span className="on" />
                  <span className="on" />
                  <span className="on" />
                  <span className="on" />
                  <span className="on" />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.k}>
                Profiles with experience recorded
              </div>
              <div className={s.bot}>
                <span className={s.v}>
                  6
                  <small>
                    {" of 11"}
                  </small>
                </span>
                <span className={s.dl} style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Icon name="info" size="xs" />
                  Not recorded ≠ no skill
                </span>
              </div>
            </div>
          </section>
          <div className={s.tb}>
            <div className="seg">
              <span className="on">
                {"All "}
                <span className="n">
                  11
                </span>
              </span>
              <span>
                {"Needs attention "}
                <span className="n">
                  3
                </span>
              </span>
              <span>
                {"No goal "}
                <span className="n">
                  3
                </span>
              </span>
            </div>
            <span className="sp muted" style={{ fontSize: "12.5px" }}>
              Listed by name
            </span>
            <div className={cx("input", s.srch)}>
              <Icon name="search" size="sm" />
              Filter by name or role
            </div>
          </div>
          <section className={cx("panel", s.tp)}>
            <table>
              <thead>
                <tr>
                  <th>
                    Person
                  </th>
                  <th>
                    Professional role
                    <span className={s.h2}>
                      set by you
                    </span>
                  </th>
                  <th>
                    Focus goal
                  </th>
                  <th>
                    Plan progress
                  </th>
                  <th>
                    In review
                  </th>
                  <th>
                    Last approved
                  </th>
                  <th>
                    Profile
                  </th>
                  <th>
                    For you
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="AK" tone={6} />
                      <div>
                        <b>
                          Aisha Khan
                        </b>
                        <small>
                          Senior Systems Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Senior Systems Engineer
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.goal}>
                      SysML v2 modelling
                    </div>
                  </td>
                  <td>
                    <div className={s.pp}>
                      <div className="bar">
                        <span className="a" style={{ width: "83%" }} />
                        <span className="n" style={{ width: "17%" }} />
                      </div>
                      <span className="mono">
                        5
                        <em>
                          /6
                        </em>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.zero}>
                      0
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      17 Nov
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span className="on" />
                        <span className="on" />
                        <span className="on" />
                      </div>
                      All 3
                    </div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="AK" tone={5} />
                      <div>
                        <b>
                          Alex Kim
                        </b>
                        <small>
                          Systems Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Interface Architect
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.goal}>
                      Interface management
                    </div>
                  </td>
                  <td>
                    <div className={s.pp}>
                      <div className="bar">
                        <span className="a" style={{ width: "20%" }} />
                        <span className="r" style={{ width: "20%" }} />
                        <span className="n" style={{ width: "60%" }} />
                      </div>
                      <span className="mono">
                        1
                        <em>
                          /5
                        </em>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.ir}>
                      <StatusIcon status="submitted" />
                      1
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      28 Oct
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span className="on" />
                        <span className="on" />
                        <span />
                      </div>
                      Experience, skills
                    </div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="DO" tone={2} />
                      <div>
                        <b>
                          Daniel Okafor
                        </b>
                        <small>
                          Requirements Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Systems Engineer
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.goal}>
                      Requirements quality
                    </div>
                  </td>
                  <td>
                    <div className={s.pp}>
                      <div className="bar">
                        <span className="a" style={{ width: "80%" }} />
                        <span className="n" style={{ width: "20%" }} />
                      </div>
                      <span className="mono">
                        4
                        <em>
                          /5
                        </em>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.zero}>
                      0
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      19 Nov
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span className="on" />
                        <span className="on" />
                        <span className="on" />
                      </div>
                      All 3
                    </div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="FR" />
                      <div>
                        <b>
                          Fatima Rahman
                        </b>
                        <small>
                          Configuration Analyst
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Associate Systems Engineer
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.goal}>
                      Configuration control
                    </div>
                  </td>
                  <td>
                    <div className={s.pp}>
                      <div className="bar">
                        <span className="a" style={{ width: "60%" }} />
                        <span className={s.x} style={{ width: "20%" }} />
                        <span className="n" style={{ width: "20%" }} />
                      </div>
                      <span className="mono">
                        3
                        <em>
                          /5
                        </em>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.zero}>
                      0
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      12 Nov
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span className="on" />
                        <span className="on" />
                        <span className="on" />
                      </div>
                      All 3
                    </div>
                  </td>
                  <td />
                </tr>
                <tr className="sel">
                  <td>
                    <div className={s.who}>
                      <Avatar initials="LS" tone={2} />
                      <div>
                        <b>
                          Lucas Silva
                        </b>
                        <small>
                          Systems Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={s["rp-wrap"]}>
                      <span className={s["rp-trig"]}>
                        Not recorded
                        <Icon name="cu" size="xs" />
                      </span>
                      <div className={cx("overlay", s["rp-menu"])} role="listbox" aria-label="Professional role for Lucas Silva">
                        <div className={s["rp-h"]}>
                          <b>
                            Role for Lucas Silva
                          </b>
                          <span className={s["rp-now"]}>
                            Now: Not recorded
                          </span>
                        </div>
                        <div className={s["rp-list"]}>
                          <div className={s["rp-o"]}>
                            <span className="radio" />
                            Associate Systems Engineer
                          </div>
                          <div className={cx(s["rp-o"], s.hov)}>
                            <span className="radio on" />
                            <div className="grow">
                              <b>
                                Systems Engineer
                              </b>
                              <p>
                                Owns requirements, analysis and verification for a subsystem.
                              </p>
                            </div>
                          </div>
                          <div className={s["rp-o"]}>
                            <span className="radio" />
                            Interface Architect
                          </div>
                          <div className={s["rp-o"]}>
                            <span className="radio" />
                            Senior Systems Engineer
                          </div>
                          <div className={s["rp-o"]}>
                            <span className="radio" />
                            Lead System Architect
                          </div>
                        </div>
                        <div className={s["rp-note"]}>
                          <Icon name="info" size="xs" />
                          <span>
                            Starts today: sets his job expectations and suggested learning, and Lucas is notified. His HR job title stays separate.
                          </span>
                        </div>
                        <div className={s["rp-a"]}>
                          <span className={s["rp-more"]}>
                            {"Start date & note"}
                            <Icon name="cr" size="xs" />
                          </span>
                          <Button variant="ghost" size="sm" className="sp">
                            Cancel
                          </Button>
                          <Button variant="primary" size="sm">
                            {"Assign "}
                            <Kbd>
                              Enter
                            </Kbd>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="muted">
                      No active goal
                    </span>
                  </td>
                  <td>
                    <span className="faint">
                      No plan
                    </span>
                  </td>
                  <td>
                    <span className={s.zero}>
                      0
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      21 Oct
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="nr">
                        Not recorded
                      </span>
                    </div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="MG" tone={3} />
                      <div>
                        <b>
                          Maria Gomez
                        </b>
                        <small>
                          Test Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Systems Engineer
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.goal}>
                      Lead interface reviews
                    </div>
                  </td>
                  <td>
                    <div className={s.pp}>
                      <div className="bar">
                        <span className="a" style={{ width: "60%" }} />
                        <span className="r" style={{ width: "20%" }} />
                        <span className="n" style={{ width: "20%" }} />
                      </div>
                      <span className="mono">
                        3
                        <em>
                          /5
                        </em>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.ir}>
                      <StatusIcon status="submitted" />
                      1
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      14 Nov
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span className="on" />
                        <span className="on" />
                        <span className="on" />
                      </div>
                      All 3
                    </div>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="NR" tone={5} />
                      <div>
                        <b>
                          Nina Rossi
                        </b>
                        <small>
                          Requirements Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Associate Systems Engineer
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <span className="muted">
                      No active goal
                    </span>
                  </td>
                  <td>
                    <span className="faint">
                      No plan
                    </span>
                  </td>
                  <td>
                    <span className={s.zero}>
                      0
                    </span>
                  </td>
                  <td>
                    <span className="nr">
                      Not recorded
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span />
                        <span className="on" />
                        <span />
                      </div>
                      Skills only
                    </div>
                  </td>
                  <td />
                </tr>
                <tr className={s.hl}>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="OH" tone={6} />
                      <div>
                        <b>
                          Omar Haddad
                        </b>
                        <small>
                          Systems Engineer · joined 3 Nov
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={cx("nr", s["tm-role"])}>
                      Not recorded
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <span className="muted">
                      No active goal
                    </span>
                  </td>
                  <td>
                    <span className="faint">
                      No plan
                    </span>
                  </td>
                  <td>
                    <span className={s.zero}>
                      0
                    </span>
                  </td>
                  <td>
                    <span className="nr">
                      Not recorded
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="nr">
                        Not recorded
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={cx(s.att, s.acc)}>
                      <span className="dot" />
                      Set a first goal
                    </span>
                  </td>
                </tr>
                <tr className={s.hl}>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="PN" tone={4} />
                      <div>
                        <b>
                          Priya Nair
                        </b>
                        <small>
                          Lead Systems Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Interface Architect
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.goal} title="Lead interface control for the flight-control upgrade">
                      Lead interface control…
                    </div>
                  </td>
                  <td>
                    <div className={s.pp}>
                      <div className="bar">
                        <span className="a" style={{ width: "50%" }} />
                        <span className="r" style={{ width: "17%" }} />
                        <span className="n" style={{ width: "33%" }} />
                      </div>
                      <span className="mono">
                        3
                        <em>
                          /6
                        </em>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.ir}>
                      <StatusIcon status="submitted" />
                      1
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      4 Nov
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span className="on" />
                        <span className="on" />
                        <span className="on" />
                      </div>
                      All 3
                    </div>
                  </td>
                  <td>
                    <span className={cx("warn", s.att)}>
                      <span className="dot" />
                      Review due tomorrow
                    </span>
                  </td>
                </tr>
                <tr className={s.hl}>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="TB" tone={2} />
                      <div>
                        <b>
                          Tom Becker
                        </b>
                        <small>
                          Test Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Associate Systems Engineer
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.goal}>
                      System integration basics
                    </div>
                  </td>
                  <td>
                    <div className={s.pp}>
                      <div className="bar">
                        <span className="a" style={{ width: "20%" }} />
                        <span className={s.x} style={{ width: "20%" }} />
                        <span className="n" style={{ width: "60%" }} />
                      </div>
                      <span className="mono">
                        1
                        <em>
                          /5
                        </em>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.zero}>
                      0
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      2 Oct
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="nr">
                        Not recorded
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={cx(s.att, s.ret)}>
                      <span className="dot" />
                      Returned 18 days ago
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="WC" />
                      <div>
                        <b>
                          Wei Chen
                        </b>
                        <small>
                          Systems Engineer
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={s["tm-role"]}>
                      Senior Systems Engineer
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.goal}>
                      Verification planning
                    </div>
                  </td>
                  <td>
                    <div className={s.pp}>
                      <div className="bar">
                        <span className="a" style={{ width: "33%" }} />
                        <span className="r" style={{ width: "17%" }} />
                        <span className="n" style={{ width: "50%" }} />
                      </div>
                      <span className="mono">
                        2
                        <em>
                          /6
                        </em>
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.ir}>
                      <StatusIcon status="submitted" />
                      1
                    </span>
                  </td>
                  <td>
                    <span className={s.date}>
                      7 Nov
                    </span>
                  </td>
                  <td>
                    <div className={s.prof}>
                      <div className={s.segs}>
                        <span />
                        <span className="on" />
                        <span />
                      </div>
                      Skills only
                    </div>
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </section>
          <div className="row" style={{ gap: "16px", marginTop: "12px", alignItems: "flex-start" }}>
            <div className="legend" style={{ marginTop: "0", flex: "none" }}>
              <span>
                <i style={{ background: "var(--ok)" }} />
                Approved
              </span>
              <span>
                <i style={{ background: "var(--warn)" }} />
                In review
              </span>
              <span>
                <i style={{ background: "var(--orange)" }} />
                Returned
              </span>
              <span>
                <i style={{ background: "var(--surface-3)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                Not started
              </span>
              <span className="faint">
                Profile: experience · skills · interests
              </span>
            </div>
            <div className={s.foot} style={{ marginTop: "0", marginLeft: "auto", maxWidth: "640px" }}>
              <Icon name="info" size="xs" />
              <span>
                <b>
                  How we count.
                </b>
                {" Each person is counted once. Percentages come from summed totals, not averages of averages. Only approved learning counts. Missing data shows “Not recorded”, never zero. No rankings."}
              </span>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
