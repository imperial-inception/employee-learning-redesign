// GENERATED from design/html/12-admin-health.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Data health";

export default function View_12_admin_health() {
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
                <Button variant="primary">
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
              <div className={cx(s.stt, s["c-bad"])}>
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
              <div className={cx(s.stt, s["c-rev"])}>
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
              <div className={cx("c-ok", s.stt)}>
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
              <div className={cx("c-ok", s.stt)}>
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
              <div className={cx(s.stt, s["c-not"])}>
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
                <span className="on">
                  {"Conflicts "}
                  <span className="n">
                    12
                  </span>
                </span>
                <span>
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
              <span className={s.ai} style={{ display: "flex" }}>
                <Icon name="spark" size="sm" />
              </span>
              <span>
                <b style={{ fontWeight: "550" }}>
                  5 gaps can be filled automatically
                </b>
                {" "}
                <span className="muted">
                  (one source is blank, so there is nothing to choose)
                </span>
              </span>
              <Button variant="ghost" size="sm" className="sp">
                Review first
              </Button>
              <Button size="sm">
                Fill all 5
              </Button>
            </div>
            <table className={s.qt}>
              <thead>
                <tr>
                  <th>
                    <span className={cx("check", s.mid)} />
                  </th>
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
                  <th>
                    Use
                  </th>
                  <th>
                    Flagged
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="on">
                  <td>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </td>
                  <td className={s.it}>
                    <span className="t">
                      Functional Architecture
                    </span>
                    <span className={s.code}>
                      FA-110
                    </span>
                  </td>
                  <td className={s.fld}>
                    Course level
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L2
                    </span>
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L3
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span>
                        Master list
                      </span>
                      <span>
                        Course files
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.since}>
                      18 Nov
                    </span>
                  </td>
                </tr>
                <tr className="on">
                  <td>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </td>
                  <td className={s.it}>
                    <span className="t">
                      Interface Management
                    </span>
                    <span className={s.code}>
                      IM-201
                    </span>
                  </td>
                  <td className={s.fld}>
                    Professional role
                  </td>
                  <td>
                    <span className={s.val}>
                      Systems Engineer
                    </span>
                  </td>
                  <td>
                    <span className={s.val}>
                      Interface Architect
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span>
                        Master list
                      </span>
                      <span>
                        Course files
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.since}>
                      18 Nov
                    </span>
                  </td>
                </tr>
                <tr className="on">
                  <td>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </td>
                  <td className={s.it}>
                    <span className="t">
                      Systems Engineering Fundamentals
                    </span>
                    <span className={s.code}>
                      SE-101
                    </span>
                  </td>
                  <td className={s.fld}>
                    Course level
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L1
                    </span>
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L2
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span>
                        Master list
                      </span>
                      <span>
                        Course files
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.since}>
                      18 Nov
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="check" />
                  </td>
                  <td className={s.it}>
                    <div>
                      <span className="t">
                        {"V&V Planning Essentials"}
                      </span>
                      <span className={s.code}>
                        VV-230
                      </span>
                    </div>
                    <div className={s.reflag}>
                      <Icon name="refresh" size="xs" />
                      Re-flagged: Course files changed L3 → L2 on 18 Nov
                    </div>
                  </td>
                  <td className={s.fld}>
                    Course level
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L3
                    </span>
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L2
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span className="on">
                        Master list
                      </span>
                      <span>
                        Course files
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.since}>
                      18 Nov
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="check" />
                  </td>
                  <td className={s.it}>
                    <span className="t">
                      Configuration Control
                    </span>
                    <span className={s.code}>
                      CM-140
                    </span>
                  </td>
                  <td className={s.fld}>
                    Professional role
                  </td>
                  <td>
                    <span className={s.val}>
                      Associate Systems Engineer
                    </span>
                  </td>
                  <td>
                    <span className={s.val}>
                      Systems Engineer
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span>
                        Master list
                      </span>
                      <span>
                        Course files
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.since}>
                      11 Nov
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="check" />
                  </td>
                  <td className={s.it}>
                    <span className="t">
                      Requirements Quality
                    </span>
                    <span className={s.code}>
                      RQ-120
                    </span>
                  </td>
                  <td className={s.fld}>
                    Course level
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L2
                    </span>
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L1
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span>
                        Master list
                      </span>
                      <span>
                        Course files
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.since}>
                      11 Nov
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="check" />
                  </td>
                  <td className={s.it}>
                    <span className="t">
                      Trade Study Methods
                    </span>
                    <span className={s.code}>
                      TS-215
                    </span>
                  </td>
                  <td className={s.fld}>
                    Professional role
                  </td>
                  <td>
                    <span className={s.val}>
                      Lead System Architect
                    </span>
                  </td>
                  <td>
                    <span className={s.val}>
                      Systems Engineer
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span>
                        Master list
                      </span>
                      <span>
                        Course files
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.since}>
                      11 Nov
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="check" />
                  </td>
                  <td className={s.it}>
                    <span className="t">
                      {"Risk & Opportunity Management"}
                    </span>
                    <span className={s.code}>
                      RM-150
                    </span>
                  </td>
                  <td className={s.fld}>
                    Course level
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L2
                    </span>
                  </td>
                  <td>
                    <span className={cx("mono", s.val)}>
                      L3
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span>
                        Master list
                      </span>
                      <span>
                        Course files
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.since}>
                      11 Nov
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={s.bulk}>
              <span className="check on">
                <Icon name="check" size="xs" />
              </span>
              <b>
                3 selected
              </b>
              <span className={s.div} />
              <Button size="sm">
                Use Master list
              </Button>
              <Button size="sm">
                Use Course files
              </Button>
              <span className="sp muted" style={{ fontSize: "12px" }}>
                Showing 8 of 12 conflicts
              </span>
              <Button variant="ghost" size="sm">
                {"Clear "}
                <Kbd>
                  Esc
                </Kbd>
              </Button>
            </div>
          </section>
        </main>
      </AppShell>
    </div>
  );
}
