// GENERATED from design/html/12c-health-missing-links.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Data health · Missing links";

export default function View_12c_health_missing_links() {
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
                <span>
                  {"Gaps "}
                  <span className="n">
                    5
                  </span>
                </span>
                <span className="on">
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
            <div className={s["hl-info"]}>
              <Icon name="eyeoff" size="sm" />
              <span>
                <b>
                  Employees never see a “missing link”.
                </b>
                {" "}
                <span className="muted">
                  These 7 formal items are left out of search, suggestions, pathways and the advisor until a working link is saved.
                </span>
              </span>
              <Button variant="ghost" size="sm" className="sp">
                {"Approved domains "}
                <Icon name="arrow" size="xs" />
              </Button>
            </div>
            <table className={s["hx-t"]}>
              <thead>
                <tr>
                  <th>
                    Item
                  </th>
                  <th>
                    Provider
                  </th>
                  <th>
                    Hidden since
                  </th>
                  <th>
                    {"Course link "}
                    <span className="faint">
                      · https on an approved domain
                    </span>
                  </th>
                  <th>
                    Check
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Model Review Techniques
                    </span>
                    <span className={s.code}>
                      MB-215
                    </span>
                  </td>
                  <td className={s.fld}>
                    Academy
                  </td>
                  <td>
                    <span className={s.since}>
                      19 Nov
                    </span>
                  </td>
                  <td>
                    <div className={cx("ok", s["hl-in"])}>
                      <Icon name="link" size="xs" />
                      <span className="ellipsis">
                        https://lms.example.com/course/MB-215
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s["hl-v"]}>
                      <StatusIcon status="approved" />
                      {"Opens "}
                      <span className="muted">
                        · approved domain
                      </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      RFLP in Practice
                    </span>
                    <span className={s.code}>
                      MB-220
                    </span>
                  </td>
                  <td className={s.fld}>
                    LMS
                  </td>
                  <td>
                    <span className={s.since}>
                      10 Nov
                    </span>
                  </td>
                  <td>
                    <div className={cx(s["hl-in"], s.bad)}>
                      <Icon name="link" size="xs" />
                      <span className="ellipsis">
                        <span className={s["hl-x"]}>
                          http://
                        </span>
                        lms.example.com/course/MB-220
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={cx(s["hl-v"], s.bad)}>
                      <Icon name="alert" size="sm" />
                      Must start with https://
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Writing Interface Control Documents
                    </span>
                    <span className={s.code}>
                      IC-230
                    </span>
                  </td>
                  <td className={s.fld}>
                    LMS
                  </td>
                  <td>
                    <span className={s.since}>
                      10 Nov
                    </span>
                  </td>
                  <td>
                    <div className={cx("ok", s["hl-in"])}>
                      <Icon name="link" size="xs" />
                      <span className="ellipsis">
                        https://lms.example.com/course/IC-230
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s["hl-v"]}>
                      <StatusIcon status="approved" />
                      {"Opens "}
                      <span className="muted">
                        · approved domain
                      </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Model-Based Requirements Basics
                    </span>
                    <span className={s.code}>
                      MR-110
                    </span>
                  </td>
                  <td className={s.fld}>
                    Academy
                  </td>
                  <td>
                    <span className={s.since}>
                      6 Nov
                    </span>
                  </td>
                  <td>
                    <div className={cx(s["hl-in"], s.bad)}>
                      <Icon name="link" size="xs" />
                      <span className="ellipsis">
                        https://
                        <span className={s["hl-x"]}>
                          share.example.net
                        </span>
                        /academy/MR-110.pptx
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={cx(s["hl-v"], s.bad)}>
                      <Icon name="alert" size="sm" />
                      share.example.net is not an approved domain
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Safety Assessment Basics
                    </span>
                    <span className={s.code}>
                      SA-120
                    </span>
                  </td>
                  <td className={s.fld}>
                    LMS
                  </td>
                  <td>
                    <span className={s.since}>
                      4 Nov
                    </span>
                  </td>
                  <td>
                    <div className={cx("ok", s["hl-in"])}>
                      <Icon name="link" size="xs" />
                      <span className="ellipsis">
                        https://lms.example.com/course/SA-120
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s["hl-v"]}>
                      <StatusIcon status="approved" />
                      {"Opens "}
                      <span className="muted">
                        · approved domain
                      </span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Technical Risk Reviews
                    </span>
                    <span className={s.code}>
                      RM-210
                    </span>
                  </td>
                  <td className={s.fld}>
                    LMS
                  </td>
                  <td>
                    <span className={s.since}>
                      4 Nov
                    </span>
                  </td>
                  <td>
                    <div className={cx(s["hl-in"], s.empty)}>
                      <Icon name="link" size="xs" />
                      Paste link
                      <Kbd>
                        Ctrl V
                      </Kbd>
                    </div>
                  </td>
                  <td>
                    <span className={cx(s["hl-v"], s.none)}>
                      Still hidden
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className="t">
                      Systems Thinking for Engineers
                    </span>
                    <span className={s.code}>
                      LB-18830
                    </span>
                  </td>
                  <td className={s.fld}>
                    Library
                  </td>
                  <td>
                    <span className={s.since}>
                      28 Oct
                    </span>
                  </td>
                  <td>
                    <div className={cx(s["hl-in"], s.empty)}>
                      <Icon name="link" size="xs" />
                      Paste link
                      <Kbd>
                        Ctrl V
                      </Kbd>
                    </div>
                  </td>
                  <td>
                    <span className={cx(s["hl-v"], s.none)}>
                      Still hidden
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={s["hx-bar"]}>
              <span className={s["hl-c"]}>
                <StatusIcon status="approved" />
                3 ready
              </span>
              <span className={cx(s["hl-c"], s.bad)}>
                <Icon name="alert" size="sm" />
                2 need a fix
              </span>
              <span className={cx(s["hl-c"], s.none)}>
                <StatusIcon status="not_started" />
                2 empty
              </span>
              <span className={s.div} />
              <span className="muted">
                Saved items reappear for employees right away. The others stay hidden until they have a link.
              </span>
              <Button variant="primary" className="sp">
                <Icon name="check" size="sm" />
                {" Save 3 links"}
              </Button>
            </div>
          </section>
        </main>
      </AppShell>
    </div>
  );
}
