// GENERATED from design/html/16-admin-sources.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Pill, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Sources";

export default function View_16_admin_sources() {
  return (
    <div className={s.v}>
      <AppShell workspace="admin" active="sources">
        <main id="page">
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <h1>
                Sources
              </h1>
              <p className="sub">
                Where catalog and people data come from. Every import lands in a preview; nothing changes until someone publishes it.
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="plus" size="sm" />
                {" Add source"}
              </Button>
            </div>
          </header>
          <div className={s.lay}>
            <div className={s.col}>
              <section className="panel sl">
                <div className="panel-h">
                  <h2>
                    Sources
                  </h2>
                  <span className="cnt">
                    5
                  </span>
                </div>
                <div className="li">
                  <span className={s.ic}>
                    <Icon name="users" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      HR directory
                    </div>
                    <div className={cx("c", s.bad)}>
                      Failed today 00:57
                    </div>
                  </div>
                  <StatusIcon status="rejected" />
                </div>
                <div className="li on">
                  <span className={s.ic}>
                    <Icon name="cap" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Academy catalog
                    </div>
                    <div className={cx("c", s.rev)}>
                      Preview waiting since 11 Nov
                    </div>
                  </div>
                  <StatusIcon status="submitted" />
                </div>
                <div className="li">
                  <span className={s.ic}>
                    <Icon name="book" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Library catalog
                    </div>
                    <div className="c muted">
                      Published 8 Nov · 341 records
                    </div>
                  </div>
                  <StatusIcon status="approved" />
                </div>
                <div className="li">
                  <span className={s.ic}>
                    <Icon name="brief" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Job catalog
                    </div>
                    <div className="c muted">
                      OK · next refresh 9 Dec
                    </div>
                  </div>
                  <StatusIcon status="approved" />
                </div>
                <div className={cx("li", s.off)}>
                  <span className={s.ic}>
                    <Icon name="file" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Design practices
                    </div>
                    <div className="c muted">
                      Not set up
                    </div>
                  </div>
                  <Button size="sm">
                    Set up
                  </Button>
                </div>
              </section>
              <section className={cx("panel", s.fail)}>
                <div className={s.hd}>
                  <StatusIcon status="rejected" />
                  HR directory refresh failed
                </div>
                <div className={s.er}>
                  Fri 21 Nov 2026 00:57:12 PST
                  <br />
                  Timed out after 120 s waiting for the directory export.
                </div>
                <p>
                  Populations and admin search use the last good copy from 20 Nov 23:10 PST. Nothing was changed.
                </p>
                <div className={s.ba}>
                  <Button size="sm">
                    <Icon name="refresh" size="xs" />
                    {" Retry now"}
                  </Button>
                  <Button variant="ghost" size="sm">
                    View log
                  </Button>
                </div>
              </section>
            </div>
            <div>
              <div className={s.sh}>
                <span className={s.ic}>
                  <Icon name="cap" size="lg" />
                </span>
                <div>
                  <h2>
                    {"Academy catalog "}
                    <Pill tone="rev">
                      Preview waiting · 10 days
                    </Pill>
                  </h2>
                  <div className="c">
                    Engineering Academy course list · Master list + Course files · 103 records
                  </div>
                </div>
                <div className="acts">
                  <Button variant="ghost">
                    Discard preview…
                  </Button>
                  <Button variant="primary">
                    <Icon name="upload" size="sm" />
                    {" Publish 103 records"}
                  </Button>
                </div>
              </div>
              <section className={cx("panel", s.stats)}>
                <div className={s.cell}>
                  <div className={s.k}>
                    <Icon name="cal" size="xs" />
                    Schedule
                  </div>
                  <div className={s.v}>
                    Weekly · Tue 02:00
                  </div>
                  <div className={s.s}>
                    Held while a preview waits
                  </div>
                </div>
                <div className={s.cell}>
                  <div className={s.k}>
                    <Icon name="check" size="xs" />
                    Last success
                  </div>
                  <div className={cx("mono", s.v)}>
                    11 Nov 2026 · 02:04:31 PST
                  </div>
                  <div className={s.s}>
                    Created this preview
                  </div>
                </div>
                <div className={s.cell}>
                  <div className={s.k}>
                    <Icon name="clock" size="xs" />
                    Last attempt
                  </div>
                  <div className={cx("mono", s.v)}>
                    18 Nov 2026 · 02:00:07 PST
                  </div>
                  <div className={s.s}>
                    Held: preview not yet published
                  </div>
                </div>
                <div className={s.cell}>
                  <div className={s.k}>
                    Last 10 runs
                    <span className="sp mono" style={{ fontSize: "10.5px", color: "var(--danger)" }}>
                      1 FAILED · 14 OCT
                    </span>
                  </div>
                  <div className={s.ticks}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span className={s.bad} />
                    <span />
                    <span />
                    <span />
                    <span className={s.pv} />
                    <span className={s.held} />
                  </div>
                  <div className={s["tk-l"]}>
                    <span>
                      16 SEP
                    </span>
                    <span>
                      18 NOV
                    </span>
                  </div>
                </div>
              </section>
              <div className={s.grid2}>
                <div className={s.col}>
                  <section className={cx("panel glow", s.pv)}>
                    <div className="panel-h">
                      <h2>
                        Import preview
                      </h2>
                      <span className="mono faint">
                        11 Nov 02:04 PST
                      </span>
                      <div className="seg sp" style={{ marginLeft: "auto" }}>
                        <span className="on">
                          {"Changes "}
                          <span className="mono faint">
                            7
                          </span>
                        </span>
                        <span>
                          {"All "}
                          <span className="mono faint">
                            103
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className={s.sum}>
                      <Pill tone="ok">
                        <span className="mono">
                          +3
                        </span>
                        {" added"}
                      </Pill>
                      <Pill tone="acc">
                        <span className="mono">
                          4
                        </span>
                        {" changed"}
                      </Pill>
                      <Pill tone="neu">
                        <span className="mono">
                          0
                        </span>
                        {" removed"}
                      </Pill>
                      <Pill tone="neu">
                        <span className="mono">
                          96
                        </span>
                        {" unchanged"}
                      </Pill>
                      <span className={s.gap}>
                        <Icon name="check" size="xs" />
                        5 gaps filled · 2 decisions kept
                      </span>
                    </div>
                    <table>
                      <colgroup>
                        <col style={{ width: "42px" }} />
                        <col />
                        <col style={{ width: "84px" }} />
                        <col style={{ width: "250px" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th />
                          <th>
                            Item
                          </th>
                          <th>
                            Field
                          </th>
                          <th>
                            Before → after
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className={cx(s.sg, s.add)}>
                              +
                            </span>
                          </td>
                          <td className={s.it}>
                            <span className={s.cd}>
                              SE-214
                            </span>
                            Systems Thinking Essentials
                          </td>
                          <td className="muted">
                            New item
                          </td>
                          <td className={s.nw}>
                            <span className={s.dd} style={{ background: "var(--t-formal)" }} />
                            {"Formal · "}
                            <span className="mono">
                              L2 · 3 h
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className={cx(s.sg, s.add)}>
                              +
                            </span>
                          </td>
                          <td className={s.it}>
                            <span className={s.cd}>
                              DT-150
                            </span>
                            Digital Thread Data Walkthrough
                          </td>
                          <td className="muted">
                            New item
                          </td>
                          <td className={s.nw}>
                            <span className={s.dd} style={{ background: "var(--t-formal)" }} />
                            {"Formal · "}
                            <span className="mono">
                              L2 · 1.5 h
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className={cx(s.sg, s.add)}>
                              +
                            </span>
                          </td>
                          <td className={s.it}>
                            <span className={s.cd}>
                              EX-318
                            </span>
                            Run an interface working group
                          </td>
                          <td className="muted">
                            New item
                          </td>
                          <td className={s.nw}>
                            <span className={s.dd} style={{ background: "var(--t-exp)" }} />
                            {"Experiential · "}
                            <span className="mono">
                              L3
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className={cx(s.sg, s.chg)}>
                              ~
                            </span>
                          </td>
                          <td className={s.it}>
                            <span className={s.cd}>
                              FA-110
                            </span>
                            Functional Architecture
                          </td>
                          <td>
                            Level
                          </td>
                          <td>
                            <span className={cx("mono", s.bf)}>
                              L1
                            </span>
                            <span className={s.ar}>
                              →
                            </span>
                            <span className={cx("mono", s.af)}>
                              L2
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className={cx(s.sg, s.chg)}>
                              ~
                            </span>
                          </td>
                          <td className={s.it}>
                            <span className={s.cd}>
                              SE-101
                            </span>
                            Systems Engineering Fundamentals
                          </td>
                          <td>
                            Duration
                          </td>
                          <td>
                            <span className={cx("mono", s.bf)}>
                              5 h
                            </span>
                            <span className={s.ar}>
                              →
                            </span>
                            <span className={cx("mono", s.af)}>
                              6 h
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className={cx(s.sg, s.chg)}>
                              ~
                            </span>
                          </td>
                          <td className={s.it}>
                            <span className={s.cd}>
                              RL-210
                            </span>
                            Shadow a review board
                          </td>
                          <td>
                            Type
                          </td>
                          <td>
                            <span className={s.bf}>
                              Formal
                            </span>
                            <span className={s.ar}>
                              →
                            </span>
                            <span className={s.af}>
                              Relational
                            </span>
                            <span className="faint">
                              {" · no link needed"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className={cx(s.sg, s.chg)}>
                              ~
                            </span>
                          </td>
                          <td className={s.it}>
                            <span className={s.cd}>
                              MB-305
                            </span>
                            Model Governance
                          </td>
                          <td>
                            Link
                          </td>
                          <td>
                            <span className={cx("mono", s.bf)}>
                              http://
                            </span>
                            <span className={s.ar}>
                              →
                            </span>
                            <span className={cx("mono", s.af)}>
                              https://
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={s.tf}>
                      <Icon name="info" size="xs" />
                      Publishing replaces the live Academy items. Your conflict decisions stay in place.
                    </div>
                  </section>
                </div>
                <div className={s.col}>
                  <section className={cx("panel", s.mp)}>
                    <div className="panel-h">
                      <h2>
                        Column mapping
                      </h2>
                      <span className="cnt">
                        12 of 14
                      </span>
                      <span className="lnk">
                        {"Edit "}
                        <Icon name="cr" size="xs" />
                      </span>
                    </div>
                    <div className="li">
                      <span className={s.src}>
                        course_code
                      </span>
                      <Icon name="arrow" size="xs" />
                      <span className={s.dst}>
                        Code
                      </span>
                    </div>
                    <div className="li">
                      <span className={s.src}>
                        course_title
                      </span>
                      <Icon name="arrow" size="xs" />
                      <span className={s.dst}>
                        Title
                      </span>
                    </div>
                    <div className="li">
                      <span className={s.src}>
                        summary
                      </span>
                      <Icon name="arrow" size="xs" />
                      <span className={s.dst}>
                        Description
                      </span>
                    </div>
                    <div className="li">
                      <span className={s.src}>
                        learning_type
                      </span>
                      <Icon name="arrow" size="xs" />
                      <span className={s.dst}>
                        Type
                      </span>
                    </div>
                    <div className="li">
                      <span className={s.src}>
                        course_level
                      </span>
                      <Icon name="arrow" size="xs" />
                      <span className={s.dst}>
                        Level
                      </span>
                    </div>
                    <div className="li">
                      <span className={s.src}>
                        hours
                      </span>
                      <Icon name="arrow" size="xs" />
                      <span className={s.dst}>
                        Duration
                      </span>
                    </div>
                    <div className="li">
                      <span className={s.src}>
                        delivery_url
                      </span>
                      <Icon name="arrow" size="xs" />
                      <span className={s.dst}>
                        Course link
                      </span>
                    </div>
                    <div className={s.ft}>
                      <span>
                        + 5 more
                      </span>
                      <span className="sp">
                        {"2 ignored: "}
                        <span className="mono">
                          owner_email, notes
                        </span>
                      </span>
                    </div>
                  </section>
                  <section className="panel">
                    <div className="panel-h">
                      <h2>
                        Provider home
                      </h2>
                    </div>
                    <div className={s.ph2}>
                      <div className="input">
                        <Icon name="link" size="xs" />
                        https://academy.example.com
                      </div>
                      <div className={s.val}>
                        <StatusIcon status="approved" />
                        https on an approved company domain
                      </div>
                      <p>
                        {"Shown to employees as the Academy's home page."}
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
