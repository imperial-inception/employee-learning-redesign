// GENERATED from design/html/12d-health-formatting.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, StatusIcon, Tag, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Data health · Formatting";

export default function View_12d_health_formatting() {
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
                <span>
                  {"Formal items missing a link "}
                  <span className="n">
                    7
                  </span>
                </span>
                <span className="on">
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
            <table className={s["hx-t"]} style={{ marginTop: "4px" }}>
              <colgroup>
                <col style={{ width: "30%" }} />
                <col style={{ width: "34px" }} />
                <col />
                <col style={{ width: "190px" }} />
                <col style={{ width: "130px" }} />
                <col style={{ width: "92px" }} />
                <col style={{ width: "150px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    Before
                  </th>
                  <th />
                  <th>
                    After
                  </th>
                  <th>
                    Rule
                  </th>
                  <th>
                    Source
                  </th>
                  <th>
                    Flagged
                  </th>
                  <th>
                    Decision
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={s.it}>
                    <span className={cx(s["hf-ttl"], s.before)}>
                      <span className={s["hf-cs"]}>
                        TRADE STUDIES
                      </span>
                      {" 101"}
                    </span>
                    <span className={s.code}>
                      LB-20417
                    </span>
                  </td>
                  <td>
                    <span className={s["hf-arrow"]}>
                      <Icon name="arrow" size="sm" />
                    </span>
                  </td>
                  <td>
                    <span className={s["hf-ttl"]}>
                      <span className={s["hf-ins"]}>
                        Trade Studies
                      </span>
                      {" 101"}
                    </span>
                  </td>
                  <td>
                    <span className={s["hf-rule"]}>
                      <Icon name="info" size="xs" />
                      ALL CAPS title
                    </span>
                  </td>
                  <td className={s.fld}>
                    Library catalog
                  </td>
                  <td>
                    <span className={s.since}>
                      8 Nov
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span className="on">
                        <Icon name="check" size="xs" />
                        Accept
                      </span>
                      <span>
                        Skip
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className={cx(s["hf-ttl"], s.before)}>
                      traceability
                      <span className={s["hf-del"]}>
                        _
                      </span>
                      mbse
                      <span className={s["hf-del"]}>
                        _
                      </span>
                      v2
                    </span>
                    <span className={s.code}>
                      LB-20981
                    </span>
                  </td>
                  <td>
                    <span className={s["hf-arrow"]}>
                      <Icon name="arrow" size="sm" />
                    </span>
                  </td>
                  <td>
                    <span className={s["hf-ttl"]}>
                      <span className={s["hf-ins"]}>
                        T
                      </span>
                      raceability
                      <span className={s["hf-ins"]}>
                        {" MBSE "}
                      </span>
                      v2
                    </span>
                  </td>
                  <td>
                    <span className={s["hf-rule"]}>
                      <Icon name="info" size="xs" />
                      Underscores in title
                    </span>
                  </td>
                  <td className={s.fld}>
                    Library catalog
                  </td>
                  <td>
                    <span className={s.since}>
                      8 Nov
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span className="on">
                        <Icon name="check" size="xs" />
                        Accept
                      </span>
                      <span>
                        Skip
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={s.it}>
                    <span className={cx(s["hf-ttl"], s.before)}>
                      Requirements 101
                      <span className={s["hf-del"]}>
                        {" (copy)"}
                      </span>
                    </span>
                    <span className={s.code}>
                      LB-19022
                    </span>
                  </td>
                  <td>
                    <span className={s["hf-arrow"]}>
                      <Icon name="arrow" size="sm" />
                    </span>
                  </td>
                  <td>
                    <div className={s["hf-ttl"]}>
                      Requirements 101
                    </div>
                    <div className={s["hf-warn"]}>
                      <Icon name="alert" size="xs" />
                      {"Same title as "}
                      <u>
                        {"Requirements 101 "}
                        <span className="mono" style={{ fontSize: "11.5px" }}>
                          LB-19021
                        </span>
                      </u>
                      {" · consider retiring the copy"}
                    </div>
                  </td>
                  <td>
                    <span className={s["hf-rule"]}>
                      <Icon name="info" size="xs" />
                      “(copy)” in title
                    </span>
                  </td>
                  <td className={s.fld}>
                    Library catalog
                  </td>
                  <td>
                    <span className={s.since}>
                      8 Nov
                    </span>
                  </td>
                  <td>
                    <div className="seg">
                      <span className="on">
                        <Icon name="check" size="xs" />
                        Accept
                      </span>
                      <span>
                        Skip
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={s["hf-auto"]}>
              <div>
                <div className="grp">
                  Fixed on every import, no review
                </div>
                <div className="row" style={{ gap: "6px", flexWrap: "wrap" }}>
                  <Tag>
                    Extra spaces
                  </Tag>
                  <Tag>
                    Trailing dots
                  </Tag>
                  <Tag>
                    {"Known acronyms kept: "}
                    <span className="mono" style={{ fontSize: "11.5px" }}>
                      {"MBSE · SysML · V&V · ICD"}
                    </span>
                  </Tag>
                </div>
              </div>
              <span className={s["hf-sep"]} />
              <div className={s["hf-tgl"]}>
                <span className="toggle" />
                <div>
                  <div>
                    Also fix ALL CAPS and underscores without asking
                  </div>
                  <div className="help">
                    Title changes wait here until you turn this on. Every fix is logged and can be undone.
                  </div>
                </div>
              </div>
            </div>
            <div className={s["hx-bar"]}>
              <span className="c-ok" style={{ display: "flex" }}>
                <Icon name="check" size="sm" />
              </span>
              <b>
                3 accepted
              </b>
              <span className="muted">
                0 skipped
              </span>
              <span className={s.div} />
              <span className="muted">
                The Library catalog keeps its original titles; your fixes are kept on every import.
              </span>
              <Button variant="primary" className="sp">
                <Icon name="check" size="sm" />
                {" Apply 3 fixes"}
              </Button>
            </div>
          </section>
        </main>
      </AppShell>
    </div>
  );
}
