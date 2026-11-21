// GENERATED from design/html/11c-report-turnaround.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Review turnaround";

export default function View_11c_report_turnaround() {
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
                <div className={cx("li", s["rpt-on"])}>
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
                <div className="li">
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
                    Review turnaround
                    <span className="mono">
                      · Q4 2026
                    </span>
                  </h2>
                  <p>
                    How long your decisions take against the 7-day window. For your own planning, not a measure of your team.
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
                <span className={cx(s["rpt-chip"], s["rpt-locked"])}>
                  <Icon name="lock" size="xs" />
                  <span className={s["rpt-k"]}>
                    Reviewer
                  </span>
                  You · Jordan Lee
                </span>
                <span className={cx(s["rpt-chip"], s["rpt-locked"])}>
                  <Icon name="lock" size="xs" />
                  <span className={s["rpt-k"]}>
                    Window
                  </span>
                  <span className="mono">
                    7
                  </span>
                  {" days from submission"}
                </span>
                <span className={s["rpt-self"]}>
                  <Icon name="eyeoff" size="xs" />
                  Only you see this report
                </span>
              </div>
              <div className={s["rpt-viz"]}>
                <div className={s["rpt-chart"]}>
                  <div className={s["rpt-chh"]}>
                    {"Median days to decide, per month: slower in November, still inside the window "}
                    <div className="legend">
                      <span>
                        <i style={{ background: "var(--brand)" }} />
                        Median
                      </span>
                      <span>
                        <i className={s["rpt-ring"]} />
                        Slowest decision
                      </span>
                    </div>
                  </div>
                  <svg className={s["rpt-bars"]} viewBox="0 0 640 184" role="img" aria-label="Median days from submission to your decision. Q3 for context: August 2.2 days, slowest 5; September 2.0, slowest 4. Q4: October 2.5, slowest 5; November to the 21st 3.5, slowest 6. The review window is 7 days.">
                    <rect className={s["rpt-band"]} x="333" y="0" width="300" height="162" rx="6" />
                    <text className={s["rpt-bl"]} x="622" y="15" textAnchor="end">
                      Q4 2026
                    </text>
                    <text x="40" y="15">
                      Q3 · FOR CONTEXT
                    </text>
                    <line className={s["rpt-gl"]} x1="30" x2="634" y1="124.5" y2="124.5" strokeDasharray="2 4" />
                    <line className={s["rpt-gl"]} x1="30" x2="634" y1="88.5" y2="88.5" strokeDasharray="2 4" />
                    <line className={s["rpt-gl"]} x1="30" x2="634" y1="52.5" y2="52.5" strokeDasharray="2 4" />
                    <line className={s["rpt-win"]} x1="30" x2="634" y1="34.5" y2="34.5" />
                    <text className={s["rpt-wl"]} x="40" y="30">
                      7-day window
                    </text>
                    <line className={s["rpt-gl0"]} x1="30" x2="634" y1="160.5" y2="160.5" />
                    <text x="20" y="38" textAnchor="end">
                      7
                    </text>
                    <text x="20" y="92" textAnchor="end">
                      4
                    </text>
                    <text x="20" y="128" textAnchor="end">
                      2
                    </text>
                    <text x="20" y="164" textAnchor="end">
                      0
                    </text>
                    <g className={s["rpt-ctx"]}>
                      <title>
                        Aug · median 2.2 days · slowest 5 days · 7 decisions
                      </title>
                      <rect className={s["rpt-md"]} x="82" y="120.4" width="56" height="39.6" rx="2" />
                      <line className={s["rpt-rg"]} x1="110" x2="110" y1="120" y2="74" />
                      <circle className={s["rpt-sd"]} cx="110" cy="70" r="4" />
                    </g>
                    <text className={s["rpt-sl"]} x="118" y="73.5" style={{ opacity: ".6" }}>
                      5
                    </text>
                    <text className={s["rpt-in2"]} x="110" y="135" textAnchor="middle">
                      2.2
                    </text>
                    <g className={s["rpt-ctx"]}>
                      <title>
                        Sep · median 2.0 days · slowest 4 days · 7 decisions
                      </title>
                      <rect className={s["rpt-md"]} x="231" y="124" width="56" height="36" rx="2" />
                      <line className={s["rpt-rg"]} x1="259" x2="259" y1="124" y2="92" />
                      <circle className={s["rpt-sd"]} cx="259" cy="88" r="4" />
                    </g>
                    <text className={s["rpt-sl"]} x="267" y="91.5" style={{ opacity: ".6" }}>
                      4
                    </text>
                    <text className={s["rpt-in2"]} x="259" y="139" textAnchor="middle">
                      2.0
                    </text>
                    <g>
                      <title>
                        Oct · median 2.5 days · slowest 5 days · 15 decisions
                      </title>
                      <rect className={s["rpt-md"]} x="379" y="115" width="56" height="45" rx="2" />
                      <line className={s["rpt-rg"]} x1="407" x2="407" y1="115" y2="74" />
                      <circle className={s["rpt-sd"]} cx="407" cy="70" r="4" />
                    </g>
                    <text className={s["rpt-sl"]} x="415" y="73.5">
                      5
                    </text>
                    <text className={s["rpt-in"]} x="407" y="130" textAnchor="middle">
                      2.5
                    </text>
                    <g>
                      <title>
                        Nov to 21st · median 3.5 days · slowest 6 days · 12 decisions
                      </title>
                      <rect className={s["rpt-md"]} x="528" y="97" width="56" height="63" rx="2" />
                      <line className={s["rpt-rg"]} x1="556" x2="556" y1="97" y2="56" />
                      <circle className={s["rpt-sd"]} cx="556" cy="52" r="4" />
                    </g>
                    <text className={s["rpt-sl"]} x="564" y="55.5">
                      6
                    </text>
                    <text className={s["rpt-in"]} x="556" y="112" textAnchor="middle">
                      3.5
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
                      Your median this quarter
                    </div>
                    <div className={s["rpt-sv"]}>
                      2.8
                      <small>
                        days · Q3 2.1
                      </small>
                    </div>
                    <div className={s["rpt-sb"]} title="2.8 of 7 days">
                      <span style={{ flex: "2.8", background: "var(--brand)" }} />
                      <span style={{ flex: "4.2", background: "var(--surface-3)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                    </div>
                    <div className={s["rpt-st"]}>
                      <span>
                        0
                      </span>
                      <span className="sp">
                        7-day window
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={s["rpt-sk"]}>
                      Decisions
                    </div>
                    <div className={s["rpt-sv"]}>
                      27
                      <small>
                        all within 7 days
                      </small>
                    </div>
                    <div className={s["rpt-sb"]}>
                      <span style={{ flex: "23", background: "var(--ok)" }} />
                      <span style={{ flex: "4", background: "var(--orange)" }} />
                    </div>
                    <div className={s["rpt-st"]}>
                      <span>
                        <span className="d" style={{ background: "var(--ok)" }} />
                        23 approved
                      </span>
                      <span>
                        <span className="d" style={{ background: "var(--orange)" }} />
                        4 returned
                      </span>
                      <span>
                        0 rejected
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={s["rpt-sk"]}>
                      Waiting for you now
                    </div>
                    <div className={s["rpt-sv"]}>
                      4
                      <small>
                        oldest 6 days · due tomorrow
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
                    one row per month · counted from submission to your decision
                  </span>
                  <span className="sp muted" style={{ fontSize: "12px" }}>
                    Columns in the export match this preview
                  </span>
                </div>
                <table className={s["rpt-t"]}>
                  <thead>
                    <tr>
                      <th>
                        Month
                      </th>
                      <th className={s["rpt-n"]}>
                        Decisions
                      </th>
                      <th className={s["rpt-n"]}>
                        <span className="d" style={{ background: "var(--ok)", marginRight: "6px", verticalAlign: "1px" }} />
                        Approved
                      </th>
                      <th className={s["rpt-n"]}>
                        <span className="d" style={{ background: "var(--orange)", marginRight: "6px", verticalAlign: "1px" }} />
                        Returned
                      </th>
                      <th className={s["rpt-n"]}>
                        Rejected
                      </th>
                      <th className={s["rpt-n"]}>
                        Median days
                      </th>
                      <th className={s["rpt-n"]}>
                        Slowest
                      </th>
                      <th className={s["rpt-n"]}>
                        Within 7 days
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        October 2026
                      </td>
                      <td className={s["rpt-n"]}>
                        15
                      </td>
                      <td className={s["rpt-n"]}>
                        13
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        2.5
                      </td>
                      <td className={s["rpt-n"]}>
                        5 d
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-okc"])}>
                        15 of 15
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"November 2026 "}
                        <span className="muted" style={{ fontSize: "12px" }}>
                          · to 21 Nov
                        </span>
                      </td>
                      <td className={s["rpt-n"]}>
                        12
                      </td>
                      <td className={s["rpt-n"]}>
                        10
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        3.5
                      </td>
                      <td className={s["rpt-n"]}>
                        6 d
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-okc"])}>
                        12 of 12
                      </td>
                    </tr>
                    <tr className={s["rpt-tot"]}>
                      <td>
                        Q4 2026 so far
                      </td>
                      <td className={s["rpt-n"]}>
                        27
                      </td>
                      <td className={s["rpt-n"]}>
                        23
                      </td>
                      <td className={s["rpt-n"]}>
                        4
                      </td>
                      <td className={s["rpt-n"]}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        2.8
                      </td>
                      <td className={s["rpt-n"]}>
                        6 d
                      </td>
                      <td className={s["rpt-n"]}>
                        27 of 27
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={s["rpt-ret"]}>
                  <StatusIcon status="returned" />
                  <span>
                    <b>
                      After a return:
                    </b>
                    {" 2 of the 4 came back resubmitted, a median 3 days after your feedback. 2 are still with the person."}
                  </span>
                </div>
                <div className={cx(s["rpt-ph"], s["rpt-gap"])}>
                  <b>
                    Waiting now
                  </b>
                  <span className="muted">
                    4 · sorted by when the window ends
                  </span>
                  <span className="sp muted" style={{ fontSize: "12px" }}>
                    {"Deciding Priya's resubmission today keeps all four inside the window"}
                  </span>
                  <Button size="sm">
                    {"Open in Team "}
                    <Icon name="arrow" size="xs" />
                  </Button>
                </div>
                <table className={s["rpt-t"]}>
                  <thead>
                    <tr>
                      <th>
                        Submitted by
                      </th>
                      <th>
                        Item
                      </th>
                      <th className={s["rpt-n"]}>
                        Submitted
                      </th>
                      <th className={s["rpt-n"]}>
                        Waiting
                      </th>
                      <th className={s["rpt-n"]}>
                        Window ends
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="PN" tone={4} />
                          Priya Nair
                        </div>
                      </td>
                      <td className={s["rpt-c"]}>
                        Functional Architecture
                        <span className="mono">
                          FA-110 v2
                        </span>
                      </td>
                      <td className={s["rpt-n"]}>
                        15 Nov
                      </td>
                      <td className={s["rpt-n"]}>
                        6 d
                      </td>
                      <td className={s["rpt-n"]}>
                        <Pill tone="rev" size="sm">
                          22 Nov · tomorrow
                        </Pill>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="AK" tone={5} />
                          Alex Kim
                        </div>
                      </td>
                      <td className={s["rpt-c"]}>
                        Interface Management
                        <span className="mono">
                          IM-201
                        </span>
                      </td>
                      <td className={s["rpt-n"]}>
                        17 Nov
                      </td>
                      <td className={s["rpt-n"]}>
                        4 d
                      </td>
                      <td className={s["rpt-n"]}>
                        24 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="WC" />
                          Wei Chen
                        </div>
                      </td>
                      <td className={s["rpt-c"]}>
                        Run a requirements trace audit
                      </td>
                      <td className={s["rpt-n"]}>
                        19 Nov
                      </td>
                      <td className={s["rpt-n"]}>
                        2 d
                      </td>
                      <td className={s["rpt-n"]}>
                        26 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="MG" tone={3} />
                          Maria Gomez
                        </div>
                      </td>
                      <td className={s["rpt-c"]}>
                        Shadow an interface review board
                      </td>
                      <td className={s["rpt-n"]}>
                        20 Nov
                      </td>
                      <td className={s["rpt-n"]}>
                        1 d
                      </td>
                      <td className={s["rpt-n"]}>
                        27 Nov
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={s["rpt-note"]}>
                  <Icon name="info" size="xs" />
                  <span>
                    <b>
                      About your own reviewing, not your team.
                    </b>
                    {" Only you see this report. Your review time never changes whether someone's work counts as on time: that is judged by the submission date."}
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
