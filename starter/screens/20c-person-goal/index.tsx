// GENERATED from design/html/20c-person-goal.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { Avatar, Backdrop, Button, Icon, Kbd, Pill, StatusIcon, cx } from '@/components/ds';
import Background from '@/screens/20-person';
import s from './view.module.css';

export const title = "Set a goal for Priya";

export default function View_20c_person_goal() {
  return (
    <>
      <Backdrop className={s.bg}>
        <Background />
      </Backdrop>
      <div className={s.v}>
        <div className={s.scrim} />
        <div className={cx("overlay", s.dlg)} role="dialog" aria-label="Set a goal for Priya">
        <div className={s.dh}>
          <span className={s.ic}>
            <Icon name="target" size="sm" />
          </span>
          <h2>
            Set a goal for Priya
          </h2>
          <Pill tone="neu">
            <Avatar initials="JL" size="xs" />
            Shows as “Set by Jordan Lee”
          </Pill>
          <span className="sp faint" style={{ fontSize: "12px" }}>
            New goal
          </span>
          <Kbd style={{ marginLeft: "6px" }}>
            Esc
          </Kbd>
          <span className={s.x}>
            <Icon name="x" size="sm" />
          </span>
        </div>
        <div className={s.db}>
          <div className={s["pg-col"]}>
            <div className={s["pg-f"]}>
              <label className={s["pg-lb"]}>
                Title
              </label>
              <div className={cx("input", s["pg-ttl"])}>
                Model the flight-control interfaces in SysML v2
              </div>
            </div>
            <div className={s["pg-f"]}>
              <label className={s["pg-lb"]}>
                {"Why it matters "}
                <span className={s.o}>
                  optional
                </span>
              </label>
              <div className={cx("textarea", s["pg-ta"])}>
                {"You asked to start SysML v2 for architects. The interface board moves to SysML v2 models in Q1, and you'd own the interface views."}
                <span className={s.cc}>
                  130 / 280
                </span>
              </div>
              <div className={s["pg-hp"]}>
                <Icon name="eye" size="xs" />
                {"Priya sees this on the goal. It's never sent to the advisor."}
              </div>
            </div>
            <div className={cx(s["pg-f"], s["pg-two"])}>
              <div>
                <label className={s["pg-lb"]}>
                  Due date
                </label>
                <div className="input">
                  <Icon name="cal" size="sm" />
                  <span className="mono" style={{ fontSize: "13px" }}>
                    31 Mar 2027
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    130 days
                  </span>
                </div>
              </div>
              <div>
                <label className={s["pg-lb"]}>
                  {"Timeframe "}
                  <span className={s.o}>
                    read-only
                  </span>
                </label>
                <div className={cx("input", s["pg-ro"])}>
                  <span>
                    Medium-term
                  </span>
                  <span className="faint">
                    · from due date
                  </span>
                  <span className={s.lk}>
                    <Icon name="lock" size="xs" />
                  </span>
                </div>
              </div>
              <div className={s["pg-hp"]} style={{ gridColumn: "1/-1", marginTop: "-4px" }}>
                <Icon name="info" size="xs" />
                3 to 12 months away is medium-term. It updates when the due date changes.
              </div>
            </div>
            <div className={s["pg-f"]} style={{ marginBottom: "8px" }}>
              <label className={s["pg-lb"]}>
                {"Milestones "}
                <span className={s.o}>
                  dates optional · Priya can update them
                </span>
                <span className="sp mono">
                  3
                </span>
              </label>
              <div className={s["pg-ms"]}>
                <span className="n">
                  M1
                </span>
                <div className="input">
                  Learn SysML v2 for interface views
                </div>
                <div className={cx("input", s.dt)}>
                  <Icon name="cal" size="xs" />
                  29 Jan
                </div>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
                </span>
              </div>
              <div className={s["pg-ms"]}>
                <span className="n">
                  M2
                </span>
                <div className="input">
                  Model the actuation ICD in SysML v2
                </div>
                <div className={cx("input", s.dt)}>
                  <Icon name="cal" size="xs" />
                  5 Mar
                </div>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
                </span>
              </div>
              <div className={s["pg-ms"]}>
                <span className="n">
                  M3
                </span>
                <div className="input">
                  Walk the interface board through the model
                </div>
                <div className={cx("input", s.dt, s.empty)}>
                  <Icon name="cal" size="xs" />
                  Add date
                </div>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
                </span>
              </div>
              <span className={s["pg-add"]}>
                <Icon name="plus" size="xs" />
                Add milestone
              </span>
            </div>
          </div>
          <div className={cx("r", s["pg-col"])}>
            <label className={s["pg-lb"]}>
              {"Link learning or a pathway "}
              <span className="sp mono">
                3
              </span>
            </label>
            <div className={s["pg-ll"]}>
              <div className={s.g}>
                <span>
                  PATHWAY · SHE CHOOSES TO ADOPT IT
                </span>
                <span>
                  1
                </span>
              </div>
              <div className={cx("r", s.pw)}>
                <Icon name="route" size="sm" />
                <div className="grow">
                  <div>
                    SysML v2 for architects
                  </div>
                  <div className="c">
                    6 activities · about 14 h
                  </div>
                </div>
                <Pill tone="acc" size="sm">
                  Suggested
                </Pill>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
                </span>
              </div>
              <div className={cx(s.g, s.sep)}>
                <span>
                  LEARNING
                </span>
                <span>
                  2
                </span>
              </div>
              <div className="r">
                <StatusIcon status="not_started" />
                <span className="ellipsis">
                  SysML v2 language overview
                </span>
                <span className={s.s}>
                  Not started
                </span>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
                </span>
              </div>
              <div className="r">
                <StatusIcon status="not_started" />
                <span className="ellipsis">
                  {"Develop System & Component ICS"}
                </span>
                <span className={s.s}>
                  Not started
                </span>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
                </span>
              </div>
            </div>
            <div className={cx("input", s["pg-q"])}>
              <Icon name="search" size="sm" />
              <span>
                Search learning or pathways
              </span>
              <Kbd>
                /
              </Kbd>
            </div>
            <div className={s["pg-hp"]}>
              <Icon name="info" size="xs" />
              <span>
                Only approved learning moves the goal. Priya can link more herself.
              </span>
            </div>
            <div className={s["pg-opt"]}>
              <Icon name="target" size="sm" className={s.ic} />
              <div className="grow">
                <b>
                  Make this her focus
                </b>
                <p>
                  {"Her focus is "}
                  <em>
                    Lead interface control for the flight-control upgrade
                  </em>
                  . Turning this on replaces it, and she sees that you did.
                </p>
              </div>
              <span className="toggle" />
            </div>
          </div>
        </div>
        <div className={s.df}>
          <span className={s["pg-vis"]}>
            <Icon name="eye" size="sm" />
            <span>
              <b>
                Priya sees this goal and that you set it.
              </b>
              {" She can link learning and comment; only you can remove it."}
            </span>
          </span>
          <Button variant="ghost" className="sp">
            Cancel
          </Button>
          <Button variant="primary">
            {"Set goal "}
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
