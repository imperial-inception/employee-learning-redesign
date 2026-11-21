// GENERATED from design/html/21-welcome.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Welcome";

export default function View_21_welcome() {
  return (
    <div className={s.v}>
      <AppShell active="today" user={{"name":"Omar Haddad","initials":"OH"}}>
        <main id="page">
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <div className="mono faint" style={{ fontSize: "11.5px", letterSpacing: ".08em", marginBottom: "8px" }}>
                FRI 21 NOV · YOUR FIRST WEEK
              </div>
              <h1>
                Welcome, Omar
              </h1>
              <p className="sub">
                Three steps to set up your learning, about 5 minutes. Do them in any order.
              </p>
            </div>
            <div className="acts">
              <Button variant="ghost">
                <Icon name="help" size="sm" />
                {" How Skill Portal works"}
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
          <div className={s.top}>
            <section className={cx("panel glow", s.gs)}>
              <div className={s["gs-h"]}>
                <div className="grow">
                  <h2>
                    Get started
                  </h2>
                  <div className="c">
                    Starters below are for the Systems engineering job family. Nothing is added until you choose.
                  </div>
                </div>
                <span className="mono muted" style={{ fontSize: "12px" }}>
                  0 of 3 done
                </span>
                <span className={s.seg3}>
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div className={cx(s.step, s.cur)}>
                <span className="num">
                  1
                </span>
                <div>
                  <div className={s.sh}>
                    <h3>
                      Pick a focus goal
                    </h3>
                    <span className="sp">
                      One goal leads this page
                    </span>
                  </div>
                  <p>
                    A goal is what you want to be able to do. Pick a starter or write your own; you can edit it any time.
                  </p>
                  <div className={s.opts}>
                    <div className={cx(s.op, s.hl)}>
                      <Icon name="target" size="sm" className="c-accent" />
                      <div className="grow">
                        <div className="t">
                          Learn how MBSE is used on our programs
                        </div>
                        <div className="why">
                          <b>
                            Why
                          </b>
                          the usual first goal for new systems engineers
                        </div>
                      </div>
                      <span className="m">
                        4 activities · ~9 h
                        <small>
                          due 13 Feb · short-term
                        </small>
                      </span>
                      <Button variant="primary" size="sm">
                        Use this goal
                      </Button>
                    </div>
                    <div className={s.op}>
                      <Icon name="target" size="sm" />
                      <div className="grow">
                        <div className="t">
                          Get fluent in requirements traceability
                        </div>
                        <div className="why">
                          <b>
                            Why
                          </b>
                          in the Job catalog expectations for your job title
                        </div>
                      </div>
                      <span className="m">
                        3 activities · ~7 h
                        <small>
                          due 31 Jan · short-term
                        </small>
                      </span>
                      <Button size="sm">
                        Use this goal
                      </Button>
                    </div>
                    <div className={s.op}>
                      <Icon name="target" size="sm" />
                      <div className="grow">
                        <div className="t">
                          Read and review an interface control document
                        </div>
                        <div className="why">
                          <b>
                            Why
                          </b>
                          {"suggested by Jordan Lee for his team's new starters"}
                        </div>
                      </div>
                      <span className="m">
                        3 activities · ~6 h
                        <small>
                          due 16 Jan · short-term
                        </small>
                      </span>
                      <Button size="sm">
                        Use this goal
                      </Button>
                    </div>
                  </div>
                  <div className={s.own}>
                    <Icon name="plus" size="xs" />
                    Write my own goal
                    <Kbd>
                      G
                    </Kbd>
                  </div>
                </div>
              </div>
              <div className={s.step}>
                <span className="num">
                  2
                </span>
                <div>
                  <div className={s.sh}>
                    <h3>
                      Adopt a pathway
                    </h3>
                    <span className="sp">
                      A ready-made sequence of learning
                    </span>
                  </div>
                  <div className={s.opts}>
                    <div className={s.op}>
                      <Icon name="route" size="sm" />
                      <div className="grow">
                        <div className="row" style={{ gap: "8px" }}>
                          <span className="t">
                            Systems engineering onboarding
                          </span>
                          <Pill tone="neu">
                            First 90 days
                          </Pill>
                        </div>
                        <div className="c muted" style={{ fontSize: "12.5px", marginTop: "2px" }}>
                          2 milestones · 6 activities · about 10 h
                        </div>
                      </div>
                      <span className="m">
                        <Icon name="users" size="xs" className={s["c-faint"]} />
                        {" "}
                        <span className="mono">
                          318
                        </span>
                        {" colleagues"}
                      </span>
                      <Button size="sm">
                        Preview
                      </Button>
                    </div>
                    <div className={s.op}>
                      <Icon name="route" size="sm" />
                      <div className="grow">
                        <div className="t">
                          {"MBSE foundations & digital-thread integration"}
                        </div>
                        <div className="c muted" style={{ fontSize: "12.5px", marginTop: "2px" }}>
                          3 milestones · 5 activities · about 12 h
                        </div>
                      </div>
                      <span className="m">
                        <Icon name="users" size="xs" className={s["c-faint"]} />
                        {" "}
                        <span className="mono">
                          214
                        </span>
                        {" colleagues"}
                      </span>
                      <Button size="sm">
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.step}>
                <span className="num">
                  3
                </span>
                <div>
                  <div className={s.sh}>
                    <h3>
                      Make your skills visible
                    </h3>
                    <span className="sp">
                      Optional
                    </span>
                  </div>
                  <div className={s.vis}>
                    <Icon name="eyeoff" size="sm" className="c-muted" />
                    <div className="grow">
                      <div className="t">
                        {"Off. Colleagues can't find you by skill yet."}
                      </div>
                      <div className="c">
                        Turn it on to appear in Colleagues. You pick which skills show and can turn it off any time.
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Choose what to share
                    </Button>
                    <span className="toggle" />
                  </div>
                </div>
              </div>
            </section>
            <div className={s.rc}>
              <section className="panel inbox">
                <div className="panel-h">
                  <h2>
                    Inbox
                  </h2>
                </div>
                <div className={s.one}>
                  <Icon name="inbox" size="sm" className="c-muted" />
                  <span>
                    {"Nothing needs you yet. Returned work and Jordan's reviews will show here."}
                  </span>
                </div>
                <div className={s.one}>
                  <Icon name="info" size="sm" className="c-muted" />
                  <span>
                    {"Nothing required in Skill Portal. Company-wide training lives in the LMS. "}
                    <a className={s.lms}>
                      Open the LMS ↗
                    </a>
                  </span>
                </div>
              </section>
              <section className={cx("panel", s.ab)}>
                <div className="panel-h">
                  <h2>
                    About you
                  </h2>
                  <span className="lnk">
                    {"Profile "}
                    <Icon name="cr" size="xs" />
                  </span>
                </div>
                <div className="r">
                  <span className={s.l}>
                    Manager
                  </span>
                  <span className={s.v}>
                    <Avatar initials="JL" />
                    Jordan Lee
                    <span className={s.src}>
                      HR directory
                    </span>
                  </span>
                </div>
                <div className="r">
                  <span className={s.l}>
                    Job title
                  </span>
                  <span className={s.v}>
                    <span className="ellipsis">
                      Systems Engineer
                    </span>
                    <span className={s.src}>
                      HR directory
                    </span>
                  </span>
                </div>
                <div className="r">
                  <span className={s.l}>
                    Started
                  </span>
                  <span className={s.v}>
                    <span className="mono" style={{ fontSize: "12.5px" }}>
                      17 Nov 2026
                    </span>
                    <span className={s.src}>
                      HR directory
                    </span>
                  </span>
                </div>
                <div className="r">
                  <span className={s.l}>
                    Professional role
                  </span>
                  <span className={s.v}>
                    <span className="faint">
                      Not recorded
                    </span>
                    <span className={s.src}>
                      Jordan assigns this
                    </span>
                  </span>
                </div>
              </section>
              <section className={cx("panel", s.how)}>
                <div className={s.k}>
                  HOW LEARNING COUNTS
                </div>
                <div className={s.flow}>
                  <span>
                    Do it
                  </span>
                  <Icon name="cr" size="xs" />
                  <span>
                    Record
                  </span>
                  <Icon name="cr" size="xs" />
                  <span>
                    Jordan reviews
                  </span>
                  <Icon name="cr" size="xs" />
                  <span className={s.okk}>
                    <StatusIcon status="approved" />
                    Approved
                  </span>
                </div>
                <p>
                  {"Only approved learning counts toward goals. On time is judged by the day you submit, not the day it's reviewed."}
                </p>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
