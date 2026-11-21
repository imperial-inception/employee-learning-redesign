// GENERATED from design/html/15-admin-rules.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Rules and populations";

export default function View_15_admin_rules() {
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
            <span className="on">
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
            <span>
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
            <section className={cx("panel", s.pl)}>
              <div className="panel-h">
                <h2>
                  Populations
                </h2>
                <span className="cnt">
                  by priority
                </span>
                <span className="lnk">
                  <Icon name="plus" size="xs" />
                  {" New"}
                </span>
              </div>
              <div className="li on">
                <span className={s.pr}>
                  1
                </span>
                <div className="grow">
                  <div className="t">
                    {"Systems Engineering & Integration"}
                  </div>
                  <div className="c">
                    3 conditions · framework v1
                  </div>
                </div>
                <span className="m">
                  214
                </span>
              </div>
              <div className="li">
                <span className={s.pr}>
                  2
                </span>
                <div className="grow">
                  <div className="t">
                    Digital Thread
                  </div>
                  <div className="c">
                    2 conditions · framework v1
                  </div>
                </div>
                <span className="m">
                  96
                </span>
              </div>
              <div className="li">
                <span className={s.pr}>
                  3
                </span>
                <div className="grow">
                  <div className="t">
                    {"Requirements & Verification"}
                  </div>
                  <div className="c">
                    2 conditions · framework v1
                  </div>
                </div>
                <span className="m">
                  158
                </span>
              </div>
              <div className="li">
                <span className={s.pr}>
                  4
                </span>
                <div className="grow">
                  <div className="t">
                    Model-Based Design
                  </div>
                  <div className="c">
                    2 conditions · framework v2 draft
                  </div>
                </div>
                <span className="m">
                  121
                </span>
              </div>
              <div className="li">
                <span className={s.pr}>
                  5
                </span>
                <div className="grow">
                  <div className="t">
                    Other Systems Engineering
                  </div>
                  <div className="c">
                    1 condition · framework v1
                  </div>
                </div>
                <span className="m">
                  412
                </span>
              </div>
              <div className={cx("li", s.none)}>
                <span className={s.pr} style={{ background: "transparent", boxShadow: "inset 0 0 0 1px var(--line-2)" }}>
                  –
                </span>
                <div className="grow">
                  <div className="t">
                    In no population
                  </div>
                  <div className="c">
                    See no framework yet
                  </div>
                </div>
                <span className="m">
                  37
                </span>
              </div>
              <div className={s.ft}>
                <Icon name="alert" size="xs" />
                <span>
                  {"Counts use HR directory data from 20 Nov. Today's refresh failed at 00:57."}
                </span>
              </div>
            </section>
            <section className={cx("panel", s.det)}>
              <div className="panel-h">
                <span className={s.pr}>
                  1
                </span>
                <h2>
                  {"Systems Engineering & Integration"}
                </h2>
                <span className="sp" />
                <Button variant="ghost" size="sm">
                  Rename
                </Button>
                <Button variant="ghost" size="sm" style={{ padding: "0 6px" }}>
                  <Icon name="more" size="sm" />
                </Button>
              </div>
              <div className={s.body}>
                <div>
                  <div>
                    <h3 className={s.k}>
                      RULE
                    </h3>
                    <div className={s.rule}>
                      <div className={s.lead}>
                        An employee is in this population when
                      </div>
                      <div className={s.cond}>
                        <span className={s.cj} />
                        <span className={s.fld}>
                          Job family
                          <Icon name="cd" size="xs" />
                        </span>
                        <span className={s.op}>
                          is
                        </span>
                        <span className={s.val}>
                          Systems Engineering
                        </span>
                        <span className={s.x}>
                          <Icon name="x" size="xs" />
                        </span>
                      </div>
                      <div className={s.cond}>
                        <span className={s.cj}>
                          AND
                        </span>
                        <span className={s.fld}>
                          Occupation
                          <Icon name="cd" size="xs" />
                        </span>
                        <span className={s.op}>
                          is
                        </span>
                        <span className={s.val}>
                          Systems Integration
                        </span>
                        <span className={s.x}>
                          <Icon name="x" size="xs" />
                        </span>
                      </div>
                      <div className={cx(s.cond, s.new)}>
                        <span className={s.cj}>
                          AND
                        </span>
                        <span className={s.fld}>
                          Skill code
                          <Icon name="cd" size="xs" />
                        </span>
                        <span className={s.op}>
                          is
                        </span>
                        <span className={s.val}>
                          <span className="mono">
                            SE-08
                          </span>
                          Systems integration
                        </span>
                        <span className={s.tg}>
                          UNSAVED
                        </span>
                        <span className={s.x} style={{ marginLeft: "10px" }}>
                          <Icon name="x" size="xs" />
                        </span>
                      </div>
                      <div className={s.addc}>
                        <Icon name="plus" size="xs" />
                        Add condition
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={s.match}>
                      <span className="big">
                        214
                      </span>
                      <span className={s.lb}>
                        employees match
                      </span>
                      <span className={s.dl}>
                        <span className="mono">
                          9
                        </span>
                        {" fewer than the saved rule"}
                      </span>
                    </div>
                    <div className={s.ppl}>
                      <div className="li">
                        <Avatar initials="MG" tone={2} />
                        <div className="grow">
                          <div className="t">
                            Maria Gomez
                          </div>
                        </div>
                        <span className="c muted">
                          {"Integration Engineer · Integration & Test"}
                        </span>
                      </div>
                      <div className="li">
                        <Avatar initials="WC" tone={5} />
                        <div className="grow">
                          <div className="t">
                            Wei Chen
                          </div>
                        </div>
                        <span className="c muted">
                          Integration Lead · Digital Thread
                        </span>
                      </div>
                      <div className="li">
                        <Avatar initials="AK" tone={3} />
                        <div className="grow">
                          <div className="t">
                            Alex Kim
                          </div>
                        </div>
                        <span className="c muted">
                          {"Systems Engineer · Integration & Test"}
                        </span>
                      </div>
                      <div className={s.more}>
                        <span>
                          + 211 more
                        </span>
                        <b>
                          {"Preview all 214 "}
                          <Icon name="arrow" size="xs" />
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="banner warn">
                    <Icon name="alert" size="sm" />
                    <div className="grow">
                      <div className="t">
                        18 employees also match Digital Thread
                      </div>
                      <div className="c">
                        {"Systems Engineering & Integration wins by priority (1 before 2), so they get this framework and its required learning."}
                      </div>
                      <div className={s.ba}>
                        <Button size="sm">
                          See the 18
                        </Button>
                        <Button variant="ghost" size="sm">
                          Change priority
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className={s.k}>
                      {"FRAMEWORK "}
                      <span className="lnk">
                        {"Change "}
                        <Icon name="cd" size="xs" />
                      </span>
                    </h3>
                    <div className={s.fw}>
                      <span className={s.ic}>
                        <Icon name="grid" size="sm" />
                      </span>
                      <div className="grow">
                        <div className="t">
                          Competency framework v1
                        </div>
                        <div className="c">
                          <span className="mono">
                            42
                          </span>
                          {" competencies · course levels "}
                          <span className="mono">
                            L1–L5
                          </span>
                          {" · used by "}
                          <span className="mono">
                            1,001
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={s.k}>
                      {"REQUIRED LEARNING "}
                      <span style={{ color: "var(--faint)" }}>
                        2
                      </span>
                    </h3>
                    <div className={s.rq}>
                      <div className={s.rqi}>
                        <div className={s.hd}>
                          <Icon name="flag" size="sm" />
                          <b>
                            Interface Management
                          </b>
                          <span className={s.cd}>
                            IM-201
                          </span>
                          <span className={s.due}>
                            by 31 Mar 2027
                          </span>
                        </div>
                        <div className={s.rs}>
                          <span className={s.q}>
                            Reason:
                          </span>
                          {" integration leads own interface control from Q2 2027."}
                        </div>
                        <div className={s.ap}>
                          <Avatar initials="PN" tone={4} />
                          {"Approved by "}
                          <b>
                            Priya Nair
                          </b>
                          {" · 2 Oct 2026"}
                        </div>
                      </div>
                      <div className={s.rqi}>
                        <div className={s.hd}>
                          <Icon name="flag" size="sm" />
                          <b>
                            Configuration Control
                          </b>
                          <span className={s.cd}>
                            CM-140
                          </span>
                          <span className={s.due}>
                            60 days after joining
                          </span>
                        </div>
                        <div className={s.rs}>
                          <span className={s.q}>
                            Reason:
                          </span>
                          {" internal audit found design changes made without configuration review."}
                        </div>
                        <div className={s.ap}>
                          <Avatar initials="SP" tone={6} />
                          {"Approved by "}
                          <b>
                            Sam Patel
                          </b>
                          {" · 14 Aug 2026"}
                        </div>
                      </div>
                      <div className={s.add}>
                        <Icon name="plus" size="xs" />
                        Require learning
                        <span className="sp">
                          <Icon name="lock" size="xs" />
                          Removing one needs a second approver
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
                  {" · added "}
                  <span className="mono">
                    Skill code is SE-08
                  </span>
                  {" · 9 fewer employees match"}
                </span>
                <span className="sp" />
                <Button>
                  Discard
                </Button>
                <Button variant="primary">
                  {"Save changes "}
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
