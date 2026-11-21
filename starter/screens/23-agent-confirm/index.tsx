// GENERATED from design/html/23-agent-confirm.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, Pill, Tag, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Connected agents";

export default function View_23_agent_confirm() {
  return (
    <div className={s.v}>
      <AppShell active="me" manager>
        <main id="page">
          <div className="crumbs">
            <Icon name="user" size="xs" />
            <span>
              Profile
            </span>
            <span className="sl">
              /
            </span>
            <span style={{ color: "var(--text-2)" }}>
              Connected agents
            </span>
          </div>
          <header className="ph" style={{ marginBottom: "20px" }}>
            <div>
              <h1>
                Connected agents
              </h1>
              <p className="sub">
                Assistants you connect act with your permissions for up to 1 hour. They can read and propose; only you approve changes.
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="plus" size="sm" />
                {" Connect an assistant"}
              </Button>
            </div>
          </header>
          <div className={s.lay}>
            <div className={s.col}>
              <section className={cx("panel", s.conn)}>
                <div className={s.ch}>
                  <span className={s.cic}>
                    <Icon name="cmd" />
                  </span>
                  <div className="grow">
                    <div className="row" style={{ gap: "9px" }}>
                      <b>
                        Desktop assistant (MCP)
                      </b>
                      <Pill tone="ok">
                        <span className={s.live} />
                        Active
                      </Pill>
                    </div>
                    <div className="c">
                      Connected from your work PC · acts as Jordan Lee, with your permissions and no more
                    </div>
                  </div>
                  <Button danger>
                    <Icon name="x" size="sm" />
                    {" Revoke"}
                  </Button>
                </div>
                <div className={s.cf}>
                  <div className={s.cell}>
                    <div className={s.k}>
                      STARTED
                    </div>
                    <div className={s.v}>
                      14:31
                    </div>
                  </div>
                  <div className={s.cell}>
                    <div className={s.k}>
                      EXPIRES
                    </div>
                    <div className={s.v}>
                      {"15:31 "}
                      <small>
                        38 min left
                      </small>
                    </div>
                    <div className={s.tbar}>
                      <span />
                    </div>
                  </div>
                  <div className={s.cell}>
                    <div className={s.k}>
                      SCOPES
                    </div>
                    <div className={s.scopes}>
                      <Tag>
                        <Icon name="check" size="xs" />
                        Read learning
                      </Tag>
                      <Tag>
                        <Icon name="check" size="xs" />
                        Propose changes
                      </Tag>
                      <Tag className={s.no}>
                        <Icon name="x" size="xs" />
                        Write without you
                      </Tag>
                    </div>
                  </div>
                </div>
              </section>
              <section className={cx("panel glow", s.pend)}>
                <div className="panel-h">
                  <h2>
                    Waiting for your approval
                  </h2>
                  <span className="cnt">
                    2
                  </span>
                  <span className="lnk mono" style={{ fontSize: "11.5px" }}>
                    PROPOSED 14:32:31
                  </span>
                </div>
                <div className={s.note}>
                  <Icon name="shield" size="sm" className={s.ic} />
                  <span>
                    <b>
                      The agent can only propose.
                    </b>
                    {" Nothing changes until you approve here."}
                  </span>
                </div>
                <div className={cx("sel", s.chg)}>
                  <div className={s["ch-h"]}>
                    <span className="n">
                      1
                    </span>
                    <div className="grow">
                      <div className="t">
                        Link “Interface Management IM-201” to goal “SysML v2”
                      </div>
                      <div className="c">
                        Goal · Become confident using SysML v2 to describe system architecture
                      </div>
                    </div>
                    <Button size="sm">
                      {"Decline "}
                      <Kbd>
                        D
                      </Kbd>
                    </Button>
                    <Button variant="primary" size="sm">
                      <Icon name="check" size="xs" />
                      {" Approve "}
                      <Kbd>
                        A
                      </Kbd>
                    </Button>
                  </div>
                  <div className={s.diff}>
                    <div className={cx(s.dr, s.hd)}>
                      <span className={s.k}>
                        FIELD
                      </span>
                      <span className={s.k}>
                        BEFORE
                      </span>
                      <span />
                      <span className={s.k}>
                        AFTER
                      </span>
                    </div>
                    <div className={s.dr}>
                      <span className={s.f}>
                        Linked learning
                      </span>
                      <span className={s.b}>
                        5 items
                      </span>
                      <Icon name="arrow" size="xs" className={s.ar} />
                      <span className="a">
                        6 items
                        <span className={s.add}>
                          <span className={s.pl}>
                            +
                          </span>
                          Interface Management
                          <span className={s.code}>
                            IM-201
                          </span>
                          <span className="sp">
                            Formal · 2 h
                          </span>
                        </span>
                      </span>
                    </div>
                    <div className={s.dr}>
                      <span className={s.f}>
                        Progress
                      </span>
                      <span className={s.b}>
                        <s>
                          2 of 5 approved
                        </s>
                      </span>
                      <Icon name="arrow" size="xs" className={s.ar} />
                      <span className="a">
                        <span className={s.hl}>
                          2 of 6 approved
                        </span>
                        {" "}
                        <span className="muted" style={{ fontSize: "12px" }}>
                          IM-201 counts once approved
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={s.rs}>
                    <span className={s.k}>
                      {"AGENT'S REASON"}
                    </span>
                    <q>
                      IM-201 covers interfaces between architecture elements, which your goal is about.
                    </q>
                  </div>
                </div>
                <div className={s.chg}>
                  <div className={s["ch-h"]}>
                    <span className="n">
                      2
                    </span>
                    <div className="grow">
                      <div className="t">
                        Add 2 activities to your plan
                      </div>
                      <div className="c">
                        Plan · Up next · not linked to a goal
                      </div>
                    </div>
                    <Button size="sm">
                      Decline
                    </Button>
                    <Button size="sm">
                      <Icon name="check" size="xs" />
                      {" Approve"}
                    </Button>
                  </div>
                  <div className={s.diff}>
                    <div className={s.dr}>
                      <span className={s.f}>
                        Up next
                      </span>
                      <span className={s.b}>
                        4 activities
                      </span>
                      <Icon name="arrow" size="xs" className={s.ar} />
                      <span className="a">
                        {"6 activities "}
                        <span className={s.add}>
                          <span className={s.pl}>
                            +
                          </span>
                          {"Develop System & Component ICS"}
                          <span className="sp">
                            Formal · 1.5 h
                          </span>
                        </span>
                        <span className={s.add}>
                          <span className={s.pl}>
                            +
                          </span>
                          MBSE community of practice
                          <span className="sp">
                            Relational · monthly
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={s.rs}>
                    <span className={s.k}>
                      {"AGENT'S REASON"}
                    </span>
                    <q>
                      Usual next steps after IM-201 for an architecture goal.
                    </q>
                  </div>
                </div>
              </section>
            </div>
            <div className={s.col}>
              <section className={cx("panel", s.log)}>
                <div className="panel-h">
                  <h2>
                    Activity log
                  </h2>
                  <span className="cnt">
                    8
                  </span>
                  <span className="lnk">
                    This session
                  </span>
                </div>
                <div className="r">
                  <span className={s.tm}>
                    14:31:08
                  </span>
                  <Icon name="link" size="sm" />
                  <div>
                    <div className="t">
                      <b>
                        Connected
                      </b>
                      {" with 2 scopes"}
                    </div>
                    <div className="c">
                      You signed in on the assistant
                    </div>
                  </div>
                </div>
                <div className="r">
                  <span className={s.tm}>
                    14:31:40
                  </span>
                  <Icon name="eye" size="sm" />
                  <div>
                    <div className="t">
                      <b>
                        Read
                      </b>
                      {" your plan"}
                    </div>
                    <div className="c">
                      2 goals, 3 pathways
                    </div>
                  </div>
                </div>
                <div className="r">
                  <span className={s.tm}>
                    14:31:52
                  </span>
                  <Icon name="eye" size="sm" />
                  <div>
                    <div className="t">
                      <b>
                        Read
                      </b>
                      {" goal “SysML v2”"}
                    </div>
                    <div className="c">
                      Title, due date, linked learning
                    </div>
                  </div>
                </div>
                <div className="r">
                  <span className={s.tm}>
                    14:32:05
                  </span>
                  <Icon name="search" size="sm" />
                  <div>
                    <div className="t">
                      <b>
                        Searched
                      </b>
                      {" the catalog"}
                    </div>
                    <div className="c">
                      “interface management” · 12 results
                    </div>
                  </div>
                </div>
                <div className="r">
                  <span className={s.tm}>
                    14:32:10
                  </span>
                  <Icon name="eye" size="sm" />
                  <div>
                    <div className="t">
                      <b>
                        Read
                      </b>
                      {" your approved learning"}
                    </div>
                    <div className="c">
                      9 items
                    </div>
                  </div>
                </div>
                <div className={cx("r", s.wait)}>
                  <span className={s.tm}>
                    14:32:31
                  </span>
                  <Icon name="send" size="sm" className="c-accent" />
                  <div>
                    <div className="t">
                      <b>
                        Proposed
                      </b>
                      {" 2 changes"}
                    </div>
                    <div className="c">
                      Waiting for you
                    </div>
                  </div>
                </div>
                <div className={cx("r", s.bad)}>
                  <span className={s.tm}>
                    14:33:02
                  </span>
                  <Icon name="x" size="sm" className="c-danger" />
                  <div>
                    <div className="t">
                      <b>
                        Denied
                      </b>
                      {" read Priya Nair's plan"}
                    </div>
                    <div className="c">
                      Outside “read learning”: team data
                    </div>
                  </div>
                </div>
                <div className={cx("r", s.bad)}>
                  <span className={s.tm}>
                    14:35:47
                  </span>
                  <Icon name="x" size="sm" className="c-danger" />
                  <div>
                    <div className="t">
                      <b>
                        Denied
                      </b>
                      {" write to your plan"}
                    </div>
                    <div className="c">
                      Writes go through approval only
                    </div>
                  </div>
                </div>
                <div className={s.ft}>
                  <Icon name="file" size="xs" className={s.mt2} />
                  <span>
                    {"Kept 90 days. Changes you approve are also written to your organization's audit log."}
                  </span>
                </div>
              </section>
              <section className={cx("panel", s.rules)}>
                <div className={cx("r", s.intro)}>
                  <Icon name="info" size="xs" />
                  <span>
                    An agent is an assistant, like a desktop app, that you let use Skill Portal for you through MCP.
                  </span>
                </div>
                <div className="r">
                  <Icon name="check" size="xs" />
                  <span>
                    Acts with your permissions, never more.
                  </span>
                </div>
                <div className="r">
                  <Icon name="check" size="xs" />
                  <span>
                    {"Never sees private manager notes or other people's records."}
                  </span>
                </div>
                <div className="r">
                  <Icon name="check" size="xs" />
                  <span>
                    Ends at 15:31 even mid-task. Reconnect from the assistant.
                  </span>
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
