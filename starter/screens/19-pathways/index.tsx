// GENERATED from design/html/19-pathways.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Learning › Pathways";

export default function View_19_pathways() {
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
                Pathways published for systems engineers: ordered milestones and activities you can adopt into your plan.
              </p>
            </div>
            <div className="acts">
              <div className="seg">
                <span>
                  <Icon name="search" size="xs" />
                  {" Find"}
                </span>
                <span className="on">
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
            <span className="faint">
              Search pathways by title, skill or course code
            </span>
            <Kbd className="sp">
              /
            </Kbd>
          </div>
          <div className={s.lay}>
            <aside>
              <div className={s.fs}>
                <h3>
                  TOPIC
                </h3>
                <div className={s.fo}>
                  <span className="radio" />
                  All topics
                  <span className="n">
                    9
                  </span>
                </div>
                <div className={cx("on", s.fo)}>
                  <span className="radio on" />
                  {"Architecture & MBSE"}
                  <span className="n">
                    5
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="radio" />
                  {"Integration & test"}
                  <span className="n">
                    2
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="radio" />
                  Engineering practice
                  <span className="n">
                    2
                  </span>
                </div>
              </div>
              <div className={s.fs}>
                <h3>
                  FOR ME
                </h3>
                <div className={s.fo}>
                  <span className="toggle" />
                  Fits my focus goal
                  <span className="n">
                    2
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="toggle" />
                  Hide adopted
                </div>
              </div>
              <div className={s.fs}>
                <h3>
                  LENGTH
                </h3>
                <div className={s.fo}>
                  <span className="check" />
                  Under 10 h
                  <span className="n">
                    1
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  10–15 h
                  <span className="n">
                    3
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Over 15 h
                  <span className="n">
                    1
                  </span>
                </div>
              </div>
              <div className={s.pop}>
                <Icon name="users" size="xs" className={s.mt2} />
                <span>
                  {"Showing what's published for "}
                  <b>
                    Systems engineering
                  </b>
                  , your population. Admins choose who sees each pathway.
                </span>
              </div>
            </aside>
            <section>
              <div className={s.lh}>
                <b>
                  5 pathways
                </b>
                <span className="muted">
                  {"in Architecture & MBSE"}
                </span>
                <span className="sp muted">
                  {"Sort "}
                  <b style={{ color: "var(--text)", fontWeight: "550" }}>
                    Most adopted
                  </b>
                  {" "}
                  <Icon name="cd" size="xs" />
                </span>
              </div>
              <div className={cx("panel", s.pl)}>
                <div className="li">
                  <Icon name="route" size="sm" />
                  <div className="grow">
                    <div className="t">
                      {"MBSE foundations & digital-thread integration"}
                    </div>
                    <div className="c">
                      5 activities · about 12 h · in your plan since 6 Oct
                    </div>
                  </div>
                  <Pill tone="acc">
                    Adopted
                  </Pill>
                </div>
                <div className="li sel">
                  <Icon name="route" size="sm" />
                  <div className="grow">
                    <div className="t">
                      SysML v2 for architects
                    </div>
                    <div className="c">
                      7 activities · about 18 h
                    </div>
                    <div className="why">
                      <b>
                        Why
                      </b>
                      matches your focus goal: SysML v2, architecture
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="route" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Model-based requirements
                    </div>
                    <div className="c">
                      6 activities · about 11 h
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="route" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Architecture trade studies
                    </div>
                    <div className="c">
                      5 activities · about 10 h
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="route" size="sm" />
                  <div className="grow">
                    <div className="t">
                      {"Interface definition & control"}
                    </div>
                    <div className="c">
                      4 activities · about 9 h
                    </div>
                    <div className="why">
                      <b>
                        Why
                      </b>
                      includes IM-201, suggested for your goal
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.more}>
                <Icon name="info" size="xs" />
                <span>
                  {"4 more pathways in other topics. "}
                  <b>
                    Show all topics
                  </b>
                </span>
              </div>
            </section>
            <aside className={cx("panel glow", s.pv)}>
              <div className={s["pv-h"]}>
                <div className={s["pw-ic"]}>
                  <Icon name="route" />
                </div>
                <div className="grow">
                  <h2>
                    SysML v2 for architects
                  </h2>
                  <div className="c">
                    Engineering Academy · revision 3 · published 4 Nov
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  {"Full page "}
                  <Icon name="ext" size="xs" />
                </Button>
              </div>
              <p className={s.desc}>
                Go from reading SysML v2 to using it: learn the textual and graphical notation, model one real subsystem, then present its architecture views to a review board.
              </p>
              <div className={s.facts}>
                <div className={s.f}>
                  <div className={s.k}>
                    MILESTONES
                  </div>
                  <div className={s.v}>
                    3
                  </div>
                </div>
                <div className={s.f}>
                  <div className={s.k}>
                    ACTIVITIES
                  </div>
                  <div className={s.v}>
                    7
                  </div>
                </div>
                <div className={s.f}>
                  <div className={s.k}>
                    ESTIMATE
                  </div>
                  <div className={s.v}>
                    18
                    <small>
                      h
                    </small>
                  </div>
                </div>
                <div className={s.f}>
                  <div className={s.k}>
                    ADOPTED BY
                  </div>
                  <div className={s.ava}>
                    <Icon name="users" size="sm" className="c-muted" />
                    <span>
                      <b>
                        142
                      </b>
                      {" colleagues on this pathway"}
                    </span>
                  </div>
                </div>
              </div>
              <div className={s.sec}>
                PREREQUISITES
                <span className="sp">
                  needed before M2 opens
                </span>
              </div>
              <div className={s.pre}>
                <div className="r">
                  <StatusIcon status="approved" />
                  <span>
                    Systems Engineering Fundamentals
                    <span className={s.code}>
                      SE-101
                    </span>
                  </span>
                  <span className={s.s}>
                    <span style={{ color: "var(--ok)", fontWeight: "550" }}>
                      Approved
                    </span>
                    {" "}
                    <span className="mono">
                      14 Oct
                    </span>
                  </span>
                </div>
                <div className="r">
                  <StatusIcon status="submitted" />
                  <span>
                    Functional Architecture
                    <span className={s.code}>
                      FA-110
                    </span>
                  </span>
                  <span className={s.s}>
                    <span style={{ color: "var(--warn)", fontWeight: "550" }}>
                      In review
                    </span>
                    {" · Sam reviews by "}
                    <span className="mono">
                      25 Nov
                    </span>
                  </span>
                </div>
              </div>
              <div className={s.sec}>
                MILESTONES
                <span className="sp">
                  {"1 activity is already in your plan and won't be duplicated"}
                </span>
              </div>
              <div className={s.tl}>
                <div className={s.ms}>
                  <span className={s.node}>
                    1
                  </span>
                  <div className={s["ms-h"]}>
                    <span className={s.mk}>
                      M1
                    </span>
                    <b>
                      Read the language
                    </b>
                    <span className="sp">
                      2 · 5 h
                    </span>
                  </div>
                  <div className={s.box}>
                    <div className={s.ar}>
                      <span className={s.tt}>
                        <span>
                          SysML v2 language overview
                        </span>
                        <Pill tone="acc">
                          In your plan
                        </Pill>
                      </span>
                      <Tag>
                        <TypeDot kind="formal" />
                        Formal
                      </Tag>
                      <span className={s.du}>
                        2 h
                      </span>
                    </div>
                    <div className={s.ar}>
                      <span className={s.tt}>
                        <span>
                          Textual notation hands-on lab
                        </span>
                      </span>
                      <Tag>
                        <TypeDot kind="formal" />
                        Formal
                      </Tag>
                      <span className={s.du}>
                        3 h
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.ms}>
                  <span className={s.node}>
                    2
                  </span>
                  <div className={s["ms-h"]}>
                    <span className={s.mk}>
                      M2
                    </span>
                    <b>
                      Model a real subsystem
                    </b>
                    <span className="sp">
                      2 · 7 h
                    </span>
                  </div>
                  <div className={s.box}>
                    <div className={s.ar}>
                      <span className={s.tt}>
                        <span>
                          {"Model one subsystem's interfaces on your program"}
                        </span>
                      </span>
                      <Tag>
                        <TypeDot kind="exp" />
                        Experiential
                      </Tag>
                      <span className={s.du}>
                        ~6 h
                      </span>
                    </div>
                    <div className={s.ar}>
                      <span className={s.tt}>
                        <span>
                          Model review with an architect
                        </span>
                      </span>
                      <Tag>
                        <TypeDot kind="rel" />
                        Relational
                      </Tag>
                      <span className={s.du}>
                        1 h
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s.ms}>
                  <span className={s.node}>
                    3
                  </span>
                  <div className={s["ms-h"]}>
                    <span className={s.mk}>
                      M3
                    </span>
                    <b>
                      Present the architecture
                    </b>
                    <span className="sp">
                      3 · 6 h
                    </span>
                  </div>
                  <div className={s.box}>
                    <div className={s.ar}>
                      <span className={s.tt}>
                        <span>
                          Architecture views and viewpoints
                          <span className={s.code}>
                            AV-210
                          </span>
                        </span>
                      </span>
                      <Tag>
                        <TypeDot kind="formal" />
                        Formal
                      </Tag>
                      <span className={s.du}>
                        2 h
                      </span>
                    </div>
                    <div className={s.ar}>
                      <span className={s.tt}>
                        <span>
                          Present to the architecture review board
                        </span>
                      </span>
                      <Tag>
                        <TypeDot kind="exp" />
                        Experiential
                      </Tag>
                      <span className={s.du}>
                        ~3 h
                      </span>
                    </div>
                    <div className={s.ar}>
                      <span className={s.tt}>
                        <span>
                          Peer model review swap
                        </span>
                      </span>
                      <Tag>
                        <TypeDot kind="rel" />
                        Relational
                      </Tag>
                      <span className={s.du}>
                        1 h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.pf}>
                <Button variant="primary">
                  <Icon name="plus" size="sm" />
                  {" Adopt pathway"}
                </Button>
                <span className={s.note}>
                  <b>
                    Adopting adds it to your plan;
                  </b>
                  {" you can remove it any time."}
                </span>
              </div>
            </aside>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
