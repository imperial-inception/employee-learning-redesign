// GENERATED from design/html/24-admin-audit.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Audit log";

export default function View_24_admin_audit() {
  return (
    <div className={s.v}>
      <AppShell workspace="admin" active="audit">
        <main id="page">
          <div className="crumbs">
            <Icon name="key" size="xs" />
            <span>
              Admin console
            </span>
            <span className="sl">
              /
            </span>
            <span style={{ color: "var(--text-2)" }}>
              Audit log
            </span>
          </div>
          <header className="ph" style={{ marginBottom: "16px" }}>
            <div>
              <h1>
                Audit log
              </h1>
              <p className="sub">
                Every admin change, publish, role change, system event and agent-approved change. Read-only and kept for 7 years.
              </p>
            </div>
            <div className="acts">
              <Button variant="ghost">
                <Icon name="filter" size="sm" />
                {" Saved views"}
              </Button>
              <Button variant="primary">
                <Icon name="download" size="sm" />
                {" Export CSV"}
              </Button>
            </div>
          </header>
          <div className={s.fb}>
            <div className="input">
              <Icon name="search" size="sm" />
              <span>
                Target: name, code or person
              </span>
            </div>
            <span className={s.fc}>
              <span className={s.k}>
                Actor
              </span>
              Anyone
              <Icon name="cd" size="xs" />
            </span>
            <span className={s.fc}>
              <Icon name="cal" size="sm" />
              <span className="mono" style={{ fontSize: "12.5px" }}>
                14 Nov – 21 Nov 2026
              </span>
              <Icon name="cd" size="xs" />
            </span>
            <span className={cx(s.fc, s.add)}>
              <Icon name="plus" size="xs" />
              Filter
            </span>
            <span className={s.tz}>
              <Icon name="clock" size="xs" />
              {"Times in "}
              <b style={{ color: "var(--text-2)", fontWeight: "550" }}>
                PST (UTC−08:00)
              </b>
              <span className="seg">
                <span className="on">
                  Local
                </span>
                <span>
                  UTC
                </span>
              </span>
            </span>
          </div>
          <div className={s.types}>
            <span className={s.k} style={{ font: "500 10.5px 'Geist Mono',monospace", letterSpacing: ".07em", color: "var(--faint)", marginRight: "4px" }}>
              ACTION
            </span>
            <span className={s.ty}>
              <Icon name="sliders" size="xs" />
              Admin change
              <span className="n">
                612
              </span>
            </span>
            <span className={s.ty}>
              <Icon name="upload" size="xs" />
              Publish
              <span className="n">
                38
              </span>
            </span>
            <span className={s.ty}>
              <Icon name="key" size="xs" />
              Role change
              <span className="n">
                21
              </span>
            </span>
            <span className={s.ty}>
              <Icon name="cloud" size="xs" />
              System
              <span className="n">
                590
              </span>
            </span>
            <span className={s.ty}>
              <Icon name="spark" size="xs" />
              Agent-approved
              <span className="n">
                23
              </span>
            </span>
            <span className={s.sum}>
              1,284 EVENTS · LAST 7 DAYS
            </span>
          </div>
          <section className={cx("panel", s.tp)}>
            <table>
              <colgroup>
                <col style={{ width: "108px" }} />
                <col style={{ width: "232px" }} />
                <col style={{ width: "212px" }} />
                <col />
                <col style={{ width: "372px" }} />
                <col style={{ width: "30px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    Time · PST
                  </th>
                  <th>
                    Actor
                  </th>
                  <th>
                    Action
                  </th>
                  <th>
                    Target
                  </th>
                  <th>
                    Details
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr className={s.g}>
                  <td colSpan={6}>
                    TODAY · FRI 21 NOV
                    <span>
                      · 5 EVENTS
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.tm}>
                    14:41:07
                  </td>
                  <td>
                    <div className={s.ac}>
                      <Avatar initials="WC" tone={5} />
                      <span className={s.nm}>
                        Wei Chen
                      </span>
                      <span className={s.rl}>
                        via agent
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.act}>
                      <Icon name="spark" size="sm" className="c-accent" />
                      Agent change approved
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <span className="ellipsis">
                        Plan › Wei Chen
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    {"Added "}
                    <span className={s.to}>
                      VV-230
                    </span>
                    {" to plan · Wei confirmed at "}
                    <span className="mono">
                      14:41
                    </span>
                  </td>
                  <td className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </td>
                </tr>
                <tr className={s.fail}>
                  <td className={s.tm}>
                    13:58:20
                  </td>
                  <td>
                    <div className={s.ac}>
                      <span className={s.sys}>
                        <Icon name="cloud" size="xs" />
                      </span>
                      <span className={s.nm}>
                        System
                      </span>
                      <span className={s.rl}>
                        scheduled refresh
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={cx(s.act, s.bad)}>
                      <StatusIcon status="rejected" />
                      Source refresh failed
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <span className="ellipsis">
                        HR directory
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    {"Timed out · "}
                    <span className="mono">
                      0 of 4,212
                    </span>
                    {" records · retry "}
                    <span className="mono">
                      15:00
                    </span>
                  </td>
                  <td className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </td>
                </tr>
                <tr className="sel">
                  <td className={s.tm}>
                    11:20:44
                  </td>
                  <td>
                    <div className={s.ac}>
                      <Avatar initials="MG" tone={3} />
                      <span className={s.nm}>
                        Maria Gomez
                      </span>
                      <span className={s.rl}>
                        Catalog editor
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.act}>
                      <Icon name="sliders" size="sm" />
                      Catalog item edited
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <span className="ellipsis">
                        Interface Management
                      </span>
                      <span className={s.code}>
                        IM-201
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    {"2 fields changed · "}
                    <span className={s.dl}>
                      {"Hide diff "}
                      <Icon name="cu" size="xs" />
                    </span>
                  </td>
                  <td className={s.chev}>
                    <Icon name="cd" size="xs" />
                  </td>
                </tr>
                <tr className={s.x}>
                  <td colSpan={6}>
                    <div className={s.xd}>
                      <div className={s.xm}>
                        <span className={s.k}>
                          EVENT
                        </span>
                        <span className={cx("mono", s.v)}>
                          evt_01JDB7K2QX9M
                        </span>
                        <span className={s.k}>
                          WHEN
                        </span>
                        <span className={s.v}>
                          <span className="mono">
                            21 Nov 2026 11:20:44 PST
                          </span>
                          <br />
                          <span className="faint mono" style={{ fontSize: "11.5px" }}>
                            19:20:44 UTC
                          </span>
                        </span>
                        <span className={s.k}>
                          WHERE
                        </span>
                        <span className={s.v}>
                          Catalog › Edit drawer
                        </span>
                        <span className={s.k}>
                          REASON
                        </span>
                        <span className={s.v}>
                          “Fix Formal item missing a link, flagged in Data health”
                        </span>
                        <div className="acts">
                          <Button size="sm">
                            <Icon name="clip" size="xs" />
                            {" Copy JSON"}
                          </Button>
                          <Button variant="ghost" size="sm">
                            {"Open IM-201 "}
                            <Icon name="cr" size="xs" />
                          </Button>
                        </div>
                      </div>
                      <div className={s.sbs}>
                        <div className={s.pane}>
                          <div className={s.ph2}>
                            {"BEFORE "}
                            <b>
                              revision 14
                            </b>
                            <span className="sp">
                              20 OCT 2026
                            </span>
                          </div>
                          <div className={s.ln}>
                            <span>
                              11
                            </span>
                            <span />
                            <span>
                              <span className={s.kk}>
                                {"\"code\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"IM-201\""}
                              </span>
                              ,
                            </span>
                          </div>
                          <div className={s.ln}>
                            <span>
                              12
                            </span>
                            <span />
                            <span>
                              <span className={s.kk}>
                                {"\"title\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"Interface Management\""}
                              </span>
                              ,
                            </span>
                          </div>
                          <div className={cx(s.ln, s.del)}>
                            <span>
                              13
                            </span>
                            <span>
                              −
                            </span>
                            <span>
                              <span className={s.kk}>
                                {"\"provider_url\""}
                              </span>
                              : null,
                            </span>
                          </div>
                          <div className={cx(s.ln, s.del)}>
                            <span>
                              14
                            </span>
                            <span>
                              −
                            </span>
                            <span>
                              <span className={s.kk}>
                                {"\"duration_hours\""}
                              </span>
                              : 1.5,
                            </span>
                          </div>
                          <div className={s.ln}>
                            <span>
                              15
                            </span>
                            <span />
                            <span>
                              <span className={s.kk}>
                                {"\"type\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"formal\""}
                              </span>
                              ,
                            </span>
                          </div>
                          <div className={s.ln}>
                            <span>
                              16
                            </span>
                            <span />
                            <span>
                              <span className={s.kk}>
                                {"\"level\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"L2\""}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className={s.pane}>
                          <div className={s.ph2}>
                            {"AFTER "}
                            <b>
                              revision 15
                            </b>
                            <span className="sp">
                              21 NOV 2026
                            </span>
                          </div>
                          <div className={s.ln}>
                            <span>
                              11
                            </span>
                            <span />
                            <span>
                              <span className={s.kk}>
                                {"\"code\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"IM-201\""}
                              </span>
                              ,
                            </span>
                          </div>
                          <div className={s.ln}>
                            <span>
                              12
                            </span>
                            <span />
                            <span>
                              <span className={s.kk}>
                                {"\"title\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"Interface Management\""}
                              </span>
                              ,
                            </span>
                          </div>
                          <div className={cx(s.ln, s.ins)}>
                            <span>
                              13
                            </span>
                            <span>
                              +
                            </span>
                            <span>
                              <span className={s.kk}>
                                {"\"provider_url\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"https://academy.corp.example/im-201\""}
                              </span>
                              ,
                            </span>
                          </div>
                          <div className={cx(s.ln, s.ins)}>
                            <span>
                              14
                            </span>
                            <span>
                              +
                            </span>
                            <span>
                              <span className={s.kk}>
                                {"\"duration_hours\""}
                              </span>
                              : 2,
                            </span>
                          </div>
                          <div className={s.ln}>
                            <span>
                              15
                            </span>
                            <span />
                            <span>
                              <span className={s.kk}>
                                {"\"type\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"formal\""}
                              </span>
                              ,
                            </span>
                          </div>
                          <div className={s.ln}>
                            <span>
                              16
                            </span>
                            <span />
                            <span>
                              <span className={s.kk}>
                                {"\"level\""}
                              </span>
                              {": "}
                              <span className={s.s}>
                                {"\"L2\""}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={s.tm}>
                    10:05:12
                  </td>
                  <td>
                    <div className={s.ac}>
                      <Avatar initials="JL" />
                      <span className={s.nm}>
                        Jordan Lee
                      </span>
                      <span className={s.rl}>
                        Owner
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.act}>
                      <Icon name="key" size="sm" />
                      Admin access changed
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <Avatar initials="LS" tone={4} style={{ width: "18px", height: "18px", fontSize: "8px" }} />
                      <span className="ellipsis">
                        Lucas Silva
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    {"Viewer → "}
                    <span className={s.to}>
                      Catalog editor
                    </span>
                  </td>
                  <td className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </td>
                </tr>
                <tr>
                  <td className={s.tm}>
                    06:00:04
                  </td>
                  <td>
                    <div className={s.ac}>
                      <span className={s.sys}>
                        <Icon name="cloud" size="xs" />
                      </span>
                      <span className={s.nm}>
                        System
                      </span>
                      <span className={s.rl}>
                        nightly import
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.act}>
                      <Icon name="refresh" size="sm" />
                      Catalog import finished
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <span className="ellipsis">
                        LMS
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    <span className="mono">
                      536
                    </span>
                    {" items · "}
                    <span className="mono">
                      3
                    </span>
                    {" conflicts sent to Data health"}
                  </td>
                  <td className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </td>
                </tr>
                <tr className={s.g}>
                  <td colSpan={6}>
                    THU 20 NOV
                    <span>
                      · 2 EVENTS
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.tm}>
                    16:12:51
                  </td>
                  <td>
                    <div className={s.ac}>
                      <Avatar initials="AK" tone={6} />
                      <span className={s.nm}>
                        Aisha Khan
                      </span>
                      <span className={s.rl}>
                        Owner
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.act}>
                      <Icon name="sliders" size="sm" />
                      Population rule edited
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <span className="ellipsis">
                        Systems engineering
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    {"Matches "}
                    <span className="mono">
                      1,204
                    </span>
                    {" → "}
                    <span className={cx("mono", s.to)}>
                      1,231
                    </span>
                    {" people · "}
                    <span className={s.dl}>
                      {"Diff "}
                      <Icon name="cd" size="xs" />
                    </span>
                  </td>
                  <td className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </td>
                </tr>
                <tr>
                  <td className={s.tm}>
                    09:44:10
                  </td>
                  <td>
                    <div className={s.ac}>
                      <Avatar initials="JL" />
                      <span className={s.nm}>
                        Jordan Lee
                      </span>
                      <span className={s.rl}>
                        Manager
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.act}>
                      <Icon name="user" size="sm" />
                      Professional role set
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <Avatar initials="DO" tone={2} style={{ width: "18px", height: "18px", fontSize: "8px" }} />
                      <span className="ellipsis">
                        Daniel Okafor
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    <span className="faint">
                      Not recorded
                    </span>
                    {" → "}
                    <span className={s.to}>
                      Systems Engineer
                    </span>
                  </td>
                  <td className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </td>
                </tr>
                <tr className={s.g}>
                  <td colSpan={6}>
                    TUE 18 NOV
                    <span>
                      · 2 EVENTS
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={s.tm}>
                    15:02:33
                  </td>
                  <td>
                    <div className={s.ac}>
                      <Avatar initials="MG" tone={3} />
                      <span className={s.nm}>
                        Maria Gomez
                      </span>
                      <span className={s.rl}>
                        Catalog editor
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.act}>
                      <Icon name="upload" size="sm" />
                      Pathway published
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <span className="ellipsis">
                        {"MBSE foundations & digital-thread integration"}
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    {"Revision 2 · "}
                    <span className="mono">
                      214
                    </span>
                    {" people on revision 1 notified"}
                  </td>
                  <td className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </td>
                </tr>
                <tr>
                  <td className={s.tm}>
                    08:15:00
                  </td>
                  <td>
                    <div className={s.ac}>
                      <Avatar initials="JL" />
                      <span className={s.nm}>
                        Jordan Lee
                      </span>
                      <span className={s.rl}>
                        Owner
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className={s.act}>
                      <Icon name="link" size="sm" />
                      Agent policy changed
                    </div>
                  </td>
                  <td>
                    <div className={s.tg}>
                      <span className="ellipsis">
                        Connected agents
                      </span>
                    </div>
                  </td>
                  <td className={s.dt}>
                    {"Max session "}
                    <span className="mono">
                      2 h
                    </span>
                    {" → "}
                    <span className={cx("mono", s.to)}>
                      1 h
                    </span>
                  </td>
                  <td className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={s.tf}>
              <span>
                {"Showing "}
                <span className="mono">
                  9
                </span>
                {" of "}
                <span className="mono">
                  1,284
                </span>
              </span>
              <span className="faint">
                ·
              </span>
              <span>
                {"Entries can't be edited or deleted, including by Owners"}
              </span>
              <Button size="sm" className="sp">
                Load older
              </Button>
            </div>
          </section>
        </main>
      </AppShell>
    </div>
  );
}
