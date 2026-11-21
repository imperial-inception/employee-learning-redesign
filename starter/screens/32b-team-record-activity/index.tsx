// GENERATED from design/html/32b-team-record-activity.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Record for your team · Activity";

export default function View_32b_team_record_activity() {
  return (
    <div className={s.v}>
      <AppShell active="team" manager>
        <main id="page">
          <div className={s["trc-wrap"]}>
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
            <header className="ph" style={{ marginBottom: "18px" }}>
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
            <ol className={s["trc-stepper"]}>
              <li className={s["trc-cur"]}>
                <span className={s["trc-num"]}>
                  1
                </span>
                Activity
              </li>
              <li className={s["trc-ln"]} />
              <li>
                <span className={s["trc-num"]}>
                  2
                </span>
                Who attended
              </li>
              <li className={s["trc-ln"]} />
              <li>
                <span className={s["trc-num"]}>
                  3
                </span>
                {"Evidence "}
                <span className={s["trc-optl"]}>
                  optional
                </span>
              </li>
            </ol>
            <section className={cx("panel glow", s["trc-card"])}>
              <div className={s["trc-sh"]}>
                <h2>
                  What was the session?
                </h2>
                <span className={cx("sp", s["trc-k"])}>
                  STEP 1 OF 3
                </span>
              </div>
              <div className={s["trc-form"]}>
                <div className={s["trc-f"]}>
                  <span className="label">
                    Session type
                  </span>
                  <div className={s["trc-types"]}>
                    <div className={cx(s["trc-opt"], s["trc-on"])}>
                      <span className="radio on" />
                      <div className="grow">
                        <div className={s["trc-t"]}>
                          <Tag>
                            <TypeDot kind="rel" />
                            Relational
                          </Tag>
                        </div>
                        <div className={s["trc-c"]}>
                          Learning with and from people: a workshop, review board, talk or shadowing session.
                        </div>
                      </div>
                    </div>
                    <div className={s["trc-opt"]}>
                      <span className="radio" />
                      <div className="grow">
                        <div className={s["trc-t"]}>
                          <Tag>
                            <TypeDot kind="formal" />
                            Formal
                          </Tag>
                        </div>
                        <div className={s["trc-c"]}>
                          A course delivered to the group, such as an instructor-led course from the catalog.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="help">
                    {"Experiential learning happens in each person's own job, so they record it themselves."}
                  </div>
                </div>
                <div className={s["trc-f"]}>
                  <span className="label">
                    Title
                  </span>
                  <div className="input">
                    Interface review workshop
                  </div>
                </div>
                <div className={s["trc-row3"]}>
                  <div className={s["trc-f"]}>
                    <span className="label">
                      Date
                    </span>
                    <div className="input">
                      <Icon name="cal" size="sm" />
                      Thu 20 Nov 2026
                      <span className="sp muted" style={{ fontSize: "12.5px" }}>
                        yesterday
                      </span>
                    </div>
                  </div>
                  <div className={s["trc-f"]}>
                    <span className="label">
                      Duration
                    </span>
                    <div className="input">
                      <Icon name="clock" size="sm" />
                      <span className="mono">
                        2
                      </span>
                      {" hours"}
                    </div>
                  </div>
                  <div className={s["trc-f"]}>
                    <span className="label">
                      Led by
                    </span>
                    <div className="input">
                      <Avatar initials="DO" size="xs" tone={2} />
                      Daniel Okafor
                      <span className="sp muted" style={{ fontSize: "12.5px" }}>
                        on your team
                      </span>
                      <Icon name="cd" size="xs" />
                    </div>
                  </div>
                </div>
                <div className={s["trc-f"]}>
                  <span className="label">
                    {"Link to a catalog item "}
                    <span className={s["trc-o"]}>
                      optional
                    </span>
                  </span>
                  <div className={cx("input", s["trc-ph"])}>
                    <Icon name="search" size="sm" />
                    Search the catalog by title or code
                  </div>
                  <div className="help">
                    Link one when the session delivered a catalog course, so it counts toward goals and pathways that include that course.
                  </div>
                </div>
                <div className={s["trc-f"]}>
                  <span className="label">
                    {"What it covered "}
                    <span className={s["trc-o"]}>
                      optional · copied into each record
                    </span>
                  </span>
                  <div className="textarea">
                    Walked through the actuation ICD change log: how to raise, assess and close an interface change, and who signs off at each stage.
                  </div>
                </div>
              </div>
              <div className={s["trc-foot"]}>
                <div className={s["trc-sum"]}>
                  <Icon name="users" size="sm" />
                  <span>
                    <b>
                      Next: who attended.
                    </b>
                    {" Everyone you tick gets their own record."}
                  </span>
                </div>
                <Button>
                  Save draft
                </Button>
                <Button variant="primary">
                  {"Continue "}
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
