// GENERATED from design/html/32c-team-record-evidence.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Record for your team · Evidence";

export default function View_32c_team_record_evidence() {
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
              <li className={s["trc-done"]}>
                <StatusIcon status="approved" />
                Activity
              </li>
              <li className={cx(s["trc-ln"], s["trc-done"])} />
              <li className={s["trc-done"]}>
                <StatusIcon status="approved" />
                Who attended
              </li>
              <li className={cx(s["trc-ln"], s["trc-done"])} />
              <li className={s["trc-cur"]}>
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
              <div className={s["trc-act"]}>
                <span className={s["trc-k"]}>
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
                <span className={cx("sp", s["trc-lnk"])}>
                  Edit
                </span>
              </div>
              <div className={s["trc-act"]}>
                <span className={s["trc-k"]}>
                  ATTENDED
                </span>
                <div className={s["trc-stack"]}>
                  <Avatar initials="AK" tone={6} />
                  <Avatar initials="AK" tone={5} />
                  <Avatar initials="DO" tone={2} />
                  <Avatar initials="FR" tone={4} />
                  <Avatar initials="LS" />
                  <Avatar initials="MG" tone={3} />
                  <Avatar initials="TB" tone={5} />
                  <Avatar initials="WC" />
                </div>
                <b>
                  8 people
                </b>
                <span className="muted">
                  Priya Nair ticked too, but already has this approved
                </span>
                <span className={cx("sp", s["trc-lnk"])}>
                  Edit
                </span>
              </div>
              <div className={s["trc-sh"]}>
                <h2>
                  Shared evidence
                </h2>
                <span className={s["trc-cnt"]}>
                  2
                </span>
                <span className={s["trc-o"]}>
                  optional
                </span>
                <span className="sp muted" style={{ fontSize: "12.5px" }}>
                  Attached once, copied to each of the 8 records
                </span>
              </div>
              <div className={s["trc-files"]}>
                <div className={s["trc-fr"]}>
                  <span className={s["trc-ft"]}>
                    PDF
                  </span>
                  <div className="grow">
                    <div className={s["trc-t"]}>
                      interface-review-workshop-slides.pdf
                    </div>
                    <div className={s["trc-c"]}>
                      Slides Daniel presented
                    </div>
                  </div>
                  <span className={s["trc-m"]}>
                    2.4 MB
                  </span>
                  <span className={s["trc-ok"]}>
                    <Icon name="check" size="xs" />
                    Uploaded
                  </span>
                  <span className={s["trc-x"]}>
                    <Icon name="x" size="sm" />
                  </span>
                </div>
                <div className={s["trc-fr"]}>
                  <span className={s["trc-ft"]}>
                    PDF
                  </span>
                  <div className="grow">
                    <div className={s["trc-t"]}>
                      attendance-sheet-20-nov.pdf
                    </div>
                    <div className={s["trc-c"]}>
                      Signed attendance sheet
                    </div>
                  </div>
                  <span className={s["trc-m"]}>
                    180 KB
                  </span>
                  <span className={s["trc-ok"]}>
                    <Icon name="check" size="xs" />
                    Uploaded
                  </span>
                  <span className={s["trc-x"]}>
                    <Icon name="x" size="sm" />
                  </span>
                </div>
                <div className={s["trc-drop"]}>
                  <Icon name="upload" size="sm" />
                  <span>
                    <b>
                      Drop files here
                    </b>
                    {" or "}
                    <span className={s["trc-acc"]}>
                      browse
                    </span>
                    {" · or add a link"}
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    PDF, Office files or images · up to 25 MB each
                  </span>
                </div>
              </div>
              <div className={s["trc-vis"]}>
                <Icon name="eye" size="xs" />
                <span>
                  Each person and you as their reviewer can see these files. People can still add their own evidence.
                </span>
              </div>
              <div className={s["trc-two"]}>
                <div>
                  <span className="label">
                    How the records are created
                  </span>
                  <div className={s["trc-opt"]}>
                    <span className="radio on" />
                    <div className="grow">
                      <div className={s["trc-t"]}>
                        Ask each person to add a short reflection, then approve
                      </div>
                      <div className={s["trc-c"]}>
                        {"Chosen on the previous step. "}
                        <span style={{ color: "var(--text-2)" }}>
                          Change
                        </span>
                      </div>
                      <Pill tone="acc" size="sm">
                        Recommended
                      </Pill>
                    </div>
                  </div>
                  <div className={s["trc-flow"]}>
                    <div>
                      <span className={s["trc-n"]}>
                        1
                      </span>
                      Each person gets a pre-filled draft with these files
                    </div>
                    <div>
                      <span className={s["trc-n"]}>
                        2
                      </span>
                      They add two or three lines and submit
                    </div>
                    <div>
                      <span className={s["trc-n"]}>
                        3
                      </span>
                      You approve each one in Team › Waiting for you; on time is judged by when they submit
                    </div>
                  </div>
                </div>
                <div>
                  <span className="label">
                    What each person gets
                  </span>
                  <div className={s["trc-pv"]}>
                    <div className={s["trc-pvh"]}>
                      <Avatar initials="AK" tone={6} />
                      <b>
                        Aisha Khan
                      </b>
                      <Pill tone="neu" size="sm" className="sp">
                        Draft · waiting for Aisha
                      </Pill>
                    </div>
                    <div className={s["trc-pvb"]}>
                      <div className={s["trc-tt"]}>
                        Interface review workshop
                      </div>
                      <div className={s["trc-tags"]}>
                        <Tag>
                          <TypeDot kind="rel" />
                          Relational
                        </Tag>
                        <Tag className="mono">
                          20 NOV · 2 H
                        </Tag>
                      </div>
                      <div className={s["trc-pr"]}>
                        <span className={s["trc-k"]}>
                          LED BY
                        </span>
                        <span className={s["trc-v"]}>
                          Daniel Okafor
                        </span>
                      </div>
                      <div className={s["trc-pr"]}>
                        <span className={s["trc-k"]}>
                          EVIDENCE
                        </span>
                        <span className={s["trc-v"]}>
                          2 files, shared
                        </span>
                      </div>
                      <div className={s["trc-pr"]}>
                        <span className={s["trc-k"]}>
                          REFLECTION
                        </span>
                        <span className={cx(s["trc-v"], s["trc-ph"])}>
                          Aisha adds 2–3 lines
                        </span>
                      </div>
                      <div className={s["trc-pr"]}>
                        <span className={s["trc-k"]}>
                          RECORDED
                        </span>
                        <span className={s["trc-v"]}>
                          Created by you · you review it
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s["trc-foot"]}>
                <div className={s["trc-sum"]}>
                  <b>
                    8 records will be created
                  </b>
                  <span className={s["trc-sep"]}>
                    ·
                  </span>
                  <span className="muted">
                    1 skipped (Priya already approved)
                  </span>
                </div>
                <Button variant="ghost">
                  <Icon name="cl" size="sm" />
                  {" Back"}
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
