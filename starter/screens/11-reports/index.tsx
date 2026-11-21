// GENERATED from design/html/11-reports.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Reports";

export default function View_11_reports() {
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
              <div className={s.hfresh}>
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
          <div className={s.rl}>
            <div className={s.col}>
              <section className={cx("panel", s.types)}>
                <div className={s["rpt-grp"]}>
                  REPORT TYPES
                </div>
                <div className="li on">
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
            <section className={cx("panel", s.rp)}>
              <div className={s.rh}>
                <div>
                  <h2>
                    Team learning evidence
                    <span className="mono">
                      · Q4 2026
                    </span>
                  </h2>
                  <p>
                    Approved learning items, hours and evidence files for each of your direct reports.
                  </p>
                </div>
                <div className="acts">
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
              <div className={s.fl}>
                <span className={s.chip}>
                  <Icon name="cal" size="xs" />
                  <span className={s.k}>
                    Period
                  </span>
                  {"Q4 2026 "}
                  <span className="mono muted" style={{ fontSize: "11.5px" }}>
                    1 Oct – 31 Dec
                  </span>
                  <Icon name="cd" size="xs" />
                </span>
                <span className={s.chip}>
                  <Icon name="users" size="xs" />
                  <span className={s.k}>
                    People
                  </span>
                  {"Direct reports · "}
                  <span className="mono">
                    11
                  </span>
                  <Icon name="cd" size="xs" />
                </span>
                <span className={s.chip}>
                  <span className={s.k}>
                    Types
                  </span>
                  <span className={cx("d formal", s.dt)} />
                  <span className={cx("d rel", s.dt)} />
                  <span className={cx("d exp", s.dt)} />
                  All 3
                  <Icon name="cd" size="xs" />
                </span>
                <span className={cx(s.chip, s.locked)}>
                  <Icon name="lock" size="xs" />
                  <span className={s.k}>
                    Status
                  </span>
                  Approved only
                </span>
              </div>
              <div className={s.viz}>
                <div className={s.chart}>
                  <div className={s["ch-h"]}>
                    {"Approved items per month, by type "}
                    <div className="legend">
                      <span>
                        <i style={{ background: "var(--t-formal)" }} />
                        Formal
                      </span>
                      <span>
                        <i style={{ background: "var(--t-rel)" }} />
                        Relational
                      </span>
                      <span>
                        <i style={{ background: "var(--t-exp)" }} />
                        Experiential
                      </span>
                    </div>
                  </div>
                  <svg className={s.bars} viewBox="0 0 640 184">
                    <rect className={s.band} x="333" y="0" width="300" height="162" rx="6" />
                    <text className={s.bl} x="622" y="15" textAnchor="end">
                      Q4 2026
                    </text>
                    <text x="40" y="15">
                      Q3 · FOR CONTEXT
                    </text>
                    <line className={s.gl} x1="30" x2="634" y1="10.5" y2="10.5" strokeDasharray="2 4" />
                    <line className={s.gl} x1="30" x2="634" y1="60.5" y2="60.5" strokeDasharray="2 4" />
                    <line className={s.gl} x1="30" x2="634" y1="110.5" y2="110.5" strokeDasharray="2 4" />
                    <line className={s.gl0} x1="30" x2="634" y1="160.5" y2="160.5" />
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
                    <g className={s.ctx}>
                      <rect className={s.f} x="82" y="121" width="56" height="39" />
                      <rect className="r" x="82" y="111" width="56" height="8.5" />
                      <rect className={s.e} x="82" y="101" width="56" height="8.5" rx="2" />
                    </g>
                    <text className={s.tot} x="110" y="93" textAnchor="middle" style={{ opacity: ".6" }}>
                      6
                    </text>
                    <g className={s.ctx}>
                      <rect className={s.f} x="231" y="121" width="56" height="39" />
                      <rect className="r" x="231" y="111" width="56" height="8.5" />
                      <rect className={s.e} x="231" y="91" width="56" height="18.5" rx="2" />
                    </g>
                    <text className={s.tot} x="259" y="83" textAnchor="middle" style={{ opacity: ".6" }}>
                      7
                    </text>
                    <rect className={s.f} x="379" y="91" width="56" height="69" />
                    <rect className="r" x="379" y="71" width="56" height="18.5" />
                    <rect className={s.e} x="379" y="31" width="56" height="38.5" rx="2" />
                    <text className={s.tot} x="407" y="24" textAnchor="middle">
                      13
                    </text>
                    <rect className={s.f} x="528" y="111" width="56" height="49" />
                    <rect className="r" x="528" y="91" width="56" height="18.5" />
                    <rect className={s.e} x="528" y="61" width="56" height="28.5" rx="2" />
                    <text className={s.tot} x="556" y="54" textAnchor="middle">
                      10
                    </text>
                    <text className={s.ml} x="110" y="178" textAnchor="middle">
                      Aug
                    </text>
                    <text className={s.ml} x="259" y="178" textAnchor="middle">
                      Sep
                    </text>
                    <text className={s.ml} x="407" y="178" textAnchor="middle">
                      Oct
                    </text>
                    <text className={s.ml} x="556" y="178" textAnchor="middle">
                      Nov · to 21st
                    </text>
                  </svg>
                </div>
                <div className={s.sum}>
                  <div>
                    <div className={s.k}>
                      Approved items
                    </div>
                    <div className={s.v}>
                      23
                      <small>
                        +6 vs Q3
                      </small>
                    </div>
                    <div className={s.sb}>
                      <span style={{ flex: "12", background: "var(--t-formal)" }} />
                      <span style={{ flex: "4", background: "var(--t-rel)" }} />
                      <span style={{ flex: "7", background: "var(--t-exp)" }} />
                    </div>
                    <div className={s.tl}>
                      <span>
                        <span className={s.dt} style={{ background: "var(--t-formal)" }} />
                        12
                      </span>
                      <span>
                        <span className={s.dt} style={{ background: "var(--t-rel)" }} />
                        4
                      </span>
                      <span>
                        <span className={s.dt} style={{ background: "var(--t-exp)" }} />
                        7
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={s.k}>
                      Learning hours
                    </div>
                    <div className={s.v}>
                      47.5
                      <small>
                        h · recorded for 21 of 23 items
                      </small>
                    </div>
                  </div>
                  <div>
                    <div className={s.k}>
                      Evidence files
                    </div>
                    <div className={s.v}>
                      32
                      <small>
                        files and links
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.prev}>
                <div className={s["prev-h"]}>
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
                <table className={s.pt}>
                  <thead>
                    <tr>
                      <th>
                        Person
                      </th>
                      <th className="n">
                        Approved items
                      </th>
                      <th className="n">
                        <span className={cx("d formal", s.dt)} />
                        Formal
                      </th>
                      <th className="n">
                        <span className={cx("d rel", s.dt)} />
                        Relational
                      </th>
                      <th className="n">
                        <span className={cx("d exp", s.dt)} />
                        Experiential
                      </th>
                      <th className="n">
                        Hours
                      </th>
                      <th className="n">
                        Evidence files
                      </th>
                      <th className="n">
                        Last approved
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="AK" tone={6} />
                          Aisha Khan
                        </div>
                      </td>
                      <td className="n">
                        5
                      </td>
                      <td className="n">
                        3
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        13.5
                      </td>
                      <td className="n">
                        7
                      </td>
                      <td className="n">
                        17 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="AK" tone={5} />
                          Alex Kim
                        </div>
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n">
                        2.0
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        28 Oct
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="DO" tone={2} />
                          Daniel Okafor
                        </div>
                      </td>
                      <td className="n">
                        5
                      </td>
                      <td className="n">
                        3
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n">
                        2
                      </td>
                      <td className="n">
                        11.0
                      </td>
                      <td className="n">
                        6
                      </td>
                      <td className="n">
                        19 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="FR" />
                          Fatima Rahman
                        </div>
                      </td>
                      <td className="n">
                        3
                      </td>
                      <td className="n">
                        2
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        6.5
                      </td>
                      <td className="n">
                        4
                      </td>
                      <td className="n">
                        12 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="LS" tone={2} />
                          Lucas Silva
                        </div>
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n">
                        1.5
                      </td>
                      <td className="n">
                        2
                      </td>
                      <td className="n">
                        21 Oct
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="MG" tone={3} />
                          Maria Gomez
                        </div>
                      </td>
                      <td className="n">
                        3
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        7.0
                      </td>
                      <td className="n">
                        5
                      </td>
                      <td className="n">
                        14 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="NR" tone={5} />
                          Nina Rossi
                        </div>
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n" style={{ fontFamily: "Geist,sans-serif", color: "var(--faint)" }}>
                        Not recorded
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="OH" tone={6} />
                          Omar Haddad
                        </div>
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n" style={{ fontFamily: "Geist,sans-serif", color: "var(--faint)" }}>
                        Not recorded
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="PN" tone={4} />
                          Priya Nair
                        </div>
                      </td>
                      <td className="n">
                        2
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n">
                        5.0
                      </td>
                      <td className="n">
                        3
                      </td>
                      <td className="n">
                        4 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="TB" tone={2} />
                          Tom Becker
                        </div>
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n">
                        1.0
                      </td>
                      <td className="n">
                        1
                      </td>
                      <td className="n">
                        2 Oct
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s.who}>
                          <Avatar initials="WC" />
                          Wei Chen
                        </div>
                      </td>
                      <td className="n">
                        2
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className={cx("n", s.z)}>
                        0
                      </td>
                      <td className="n">
                        2
                      </td>
                      <td className="n" style={{ fontFamily: "Geist,sans-serif", color: "var(--faint)" }}>
                        Not recorded
                      </td>
                      <td className="n">
                        3
                      </td>
                      <td className="n">
                        7 Nov
                      </td>
                    </tr>
                    <tr className={s.tot}>
                      <td>
                        Team · 11 people
                      </td>
                      <td className="n">
                        23
                      </td>
                      <td className="n">
                        12
                      </td>
                      <td className="n">
                        4
                      </td>
                      <td className="n">
                        7
                      </td>
                      <td className="n">
                        47.5
                      </td>
                      <td className="n">
                        32
                      </td>
                      <td className="n">
                        19 Nov
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={s.note}>
                  <Icon name="info" size="xs" />
                  <span>
                    <b>
                      Counts approved learning only.
                    </b>
                    {" Each person counted once. Columns describe groups of courses; they don't rate people."}
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
