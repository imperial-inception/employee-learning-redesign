// GENERATED from design/html/18-goal-editor.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { Backdrop, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import Background from '@/screens/04-goals';
import s from './view.module.css';

export const title = "Edit goal";

export default function View_18_goal_editor() {
  return (
    <>
      <Backdrop className={s.bg}>
        <Background />
      </Backdrop>
      <div className={s.v}>
        <div className={s.scrim} />
        <div className={cx("overlay", s.dlg)} role="dialog" aria-label="Edit goal">
        <div className={s.dh}>
          <span className={s.ic}>
            <Icon name="target" size="sm" />
          </span>
          <h2>
            Edit goal
          </h2>
          <Pill tone="acc">
            <Icon name="target" size="xs" />
            {" Focus goal"}
          </Pill>
          <span className="sp faint" style={{ fontSize: "12px" }}>
            Created 6 Oct · edited 12 Nov
          </span>
          <Kbd style={{ marginLeft: "6px" }}>
            Esc
          </Kbd>
          <span className={s.x}>
            <Icon name="x" size="sm" />
          </span>
        </div>
        <div className={s.db}>
          <div className={s.col}>
            <div className={s.f}>
              <label className={s.lb}>
                Title
              </label>
              <div className={cx("input", s.ttl)}>
                Become confident using SysML v2 to describe system architecture
              </div>
            </div>
            <div className={s.f}>
              <label className={s.lb}>
                {"Why it matters "}
                <span className={s.o}>
                  optional
                </span>
              </label>
              <div className={cx("textarea", s.ta)}>
                {"The actuation architecture moves to SysML v2 models in Q1, and I'll own the interface views."}
                <span className={s.cc}>
                  93 / 280
                </span>
              </div>
              <div className="help">
                <Icon name="eye" size="xs" />
                {"Sam sees this next to your submissions. It's never sent to the advisor."}
              </div>
            </div>
            <div className={cx(s.f, s.two)}>
              <div>
                <label className={s.lb}>
                  Due date
                </label>
                <div className="input">
                  <Icon name="cal" size="sm" />
                  <span className="mono" style={{ fontSize: "13px" }}>
                    31 Dec 2026
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    40 days
                  </span>
                </div>
              </div>
              <div>
                <label className={s.lb}>
                  {"Timeframe "}
                  <span className={s.o}>
                    read-only
                  </span>
                </label>
                <div className={cx("input", s.ro)}>
                  <span>
                    Short-term
                  </span>
                  <span className="faint">
                    · from due date
                  </span>
                  <span className={s.lk}>
                    <Icon name="lock" size="xs" />
                  </span>
                </div>
              </div>
              <div className="help" style={{ gridColumn: "1/-1", marginTop: "-4px" }}>
                <Icon name="info" size="xs" />
                Under 3 months away is short-term. It updates when you change the due date.
              </div>
            </div>
            <div className={s.f} style={{ marginBottom: "8px" }}>
              <label className={s.lb}>
                {"Milestones "}
                <span className={s.o}>
                  dates optional
                </span>
                <span className="sp mono">
                  2
                </span>
              </label>
              <div className={s.msr}>
                <span className="n">
                  M1
                </span>
                <div className="input">
                  Model the actuation interfaces in SysML v2
                </div>
                <div className={cx("input", s.dt)}>
                  <Icon name="cal" size="xs" />
                  12 Dec
                </div>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
                </span>
              </div>
              <div className={s.msr}>
                <span className="n">
                  M2
                </span>
                <div className="input">
                  Walk Sam through the interface view
                </div>
                <div className={cx("input", s.dt, s.empty)}>
                  <Icon name="cal" size="xs" />
                  Add date
                </div>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
                </span>
              </div>
              <span className={s.addl}>
                <Icon name="plus" size="xs" />
                Add milestone
              </span>
            </div>
          </div>
          <div className={cx("r", s.col)}>
            <label className={s.lb}>
              {"Linked learning "}
              <span className="sp mono">
                5
              </span>
            </label>
            <div className={s.ll}>
              <div className={s.g}>
                <span>
                  ADDED DIRECTLY
                </span>
                <span>
                  2
                </span>
              </div>
              <div className="r">
                <StatusIcon status="returned" />
                <span className="ellipsis">
                  {"Clear Status & Issue Communication"}
                </span>
                <span className={s.s} style={{ color: "var(--orange)" }}>
                  Returned
                </span>
                <span className={s.rm}>
                  <Icon name="x" size="xs" />
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
              <div className={cx(s.g, s.pwg)}>
                <span>
                  FROM A PATHWAY · MANAGED THERE
                </span>
                <span>
                  3
                </span>
              </div>
              <div className="r">
                <Icon name="route" size="sm" className="c-muted" />
                <span className="ellipsis">
                  MBSE foundations
                </span>
                <span className={s.gl}>
                  <StatusIcon status="approved" />
                  <StatusIcon status="approved" />
                  <StatusIcon status="submitted" />
                </span>
                <span className={s.s} style={{ marginLeft: "8px" }}>
                  2 approved · 1 in review
                </span>
              </div>
            </div>
            <div className={s.srch}>
              <div className={s.q}>
                <Icon name="search" size="sm" />
                <span>
                  interface
                  <span className={s.caret} />
                </span>
                <span className="sp faint" style={{ fontSize: "12px" }}>
                  Link learning
                </span>
              </div>
              <div className={cx("sel", s.res)}>
                <Tag style={{ border: "none", padding: "0" }}>
                  <TypeDot kind="formal" />
                </Tag>
                <span>
                  Interface Management
                </span>
                <span className={s.code}>
                  IM-201
                </span>
                <span className="m">
                  2 h
                  <Kbd>
                    Enter
                  </Kbd>
                </span>
              </div>
              <div className={s.res}>
                <Tag style={{ border: "none", padding: "0" }}>
                  <TypeDot kind="formal" />
                </Tag>
                <span>
                  {"Develop System & Component ICS"}
                </span>
                <span className="m">
                  1.5 h
                </span>
              </div>
              <div className={s.res}>
                <Tag style={{ border: "none", padding: "0" }}>
                  <TypeDot kind="rel" />
                </Tag>
                <span>
                  Interface review board: shadowing
                </span>
                <span className="m">
                  <Pill tone="acc">
                    In your plan
                  </Pill>
                </span>
              </div>
              <div className={s.ft}>
                <span>
                  <Kbd>
                    ↑
                  </Kbd>
                  <Kbd>
                    ↓
                  </Kbd>
                  {" move"}
                </span>
                <span>
                  <Kbd>
                    Enter
                  </Kbd>
                  {" link"}
                </span>
                <span>
                  <Kbd>
                    Esc
                  </Kbd>
                  {" close"}
                </span>
                <span className="sp">
                  12 matches
                </span>
              </div>
            </div>
            <div className={s.opt} style={{ marginTop: "18px" }}>
              <Icon name="target" size="sm" className={s.ic} />
              <div className="grow">
                <b>
                  Make this my focus
                </b>
                <p>
                  Your focus leads Home and ranks suggestions. One goal at a time.
                </p>
              </div>
              <span className="toggle on" />
            </div>
          </div>
        </div>
        <div className={s.df}>
          <Button variant="ghost" danger>
            Delete goal
          </Button>
          <span className={s.vis}>
            <Icon name="eye" size="sm" className="c-muted" />
            <b>
              Your manager can see this goal.
            </b>
            <span>
              {"Sam Patel sees it and its progress. Colleagues don't."}
            </span>
          </span>
          <Button variant="ghost" className="sp">
            Cancel
          </Button>
          <Button variant="primary">
            {"Save changes "}
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
