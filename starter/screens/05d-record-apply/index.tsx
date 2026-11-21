// GENERATED from design/html/05d-record-apply.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Record learning · How you'll apply it";

export default function View_05d_record_apply() {
  return (
    <div className={s.v}>
      <AppShell active="find" manager>
        <main id="page">
          <div className="crumbs">
            <span>
              Learning
            </span>
            <span className="sl">
              /
            </span>
            <span>
              My learning
            </span>
            <span className="sl">
              /
            </span>
            <span style={{ color: "var(--text-2)" }}>
              Record learning
            </span>
          </div>
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <h1>
                Record learning
              </h1>
              <p className="sub">
                Tell Sam what you did and show the work. It counts toward your goal once Sam approves it.
              </p>
            </div>
            <div className="acts">
              <span className="mono faint" style={{ fontSize: "11.5px", letterSpacing: ".04em" }}>
                DRAFT · SAVED 14:28
              </span>
              <Button variant="ghost" size="sm">
                <Icon name="x" size="xs" />
                {" Close "}
                <Kbd>
                  Esc
                </Kbd>
              </Button>
            </div>
          </header>
          <div className={s.steps}>
            <div className={cx(s.stp, s.done)}>
              <div className={s.ln} />
              <div className={s.hd}>
                <StatusIcon status="approved" />
                Activity
              </div>
              <div className={s.s}>
                Experiential · on the job
              </div>
            </div>
            <div className={cx(s.stp, s.done)}>
              <div className={s.ln} />
              <div className={s.hd}>
                <StatusIcon status="approved" />
                What you learned
              </div>
              <div className={s.s}>
                64 words
              </div>
            </div>
            <div className={cx(s.stp, s.cur)}>
              <div className={s.ln} />
              <div className={s.hd}>
                <span className="num">
                  3
                </span>
                {"How you'll apply it"}
              </div>
              <div className={s.s}>
                41 words
              </div>
            </div>
            <div className={s.stp}>
              <div className={s.ln} />
              <div className={s.hd}>
                <span className="num">
                  4
                </span>
                Evidence
              </div>
              <div className={s.s}>
                Files or links
              </div>
            </div>
            <div className={s.stp}>
              <div className={s.ln} />
              <div className={s.hd}>
                <span className="num">
                  5
                </span>
                Quick feedback
              </div>
              <div className={s.s}>
                2 questions · about 1 min
              </div>
            </div>
            <div className={s.stp}>
              <div className={s.ln} />
              <div className={s.hd}>
                <span className="num">
                  6
                </span>
                {"Review & submit"}
              </div>
              <div className={s.s}>
                Goes to Sam Patel
              </div>
            </div>
          </div>
          <div className={s.body}>
            <section className={cx("panel glow", s.form)}>
              <div className={s.k}>
                STEP 3 OF 6
              </div>
              <h2>
                How will you apply it?
              </h2>
              <p className={s.lead}>
                Where will you use this next? A concrete next step helps Sam most.
              </p>
              <div className={s.ctx}>
                <div>
                  <span className={s.k}>
                    ACTIVITY
                  </span>
                  <span className={s.v}>
                    <Tag>
                      <TypeDot kind="exp" />
                      Experiential
                    </Tag>
                    <span className="ellipsis">
                      Interpret a statement of work into standards-based artifacts
                    </span>
                  </span>
                  <span className={s.chg}>
                    Edit
                  </span>
                </div>
                <div>
                  <span className={s.k}>
                    LINKED GOAL
                  </span>
                  <span className={s.v}>
                    <span className={s.acc}>
                      <Icon name="target" size="sm" />
                    </span>
                    <span className="ellipsis">
                      Become confident using SysML v2 to describe system architecture
                    </span>
                  </span>
                  <span className={s.chg}>
                    Change
                  </span>
                </div>
              </div>
              <div className={cx(s["rc-f"], s["rc-grow"])}>
                <div className={s["rc-lb"]}>
                  {"How you'll apply it"}
                </div>
                <div className={cx("textarea", s["rc-ta"], s.focus)}>
                  {"On the actuation upgrade I'll map every SOW clause to a model element before the requirements review, so gaps show up in review instead of in test. I'll start with the interface clauses, because they feed the actuation interface model directly."}
                  <span className={s["rc-caret"]} />
                  <span className={s["rc-wc"]}>
                    41 words
                  </span>
                </div>
                <div className="help">
                  {"Name the project, the moment, or the people it's for."}
                </div>
              </div>
              <div className={s["rc-f"]}>
                <div className={s["rc-lb"]}>
                  {"Link to a goal milestone "}
                  <span className={s.o}>
                    optional
                  </span>
                  <span className="sp">
                    <Icon name="target" size="xs" />
                    SysML v2 goal · 2 milestones
                  </span>
                </div>
                <div className={s["rc-ms"]}>
                  <div className={cx("on", s["rc-mr"])}>
                    <span className="radio on" />
                    <span className={s["rc-mk"]}>
                      M1
                    </span>
                    <span className="grow">
                      Model the actuation interfaces in SysML v2
                    </span>
                    <span className="m">
                      due 12 Dec
                    </span>
                  </div>
                  <div className={s["rc-mr"]}>
                    <span className="radio" />
                    <span className={s["rc-mk"]}>
                      M2
                    </span>
                    <span className="grow">
                      Walk Sam through the interface view
                    </span>
                    <span className={s.nm}>
                      no date
                    </span>
                  </div>
                  <div className={s["rc-mr"]}>
                    <span className="radio" />
                    <span className={s["rc-mk"]} />
                    <span className="grow" style={{ color: "var(--text-2)" }}>
                      No specific milestone
                    </span>
                    <span className={s.nm}>
                      the goal only
                    </span>
                  </div>
                </div>
                <div className="help">
                  Sam sees the milestone next to your answer.
                </div>
              </div>
            </section>
            <aside className={cx("panel", s.pv)}>
              <div className="panel-h">
                <Icon name="eye" size="sm" />
                <h2>
                  What Sam will see
                </h2>
                <span className="lnk">
                  Updates as you edit
                </span>
              </div>
              <div className={s.pvw}>
                <Avatar initials="JL" />
                <div className="grow">
                  <b>
                    Jordan Lee
                  </b>
                  <small>
                    Systems Engineer · submits to Sam Patel
                  </small>
                </div>
                <Tag className="mono">
                  v1
                </Tag>
              </div>
              <div className={s.ttl}>
                <div className="t">
                  Interpret a statement of work into standards-based artifacts
                </div>
                <div className="row" style={{ gap: "6px", marginTop: "8px" }}>
                  <Tag>
                    <TypeDot kind="exp" />
                    Experiential
                  </Tag>
                  <Tag>
                    <Icon name="target" size="xs" />
                    SysML v2 goal
                  </Tag>
                  <span className="sp mono faint" style={{ fontSize: "11.5px" }}>
                    4–14 NOV · 6 H
                  </span>
                </div>
              </div>
              <div className={s.sec}>
                <div className={s.k}>
                  WHAT I LEARNED
                </div>
                <p className={s["rc-cl"]}>
                  How to break a statement of work into the artifacts our standards expect: which clauses become requirements, which become interface definitions, and which only need a compliance note. Before this I treated every clause as a requirement. Now I check each one against the artifact list first, and I ask the customer early when a clause could belong to two artifacts, or to none.
                </p>
              </div>
              <div className={s.sec}>
                <div className={s.k}>
                  {"HOW I'LL APPLY IT"}
                </div>
                <p className={s["rc-cl"]}>
                  {"On the actuation upgrade I'll map every SOW clause to a model element before the requirements review, so gaps show up in review instead of in test. I'll start with the interface clauses, because they feed the actuation interface model directly."}
                </p>
                <div className={s["rc-msl"]}>
                  <Icon name="flag" size="xs" />
                  Milestone M1 · Model the actuation interfaces in SysML v2
                </div>
              </div>
              <div className={s.sec}>
                <div className="row">
                  <span className={s.k}>
                    EVIDENCE
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    next step
                  </span>
                </div>
                <p className={s["rc-ph"]}>
                  Nothing attached yet
                </p>
              </div>
              <div className={s.sec} style={{ borderBottom: "none" }}>
                <div className="row">
                  <span className={s.k}>
                    QUICK FEEDBACK
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    step 5
                  </span>
                </div>
                <div className={s.qf}>
                  <span>
                    Was this worth the time?
                  </span>
                  <span className="faint">
                    Not answered
                  </span>
                </div>
                <div className={s.qf}>
                  <span>
                    Would you suggest it to a colleague?
                  </span>
                  <span className="faint">
                    Not answered
                  </span>
                </div>
              </div>
              <div className={s.foot}>
                <Icon name="info" size="xs" />
                <span>
                  {"Sam can approve it, return it with feedback, or reject it. Every version is kept, and you can't approve your own work."}
                </span>
              </div>
            </aside>
          </div>
          <div className={s.fbar}>
            <span className={s.note}>
              <Icon name="clock" size="sm" />
              <span>
                {"Sam usually reviews within "}
                <b>
                  7 days
                </b>
                {". Your submission date decides whether it's on time."}
              </span>
            </span>
            <span className="sp" />
            <Button>
              <Icon name="cl" size="xs" />
              {" Back"}
            </Button>
            <Button>
              Save draft
            </Button>
            <Button variant="primary">
              {"Continue "}
              <Kbd style={{ background: "transparent", borderColor: "rgba(127,127,127,.4)" }}>
                Ctrl Enter
              </Kbd>
            </Button>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
