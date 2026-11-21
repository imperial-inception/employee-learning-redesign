// GENERATED from design/html/06-my-learning.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "My learning";

export default function View_06_my_learning() {
  return (
    <div className={s.v}>
      <AppShell active="find" manager>
        <main id="page">
          <header className="ph" style={{ marginBottom: "16px" }}>
            <div>
              <h1>
                Learning
              </h1>
              <p className="sub">
                {"Learning you've done and the evidence behind it. Only approved items count toward your goals."}
              </p>
            </div>
            <div className="acts">
              <div className="seg">
                <span>
                  <Icon name="search" size="xs" />
                  {" Find"}
                </span>
                <span>
                  <Icon name="route" size="xs" />
                  {" Pathways"}
                </span>
                <span className="on">
                  <Icon name="record" size="xs" />
                  {" My learning"}
                </span>
              </div>
              <Button>
                <Icon name="download" size="sm" />
                {" Export"}
              </Button>
              <Button>
                <Icon name="record" size="sm" />
                {" Record learning "}
                <Kbd>
                  R
                </Kbd>
              </Button>
            </div>
          </header>
          <div className={s.lay}>
            <section>
              <div className={s["bar-row"]}>
                <div className="tabs">
                  <span className="on">
                    {"All "}
                    <span className="n">
                      17
                    </span>
                  </span>
                  <span>
                    {"Needs you "}
                    <span className="n" style={{ color: "var(--orange)" }}>
                      1
                    </span>
                  </span>
                  <span>
                    {"In review "}
                    <span className="n">
                      1
                    </span>
                  </span>
                  <span>
                    {"Approved "}
                    <span className="n">
                      12
                    </span>
                  </span>
                  <span>
                    {"Drafts "}
                    <span className="n">
                      2
                    </span>
                  </span>
                  <span>
                    {"Rejected "}
                    <span className="n">
                      1
                    </span>
                  </span>
                </div>
                <div className={s.filt}>
                  <Icon name="filter" size="xs" />
                  Filter by title or code
                  <Kbd>
                    F
                  </Kbd>
                </div>
              </div>
              <div className="panel">
                <div className={cx(s.cols, s.lh)}>
                  <span />
                  <span>
                    Learning
                  </span>
                  <span>
                    Type
                  </span>
                  <span>
                    Submitted
                  </span>
                  <span>
                    Reviewer
                  </span>
                  <span>
                    On time
                  </span>
                  <span>
                    Ver
                  </span>
                  <span />
                </div>
                <div className="grp">
                  {"NEEDS YOU "}
                  <span className="n">
                    1
                  </span>
                </div>
                <div className={cx(s.cols, s.rw, s.open)}>
                  <StatusIcon status="returned" />
                  <span className="ellipsis">
                    <span className="t">
                      {"Clear Status & Issue Communication"}
                    </span>
                    <span className={s.code}>
                      CO-120
                    </span>
                  </span>
                  <span>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                  </span>
                  <span className="m">
                    12 Nov
                  </span>
                  <span className={s.who}>
                    <Avatar initials="SP" tone={2} />
                    Sam Patel
                  </span>
                  <span className={cx("ok", s.ot)}>
                    <Icon name="check" size="xs" />
                    On time
                  </span>
                  <span className={s.v}>
                    v1
                  </span>
                  <span className={s.chev}>
                    <Icon name="cu" size="xs" />
                  </span>
                </div>
                <div className={s.xp}>
                  <div className={cx("glow", s["xp-in"])}>
                    <div className={s["xp-h"]}>
                      <b>
                        Returned
                      </b>
                      <span>
                        {"by Sam on "}
                        <span className="mono">
                          17 Nov
                        </span>
                        {" · feedback is shared with you"}
                      </span>
                      <span className="sp mono faint" style={{ fontSize: "11.5px" }}>
                        THREAD · 2
                      </span>
                    </div>
                    <div className={s.msg}>
                      <Avatar initials="SP" tone={2} />
                      <div className="grow">
                        <div className={s.mh}>
                          <b>
                            Sam Patel
                          </b>
                          <span className="mono">
                            17 Nov · 16:05
                          </span>
                        </div>
                        <div className={s.bd}>
                          {"The structure is clear and the reflection is honest. "}
                          <mark>
                            Add one example from the CDR prep.
                          </mark>
                        </div>
                      </div>
                    </div>
                    <div className={s.msg}>
                      <Avatar initials="JL" />
                      <div className="grow">
                        <div className={s.mh}>
                          <b>
                            You
                          </b>
                          <span className="mono">
                            18 Nov · 09:12
                          </span>
                        </div>
                        <div className={s.bd}>
                          {"Will do. I'll use the actuator interface issue we escalated in week 2 of the prep."}
                        </div>
                      </div>
                    </div>
                    <div className={s["xp-a"]}>
                      <Button variant="primary">
                        {"Revise and resubmit "}
                        <Kbd style={{ background: "transparent", borderColor: "rgba(127,127,127,.4)" }}>
                          E
                        </Kbd>
                      </Button>
                      <Button>
                        <Icon name="msg" size="xs" />
                        {" Reply"}
                      </Button>
                      <Button variant="ghost">
                        View v1
                      </Button>
                      <span className={s.note}>
                        <Icon name="clip" size="xs" />
                        v1 stays on record · your resubmission becomes v2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grp">
                  {"IN REVIEW "}
                  <span className="n">
                    1
                  </span>
                </div>
                <div className={cx(s.cols, s.rw)}>
                  <StatusIcon status="submitted" />
                  <span className="ellipsis">
                    <span className="t">
                      Functional Architecture
                    </span>
                    <span className={s.code}>
                      FA-110
                    </span>
                    <span className="sub">
                      Sam reviews by 25 Nov
                    </span>
                  </span>
                  <span>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                  </span>
                  <span className="m">
                    18 Nov
                  </span>
                  <span className={s.who}>
                    <Avatar initials="SP" tone={2} />
                    Sam Patel
                  </span>
                  <span className={cx("ok", s.ot)}>
                    <Icon name="check" size="xs" />
                    On time
                  </span>
                  <span className={s.v}>
                    v1
                  </span>
                  <span className={s.chev}>
                    <Icon name="cd" size="xs" />
                  </span>
                </div>
                <div className="grp">
                  {"DRAFTS "}
                  <span className="n">
                    2
                  </span>
                </div>
                <div className={cx(s.cols, s.rw, s.dim)}>
                  <StatusIcon status="in_progress" />
                  <span className="ellipsis">
                    <span className="t">
                      Interpret a statement of work into standards-based artifacts
                    </span>
                  </span>
                  <span>
                    <Tag>
                      <TypeDot kind="exp" />
                      Experiential
                    </Tag>
                  </span>
                  <span className="m" style={{ color: "var(--faint)" }}>
                    step 4/6
                  </span>
                  <span className={cx("faint", s.who)} style={{ color: "var(--faint)" }}>
                    Not sent
                  </span>
                  <span className={cx(s.ot, s.na)}>
                    —
                  </span>
                  <span className={s.v}>
                    v1
                  </span>
                  <span className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </span>
                </div>
                <div className={cx(s.cols, s.rw, s.dim)}>
                  <StatusIcon status="in_progress" />
                  <span className="ellipsis">
                    <span className="t">
                      Shadow an interface review board
                    </span>
                    <span className="sub">
                      started 10 Nov
                    </span>
                  </span>
                  <span>
                    <Tag>
                      <TypeDot kind="rel" />
                      Relational
                    </Tag>
                  </span>
                  <span className="m" style={{ color: "var(--faint)" }}>
                    step 2/6
                  </span>
                  <span className={cx("faint", s.who)} style={{ color: "var(--faint)" }}>
                    Not sent
                  </span>
                  <span className={cx(s.ot, s.na)}>
                    —
                  </span>
                  <span className={s.v}>
                    v1
                  </span>
                  <span className={s.chev}>
                    <Icon name="cr" size="xs" />
                  </span>
                </div>
                <div className="grp">
                  {"APPROVED "}
                  <span className="n">
                    12
                  </span>
                </div>
                <div className={cx(s.cols, s.rw)}>
                  <StatusIcon status="approved" />
                  <span className="ellipsis">
                    <span className="t">
                      RFLP model walkthrough
                    </span>
                    <span className="sub">
                      with Priya Nair
                    </span>
                  </span>
                  <span>
                    <Tag>
                      <TypeDot kind="rel" />
                      Relational
                    </Tag>
                  </span>
                  <span className="m">
                    27 Oct
                  </span>
                  <span className={s.who}>
                    <Avatar initials="SP" tone={2} />
                    Sam Patel
                  </span>
                  <span className={cx("ok", s.ot)}>
                    <Icon name="check" size="xs" />
                    On time
                  </span>
                  <span className={s.v}>
                    v1
                  </span>
                  <span className={s.chev}>
                    <Icon name="cd" size="xs" />
                  </span>
                </div>
                <div className={cx(s.cols, s.rw)}>
                  <StatusIcon status="approved" />
                  <span className="ellipsis">
                    <span className="t">
                      Systems Engineering Fundamentals
                    </span>
                    <span className={s.code}>
                      SE-101
                    </span>
                  </span>
                  <span>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                  </span>
                  <span className="m">
                    10 Oct
                  </span>
                  <span className={s.who}>
                    <Avatar initials="SP" tone={2} />
                    Sam Patel
                  </span>
                  <span className={cx("ok", s.ot)}>
                    <Icon name="check" size="xs" />
                    On time
                  </span>
                  <span className={s.v}>
                    v2
                  </span>
                  <span className={s.chev}>
                    <Icon name="cd" size="xs" />
                  </span>
                </div>
                <div className={cx(s.cols, s.rw)}>
                  <StatusIcon status="approved" />
                  <span className="ellipsis">
                    <span className="t">
                      {"Verification & validation planning"}
                    </span>
                    <span className={s.code}>
                      VV-130
                    </span>
                  </span>
                  <span>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                  </span>
                  <span className="m">
                    3 Oct
                  </span>
                  <span className={s.who}>
                    <Avatar initials="DO" tone={5} />
                    Daniel Okafor
                  </span>
                  <span className={cx(s.ot, s.late)}>
                    <Icon name="clock" size="xs" />
                    2 d late
                  </span>
                  <span className={s.v}>
                    v1
                  </span>
                  <span className={s.chev}>
                    <Icon name="cd" size="xs" />
                  </span>
                </div>
                <div className={s.more}>
                  <Icon name="cd" size="xs" />
                  Show 9 more approved
                  <span className="sp faint">
                    since Jan 2026
                  </span>
                </div>
                <div className="grp">
                  {"REJECTED "}
                  <span className="n">
                    1
                  </span>
                </div>
                <div className={cx(s.cols, s.rw)} style={{ borderBottom: "none" }}>
                  <StatusIcon status="rejected" />
                  <span className="ellipsis">
                    <span className="t">
                      Requirements writing basics
                    </span>
                    <span className={s.code}>
                      RQ-100
                    </span>
                    <span className="sub">
                      duplicate of RQ-110
                    </span>
                  </span>
                  <span>
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                  </span>
                  <span className="m">
                    2 Sep
                  </span>
                  <span className={s.who}>
                    <Avatar initials="DO" tone={5} />
                    Daniel Okafor
                  </span>
                  <span className={cx("ok", s.ot)}>
                    <Icon name="check" size="xs" />
                    On time
                  </span>
                  <span className={s.v}>
                    v1
                  </span>
                  <span className={s.chev}>
                    <Icon name="cd" size="xs" />
                  </span>
                </div>
              </div>
            </section>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
