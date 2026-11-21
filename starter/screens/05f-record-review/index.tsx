// GENERATED from design/html/05f-record-review.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Record learning · Review & submit";

export default function View_05f_record_review() {
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
                DRAFT · SAVED 14:37
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
            <div className={cx(s.stp, s.done)}>
              <div className={s.ln} />
              <div className={s.hd}>
                <StatusIcon status="approved" />
                Evidence
              </div>
              <div className={s.s}>
                3 items attached
              </div>
            </div>
            <div className={cx(s.stp, s.done)}>
              <div className={s.ln} />
              <div className={s.hd}>
                <StatusIcon status="approved" />
                Quick feedback
              </div>
              <div className={s.s}>
                2 of 2 answered
              </div>
            </div>
            <div className={cx(s.stp, s.cur)}>
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
              <div className={s["rc-hk"]}>
                <span className={s.k}>
                  STEP 6 OF 6
                </span>
              </div>
              <h2>
                Check it, then submit
              </h2>
              <p className={s.lead}>
                This is exactly what Sam will see when he opens it. Edit any section and you come straight back here.
              </p>
              <div className={s["rc-sv"]}>
                <div className={s["rc-sv-h"]}>
                  <Avatar initials="JL" size="sm" />
                  <b>
                    Jordan Lee
                  </b>
                  <span className="muted">
                    Systems Engineer · direct report
                  </span>
                  <Tag className="sp mono">
                    v1
                  </Tag>
                </div>
                <div className={s["rc-sv-t"]}>
                  <div className={s["rc-hk"]}>
                    <span className={s.tt}>
                      Interpret a statement of work into standards-based artifacts
                    </span>
                    <span className={s["rc-ed"]}>
                      Edit
                    </span>
                  </div>
                  <div className="row" style={{ gap: "6px", marginTop: "9px" }}>
                    <Tag>
                      <TypeDot kind="exp" />
                      Experiential
                    </Tag>
                    <Tag className="mono">
                      6 h
                    </Tag>
                    <Tag className="mono">
                      4–14 Nov
                    </Tag>
                  </div>
                </div>
                <div className={s["rc-sv-b"]}>
                  <div className={s["rc-sv-m"]}>
                    <div className={s["rc-blk"]}>
                      <div className={s["rc-hk"]}>
                        <span className={s.k}>
                          WHAT JORDAN LEARNED
                        </span>
                        <span className={s["rc-ed"]}>
                          Edit
                        </span>
                      </div>
                      <p>
                        How to break a statement of work into the artifacts our standards expect: which clauses become requirements, which become interface definitions, and which only need a compliance note. Before this I treated every clause as a requirement. Now I check each one against the artifact list first, and I ask the customer early when a clause could belong to two artifacts, or to none.
                      </p>
                    </div>
                    <div className={s["rc-blk"]}>
                      <div className={s["rc-hk"]}>
                        <span className={s.k}>
                          HOW JORDAN WILL APPLY IT
                        </span>
                        <span className={s["rc-ed"]}>
                          Edit
                        </span>
                      </div>
                      <p>
                        {"On the actuation upgrade I'll map every SOW clause to a model element before the requirements review, so gaps show up in review instead of in test. I'll start with the interface clauses, because they feed the actuation interface model directly."}
                      </p>
                    </div>
                    <div className={s["rc-blk"]}>
                      <div className={s["rc-hk"]}>
                        <span className={s.k}>
                          EVIDENCE · 3
                        </span>
                        <span className={s["rc-ed"]}>
                          Edit
                        </span>
                      </div>
                      <div className={s["rc-evr"]} style={{ marginTop: "3px" }}>
                        <Icon name="file" size="sm" className="c-muted" />
                        <span>
                          icd-review-notes.pdf
                        </span>
                        <span className="c">
                          My markup of the ICD against SOW clauses 3.2 to 3.9
                        </span>
                        <span className="m">
                          240 KB
                        </span>
                      </div>
                      <div className={s["rc-evr"]}>
                        <Icon name="file" size="sm" className="c-muted" />
                        <span>
                          artifact-checklist.xlsx
                        </span>
                        <span className="c">
                          Each SOW clause mapped to the artifact it needs
                        </span>
                        <span className="m">
                          38 KB
                        </span>
                      </div>
                      <div className={s["rc-evr"]}>
                        <Icon name="link" size="sm" className="c-muted" />
                        <span>
                          Design review recording
                        </span>
                        <span className="c">
                          I present the clause mapping from 12:40
                        </span>
                        <span className="m">
                          link
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={s["rc-sv-s"]}>
                    <div className={s["rc-hk"]}>
                      <span className={s.k}>
                        LINKED TO
                      </span>
                      <span className={s["rc-ed"]}>
                        Edit
                      </span>
                    </div>
                    <dl className={s["rc-fc"]}>
                      <dt>
                        Goal
                      </dt>
                      <dd>
                        SysML v2 goal
                      </dd>
                      <dt>
                        Milestone
                      </dt>
                      <dd>
                        M1 · Model the actuation interfaces
                      </dd>
                      <dt>
                        Submitted
                      </dt>
                      <dd>
                        <span className="mono">
                          21 Nov
                        </span>
                        {" "}
                        <span className="c-ok" style={{ fontWeight: "500" }}>
                          on time
                        </span>
                      </dd>
                      <dt>
                        Review by
                      </dt>
                      <dd className="mono">
                        28 Nov
                      </dd>
                    </dl>
                    <div className={s["rc-sep"]} />
                    <div className={s["rc-hk"]}>
                      <span className={s.k}>
                        QUICK FEEDBACK
                      </span>
                      <span className={s["rc-ed"]}>
                        Edit
                      </span>
                    </div>
                    <dl className={s["rc-fc"]}>
                      <dt>
                        Worth it
                      </dt>
                      <dd>
                        Yes, definitely
                      </dd>
                      <dt>
                        Suggest it
                      </dt>
                      <dd>
                        Yes
                      </dd>
                    </dl>
                    <div className={s["rc-qq"]}>
                      {"“Mapping each clause against the artifact checklist was the useful part. A shared checklist template would save the next person a day.” "}
                      <span className="muted">
                        {"Goes to the activity owner; not part of Sam's review."}
                      </span>
                    </div>
                  </div>
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
                  After you submit
                </span>
              </div>
              <div className={s.sec}>
                <div className={s.k}>
                  {"IN SAM'S QUEUE"}
                </div>
                <div className={s["rc-qr"]}>
                  <Avatar initials="JL" />
                  <div className="grow">
                    <div className="row">
                      <b>
                        Jordan Lee
                      </b>
                      <span className="sp mono faint" style={{ fontSize: "12px" }}>
                        in 7 days
                      </span>
                    </div>
                    <div className={cx("ellipsis", s.tt)}>
                      Interpret a statement of work into standards-based artifacts
                    </div>
                    <div className="c">
                      <TypeDot kind="exp" />
                      {"Experiential · submitted "}
                      <span className="mono">
                        21 Nov
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.sec}>
                <div className={s.k}>
                  WHAT SAM CAN DO
                </div>
                <div className={s["rc-dr"]}>
                  <StatusIcon status="approved" />
                  <div>
                    <b>
                      Approve
                    </b>
                    <span>
                      It counts toward M1 of your SysML v2 goal.
                    </span>
                  </div>
                </div>
                <div className={s["rc-dr"]}>
                  <StatusIcon status="returned" />
                  <div>
                    <b>
                      Return with feedback
                    </b>
                    <span>
                      You revise it and resubmit as v2.
                    </span>
                  </div>
                </div>
                <div className={s["rc-dr"]}>
                  <StatusIcon status="rejected" />
                  <div>
                    <b>
                      Reject
                    </b>
                    <span>
                      With a reason you can read and reply to.
                    </span>
                  </div>
                </div>
              </div>
              <div className={s.sec} style={{ borderBottom: "none" }}>
                <div className={s["rc-gl"]}>
                  <span className={s.acc}>
                    <Icon name="target" size="sm" />
                  </span>
                  <div>
                    <b>
                      Only approved learning counts toward your goal.
                    </b>
                    <span>
                      Until Sam decides, this shows as In review on your goal.
                    </span>
                  </div>
                </div>
              </div>
              <div className={s.foot}>
                <Icon name="info" size="xs" />
                <span>
                  {"Every version is kept, and you can't approve your own work."}
                </span>
              </div>
            </aside>
          </div>
          <div className={s.fbar}>
            <span className={s.note}>
              <Icon name="clock" size="sm" />
              <span>
                {"Submitting today, "}
                <b>
                  Fri 21 Nov
                </b>
                {": your submission date decides whether it's on time. Sam usually reviews within "}
                <b>
                  7 days
                </b>
                .
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
              <Icon name="send" size="xs" />
              {" Submit to Sam "}
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
