// GENERATED from design/html/05-record-new.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Record learning";

export default function View_05_record_new() {
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
                DRAFT · SAVED 14:32
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
            <div className={cx(s.stp, s.done)}>
              <div className={s.ln} />
              <div className={s.hd}>
                <StatusIcon status="approved" />
                {"How you'll apply it"}
              </div>
              <div className={s.s}>
                41 words
              </div>
            </div>
            <div className={cx(s.stp, s.cur)}>
              <div className={s.ln} />
              <div className={s.hd}>
                <span className="num">
                  4
                </span>
                Evidence
              </div>
              <div className={s.s}>
                3 items attached
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
                STEP 4 OF 6
              </div>
              <h2>
                Add evidence
              </h2>
              <p className={s.lead}>
                Show what you produced and the part you played. Files stay private to you and Sam.
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
              <div className={s.ev}>
                <div className={s.drop}>
                  <div className={s.ic}>
                    <Icon name="upload" />
                  </div>
                  <div>
                    <b>
                      Drop files here
                    </b>
                    {" "}
                    <span className="muted">
                      or
                    </span>
                    {" "}
                    <b className={s.acc}>
                      browse
                    </b>
                  </div>
                  <div className="muted">
                    PDF, Office files or images · up to 25 MB each
                  </div>
                </div>
                <div className={s.guide}>
                  <h3>
                    Good experiential evidence
                  </h3>
                  <div className={s.g}>
                    <Icon name="check" size="xs" />
                    <span>
                      Something you made: notes, a checklist, a model view
                    </span>
                  </div>
                  <div className={s.g}>
                    <Icon name="check" size="xs" />
                    <span>
                      {"Your part in it, not just the team's result"}
                    </span>
                  </div>
                  <div className={s.g}>
                    <Icon name="check" size="xs" />
                    <span>
                      What changed because of it
                    </span>
                  </div>
                  <div className={cx(s.g, s.w)}>
                    <Icon name="alert" size="xs" />
                    <span>
                      {"Link to controlled files in the approved repository; don't upload them"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={s.att}>
                <div className={s.hd}>
                  {"Attached "}
                  <span className="mono faint" style={{ fontWeight: "500", fontSize: "11.5px" }}>
                    3
                  </span>
                  <span className="sp faint" style={{ fontWeight: "400", fontSize: "12px" }}>
                    Add a line on what each item shows
                  </span>
                </div>
                <div className={s.fr}>
                  <span className={cx(s.ft, s.pdf)}>
                    PDF
                  </span>
                  <div className="grow">
                    <div className="t">
                      icd-review-notes.pdf
                    </div>
                    <div className="c">
                      My markup of the ICD against SOW clauses 3.2 to 3.9
                    </div>
                  </div>
                  <span className="m">
                    240 KB
                  </span>
                  <span className={s["ok-t"]}>
                    <Icon name="check" size="xs" />
                    Uploaded
                  </span>
                  <span className={s.x}>
                    <Icon name="x" size="sm" />
                  </span>
                </div>
                <div className={s.fr}>
                  <span className={cx(s.ft, s.xls)}>
                    XLS
                  </span>
                  <div className="grow">
                    <div className="t">
                      artifact-checklist.xlsx
                    </div>
                    <div className="c">
                      Checklist I built: each SOW clause mapped to the artifact it needs
                    </div>
                  </div>
                  <span className="m">
                    38 KB
                  </span>
                  <span className={s["ok-t"]}>
                    <Icon name="check" size="xs" />
                    Uploaded
                  </span>
                  <span className={s.x}>
                    <Icon name="x" size="sm" />
                  </span>
                </div>
                <div className={s.fr}>
                  <span className={cx("lnk", s.ft)}>
                    <Icon name="link" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Design review recording
                    </div>
                    <div className="c">
                      I present the clause mapping from 12:40 · intranet video
                    </div>
                  </div>
                  <span className="m">
                    Link
                  </span>
                  <span className={s["ok-t"]}>
                    <Icon name="check" size="xs" />
                    Reachable
                  </span>
                  <span className={s.x}>
                    <Icon name="x" size="sm" />
                  </span>
                </div>
                <div className={s.add}>
                  <Icon name="plus" size="xs" />
                  Add a link
                  <span className="sp faint">
                    Paste a URL from the intranet or a project repository
                  </span>
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
                <p>
                  How to break a statement of work into the artifacts our standards expect: which clauses become requirements, which become interface definitions, and which only need a compliance note.
                </p>
              </div>
              <div className={s.sec}>
                <div className={s.k}>
                  {"HOW I'LL APPLY IT"}
                </div>
                <p>
                  {"On the actuation upgrade I'll map every SOW clause to a model element before the requirements review, so gaps show up in review instead of in test."}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", color: "var(--muted)", marginTop: "7px" }}>
                  <Icon name="flag" size="xs" />
                  Milestone M1 · Model the actuation interfaces in SysML v2
                </div>
              </div>
              <div className={s.sec}>
                <div className={s.k}>
                  EVIDENCE · 3
                </div>
                <div className={s.er}>
                  <Icon name="file" size="sm" />
                  icd-review-notes.pdf
                  <span className="m">
                    240 KB
                  </span>
                </div>
                <div className={s.er}>
                  <Icon name="file" size="sm" />
                  artifact-checklist.xlsx
                  <span className="m">
                    38 KB
                  </span>
                </div>
                <div className={s.er}>
                  <Icon name="link" size="sm" />
                  Design review recording
                  <span className="m">
                    link
                  </span>
                </div>
              </div>
              <div className={s.sec} style={{ borderBottom: "none" }}>
                <div className="row">
                  <span className={s.k}>
                    QUICK FEEDBACK
                  </span>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    next step
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
