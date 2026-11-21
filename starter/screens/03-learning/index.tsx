// GENERATED from design/html/03-learning.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Learning";

export default function View_03_learning() {
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
                536 learning items from the LMS, the content library, the Engineering Academy and the intranet.
              </p>
            </div>
            <div className="acts">
              <div className="seg">
                <span className="on">
                  <Icon name="search" size="xs" />
                  {" Find"}
                </span>
                <span>
                  <Icon name="route" size="xs" />
                  {" Pathways"}
                </span>
                <span>
                  <Icon name="record" size="xs" />
                  {" My learning"}
                </span>
              </div>
            </div>
          </header>
          <div className={s.sbar}>
            <Icon name="search" size="lg" />
            <span>
              interface integration
            </span>
            <span className="sp ai-mark">
              <Icon name="spark" size="xs" />
              {" Advisor on"}
            </span>
            <Kbd>
              Enter
            </Kbd>
          </div>
          <div className={s.lay}>
            <aside>
              <div className={s.fs}>
                <h3>
                  TYPE
                </h3>
                <div className={s.fo}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Tag style={{ border: "none", padding: "0" }}>
                    <TypeDot kind="formal" />
                    Formal
                  </Tag>
                  <span className="n">
                    18
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Tag style={{ border: "none", padding: "0" }}>
                    <TypeDot kind="rel" />
                    Relational
                  </Tag>
                  <span className="n">
                    3
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <Tag style={{ border: "none", padding: "0" }}>
                    <TypeDot kind="exp" />
                    Experiential
                  </Tag>
                  <span className="n">
                    4
                  </span>
                </div>
              </div>
              <div className={s.fs}>
                <h3>
                  FOR ME
                </h3>
                <div className={s.fo}>
                  <span className="toggle" />
                  Required for my role
                  <span className="n">
                    0
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="toggle on" />
                  {"Hide what I've done"}
                </div>
              </div>
              <div className={s.fs}>
                <h3>
                  TIME
                </h3>
                <div className={s.fo}>
                  <span className="check" />
                  Under 1 hour
                  <span className="n">
                    9
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  1–4 hours
                  <span className="n">
                    12
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Longer
                  <span className="n">
                    4
                  </span>
                </div>
              </div>
              <div className={s.fs}>
                <h3>
                  PROVIDER
                </h3>
                <div className={s.fo}>
                  <span className="check" />
                  LMS
                  <span className="n">
                    14
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Academy
                  <span className="n">
                    7
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Library
                  <span className="n">
                    4
                  </span>
                </div>
              </div>
            </aside>
            <section>
              <div className="row" style={{ marginBottom: "10px", fontSize: "13px" }}>
                <b>
                  24 results
                </b>
                <span className="muted">
                  for “interface integration” · 1 hidden (done)
                </span>
                <span className="sp muted">
                  {"Sort "}
                  <b style={{ color: "var(--text)", fontWeight: "550" }}>
                    Best match
                  </b>
                  {" "}
                  <Icon name="cd" size="xs" />
                </span>
              </div>
              <div className={cx("panel", s.res)}>
                <div className="li hover">
                  <StatusIcon status="not_started" />
                  <div className="grow">
                    <div className="t">
                      {"Interface Management "}
                      <span className="mono faint" style={{ fontSize: "11.5px" }}>
                        IM-201
                      </span>
                    </div>
                    <div className="why" style={{ marginTop: "4px" }}>
                      <b>
                        Why
                      </b>
                      “interface” in title and description · fits your focus goal
                    </div>
                    <div className={s.tg}>
                      <Tag>
                        <TypeDot kind="formal" />
                        Formal
                      </Tag>
                      <Tag className="mono">
                        2 h
                      </Tag>
                      <Tag>
                        Academy
                      </Tag>
                      <Tag className="mono">
                        L2
                      </Tag>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button variant="primary" size="sm">
                      <Icon name="plus" size="xs" />
                      {" Add to plan"}
                    </Button>
                    <Button size="sm">
                      {"Open "}
                      <Icon name="ext" size="xs" />
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <StatusIcon status="not_started" />
                  <div className="grow">
                    <div className="t">
                      {"Develop System & Component ICS"}
                    </div>
                    <div className="why" style={{ marginTop: "4px" }}>
                      <b>
                        Why
                      </b>
                      description: “interface control specifications”
                    </div>
                    <div className={s.tg}>
                      <Tag>
                        <TypeDot kind="formal" />
                        Formal
                      </Tag>
                      <Tag className="mono">
                        1.5 h
                      </Tag>
                      <Tag>
                        LMS
                      </Tag>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button size="sm">
                      <Icon name="plus" size="xs" />
                      {" Add"}
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <StatusIcon status="in_progress" />
                  <div className="grow">
                    <div className="row" style={{ gap: "8px" }}>
                      <span className="t">
                        System Integration Overview
                      </span>
                      <Pill tone="acc">
                        In your plan
                      </Pill>
                    </div>
                    <div className="why" style={{ marginTop: "4px" }}>
                      <b>
                        Why
                      </b>
                      step 2 of your pathway “Systems integration and verification”
                    </div>
                    <div className={s.tg}>
                      <Tag>
                        <TypeDot kind="formal" />
                        Formal
                      </Tag>
                      <Tag className="mono">
                        1 h
                      </Tag>
                      <Tag>
                        LMS
                      </Tag>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button variant="ghost" size="sm">
                      View in plan
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <StatusIcon status="not_started" />
                  <div className="grow">
                    <div className="t">
                      Multi-tool practice for moderate issue resolution
                    </div>
                    <div className="why" style={{ marginTop: "4px" }}>
                      <b>
                        Why
                      </b>
                      description: “cross-functional interface issues”
                    </div>
                    <div className={s.tg}>
                      <Tag>
                        <TypeDot kind="exp" />
                        Experiential
                      </Tag>
                      <Tag className="mono">
                        L2
                      </Tag>
                    </div>
                    <div className={s.note}>
                      <Icon name="brief" size="xs" />
                      <span>
                        Done on the job: you record evidence and your manager reviews it. No course link needed.
                      </span>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button size="sm">
                      <Icon name="plus" size="xs" />
                      {" Add"}
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <Icon name="users" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Interface review board: shadowing
                    </div>
                    <div className="why" style={{ marginTop: "4px" }}>
                      <b>
                        Why
                      </b>
                      relational learning on interface decisions
                    </div>
                    <div className={s.tg}>
                      <Tag>
                        <TypeDot kind="rel" />
                        Relational
                      </Tag>
                      <Tag>
                        with a lead engineer
                      </Tag>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button size="sm">
                      <Icon name="plus" size="xs" />
                      {" Add"}
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            <aside className={cx("panel glow", s.adv)}>
              <div className={s.hd}>
                <span className="ai-mark">
                  <Icon name="spark" size="sm" />
                  {" Advisor"}
                </span>
                <span className="sp mono faint" style={{ fontSize: "11.5px" }}>
                  CATALOG ONLY · TURN 1/8
                </span>
              </div>
              <div className={s.ans}>
                {"For interface integration, start with "}
                <b>
                  Interface Management
                </b>
                {" "}
                <span className="cite">
                  1
                </span>
                {". It covers defining, controlling and coordinating interfaces across stakeholders. Then take "}
                <b>
                  {"Develop System & Component ICS"}
                </b>
                {" "}
                <span className="cite">
                  2
                </span>
                {" to write interface control specifications."}
                <br />
                <br />
                {" You already have "}
                <b>
                  Systems integration and verification
                </b>
                {" "}
                <span className="cite">
                  3
                </span>
                {" in your plan; its step 2 covers the integration overview, so you don't need another pathway."}
              </div>
              <div className={s.src}>
                <span className="cite">
                  1
                </span>
                <span className="grow ellipsis">
                  Interface Management
                </span>
                <Button size="sm">
                  <Icon name="plus" size="xs" />
                  {" Add"}
                </Button>
              </div>
              <div className={s.src}>
                <span className="cite">
                  2
                </span>
                <span className="grow ellipsis">
                  {"Develop System & Component ICS"}
                </span>
                <Button size="sm">
                  <Icon name="plus" size="xs" />
                  {" Add"}
                </Button>
              </div>
              <div className={s.src}>
                <span className="cite">
                  3
                </span>
                <span className="grow ellipsis">
                  Systems integration and verification
                </span>
                <Pill tone="acc">
                  In your plan
                </Pill>
              </div>
              <div className={s.fu}>
                <span>
                  Compare 1 and 2
                </span>
                <span>
                  How could I apply this?
                </span>
                <span>
                  Which is shorter?
                </span>
              </div>
              <div style={{ padding: "12px 16px 16px" }}>
                <div className="input">
                  <span className="muted">
                    Ask a follow-up…
                  </span>
                  <span className="sp" style={{ color: "var(--brand-2)" }}>
                    <Icon name="send" size="sm" />
                  </span>
                </div>
                <div className={s.note}>
                  <Icon name="lock" size="xs" />
                  <span>
                    {"Only catalog items you're allowed to see are used. Your profile, goal text and manager notes are never sent to the AI. Talk choices over with your manager."}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
