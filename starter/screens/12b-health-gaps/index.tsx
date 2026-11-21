// GENERATED from design/html/12b-health-gaps.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Data health · Gaps";

export default function View_12b_health_gaps() {
  return (
    <div className={s.v}>
      <AppShell workspace="admin" active="health">
        <main id="page">
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <h1>
                Data health
              </h1>
              <p className="sub">
                What needs a person today. Everything else runs on its own.
              </p>
            </div>
            <div className="acts">
              <span className={s.chk}>
                <Icon name="clock" size="xs" />
                {"Checked "}
                <span className="mono">
                  08:14
                </span>
                {" today"}
              </span>
              <Button variant="ghost" size="sm">
                <Icon name="file" size="sm" />
                {" Audit log"}
              </Button>
            </div>
          </header>
          <div className={s.bn}>
            <div className="banner danger">
              <span className={s.ic}>
                <Icon name="alert" size="sm" />
              </span>
              <div className={cx("grow", s.tx)}>
                <div>
                  <b>
                    HR directory refresh failed at 00:57.
                  </b>
                  {" Manager access is using 20 Nov data (1 day old)."}
                </div>
                <div className={s.s}>
                  <Icon name="bell" size="xs" />
                  Admins notified
                  <span className="faint">
                    ·
                  </span>
                  {"next automatic try "}
                  <span className="mono">
                    22 Nov 00:57
                  </span>
                  <span className="faint">
                    ·
                  </span>
                  {"managers see a “Today's refresh failed” notice"}
                </div>
              </div>
              <div className="acts">
                <Button>
                  View error
                </Button>
                <Button>
                  <Icon name="refresh" size="sm" />
                  {" Retry now"}
                </Button>
              </div>
            </div>
            <div className="banner warn">
              <span className={s.ic}>
                <Icon name="clock" size="sm" />
              </span>
              <div className={cx("grow", s.tx)}>
                <div>
                  <b>
                    Academy catalog preview has waited 10 days:
                  </b>
                  {" 103 records, 4 changes."}
                </div>
                <div className={s.s}>
                  {"Nothing reaches employees until it is published. Imported "}
                  <span className="mono">
                    11 Nov 06:00
                  </span>
                </div>
              </div>
              <div className="acts">
                <Button>
                  {"Review & publish "}
                  <Icon name="arrow" size="xs" />
                </Button>
              </div>
            </div>
          </div>
          <section className={cx("panel", s.src)}>
            <div className={s.cell}>
              <div className={s.nm}>
                <Icon name="users" size="xs" />
                HR directory
              </div>
              <div className={cx(s.stt, s["hs-bad"])}>
                <StatusIcon status="rejected" />
                Failed
              </div>
              <div className={s.mt}>
                DAILY 00:57 · GOOD 20 NOV
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.nm}>
                <Icon name="cap" size="xs" />
                Academy catalog
              </div>
              <div className={cx(s.stt, s["hs-rev"])}>
                <StatusIcon status="submitted" />
                Preview waiting
              </div>
              <div className={s.mt}>
                103 RECORDS · SINCE 11 NOV
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.nm}>
                <Icon name="book" size="xs" />
                Library catalog
              </div>
              <div className={cx(s.stt, s["hs-okt"])}>
                <StatusIcon status="approved" />
                OK
              </div>
              <div className={s.mt}>
                UPDATED 8 NOV · MONTHLY
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.nm}>
                <Icon name="brief" size="xs" />
                Job catalog
              </div>
              <div className={cx(s.stt, s["hs-okt"])}>
                <StatusIcon status="approved" />
                OK
              </div>
              <div className={s.mt}>
                NEXT 9 DEC · QUARTERLY
              </div>
            </div>
            <div className={s.cell}>
              <div className={s.nm}>
                <Icon name="grid" size="xs" />
                Design practices
              </div>
              <div className={cx(s.stt, s["hs-not"])}>
                <StatusIcon status="not_started" />
                Not set up
              </div>
              <div className={s.mt} style={{ color: "var(--muted)" }}>
                {"OPTIONAL · SET UP "}
                <span style={{ fontFamily: "Geist,sans-serif" }}>
                  →
                </span>
              </div>
            </div>
          </section>
          <section className={cx("panel", s.qp)}>
            <div className={s.qh}>
              <h2>
                Needs attention
              </h2>
              <div className="tabs">
                <span>
                  {"Conflicts "}
                  <span className="n">
                    12
                  </span>
                </span>
                <span className="on">
                  {"Gaps "}
                  <span className="n">
                    5
                  </span>
                </span>
                <span>
                  {"Formal items missing a link "}
                  <span className="n">
                    7
                  </span>
                </span>
                <span>
                  {"Formatting "}
                  <span className="n">
                    3
                  </span>
                </span>
              </div>
              <span className={s.note}>
                <Icon name="info" size="xs" />
                Decisions persist across imports and are re-flagged if a source value changes.
              </span>
            </div>
            <div className={s.call}>
              <span className={s.ai}>
                <Icon name="spark" size="sm" />
              </span>
              <span>
                <b style={{ fontWeight: "550" }}>
                  All 5 gaps can be filled automatically
                </b>
                {" "}
                <span className="muted">
                  · one source has a value and the other is blank, so there is nothing to choose
                </span>
              </span>
              <Button variant="primary" size="sm" className="sp">
                <Icon name="check" size="xs" />
                {" Fill all 5"}
              </Button>
            </div>
            <table className={s["hx-t"]}>
              <thead>
                <tr>
                  <th>
                    Item
                  </th>
                  <th>
                    Field
                  </th>
                  <th>
                    Master list
                  </th>
                  <th>
                    Course files
                  </th>
                  <th className={s["hx-use"]}>
                    Will use
                  </th>
                  <th>
                    Flagged
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Model Governance
                    </span>
                    <span className={s.code}>
                      MB-305
                    </span>
                  </td>
                  <td className={s.fld}>
                    Course level
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L4
                    </span>
                  </td>
                  <td>
                    <span className={s["hx-blank"]}>
                      blank
                    </span>
                  </td>
                  <td className={s["hx-use"]}>
                    <span className={cx("mono", s.val)}>
                      L4
                    </span>
                    <span className={s["hx-from"]}>
                      <Icon name="arrow" size="xs" />
                      from Master list
                    </span>
                  </td>
                  <td>
                    <span className={s.since}>
                      18 Nov
                    </span>
                  </td>
                  <td>
                    <Button variant="ghost" size="sm">
                      Skip
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Lead a design review
                    </span>
                    <span className={s.code}>
                      EX-302
                    </span>
                  </td>
                  <td className={s.fld}>
                    Duration
                  </td>
                  <td>
                    <span className={s["hx-blank"]}>
                      blank
                    </span>
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      ~4 h
                    </span>
                  </td>
                  <td className={s["hx-use"]}>
                    <span className={cx("mono", s.val)}>
                      ~4 h
                    </span>
                    <span className={s["hx-from"]}>
                      <Icon name="arrow" size="xs" />
                      from Course files
                    </span>
                  </td>
                  <td>
                    <span className={s.since}>
                      18 Nov
                    </span>
                  </td>
                  <td>
                    <Button variant="ghost" size="sm">
                      Skip
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Shadow a review board
                    </span>
                    <span className={s.code}>
                      RL-210
                    </span>
                  </td>
                  <td className={s.fld}>
                    Professional role
                  </td>
                  <td>
                    <span className={s["hx-blank"]}>
                      blank
                    </span>
                  </td>
                  <td>
                    <span className={s.val}>
                      Systems Engineer
                    </span>
                  </td>
                  <td className={s["hx-use"]}>
                    <span className={s.val}>
                      Systems Engineer
                    </span>
                    <span className={s["hx-from"]}>
                      <Icon name="arrow" size="xs" />
                      from Course files
                    </span>
                  </td>
                  <td>
                    <span className={s.since}>
                      18 Nov
                    </span>
                  </td>
                  <td>
                    <Button variant="ghost" size="sm">
                      Skip
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Requirements Quality
                    </span>
                    <span className={s.code}>
                      RQ-120
                    </span>
                  </td>
                  <td className={s.fld}>
                    Description
                  </td>
                  <td>
                    <span className={s["hx-blank"]}>
                      blank
                    </span>
                  </td>
                  <td>
                    <span className={s.val}>
                      <span className={s["hx-ell"]} style={{ maxWidth: "190px" }}>
                        Write requirements that are clear, testable and traceable.
                      </span>
                    </span>
                  </td>
                  <td className={s["hx-use"]}>
                    <span className={s.val}>
                      <span className={s["hx-ell"]} style={{ maxWidth: "150px" }}>
                        Write requirements that are clear, testable and traceable.
                      </span>
                    </span>
                    <span className={s["hx-from"]}>
                      <Icon name="arrow" size="xs" />
                      from Course files
                    </span>
                  </td>
                  <td>
                    <span className={s.since}>
                      11 Nov
                    </span>
                  </td>
                  <td>
                    <Button variant="ghost" size="sm">
                      Skip
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      {"Risk & Opportunity Management"}
                    </span>
                    <span className={s.code}>
                      RM-150
                    </span>
                  </td>
                  <td className={s.fld}>
                    Provider
                  </td>
                  <td>
                    <span className={s.val}>
                      Academy
                    </span>
                  </td>
                  <td>
                    <span className={s["hx-blank"]}>
                      blank
                    </span>
                  </td>
                  <td className={s["hx-use"]}>
                    <span className={s.val}>
                      Academy
                    </span>
                    <span className={s["hx-from"]}>
                      <Icon name="arrow" size="xs" />
                      from Master list
                    </span>
                  </td>
                  <td>
                    <span className={s.since}>
                      11 Nov
                    </span>
                  </td>
                  <td>
                    <Button variant="ghost" size="sm">
                      Skip
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={s["hx-foot"]}>
              <Icon name="info" size="sm" />
              <span>
                <b>
                  Filled values are kept on every import.
                </b>
                {" If the blank source later sends a different value, the item moves to Conflicts. A skipped gap stays blank and stays on this list."}
              </span>
            </div>
          </section>
        </main>
      </AppShell>
    </div>
  );
}
