// GENERATED from design/html/32-team-record.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Record for your team";

export default function View_32_team_record() {
  return (
    <div className={s.v}>
      <AppShell active="team" manager>
        <main id="page">
          <div className={s.wrap}>
            <div className="crumbs">
              <span>
                Team
              </span>
              <span className="sl">
                /
              </span>
              <span style={{ color: "var(--text-2)" }}>
                Record for your team
              </span>
            </div>
            <header className="ph">
              <div>
                <h1>
                  Record for your team
                </h1>
                <p className="sub">
                  Record a team session or a shared course once. Everyone you tick gets their own record.
                </p>
              </div>
              <div className="acts">
                <Button variant="ghost" size="sm">
                  <Icon name="x" size="sm" />
                  {" Close "}
                  <Kbd>
                    Esc
                  </Kbd>
                </Button>
              </div>
            </header>
            <ol className={s.stepper}>
              <li className={s.done}>
                <StatusIcon status="approved" />
                Activity
              </li>
              <li className={cx(s.ln, s.done)} />
              <li className={s.cur}>
                <span className="num">
                  2
                </span>
                Who attended
              </li>
              <li className={s.ln} />
              <li>
                <span className="num">
                  3
                </span>
                {"Evidence "}
                <span className={s.optl}>
                  optional
                </span>
              </li>
            </ol>
            <section className={cx("panel glow", s.card)}>
              <div className={s.act}>
                <span className={s.k}>
                  ACTIVITY
                </span>
                <Tag>
                  <TypeDot kind="rel" />
                  Relational
                </Tag>
                <b>
                  Interface review workshop
                </b>
                <span className="muted">
                  Thu 20 Nov · 2 h · led by Daniel Okafor
                </span>
                <span className="sp lnk">
                  Edit
                </span>
              </div>
              <div className={s.sh}>
                <h2>
                  Who attended
                </h2>
                <span className="cnt">
                  9 of 11
                </span>
                <div className={cx("sp", s.qa)}>
                  <Button variant="ghost" size="sm">
                    Select all
                  </Button>
                  <span className="dot">
                    ·
                  </span>
                  <Button variant="ghost" size="sm">
                    Paste names
                  </Button>
                  <span className="dot">
                    ·
                  </span>
                  <Button variant="ghost" size="sm">
                    <Icon name="upload" size="xs" />
                    {" Import attendance CSV"}
                  </Button>
                </div>
              </div>
              <div className={s.ppl}>
                <div className={s.pr}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="AK" tone={6} />
                  <span className={s.nm}>
                    Aisha Khan
                  </span>
                </div>
                <div className={s.pr}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="AK" tone={5} />
                  <span className={s.nm}>
                    Alex Kim
                  </span>
                </div>
                <div className={s.pr}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="DO" tone={2} />
                  <span className={s.nm}>
                    Daniel Okafor
                  </span>
                  <span className={s.lead}>
                    Led the session
                  </span>
                </div>
                <div className={s.pr}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="FR" tone={4} />
                  <span className={s.nm}>
                    Fatima Rahman
                  </span>
                </div>
                <div className={s.pr}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="LS" />
                  <span className={s.nm}>
                    Lucas Silva
                  </span>
                </div>
                <div className={s.pr}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="MG" tone={3} />
                  <span className={s.nm}>
                    Maria Gomez
                  </span>
                </div>
                <div className={cx(s.pr, s.off)}>
                  <span className="check" />
                  <Avatar initials="NR" tone={6} />
                  <span className={s.nm}>
                    Nina Rossi
                  </span>
                </div>
                <div className={cx(s.pr, s.off)}>
                  <span className="check" />
                  <Avatar initials="OH" tone={2} />
                  <span className={s.nm}>
                    Omar Haddad
                  </span>
                </div>
                <div className={cx(s.pr, s.skip)}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="PN" tone={4} />
                  <span className={s.nm}>
                    Priya Nair
                  </span>
                  <span className={s.note}>
                    <StatusIcon status="approved" />
                    Already approved for Priya: will be skipped
                  </span>
                </div>
                <div className={s.pr}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="TB" tone={5} />
                  <span className={s.nm}>
                    Tom Becker
                  </span>
                </div>
                <div className={s.pr}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Avatar initials="WC" />
                  <span className={s.nm}>
                    Wei Chen
                  </span>
                </div>
              </div>
              <div className={s.how}>
                <span className="label">
                  How should the records be created?
                </span>
                <div className={s.opts}>
                  <div className={cx("on", s.opt)}>
                    <span className={cx("on", s["tr-radio"])} />
                    <div className="grow">
                      <div className="t">
                        Ask each person to add a short reflection, then approve
                        <Pill tone="acc">
                          Recommended
                        </Pill>
                      </div>
                      <div className="c">
                        Each person gets a pre-filled record and adds two or three lines. You approve them in Team › Waiting for you.
                      </div>
                    </div>
                  </div>
                  <div className={s.opt}>
                    <span className={s["tr-radio"]} />
                    <div className="grow">
                      <div className="t">
                        Count as approved now (you confirm attendance)
                        <Pill tone="rev">
                          Policy: needs HR/quality sign-off
                        </Pill>
                      </div>
                      <div className="c">
                        Records count right away and show you as both creator and approver.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.foot}>
                <div className={s.sum}>
                  <b>
                    8 records will be created
                  </b>
                  <span className={s.sep}>
                    ·
                  </span>
                  <span className="muted">
                    1 skipped
                  </span>
                </div>
                <Button variant="ghost">
                  <Icon name="cl" size="sm" />
                  {" Back"}
                </Button>
                <Button>
                  Add evidence
                </Button>
                <Button variant="primary">
                  {"Create 8 records "}
                  <Kbd>
                    Ctrl Enter
                  </Kbd>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
