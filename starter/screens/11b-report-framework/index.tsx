// GENERATED from design/html/11b-report-framework.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Audit-ready evidence by framework";

export default function View_11b_report_framework() {
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
                <div className={cx("li", s["rpt-on"])}>
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
            <section className={cx("panel", s["rpt-p"])}>
              <div className={s["rpt-h"]}>
                <div>
                  <h2>
                    Audit-ready evidence by framework
                    <span className="mono">
                      · Q4 2026
                    </span>
                  </h2>
                  <p>
                    Approved items and their files and links, grouped by Competency framework area, for your 11 direct reports.
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
                  <Icon name="grid" size="xs" />
                  <span className={s["rpt-k"]}>
                    Framework
                  </span>
                  {"Competency v1 · "}
                  <span className="mono">
                    8
                  </span>
                  {" areas"}
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
                    {"Approved items per framework area, by type "}
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
                  <svg className={s["rpt-bars"]} viewBox="0 0 640 196" role="img" aria-label="Approved items per framework area in Q4 2026. Requirements quality 7 items from 4 people; Functional architecture 2 from 2; Systems modeling 3 from 1; Configuration control 3 from 1; Verification planning 5 from 3; Trade studies 1 from 1; Interface management 1 from 1; Integration and test 1 from 1.">
                    <line className={s["rpt-gl"]} x1="266" x2="266" y1="4" y2="178" strokeDasharray="2 4" />
                    <line className={s["rpt-gl"]} x1="362" x2="362" y1="4" y2="178" strokeDasharray="2 4" />
                    <line className={s["rpt-gl"]} x1="458" x2="458" y1="4" y2="178" strokeDasharray="2 4" />
                    <line className={s["rpt-gl0"]} x1="170" x2="170" y1="4" y2="178" />
                    <g>
                      <title>
                        Requirements quality · 7 items (Formal 5, Relational 1, Experiential 1) · 4 people
                      </title>
                      <text className={s["rpt-lb"]} x="0" y="18">
                        Requirements quality
                      </text>
                      <rect className={s["rpt-f"]} x="170" y="8" width="238" height="12" rx="2" />
                      <rect className={s["rpt-r"]} x="410" y="8" width="46" height="12" rx="2" />
                      <rect className={s["rpt-e"]} x="458" y="8" width="46" height="12" rx="2" />
                      <text className={s["rpt-tot"]} x="514" y="18">
                        {"7 "}
                        <tspan className={s["rpt-pp"]}>
                          · 4 people
                        </tspan>
                      </text>
                    </g>
                    <g>
                      <title>
                        Functional architecture · 2 items (Formal 2) · 2 people
                      </title>
                      <text className={s["rpt-lb"]} x="0" y="40">
                        Functional architecture
                      </text>
                      <rect className={s["rpt-f"]} x="170" y="30" width="94" height="12" rx="2" />
                      <text className={s["rpt-tot"]} x="274" y="40">
                        {"2 "}
                        <tspan className={s["rpt-pp"]}>
                          · 2 people
                        </tspan>
                      </text>
                    </g>
                    <g>
                      <title>
                        Systems modeling · 3 items (Formal 2, Experiential 1) · 1 person
                      </title>
                      <text className={s["rpt-lb"]} x="0" y="62">
                        Systems modeling
                      </text>
                      <rect className={s["rpt-f"]} x="170" y="52" width="94" height="12" rx="2" />
                      <rect className={s["rpt-e"]} x="266" y="52" width="46" height="12" rx="2" />
                      <text className={s["rpt-tot"]} x="322" y="62">
                        {"3 "}
                        <tspan className={s["rpt-pp"]}>
                          · 1 person
                        </tspan>
                      </text>
                    </g>
                    <g>
                      <title>
                        Configuration control · 3 items (Formal 2, Experiential 1) · 1 person
                      </title>
                      <text className={s["rpt-lb"]} x="0" y="84">
                        Configuration control
                      </text>
                      <rect className={s["rpt-f"]} x="170" y="74" width="94" height="12" rx="2" />
                      <rect className={s["rpt-e"]} x="266" y="74" width="46" height="12" rx="2" />
                      <text className={s["rpt-tot"]} x="322" y="84">
                        {"3 "}
                        <tspan className={s["rpt-pp"]}>
                          · 1 person
                        </tspan>
                      </text>
                    </g>
                    <g>
                      <title>
                        Verification planning · 5 items (Formal 1, Experiential 4) · 3 people
                      </title>
                      <text className={s["rpt-lb"]} x="0" y="106">
                        Verification planning
                      </text>
                      <rect className={s["rpt-f"]} x="170" y="96" width="46" height="12" rx="2" />
                      <rect className={s["rpt-e"]} x="218" y="96" width="190" height="12" rx="2" />
                      <text className={s["rpt-tot"]} x="418" y="106">
                        {"5 "}
                        <tspan className={s["rpt-pp"]}>
                          · 3 people
                        </tspan>
                      </text>
                    </g>
                    <g>
                      <title>
                        Trade studies · 1 item (Relational 1) · 1 person
                      </title>
                      <text className={s["rpt-lb"]} x="0" y="128">
                        Trade studies
                      </text>
                      <rect className={s["rpt-r"]} x="170" y="118" width="46" height="12" rx="2" />
                      <text className={s["rpt-tot"]} x="226" y="128">
                        {"1 "}
                        <tspan className={s["rpt-pp"]}>
                          · 1 person
                        </tspan>
                      </text>
                    </g>
                    <g>
                      <title>
                        Interface management · 1 item (Relational 1) · 1 person
                      </title>
                      <text className={s["rpt-lb"]} x="0" y="150">
                        Interface management
                      </text>
                      <rect className={s["rpt-r"]} x="170" y="140" width="46" height="12" rx="2" />
                      <text className={s["rpt-tot"]} x="226" y="150">
                        {"1 "}
                        <tspan className={s["rpt-pp"]}>
                          · 1 person
                        </tspan>
                      </text>
                    </g>
                    <g>
                      <title>
                        {"Integration & test · 1 item (Relational 1) · 1 person"}
                      </title>
                      <text className={s["rpt-lb"]} x="0" y="172">
                        {"Integration & test"}
                      </text>
                      <rect className={s["rpt-r"]} x="170" y="162" width="46" height="12" rx="2" />
                      <text className={s["rpt-tot"]} x="226" y="172">
                        {"1 "}
                        <tspan className={s["rpt-pp"]}>
                          · 1 person
                        </tspan>
                      </text>
                    </g>
                    <text x="170" y="193" textAnchor="middle">
                      0
                    </text>
                    <text x="266" y="193" textAnchor="middle">
                      2
                    </text>
                    <text x="362" y="193" textAnchor="middle">
                      4
                    </text>
                    <text x="458" y="193" textAnchor="middle">
                      6
                    </text>
                    <text x="636" y="193" textAnchor="end">
                      approved items
                    </text>
                  </svg>
                </div>
                <div className={s["rpt-sum"]}>
                  <div>
                    <div className={s["rpt-sk"]}>
                      Approved items
                    </div>
                    <div className={s["rpt-sv"]}>
                      23
                      <small>
                        each filed under one area
                      </small>
                    </div>
                    <div className={s["rpt-sb"]}>
                      <span style={{ flex: "12", background: "var(--t-formal)" }} />
                      <span style={{ flex: "4", background: "var(--t-rel)" }} />
                      <span style={{ flex: "7", background: "var(--t-exp)" }} />
                    </div>
                    <div className={s["rpt-st"]}>
                      <span>
                        <TypeDot kind="formal" />
                        12
                      </span>
                      <span>
                        <TypeDot kind="rel" />
                        4
                      </span>
                      <span>
                        <TypeDot kind="exp" />
                        7
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={s["rpt-sk"]}>
                      Evidence files and links
                    </div>
                    <div className={s["rpt-sv"]}>
                      32
                      <small>
                        22 of 23 items have one
                      </small>
                    </div>
                  </div>
                  <div>
                    <div className={s["rpt-sk"]}>
                      People with approved evidence
                    </div>
                    <div className={s["rpt-sv"]}>
                      9
                      <small>
                        of 11 · each counted once
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
                    8 rows · one per framework area · in framework order
                  </span>
                  <span className="sp muted" style={{ fontSize: "12px" }}>
                    The CSV adds one row per approved item, with approver, date and file links
                  </span>
                </div>
                <table className={s["rpt-t"]}>
                  <thead>
                    <tr>
                      <th>
                        Framework area
                      </th>
                      <th className={s["rpt-n"]}>
                        People
                      </th>
                      <th className={s["rpt-n"]}>
                        Approved items
                      </th>
                      <th className={s["rpt-n"]}>
                        <TypeDot kind="formal" />
                        Formal
                      </th>
                      <th className={s["rpt-n"]}>
                        <TypeDot kind="rel" />
                        Relational
                      </th>
                      <th className={s["rpt-n"]}>
                        <TypeDot kind="exp" />
                        Experiential
                      </th>
                      <th className={s["rpt-n"]}>
                        Files and links
                      </th>
                      <th className={s["rpt-n"]}>
                        Items without a file
                      </th>
                      <th className={s["rpt-n"]}>
                        Last approved
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className={s["rpt-area"]}>
                          <Icon name="cr" size="xs" />
                          Requirements quality
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        4
                      </td>
                      <td className={s["rpt-n"]}>
                        7
                      </td>
                      <td className={s["rpt-n"]}>
                        5
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        9
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        19 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-area"]}>
                          <Icon name="cr" size="xs" />
                          Functional architecture
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        3
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        6 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-area"]}>
                          <Icon name="cr" size="xs" />
                          Systems modeling
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        3
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        5
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        17 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-area"]}>
                          <Icon name="cr" size="xs" />
                          Configuration control
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        3
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        4
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        12 Nov
                      </td>
                    </tr>
                    <tr className={s["rpt-open"]}>
                      <td>
                        <div className={s["rpt-area"]}>
                          <Icon name="cd" size="xs" />
                          Verification planning
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        3
                      </td>
                      <td className={s["rpt-n"]}>
                        5
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        4
                      </td>
                      <td className={s["rpt-n"]}>
                        8
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-miss"])}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        14 Nov
                      </td>
                    </tr>
                    <tr className={s["rpt-sub"]}>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="DO" tone={2} />
                          Daniel Okafor
                        </div>
                      </td>
                      <td className={s["rpt-n"]} />
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        5 Nov
                      </td>
                    </tr>
                    <tr className={s["rpt-sub"]}>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="MG" tone={3} />
                          Maria Gomez
                        </div>
                      </td>
                      <td className={s["rpt-n"]} />
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        4
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        14 Nov
                      </td>
                    </tr>
                    <tr className={s["rpt-sub"]}>
                      <td>
                        <div className={s["rpt-who"]}>
                          <Avatar initials="WC" />
                          Wei Chen
                        </div>
                      </td>
                      <td className={s["rpt-n"]} />
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        2
                      </td>
                      <td className={s["rpt-n"]}>
                        3
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-miss"])} title="Approved on your review note only">
                        1 · note only
                      </td>
                      <td className={s["rpt-n"]}>
                        7 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-area"]}>
                          <Icon name="cr" size="xs" />
                          Trade studies
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        23 Oct
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-area"]}>
                          <Icon name="cr" size="xs" />
                          Interface management
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        4 Nov
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={s["rpt-area"]}>
                          <Icon name="cr" size="xs" />
                          {"Integration & test"}
                        </div>
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={cx(s["rpt-n"], s["rpt-z"])}>
                        0
                      </td>
                      <td className={s["rpt-n"]}>
                        2 Oct
                      </td>
                    </tr>
                    <tr className={s["rpt-tot"]}>
                      <td>
                        Framework · 8 areas
                      </td>
                      <td className={s["rpt-n"]}>
                        9
                      </td>
                      <td className={s["rpt-n"]}>
                        23
                      </td>
                      <td className={s["rpt-n"]}>
                        12
                      </td>
                      <td className={s["rpt-n"]}>
                        4
                      </td>
                      <td className={s["rpt-n"]}>
                        7
                      </td>
                      <td className={s["rpt-n"]}>
                        32
                      </td>
                      <td className={s["rpt-n"]}>
                        1
                      </td>
                      <td className={s["rpt-n"]}>
                        19 Nov
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={s["rpt-note"]}>
                  <Icon name="info" size="xs" />
                  <span>
                    <b>
                      Counts approved learning only.
                    </b>
                    {" Each person counted once per area and once in the total (9, not the 14 the rows add up to). Nina Rossi has none this quarter; Omar Haddad, new on 3 Nov, has nothing recorded yet. Evidence on record, not a rating of people."}
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
