// GENERATED from design/html/05b-record-activity.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Record learning · Activity";

export default function View_05b_record_activity() {
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
                DRAFT · SAVED 14:21
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
            <div className={cx(s.stp, s.cur)}>
              <div className={s.ln} />
              <div className={s.hd}>
                <span className="num">
                  1
                </span>
                Activity
              </div>
              <div className={s.s}>
                Experiential · on the job
              </div>
            </div>
            <div className={s.stp}>
              <div className={s.ln} />
              <div className={s.hd}>
                <span className="num">
                  2
                </span>
                What you learned
              </div>
              <div className={s.s}>
                In your own words
              </div>
            </div>
            <div className={s.stp}>
              <div className={s.ln} />
              <div className={s.hd}>
                <span className="num">
                  3
                </span>
                {"How you'll apply it"}
              </div>
              <div className={s.s}>
                Plus a goal milestone
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
                STEP 1 OF 6
              </div>
              <h2>
                What did you do?
              </h2>
              <p className={s.lead}>
                Pick the kind of learning, then the basics. Sam sees all of this with your record.
              </p>
              <div className={s["rc-f"]}>
                <div className={s["rc-lb"]}>
                  What kind of learning was it?
                </div>
                <div className={s["rc-kinds"]}>
                  <div className={s["rc-kind"]}>
                    <div className={s.hd}>
                      <span className="radio" />
                      <TypeDot kind="formal" />
                      Formal
                    </div>
                    <p>
                      A catalog course. You pick it from the catalog and its course link comes with it.
                    </p>
                  </div>
                  <div className={s["rc-kind"]}>
                    <div className={s.hd}>
                      <span className="radio" />
                      <TypeDot kind="rel" />
                      Relational
                    </div>
                    <p>
                      With and from people: mentoring, shadowing, a review board, a conversation.
                    </p>
                  </div>
                  <div className={cx("on", s["rc-kind"])}>
                    <div className={s.hd}>
                      <span className="radio on" />
                      <TypeDot kind="exp" />
                      Experiential
                    </div>
                    <p>
                      On the job: something you did at work, and what it taught you.
                    </p>
                  </div>
                </div>
                <div className="help">
                  Experiential needs no course link: in step 4 you show the work instead, such as notes, a checklist or a recording.
                </div>
              </div>
              <div className={s["rc-f"]}>
                <div className={s["rc-lb"]}>
                  Title
                </div>
                <div className={cx("input", s["rc-ttl"])}>
                  Interpret a statement of work into standards-based artifacts
                </div>
                <div className="help">
                  {"Matches an experiential activity in the catalog, so it's linked for you."}
                </div>
              </div>
              <div className={cx(s["rc-f"], s["rc-3"])}>
                <div>
                  <div className={s["rc-lb"]}>
                    From
                  </div>
                  <div className="input">
                    <Icon name="cal" size="sm" className="c-muted" />
                    <span className="mono">
                      4 Nov 2026
                    </span>
                  </div>
                </div>
                <div>
                  <div className={s["rc-lb"]}>
                    To
                  </div>
                  <div className="input">
                    <Icon name="cal" size="sm" className="c-muted" />
                    <span className="mono">
                      14 Nov 2026
                    </span>
                  </div>
                </div>
                <div>
                  <div className={s["rc-lb"]}>
                    {"Hours "}
                    <span className={s.o}>
                      your time
                    </span>
                  </div>
                  <div className="input">
                    <span className="mono">
                      6
                    </span>
                    <span className="sp faint" style={{ fontSize: "12.5px" }}>
                      h
                    </span>
                  </div>
                </div>
              </div>
              <div className={s["rc-f"]}>
                <div className={s["rc-lb"]}>
                  {"Link to a goal "}
                  <span className={s.o}>
                    optional
                  </span>
                </div>
                <div className="input">
                  <span className={s.acc}>
                    <Icon name="target" size="sm" />
                  </span>
                  <span className="ellipsis grow">
                    Become confident using SysML v2 to describe system architecture
                  </span>
                  <Pill tone="acc" size="sm">
                    Focus
                  </Pill>
                  <Icon name="cd" size="xs" className="c-muted" />
                </div>
                <div className="help">
                  {"You can pick one of this goal's milestones in step 3."}
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
                <div className="row">
                  <span className={s.k}>
                    WHAT I LEARNED
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    next step
                  </span>
                </div>
                <p className={s["rc-ph"]}>
                  Not written yet
                </p>
              </div>
              <div className={s.sec}>
                <div className="row">
                  <span className={s.k}>
                    {"HOW I'LL APPLY IT"}
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    step 3
                  </span>
                </div>
                <p className={s["rc-ph"]}>
                  Not written yet
                </p>
              </div>
              <div className={s.sec}>
                <div className="row">
                  <span className={s.k}>
                    EVIDENCE
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    step 4
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
            <Button className={s["rc-dis"]}>
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
