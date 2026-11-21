// GENERATED from design/html/15d-rules-roles.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, Pill, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Professional roles";

export default function View_15d_rules_roles() {
  return (
    <div className={s.v}>
      <AppShell workspace="admin" active="rules">
        <main id="page">
          <header className="ph" style={{ marginBottom: "16px" }}>
            <div>
              <h1>
                {"Rules & populations"}
              </h1>
              <p className="sub">
                Who gets which framework, and which learning is required for whom.
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="file" size="sm" />
                {" Change history"}
              </Button>
            </div>
          </header>
          <div className="tabs">
            <span>
              {"Frameworks "}
              <span className="n">
                2
              </span>
            </span>
            <span>
              {"Populations "}
              <span className="n">
                6
              </span>
            </span>
            <span>
              {"Required learning "}
              <span className="n">
                4
              </span>
            </span>
            <span className="on">
              {"Roles "}
              <span className="n">
                3
              </span>
            </span>
            <span>
              Reminders
            </span>
            <span>
              Feedback form
            </span>
          </div>
          <div className={s.lay}>
            <section className={cx("panel", s["ro-fam"])}>
              <div className="panel-h">
                <h2>
                  Job families
                </h2>
                <span className="cnt">
                  with roles
                </span>
                <span className="lnk">
                  <Icon name="plus" size="xs" />
                  {" Add"}
                </span>
              </div>
              <div className="li on">
                <span className={s["ro-fi"]}>
                  <Icon name="brief" size="sm" />
                </span>
                <div className="grow">
                  <div className="t">
                    Systems engineering
                  </div>
                  <div className="c">
                    5 roles
                  </div>
                </div>
                <span className="m">
                  636
                </span>
              </div>
              <div className="li">
                <span className={s["ro-fi"]}>
                  <Icon name="brief" size="sm" />
                </span>
                <div className="grow">
                  <div className="t">
                    Test engineering
                  </div>
                  <div className="c">
                    4 roles
                  </div>
                </div>
                <span className="m">
                  188
                </span>
              </div>
              <div className="li">
                <span className={s["ro-fi"]}>
                  <Icon name="brief" size="sm" />
                </span>
                <div className="grow">
                  <div className="t">
                    Digital engineering
                  </div>
                  <div className="c">
                    3 roles
                  </div>
                </div>
                <span className="m">
                  167
                </span>
              </div>
              <div className={s["ro-ft"]}>
                <Icon name="alert" size="xs" />
                <span>
                  {"Job families and counts use HR directory data from 20 Nov. Today's refresh failed at 00:57."}
                </span>
              </div>
            </section>
            <section className={cx("panel", s["ro-det"])}>
              <div className="panel-h">
                <span className={s["ro-hic"]}>
                  <Icon name="brief" size="sm" />
                </span>
                <h2>
                  Systems engineering
                </h2>
                <span className={s["ro-src"]}>
                  <Icon name="lock" size="xs" />
                  job family from HR directory
                </span>
                <span className="sp" />
                <Pill tone="neu" size="sm">
                  5 of 5 roles
                </Pill>
                <Button variant="ghost" size="sm" style={{ padding: "0 6px" }}>
                  <Icon name="more" size="sm" />
                </Button>
              </div>
              <div className={s["ro-body"]}>
                <div>
                  <div>
                    <h3 className={s.k}>
                      {"PROFESSIONAL ROLES, IN ORDER "}
                      <span className="lnk">
                        Drag to reorder · max 5
                      </span>
                    </h3>
                    <div className={s["ro-box"]}>
                      <div className={s["ro-lead"]}>
                        <Icon name="users" size="sm" />
                        Managers assign these to their direct reports.
                        <span className={s["ro-ph"]}>
                          People
                        </span>
                      </div>
                      <div className={s["ro-r"]}>
                        <span className={s["ro-grip"]} />
                        <span className={s["ro-ix"]}>
                          1
                        </span>
                        <div className="grow">
                          <div className={s["ro-nm"]}>
                            Associate Systems Engineer
                          </div>
                          <div className={s["ro-ds"]}>
                            Delivers defined tasks in one subsystem, with guidance.
                          </div>
                        </div>
                        <div className={s["ro-hd"]}>
                          96
                        </div>
                        <span className={s["ro-mo"]}>
                          <Icon name="more" size="sm" />
                        </span>
                      </div>
                      <div className={s["ro-r"]}>
                        <span className={s["ro-grip"]} />
                        <span className={s["ro-ix"]}>
                          2
                        </span>
                        <div className="grow">
                          <div className={s["ro-nm"]}>
                            Systems Engineer
                          </div>
                          <div className={s["ro-ds"]}>
                            Owns requirements, analysis and verification for a subsystem.
                          </div>
                        </div>
                        <div className={s["ro-hd"]}>
                          208
                        </div>
                        <span className={s["ro-mo"]}>
                          <Icon name="more" size="sm" />
                        </span>
                      </div>
                      <div className={s["ro-r"]}>
                        <span className={s["ro-grip"]} />
                        <span className={s["ro-ix"]}>
                          3
                        </span>
                        <div className="grow">
                          <div className={s["ro-nm"]}>
                            Interface Architect
                          </div>
                          <div className={s["ro-ds"]}>
                            Defines and controls interfaces between subsystems and suppliers.
                          </div>
                        </div>
                        <div className={s["ro-hd"]}>
                          58
                        </div>
                        <span className={s["ro-mo"]}>
                          <Icon name="more" size="sm" />
                        </span>
                      </div>
                      <div className={s["ro-r"]}>
                        <span className={s["ro-grip"]} />
                        <span className={s["ro-ix"]}>
                          4
                        </span>
                        <div className="grow">
                          <div className={s["ro-nm"]}>
                            Senior Systems Engineer
                          </div>
                          <div className={s["ro-ds"]}>
                            {"Leads technical work across subsystems and reviews others' work."}
                          </div>
                        </div>
                        <div className={s["ro-hd"]}>
                          141
                        </div>
                        <span className={s["ro-mo"]}>
                          <Icon name="more" size="sm" />
                        </span>
                      </div>
                      <div className={cx(s["ro-r"], s.ed)}>
                        <span className={s["ro-grip"]} />
                        <span className={s["ro-ix"]}>
                          5
                        </span>
                        <div className="grow">
                          <div className={s["ro-nm"]}>
                            Lead System Architect
                            <span className={s["ro-tg"]}>
                              UNSAVED
                            </span>
                          </div>
                          <div className={cx("input", s["ro-edin"])}>
                            Sets the system architecture, chairs the technical board and mentors senior engineers.
                            <span className={s["ro-caret"]} />
                          </div>
                          <div className={s["ro-was"]}>
                            {"Was: "}
                            <s>
                              Sets the system architecture and chairs the technical board.
                            </s>
                          </div>
                        </div>
                        <div className={s["ro-hd"]}>
                          37
                        </div>
                        <span className={s["ro-mo"]} style={{ marginTop: "2px" }}>
                          <Icon name="more" size="sm" />
                        </span>
                      </div>
                      <div className={cx("nr", s["ro-r"])}>
                        <span className={s["ro-grip"]} style={{ visibility: "hidden" }} />
                        <span className={s["ro-ix"]}>
                          –
                        </span>
                        <div className="grow">
                          <div className={s["ro-nm"]}>
                            Not recorded
                          </div>
                          <div className={s["ro-ds"]}>
                            No role assigned yet. Not the same as having none of these skills.
                          </div>
                        </div>
                        <div className={s["ro-hd"]}>
                          96
                        </div>
                        <span className={s["ro-mo"]} style={{ visibility: "hidden" }}>
                          <Icon name="more" size="sm" />
                        </span>
                      </div>
                      <div className={s["ro-add"]}>
                        <Icon name="plus" size="xs" />
                        Add role
                        <span className="sp">
                          5 of 5 used. Remove or merge one first.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className={s.k}>
                      ROLE IS NOT THE HR JOB TITLE
                    </h3>
                    <div className={s["ro-cmp"]}>
                      <div className={s["ro-cm"]}>
                        <span className={s["ro-ci"]}>
                          <Icon name="sliders" size="sm" />
                        </span>
                        <div>
                          <b>
                            Professional role
                          </b>
                          <p>
                            {"Chosen from this list by the person's manager. It decides which job expectations they see."}
                          </p>
                        </div>
                      </div>
                      <div className={cx(s["ro-cm"], s.hr)}>
                        <span className={s["ro-ci"]}>
                          <Icon name="lock" size="sm" />
                        </span>
                        <div>
                          <b>
                            HR job title
                          </b>
                          <p>
                            {"From the HR directory and read-only here. They can differ: "}
                            <em>
                              Senior Systems Engineer
                            </em>
                            {" in HR, "}
                            <em>
                              Interface Architect
                            </em>
                            {" as a role."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={s.k}>
                      ORDER IS THE PATH
                    </h3>
                    <div className={s["ro-chain"]}>
                      <span className={s["ro-step"]}>
                        Interface Architect
                      </span>
                      <Icon name="arrow" size="xs" />
                      <span className={s["ro-step"]}>
                        Senior Systems Engineer
                      </span>
                    </div>
                    <p className={s["ro-note"]}>
                      {"Next level compares a person's role with the "}
                      <b>
                        one after it
                      </b>
                      {" in this list. The last role has no next step, so reorder with care."}
                    </p>
                  </div>
                  <div>
                    <h3 className={s.k}>
                      WHEN YOU SAVE
                    </h3>
                    <div className={s["ro-pts"]}>
                      <div>
                        <Icon name="check" size="sm" />
                        <span>
                          Edits and renames keep every assignment.
                        </span>
                      </div>
                      <div>
                        <Icon name="refresh" size="sm" />
                        <span>
                          {"Removing a role asks the holders' managers to choose again. Until then they show Not recorded."}
                        </span>
                      </div>
                      <div>
                        <Icon name="file" size="sm" />
                        <span>
                          Every change goes to the audit log.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.dirty}>
                <span className={s.dt} />
                <span className={s.tx}>
                  <b>
                    1 unsaved change
                  </b>
                  {" · edited the description of Lead System Architect · "}
                  <span className="mono">
                    37
                  </span>
                  {" people keep their role"}
                </span>
                <span className="sp" />
                <Button>
                  Discard
                </Button>
                <Button variant="primary">
                  {"Save roles "}
                  <Kbd style={{ background: "transparent", borderColor: "rgba(127,127,127,.4)", color: "inherit", opacity: ".7" }}>
                    Ctrl S
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
