// GENERATED from design/html/20b-person-role.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { Backdrop, Button, Icon, Kbd, Pill, Tag, cx } from '@/components/ds';
import Background from '@/screens/20-person';
import s from './view.module.css';

export const title = "Professional role";

export default function View_20b_person_role() {
  return (
    <>
      <Backdrop className={s.bg}>
        <Background />
      </Backdrop>
      <div className={s.v}>
        <div className={s.scrim} />
        <div className={cx("overlay", s.dlg)} role="dialog" aria-label="Professional role for Priya Nair">
        <div className={s.dh}>
          <span className={s.ic}>
            <Icon name="brief" size="sm" />
          </span>
          <h2>
            Professional role for Priya Nair
          </h2>
          <Tag>
            Systems engineering job family
          </Tag>
          <span className="sp faint" style={{ fontSize: "12px" }}>
            Set by you 12 Sep
          </span>
          <Kbd style={{ marginLeft: "6px" }}>
            Esc
          </Kbd>
          <span className={s.x}>
            <Icon name="x" size="sm" />
          </span>
        </div>
        <div className={s.db}>
          <div className={s["pr-col"]}>
            <div className={s["pr-lb"]}>
              {"Choose her role "}
              <span className="sp mono">
                5 choices
              </span>
            </div>
            <div className={s["pr-list"]}>
              <div className={s["pr-opt"]}>
                <span className="radio" />
                <div className="grow">
                  <div className={s["pr-nm"]}>
                    Associate Systems Engineer
                  </div>
                  <div className={s["pr-ds"]}>
                    Delivers defined tasks in one subsystem, with guidance.
                  </div>
                </div>
              </div>
              <div className={s["pr-opt"]}>
                <span className="radio" />
                <div className="grow">
                  <div className={s["pr-nm"]}>
                    Systems Engineer
                  </div>
                  <div className={s["pr-ds"]}>
                    Owns requirements, analysis and verification for a subsystem.
                  </div>
                </div>
              </div>
              <div className={s["pr-opt"]}>
                <span className="radio" />
                <div className="grow">
                  <div className={s["pr-nm"]}>
                    Interface Architect
                  </div>
                  <div className={s["pr-ds"]}>
                    Defines and controls interfaces between subsystems and suppliers.
                  </div>
                </div>
                <Pill tone="neu" size="sm">
                  Current
                </Pill>
              </div>
              <div className={cx("on", s["pr-opt"])}>
                <span className="radio on" />
                <div className="grow">
                  <div className={s["pr-nm"]}>
                    Senior Systems Engineer
                  </div>
                  <div className={s["pr-ds"]}>
                    {"Leads technical work across subsystems and reviews others' work."}
                  </div>
                </div>
                <Pill tone="acc" size="sm">
                  Selected
                </Pill>
              </div>
              <div className={s["pr-opt"]}>
                <span className="radio" />
                <div className="grow">
                  <div className={s["pr-nm"]}>
                    Lead System Architect
                  </div>
                  <div className={s["pr-ds"]}>
                    Sets the system architecture and chairs the technical board.
                  </div>
                </div>
              </div>
            </div>
            <div className={s["pr-f"]}>
              <label className={s["pr-lb"]}>
                Starts on
              </label>
              <div className="input" style={{ width: "300px" }}>
                <Icon name="cal" size="sm" />
                <span className="mono" style={{ fontSize: "13px" }}>
                  Mon 1 Dec 2026
                </span>
                <span className="sp faint" style={{ fontSize: "12px" }}>
                  in 10 days
                </span>
              </div>
              <div className={s["pr-hp"]}>
                <Icon name="info" size="xs" />
                <span>
                  Until then her expectations stay those of an Interface Architect.
                </span>
              </div>
            </div>
            <div className={s["pr-hr"]}>
              <div className={s["pr-k"]}>
                JOB TITLE · HR DIRECTORY
                <span className={s.lk}>
                  <Icon name="lock" size="xs" />
                </span>
              </div>
              <div className={s.v}>
                Lead Systems Engineer
              </div>
              <p>
                Read-only, from the HR directory. It is a separate record from her professional role, and changing one never changes the other. Only the role sets her expectations and learning here.
              </p>
            </div>
            <div className={s["pr-fn"]}>
              <Icon name="sliders" size="xs" />
              <span>
                Role choices are configured by admins for each job family, up to 5.
              </span>
              <span className="lnk">
                {"Rules › Roles "}
                <Icon name="cr" size="xs" />
              </span>
            </div>
          </div>
          <div className={cx("r", s["pr-col"])}>
            <div className={s["pr-lb"]}>
              What changes for Priya
            </div>
            <div className={s["pr-chg"]}>
              <div className={s["pr-from"]}>
                <span>
                  Interface Architect
                </span>
                <Icon name="arrow" size="xs" />
                <b>
                  Senior Systems Engineer
                </b>
              </div>
              <div className={s["pr-ci"]}>
                <Icon name="file" size="sm" />
                <div className="grow">
                  <div className={s.ttl}>
                    Job expectations
                    <span className="mono">
                      6 areas · 2 new
                    </span>
                  </div>
                  <p>
                    New: technical leadership and mentoring. Her Next level page will compare against Lead System Architect.
                  </p>
                </div>
              </div>
              <div className={s["pr-ci"]}>
                <Icon name="book" size="sm" />
                <div className="grow">
                  <div className={s.ttl}>
                    Suggested learning
                    <span className="mono">
                      7 → 9
                    </span>
                  </div>
                  <p>
                    4 new suggestions, 2 no longer suggested. Optional, as before.
                  </p>
                </div>
              </div>
              <div className={s["pr-ci"]}>
                <Icon name="flag" size="sm" />
                <div className="grow">
                  <div className={s.ttl}>
                    Required learning
                    <span className="mono">
                      1 new
                    </span>
                  </div>
                  <p>
                    {"Technical Review Leadership "}
                    <span className={s.code}>
                      TR-320
                    </span>
                    , from an admin rule for this role. Due 1 Mar, 90 days after the start date.
                  </p>
                </div>
              </div>
              <div className={cx(s["pr-ci"], s.same)}>
                <Icon name="check" size="sm" />
                <div className="grow">
                  <div className={s.ttl}>
                    Stays the same
                  </div>
                  <p>
                    Her goals, her plan and everything already approved.
                  </p>
                </div>
              </div>
            </div>
            <div className={s["pr-f"]} style={{ marginTop: "20px" }}>
              <label className={s["pr-lb"]}>
                {"Note to Priya "}
                <span className={s.o}>
                  optional
                </span>
              </label>
              <div className={cx("textarea", s["pr-ta"])}>
                {"You've run the actuation ICD board well. This sets expectations for leading reviews across subsystems; let's go through the new areas at our 1:1 on Tuesday."}
                <span className={s.cc}>
                  156 / 280
                </span>
              </div>
              <div className={s["pr-hp"]}>
                <Icon name="eye" size="xs" />
                <span>
                  Shared: Priya sees this with the change. Not a private note.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={s.df}>
          <span className={s["pr-vis"]}>
            <Icon name="eye" size="sm" />
            <b>
              Priya is notified.
            </b>
            <span>
              She sees her new role, that you set it, and your note.
            </span>
          </span>
          <Button variant="ghost" className="sp">
            Cancel
          </Button>
          <Button variant="primary">
            {"Save role "}
            <Kbd>
              Ctrl Enter
            </Kbd>
          </Button>
        </div>
      </div>
      </div>
    </>
  );
}
