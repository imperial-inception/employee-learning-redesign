// GENERATED from design/html/11d-report-goal-progress.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Goal progress";

export default function View_11d_report_goal_progress() {
  return (
    <div className={s.v}>
      <AppShell active="reports" manager>
        <main id="page">
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <h1>
                Reports
              </h1>
              <p className="sub">
                Approved evidence for your direct reports, ready to share or file.
              </p>
            </div>
            <div className="acts">
              <div className={s["rpt-fresh"]}>
                <Icon name="cloud" size="sm" />
                <span>
                  {"People from HR directory · last good update "}
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
          <div className={s["rpt-l"]}>
            <div className={s["rpt-col"]}>
              <section className={cx("panel", s["rpt-types"])}>
                <div className={s["rpt-grp"]}>
                  REPORT TYPES
                </div>
                <div className="li">
                  <Icon name="users" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Team learning evidence
                    </div>
                    <div className="c">
                      Approved items, hours and files per person
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="shield" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Audit-ready evidence by framework
                    </div>
                    <div className="c">
                      Approved evidence grouped by Competency framework area
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="clock" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Review turnaround
                    </div>
                    <div className="c">
                      Your review times against the 7-day window
                    </div>
                  </div>
                </div>
                <div className={cx("li", s["rpt-on"])}>
                  <Icon name="target" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Goal progress
                    </div>
                    <div className="c">
                      Approved steps toward each active goal
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section className={cx("panel", s["rpt-p"])}>
              <div className={s["rpt-h"]}>
                <div>
                  <h2>
                    Goal progress
                    <span className="mono">
                      · Q4 2026
                    </span>
                  </h2>
                  <p>
                    Approved steps toward each active goal, for your 11 direct reports. Listed by name.
                  </p>
                </div>
                <div className={s["rpt-acts"]}>
                  <Button>
                    <Icon name="file" size="sm" />
                    {" PDF"}
                  </Button>
                  <Button variant="primary">
                    <Icon name="download" size="sm" />
                    {" Export CSV "}
                    <Kbd>
                      E
                    </Kbd>
                  </Button>
                </div>
              </div>
              <div className={s["rpt-fl"]}>
                <span className={s["rpt-chip"]}>
                  <Icon name="cal" size="xs" />
                  <span className={s["rpt-k"]}>
                    Period
                  </span>
                  {"Q4 2026 "}
                  <span className="mono muted" style={{ fontSize: "11.5px" }}>
                    1 Oct – 31 Dec
                  </span>
                  <Icon name="cd" size="xs" />
                </span>
                <span className={s["rpt-chip"]}>
                  <Icon name="users" size="xs" />
                  <span className={s["rpt-k"]}>
                    People
                  </span>
                  {"Direct reports · "}
                  <span className="mono">
                    11
                  </span>
                  <Icon name="cd" size="xs" />
                </span>
                <span className={s["rpt-chip"]}>
                  <Icon name="target" size="xs" />
                  <span className={s["rpt-k"]}>
                    Goals
                  </span>
                  {"Active focus goals · "}
                  <span className="mono">
                    8
                  </span>
                  <Icon name="cd" size="xs" />
                </span>
                <span className={cx(s["rpt-chip"], s["rpt-locked"])}>
                  <Icon name="lock" size="xs" />
                  <span className={s["rpt-k"]}>
                    Status
                  </span>
                  Approved only
                </span>
              </div>
              <div className={s["rpt-viz"]}>
                <div className={s["rpt-chart"]}>
                  <div className={s["rpt-chh"]}>
                    {"Approved items per month: most move a goal "}
                    <div className="legend">
                      <span>
                        <i style={{ background: "var(--brand)" }} />
                        Step toward a goal
                      </span>
                      <span>
                        <i style={{ background: "var(--surface-3)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                        Not linked to a goal
                      </span>
                    </div>
                  </div>
                  <svg className={s["rpt-bars"]} viewBox="0 0 640 184" role="img" aria-label="Approved items per month and how many were steps toward a goal. Q3 for context: August 4 of 6, September 5 of 7. Q4: October 8 of 13, November to the 21st 7 of 10. In Q4 so far, 15 of 23 approved items moved a goal.">
                    <rect className={s["rpt-band"]} x="333" y="0" width="300" height="162" rx="6" />
                    <text className={s["rpt-bl"]} x="622" y="15" textAnchor="end">
                      Q4 2026
                    </text>
                    <text x="40" y="15">
                      Q3 · FOR CONTEXT
                    </text>
                    <line className={s["rpt-gl"]} x1="30" x2="634" y1="10.5" y2="10.5" strokeDasharray="2 4" />
                    <line className={s["rpt-gl"]} x1="30" x2="634" y1="60.5" y2="60.5" strokeDasharray="2 4" />
                    <line className={s["rpt-gl"]} x1="30" x2="634" y1="110.5" y2="110.5" strokeDasharray="2 4" />
                    <line className={s["rpt-gl0"]} x1="30" x2="634" y1="160.5" y2="160.5" />
                    <text x="20" y="14" textAnchor="end">
                      15
                    </text>
                    <text x="20" y="64" textAnchor="end">
                      10
                    </text>
                    <text x="20" y="114" textAnchor="end">
                      5
                    </text>
                    <text x="20" y="164" textAnchor="end">
                      0
                    </text>
                    <g className={s["rpt-ctx"]}>
                      <title>
                        Aug · 4 of 6 approved items were goal steps
                      </title>
                      <rect className={s["rpt-lk"]} x="82" y="120" width="56" height="40" />
                      <rect className={s["rpt-nl"]} x="82.5" y="98.5" width="55" height="19" rx="2" />
                    </g>
                    <text className={s["rpt-tot"]} x="110" y="91" textAnchor="middle" style={{ opacity: ".6" }}>
                      {"4 "}
                      <tspan className={s["rpt-of"]}>
                        of 6
                      </tspan>
                    </text>
                    <g className={s["rpt-ctx"]}>
                      <title>
                        Sep · 5 of 7 approved items were goal steps
                      </title>
                      <rect className={s["rpt-lk"]} x="231" y="110" width="56" height="50" />
                      <rect className={s["rpt-nl"]} x="231.5" y="88.5" width="55" height="19" rx="2" />
                    </g>
                    <text className={s["rpt-tot"]} x="259" y="81" textAnchor="middle" style={{ opacity: ".6" }}>
                      {"5 "}
                      <tspan className={s["rpt-of"]}>
                        of 7
                      </tspan>
                    </text>
                    <g>
                      <title>
                        Oct · 8 of 13 approved items were goal steps
                      </title>
                      <rect className={s["rpt-lk"]} x="379" y="80" width="56" height="80" />
                      <rect className={s["rpt-nl"]} x="379.5" y="28.5" width="55" height="49" rx="2" />
                    </g>
                    <text className={s["rpt-tot"]} x="407" y="21" textAnchor="middle">
                      {"8 "}
                      <tspan className={s["rpt-of"]}>
                        of 13
                      </tspan>
                    </text>
                    <g>
                      <title>
                        Nov to 21st · 7 of 10 approved items were goal steps
                      </title>
                      <rect className={s["rpt-lk"]} x="528" y="90" width="56" height="70" />
                      <rect className={s["rpt-nl"]} x="528.5" y="58.5" width="55" height="29" rx="2" />
                    </g>
                    <text className={s["rpt-tot"]} x="556" y="51" textAnchor="middle">
                      {"7 "}
                      <tspan className={s["rpt-of"]}>
                        of 10
                      </tspan>
                    </text>
                    <text className={s["rpt-ml"]} x="110" y="178" textAnchor="middle">
                      Aug
                    </text>
                    <text className={s["rpt-ml"]} x="259" y="178" textAnchor="middle">
                      Sep
                    </text>
                    <text className={s["rpt-ml"]} x="407" y="178" textAnchor="middle">
                      Oct
                    </text>
                    <text className={s["rpt-ml"]} x="556" y="178" textAnchor="middle">
                      Nov · to 21st
                    </text>
                  </svg>
                </div>
                <div className={s["rpt-sum"]}>
                  <div>
                    <div className={s["rpt-sk"]}>
                      People with an active goal
                    </div>
                    <div className={s["rpt-sv"]}>
                      8
                      <small>
                        of 11
                      </small>
                    </div>
                    <div className={s["rpt-sb"]}>
                      <span style={{ flex: "5", background: "var(--ok)" }} />
                      <span style={{ flex: "3", background: "var(--warn)" }} />
                      <span style={{ flex: "3", background: "var(--surface-3)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                    </div>
                    <div className={s["rpt-st"]}>
                      <span>
                        <span className="d" style={{ background: "var(--ok)" }} />
                        5 on track
                      </span>
                      <span>
                        <span className="d" style={{ background: "var(--warn)" }} />
                        3 need attention
                      </span>
                      <span>
                        3 no goal
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={s["rpt-sk"]}>
                      Approved goal steps
                    </div>
                    <div className={s["rpt-sv"]}>
                      22
                      <small>
                        of 43 · 51% · 15 this quarter
                      </small>
                    </div>
                  </div>
                  <div>
                    <div className={s["rpt-sk"]}>
                      Who set the goal
                    </div>
                    <div className={s["rpt-sv"]}>
                      6
                      <small>
                        themselves · 2 set by you
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s["rpt-prev"]}>
                <div className={s["rpt-ph"]}>
                  <b>
                    Preview
                  </b>
                  <span className="muted">
                    11 rows · one per person · listed by name
                  </span>
                  <span className="sp muted" style={{ fontSize: "12px" }}>
                    Columns in the export match this preview
                  </span>
                </div>
                <table className={s["rpt-t"]}>
                  <thead>
                    <tr>
                      <th>
                        Person
                      </th>
                      <th>
                        Focus goal
                      </th>
                      <th>
                        Set by
                      </th>
                      <th className={s["rpt-n"]}>
                        Approved steps
                      </th>
                      <th className={s["rpt-n"]}>
                        In Q4
                      </th>
                      <th className={s["rpt-n"]}>
                        Due
                      </th>
                      <th className={s["rpt-n"]}>
                        Last approved
                      </th>
                      <th>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="AK" tone={6} />
                          Aisha Khan
                        </div>
                      </td>
                      <td>
                        <div className={s["rpt-goal"]}>
                          SysML v2 modelling
                        </div>
                      </td>
                      <td className="muted">
                        Self
                      </td>
                      <td>
                        <div className={s["rpt-steps"]}>
                          <div className="bar">
                            <span className="a" style={{ flex: "5" }} />
                            <span className="n" style={{ flex: "1" }} />
                          </div>
                          <span className="mono">
                            5
                            <em>
                              /6
                            </em>
                          </span>
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        3
                      </td>
                      <td className={s["rpt-n"]}>
                        31 Jan
                      </td>
                      <td className={s["rpt-n"]}>
                        17 Nov
                      </td>
                      <td>
                        <span className={s["rpt-stt"]}>
                          <StatusIcon status="approved" />
                          On track
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="AK" tone={5} />
                          Alex Kim
                        </div>
                      </td>
                      <td>
                        <div className={s["rpt-goal"]}>
                          Interface management
                        </div>
                      </td>
                      <td>
                        <span className={s["rpt-by"]}>
                          <Avatar initials="JL" />
                          You
                        </span>
                      </td>
                      <td>
                        <div className={s["rpt-steps"]} title="1 approved · 1 in review (not counted) · 3 not started">
                          <div className="bar">
                            <span className="a" style={{ flex: "1" }} />
                            <span className="r" style={{ flex: "1" }} />
                            <span className="n" style={{ flex: "3" }} />
                          </div>
                          <span className="mono">
                            1
                            <em>
                              /5
                            </em>
                          </span>
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-w"])}>
                        15 Dec
                      </td>
                      <td className={s["rpt-n"]}>
                        28 Oct
                      </td>
                      <td>
                        <span className={cx(s["rpt-stt"], s["rpt-att"])}>
                          <Icon name="alert" size="xs" />
                          Needs attention
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="DO" tone={2} />
                          Daniel Okafor
                        </div>
                      </td>
                      <td>
                        <div className={s["rpt-goal"]}>
                          Requirements quality
                        </div>
                      </td>
                      <td className="muted">
                        Self
                      </td>
                      <td>
                        <div className={s["rpt-steps"]}>
                          <div className="bar">
                            <span className="a" style={{ flex: "4" }} />
                            <span className="n" style={{ flex: "1" }} />
                          </div>
                          <span className="mono">
                            4
                            <em>
                              /5
                            </em>
                          </span>
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        3
                      </td>
                      <td className={s["rpt-n"]}>
                        31 Dec
                      </td>
                      <td className={s["rpt-n"]}>
                        19 Nov
                      </td>
                      <td>
                        <span className={s["rpt-stt"]}>
                          <StatusIcon status="approved" />
                          On track
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="FR" />
                          Fatima Rahman
                        </div>
                      </td>
                      <td>
                        <div className={s["rpt-goal"]}>
                          Configuration control
                        </div>
                      </td>
                      <td className="muted">
                        Self
                      </td>
                      <td>
                        <div className={s["rpt-steps"]} title="3 approved · 1 returned (not counted) · 1 not started">
                          <div className="bar">
                            <span className="a" style={{ flex: "3" }} />
                            <span className={s["rpt-x"]} style={{ flex: "1" }} />
                            <span className="n" style={{ flex: "1" }} />
                          </div>
                          <span className="mono">
                            3
                            <em>
                              /5
                            </em>
                          </span>
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={s["rpt-n"]}>
                        28 Feb
                      </td>
                      <td className={s["rpt-n"]}>
                        12 Nov
                      </td>
                      <td>
                        <span className={s["rpt-stt"]}>
                          <StatusIcon status="approved" />
                          On track
                        </span>
                      </td>
                    </tr>
                    <tr className={s["rpt-ng"]}>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="LS" tone={2} />
                          Lucas Silva
                        </div>
                      </td>
                      <td className={s["rpt-none"]}>
                        No active goal
                      </td>
                      <td colSpan={6} className={s["rpt-ctxt"]}>
                        Last goal ended 30 Sep · 1:1 Wed 26 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="MG" tone={3} />
                          Maria Gomez
                        </div>
                      </td>
                      <td>
                        <div className={s["rpt-goal"]}>
                          Lead interface reviews
                        </div>
                      </td>
                      <td className="muted">
                        Self
                      </td>
                      <td>
                        <div className={s["rpt-steps"]} title="3 approved · 1 in review (not counted) · 1 not started">
                          <div className="bar">
                            <span className="a" style={{ flex: "3" }} />
                            <span className="r" style={{ flex: "1" }} />
                            <span className="n" style={{ flex: "1" }} />
                          </div>
                          <span className="mono">
                            3
                            <em>
                              /5
                            </em>
                          </span>
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={s["rpt-n"]}>
                        31 Mar
                      </td>
                      <td className={s["rpt-n"]}>
                        14 Nov
                      </td>
                      <td>
                        <span className={s["rpt-stt"]}>
                          <StatusIcon status="approved" />
                          On track
                        </span>
                      </td>
                    </tr>
                    <tr className={s["rpt-ng"]}>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="NR" tone={5} />
                          Nina Rossi
                        </div>
                      </td>
                      <td className={s["rpt-none"]}>
                        No active goal
                      </td>
                      <td colSpan={6} className={s["rpt-ctxt"]}>
                        No goal on record yet
                      </td>
                    </tr>
                    <tr className={s["rpt-ng"]}>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="OH" tone={6} />
                          Omar Haddad
                        </div>
                      </td>
                      <td className={s["rpt-none"]}>
                        No active goal
                      </td>
                      <td colSpan={6} className={s["rpt-ctxt"]}>
                        Joined 3 Nov · first development 1:1 Mon 24 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="PN" tone={4} />
                          Priya Nair
                        </div>
                      </td>
                      <td>
                        <div className={s["rpt-goal"]}>
                          Lead interface control for the flight-control upgrade
                        </div>
                      </td>
                      <td className="muted">
                        Self
                      </td>
                      <td>
                        <div className={s["rpt-steps"]} title="3 approved · 1 in review (not counted) · 2 not started">
                          <div className="bar">
                            <span className="a" style={{ flex: "3" }} />
                            <span className="r" style={{ flex: "1" }} />
                            <span className="n" style={{ flex: "2" }} />
                          </div>
                          <span className="mono">
                            3
                            <em>
                              /6
                            </em>
                          </span>
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        15 Jan
                      </td>
                      <td className={s["rpt-n"]}>
                        4 Nov
                      </td>
                      <td>
                        <span className={s["rpt-stt"]}>
                          <StatusIcon status="approved" />
                          On track
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="TB" tone={2} />
                          Tom Becker
                        </div>
                      </td>
                      <td>
                        <div className={s["rpt-goal"]}>
                          System integration basics
                        </div>
                      </td>
                      <td>
                        <span className={s["rpt-by"]}>
                          <Avatar initials="JL" />
                          You
                        </span>
                      </td>
                      <td>
                        <div className={s["rpt-steps"]} title="1 approved · 1 returned (not counted) · 3 not started">
                          <div className="bar">
                            <span className="a" style={{ flex: "1" }} />
                            <span className={s["rpt-x"]} style={{ flex: "1" }} />
                            <span className="n" style={{ flex: "3" }} />
                          </div>
                          <span className="mono">
                            1
                            <em>
                              /5
                            </em>
                          </span>
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        31 Jan
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-w"])}>
                        2 Oct
                      </td>
                      <td>
                        <span className={cx(s["rpt-stt"], s["rpt-att"])}>
                          <Icon name="alert" size="xs" />
                          Needs attention
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="WC" />
                          Wei Chen
                        </div>
                      </td>
                      <td>
                        <div className={s["rpt-goal"]}>
                          Verification planning
                        </div>
                      </td>
                      <td className="muted">
                        Self
                      </td>
                      <td>
                        <div className={s["rpt-steps"]} title="2 approved · 1 in review (not counted) · 3 not started">
                          <div className="bar">
                            <span className="a" style={{ flex: "2" }} />
                            <span className="r" style={{ flex: "1" }} />
                            <span className="n" style={{ flex: "3" }} />
                          </div>
                          <span className="mono">
                            2
                            <em>
                              /6
                            </em>
                          </span>
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-w"])}>
                        19 Dec
                      </td>
                      <td className={s["rpt-n"]}>
                        7 Nov
                      </td>
                      <td>
                        <span className={cx(s["rpt-stt"], s["rpt-att"])}>
                          <Icon name="alert" size="xs" />
                          Needs attention
                        </span>
                      </td>
                    </tr>
                    <tr className={s["rpt-tot"]}>
                      <td>
                        Team · 11 people
                      </td>
                      <td>
                        8 active goals
                      </td>
                      <td className={s["rpt-lt"]}>
                        6 self · 2 you
                      </td>
                      <td className={s["rpt-n"]}>
                        22
                        <span className={s["rpt-lt"]}>
                          {" / 43 · 51%"}
                        </span>
                      </td>
                      <td className={s["rpt-n"]}>
                        15
                      </td>
                      <td />
                      <td className={s["rpt-n"]}>
                        19 Nov
                      </td>
                      <td className={s["rpt-lt"]}>
                        5 on track · 3 need attention
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={s["rpt-note"]}>
                  <Icon name="info" size="xs" />
                  <span>
                    <b>
                      Only approved steps count;
                    </b>
                    {" in review and returned steps show in the bar but not in the numbers. Needs attention = no approved step in 30 days, or due within 30 days with steps left. No active goal is shown as such, never as 0."}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
