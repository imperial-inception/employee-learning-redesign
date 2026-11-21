// GENERATED from design/html/17-admin-access.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Access and audit";

export default function View_17_admin_access() {
  return (
    <div className={s.v}>
      <AppShell workspace="admin" active="access">
        <main id="page">
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <h1>
                {"Access & audit"}
              </h1>
              <p className="sub">
                Who can change Skill Portal, and a record of every change they make.
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="download" size="sm" />
                {" Export audit log"}
              </Button>
            </div>
          </header>
          <div className={s.lay}>
            <div className={s.col}>
              <section className={cx("panel", s.adm)}>
                <div className="panel-h">
                  <h2>
                    Admins
                  </h2>
                  <span className="cnt">
                    5
                  </span>
                  <Button size="sm" className="sp on">
                    <Icon name="plus" size="xs" />
                    {" Add admin"}
                  </Button>
                </div>
                <div className={s.add}>
                  <div className="row">
                    <div className={s.srch}>
                      <div className="input">
                        <Icon name="search" size="sm" />
                        <span>
                          wei
                        </span>
                        <span className={s.caret} />
                        <span className="n">
                          2 matches
                        </span>
                      </div>
                      <div className={s.dd}>
                        <div className={cx(s.o, s.hi)}>
                          <Avatar initials="WC" tone={5} style={{ width: "24px", height: "24px", fontSize: "9.5px" }} />
                          <span className={s.nm}>
                            <b>
                              Wei
                            </b>
                            {" Chen"}
                          </span>
                          <span className={s.id}>
                            1042871
                          </span>
                          <span className="c">
                            Integration Lead · Digital Thread
                          </span>
                          <Kbd>
                            Enter
                          </Kbd>
                        </div>
                        <div className={s.o}>
                          <Avatar initials="DW" tone={4} style={{ width: "24px", height: "24px", fontSize: "9.5px" }} />
                          <span className={s.nm}>
                            {"Daniel "}
                            <b>
                              Wei
                            </b>
                            ss
                          </span>
                          <span className={s.id}>
                            1077310
                          </span>
                          <span className="c">
                            Test Engineer · Verification
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button className="sel">
                      <span className={s.k}>
                        Role
                      </span>
                      {" Viewer "}
                      <Icon name="cd" size="xs" />
                    </Button>
                    <Button variant="primary" style={{ height: "34px" }}>
                      Add Wei Chen
                    </Button>
                    <Button variant="ghost" style={{ height: "34px", padding: "0 8px" }}>
                      <Icon name="x" size="sm" />
                    </Button>
                  </div>
                  <div className="help">
                    <Icon name="alert" size="xs" />
                    {"Searching the HR directory copy from 20 Nov (today's refresh failed)."}
                  </div>
                </div>
                <table>
                  <colgroup>
                    <col />
                    <col style={{ width: "160px" }} />
                    <col style={{ width: "140px" }} />
                    <col style={{ width: "112px" }} />
                    <col style={{ width: "200px" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        Person
                      </th>
                      <th>
                        Role
                      </th>
                      <th>
                        Added by
                      </th>
                      <th>
                        Added on
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="row" style={{ gap: "10px" }}>
                          <Avatar initials="JL" />
                          <span className={s.nm}>
                            Jordan Lee
                          </span>
                          <Pill tone="acc" className={s.you}>
                            You
                          </Pill>
                          <span className={s.id}>
                            1003482
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className={cx(s.role, s.lk)}>
                          <Icon name="lock" size="xs" />
                          Owner
                        </span>
                      </td>
                      <td className="muted">
                        Initial setup
                      </td>
                      <td className="mono muted" style={{ fontSize: "12px" }}>
                        12 Jan 2026
                      </td>
                      <td>
                        <span className={s.hint}>
                          <Icon name="info" size="xs" />
                          {"Last owner: can't be removed"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row" style={{ gap: "10px" }}>
                          <Avatar initials="SP" tone={6} />
                          <span className={s.nm}>
                            Sam Patel
                          </span>
                          <span className={s.id}>
                            1018827
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className={s.role}>
                          Catalog editor
                          <Icon name="cd" size="xs" />
                        </span>
                      </td>
                      <td className="muted">
                        Jordan Lee
                      </td>
                      <td className="mono muted" style={{ fontSize: "12px" }}>
                        3 Feb 2026
                      </td>
                      <td>
                        <span className={s.mo}>
                          <Icon name="more" size="sm" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row" style={{ gap: "10px" }}>
                          <Avatar initials="PN" tone={4} />
                          <span className={s.nm}>
                            Priya Nair
                          </span>
                          <span className={s.id}>
                            1021954
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className={s.role}>
                          Catalog editor
                          <Icon name="cd" size="xs" />
                        </span>
                      </td>
                      <td className="muted">
                        Jordan Lee
                      </td>
                      <td className="mono muted" style={{ fontSize: "12px" }}>
                        3 Feb 2026
                      </td>
                      <td>
                        <span className={s.mo}>
                          <Icon name="more" size="sm" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row" style={{ gap: "10px" }}>
                          <Avatar initials="MG" tone={2} />
                          <span className={s.nm}>
                            Maria Gomez
                          </span>
                          <span className={s.id}>
                            1035610
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className={s.role}>
                          Viewer
                          <Icon name="cd" size="xs" />
                        </span>
                      </td>
                      <td className="muted">
                        Sam Patel
                      </td>
                      <td className="mono muted" style={{ fontSize: "12px" }}>
                        18 Aug 2026
                      </td>
                      <td>
                        <span className={s.mo}>
                          <Icon name="more" size="sm" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row" style={{ gap: "10px" }}>
                          <Avatar initials="AK" tone={3} />
                          <span className={s.nm}>
                            Alex Kim
                          </span>
                          <span className={s.id}>
                            1049273
                          </span>
                        </div>
                      </td>
                      <td>
                        <span className={s.role}>
                          Viewer
                          <Icon name="cd" size="xs" />
                        </span>
                      </td>
                      <td className="muted">
                        Priya Nair
                      </td>
                      <td className="mono muted" style={{ fontSize: "12px" }}>
                        21 Nov 2026
                      </td>
                      <td>
                        <span className={s.mo}>
                          <Icon name="more" size="sm" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className={cx("panel", s.aud)}>
                <div className="panel-h">
                  <h2>
                    Audit log
                  </h2>
                  <span className="cnt">
                    times in PST
                  </span>
                  <div className="seg" style={{ marginLeft: "auto" }}>
                    <span className="on">
                      All
                    </span>
                    <span>
                      Access
                    </span>
                    <span>
                      Catalog
                    </span>
                    <span>
                      Rules
                    </span>
                    <span>
                      Sources
                    </span>
                  </div>
                  <span className="lnk" style={{ marginLeft: "12px" }}>
                    {"Full log "}
                    <Icon name="cr" size="xs" />
                  </span>
                </div>
                <table>
                  <colgroup>
                    <col style={{ width: "116px" }} />
                    <col style={{ width: "196px" }} />
                    <col style={{ width: "236px" }} />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        Time
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={s.tm}>
                        21 Nov 14:32
                      </td>
                      <td>
                        <span className={s.who}>
                          <Avatar initials="JL" />
                          Jordan Lee
                        </span>
                      </td>
                      <td>
                        changed population rule
                      </td>
                      <td className={s.tg}>
                        {"Systems Engineering & Integration"}
                      </td>
                    </tr>
                    <tr>
                      <td className={s.tm}>
                        21 Nov 11:08
                      </td>
                      <td>
                        <span className={s.who}>
                          <Avatar initials="PN" tone={4} />
                          Priya Nair
                        </span>
                      </td>
                      <td>
                        added Viewer
                      </td>
                      <td className={s.tg}>
                        Alex Kim
                        <span className="mono">
                          1049273
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className={s.tm}>
                        21 Nov 10:41
                      </td>
                      <td>
                        <span className={s.who}>
                          <Avatar initials="SP" tone={6} />
                          {"Sam Patel "}
                          <span className={s.via}>
                            <Icon name="spark" size="xs" />
                            agent
                          </span>
                        </span>
                      </td>
                      <td>
                        fixed 3 titles · confirmed by Sam
                      </td>
                      <td className={s.tg}>
                        Library catalog items
                      </td>
                    </tr>
                    <tr>
                      <td className={s.tm}>
                        21 Nov 00:57
                      </td>
                      <td>
                        <span className={s.who}>
                          <span className={s.sys}>
                            <Icon name="refresh" size="xs" />
                          </span>
                          System
                        </span>
                      </td>
                      <td className={s.bad}>
                        HR directory refresh failed
                      </td>
                      <td className={s.tg}>
                        HR directory
                      </td>
                    </tr>
                    <tr>
                      <td className={s.tm}>
                        20 Nov 16:12
                      </td>
                      <td>
                        <span className={s.who}>
                          <Avatar initials="SP" tone={6} />
                          Sam Patel
                        </span>
                      </td>
                      <td>
                        changed level L1 → L2
                      </td>
                      <td className={s.tg}>
                        Interface Management
                        <span className="mono">
                          IM-201
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className={s.tm}>
                        8 Nov 10:15
                      </td>
                      <td>
                        <span className={s.who}>
                          <Avatar initials="SP" tone={6} />
                          Sam Patel
                        </span>
                      </td>
                      <td>
                        published import · 341 records
                      </td>
                      <td className={s.tg}>
                        Library catalog
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
            <div className={s.col}>
              <section className={cx("panel", s.rl)}>
                <div className="panel-h">
                  <h2>
                    Roles
                  </h2>
                  <span className="cnt">
                    3
                  </span>
                </div>
                <div className="li">
                  <span className={s.ic}>
                    <Icon name="key" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      {"Owner "}
                      <span className="mono">
                        1
                      </span>
                    </div>
                    <div className="c muted">
                      Everything, including access and sources. There is always at least one.
                    </div>
                  </div>
                </div>
                <div className="li">
                  <span className={s.ic}>
                    <Icon name="book" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      {"Catalog editor "}
                      <span className="mono">
                        2
                      </span>
                    </div>
                    <div className="c muted">
                      {"Edits the catalog, templates and rules, and publishes imports. Can't change access."}
                    </div>
                  </div>
                </div>
                <div className="li">
                  <span className={s.ic}>
                    <Icon name="eye" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      {"Viewer "}
                      <span className="mono">
                        2
                      </span>
                    </div>
                    <div className="c muted">
                      Sees everything, including this audit log. Changes nothing.
                    </div>
                  </div>
                </div>
                <div className={s.ft}>
                  <Icon name="users" size="xs" />
                  <span>
                    Removing required learning always needs a second approver, whatever the role.
                  </span>
                </div>
              </section>
              <section className={cx("panel", s.ag)}>
                <div className="panel-h">
                  <h2>
                    Connected agents
                  </h2>
                  <span className="ai-mark" style={{ marginLeft: "2px" }}>
                    <Icon name="spark" size="xs" />
                  </span>
                  <span className="lnk">
                    Revoke all
                  </span>
                </div>
                <div className={s.top}>
                  <span className="big">
                    3
                  </span>
                  <span className={s.lb}>
                    active sessions
                    <br />
                    <span className="muted" style={{ fontSize: "12px" }}>
                      across the organization
                    </span>
                  </span>
                </div>
                <div className={s.facts}>
                  <div>
                    <Icon name="check" size="xs" />
                    {"Act with the signed-in person's own permissions"}
                  </div>
                  <div>
                    <Icon name="check" size="xs" />
                    Every session expires within 1 hour
                  </div>
                  <div>
                    <Icon name="check" size="xs" />
                    {"Writes wait for that person's confirmation"}
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="SP" tone={6} />
                  <div className="grow">
                    <div className="t">
                      Sam Patel
                    </div>
                    <div className="c muted">
                      1 confirmed write
                    </div>
                  </div>
                  <span className="m">
                    38 min left
                  </span>
                </div>
                <div className="li">
                  <Avatar initials="JL" />
                  <div className="grow">
                    <div className="t">
                      {"Jordan Lee "}
                      <span className="faint" style={{ fontWeight: "400" }}>
                        (you)
                      </span>
                    </div>
                    <div className="c muted">
                      Read only so far
                    </div>
                  </div>
                  <span className="m">
                    51 min left
                  </span>
                </div>
                <div className="li">
                  <Avatar initials="MG" tone={2} />
                  <div className="grow">
                    <div className="t">
                      Maria Gomez
                    </div>
                    <div className="c muted">
                      Viewer · read only
                    </div>
                  </div>
                  <span className="m">
                    12 min left
                  </span>
                </div>
                <div className={s.pol}>
                  <div className="grow">
                    <div className="t">
                      Allow connected agents
                    </div>
                    <div className="c">
                      Owners can turn this off for everyone
                    </div>
                  </div>
                  <span className="toggle on" />
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
