// GENERATED from design/html/15b-rules-frameworks.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Pill, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Frameworks";

export default function View_15b_rules_frameworks() {
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
            <span className="on">
              {"Frameworks "}
              <span className="n">
                2
              </span>
            </span>
            <span>
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
            <div className={s["fw-col"]}>
              <section className={cx("panel", s["fw-list"])}>
                <div className="panel-h">
                  <h2>
                    Frameworks
                  </h2>
                  <span className="cnt">
                    2
                  </span>
                  <span className="lnk">
                    <Icon name="plus" size="xs" />
                    {" New draft"}
                  </span>
                </div>
                <div className="li">
                  <span className={s["fw-ic"]}>
                    <Icon name="grid" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Competency framework v1
                    </div>
                    <div className={s["fw-meta"]}>
                      <Pill tone="ok" size="sm">
                        Published
                      </Pill>
                      <span>
                        {"used by "}
                        <span className="mono">
                          1,001
                        </span>
                        {" people"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="li on">
                  <span className={s["fw-ic"]}>
                    <Icon name="grid" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Competency framework v2
                    </div>
                    <div className={s["fw-meta"]}>
                      <Pill tone="rev" size="sm">
                        Draft
                      </Pill>
                      <span>
                        <span className="mono">
                          121
                        </span>
                        {" move to it on publish"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s["fw-ft"]}>
                  <Icon name="info" size="xs" />
                  <span>
                    {"Each population uses one framework. Choose it on the Populations tab. The "}
                    <span className="mono">
                      37
                    </span>
                    {" people in no population see none."}
                  </span>
                </div>
              </section>
              <section className={cx("panel", s["fw-hist"])}>
                <div className="panel-h">
                  <h2>
                    Version history
                  </h2>
                  <span className="lnk">
                    {"All changes "}
                    <Icon name="cr" size="xs" />
                  </span>
                </div>
                <div className={s["fw-he"]}>
                  <span className={cx(s["fw-dot"], s.dr)} />
                  <div className={s["fw-hx"]}>
                    <b>
                      v2 draft edited
                    </b>
                    {" by Jordan Lee"}
                    <div className={s["fw-hc"]}>
                      Moved “Model reviews” to a new area
                    </div>
                  </div>
                  <span className={s["fw-tm"]}>
                    21 Nov
                  </span>
                </div>
                <div className={s["fw-he"]}>
                  <span className={cx(s["fw-dot"], s.dr)} />
                  <div className={s["fw-hx"]}>
                    <b>
                      v2 draft started
                    </b>
                    {" by Priya Nair"}
                    <div className={s["fw-hc"]}>
                      Copied from v1 for Model-Based Design
                    </div>
                  </div>
                  <span className={s["fw-tm"]}>
                    4 Nov
                  </span>
                </div>
                <div className={s["fw-he"]}>
                  <span className={s["fw-dot"]} />
                  <div className={s["fw-hx"]}>
                    <b>
                      v1 used by Digital Thread
                    </b>
                    <div className={s["fw-hc"]}>
                      New population, added by Sam Patel
                    </div>
                  </div>
                  <span className={s["fw-tm"]}>
                    3 Mar
                  </span>
                </div>
                <div className={s["fw-he"]}>
                  <span className={cx(s["fw-dot"], s.pb)} />
                  <div className={s["fw-hx"]}>
                    <b>
                      v1 published
                    </b>
                    {" by Jordan Lee"}
                    <div className={s["fw-hc"]}>
                      6 areas · 42 competencies
                    </div>
                  </div>
                  <span className={s["fw-tm"]}>
                    12 Jan
                  </span>
                </div>
              </section>
            </div>
            <section className={cx("panel", s["fw-det"])}>
              <div className="panel-h">
                <span className={s["fw-hic"]}>
                  <Icon name="grid" size="sm" />
                </span>
                <h2>
                  Competency framework v2
                </h2>
                <Pill tone="rev" size="sm">
                  Draft
                </Pill>
                <span className={cx("sp", s["fw-saved"])}>
                  <Icon name="check" size="xs" />
                  Saved 14:20
                </span>
                <Button variant="ghost" size="sm">
                  Rename
                </Button>
                <Button variant="ghost" size="sm" style={{ padding: "0 6px" }}>
                  <Icon name="more" size="sm" />
                </Button>
              </div>
              <div className={s["fw-body"]}>
                <div>
                  <div>
                    <h3 className={s.k}>
                      {"AREAS "}
                      <span>
                        {"7 · "}
                        <span style={{ color: "var(--text-2)" }}>
                          45
                        </span>
                        {" COMPETENCIES"}
                      </span>
                      <span className="lnk">
                        <Icon name="plus" size="xs" />
                        {" Area"}
                      </span>
                    </h3>
                    <div className={s["fw-box"]}>
                      <div className={s["fw-ar"]}>
                        <span className={s["fw-ix"]}>
                          01
                        </span>
                        <span className={s["fw-an"]}>
                          {"Requirements & traceability"}
                        </span>
                        <span className={s["fw-n"]}>
                          9
                        </span>
                        <Icon name="cr" size="xs" />
                      </div>
                      <div className={s["fw-ar"]}>
                        <span className={s["fw-ix"]}>
                          02
                        </span>
                        <span className={s["fw-an"]}>
                          Architecture modelling
                        </span>
                        <span className={cx(s["fw-tg"], s.chg)}>
                          1 MOVED OUT
                        </span>
                        <span className={s["fw-was"]}>
                          was 8
                        </span>
                        <span className={s["fw-n"]}>
                          7
                        </span>
                        <Icon name="cr" size="xs" />
                      </div>
                      <div className={s["fw-ar"]}>
                        <span className={s["fw-ix"]}>
                          03
                        </span>
                        <span className={s["fw-an"]}>
                          {"Integration & interfaces"}
                        </span>
                        <span className={s["fw-n"]}>
                          7
                        </span>
                        <Icon name="cr" size="xs" />
                      </div>
                      <div className={s["fw-ar"]}>
                        <span className={s["fw-ix"]}>
                          04
                        </span>
                        <span className={s["fw-an"]}>
                          {"V&V planning"}
                        </span>
                        <span className={s["fw-n"]}>
                          7
                        </span>
                        <Icon name="cr" size="xs" />
                      </div>
                      <div className={s["fw-ar"]}>
                        <span className={s["fw-ix"]}>
                          05
                        </span>
                        <span className={s["fw-an"]}>
                          Communication
                        </span>
                        <span className={s["fw-n"]}>
                          6
                        </span>
                        <Icon name="cr" size="xs" />
                      </div>
                      <div className={s["fw-ar"]}>
                        <span className={s["fw-ix"]}>
                          06
                        </span>
                        <span className={s["fw-an"]}>
                          Mentoring
                        </span>
                        <span className={s["fw-n"]}>
                          5
                        </span>
                        <Icon name="cr" size="xs" />
                      </div>
                      <div className={cx(s["fw-ar"], s.new)}>
                        <span className={s["fw-ix"]}>
                          07
                        </span>
                        <span className={s["fw-an"]}>
                          Model governance
                        </span>
                        <span className={cx(s["fw-tg"], s.add)}>
                          NEW
                        </span>
                        <span className={s["fw-n"]}>
                          4
                        </span>
                        <Icon name="cr" size="xs" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={s.k}>
                      {"COURSE LEVELS "}
                      <span className="lnk">
                        Same as v1 · items in catalog
                      </span>
                    </h3>
                    <p className={s["fw-note"]}>
                      {"Levels say how deep a "}
                      <b>
                        course
                      </b>
                      {" goes. People never get a level; managers assign professional roles instead."}
                    </p>
                    <div className={s["fw-box"]}>
                      <div className={s["fw-lv"]}>
                        <span className={s["fw-lc"]}>
                          L1
                        </span>
                        <b>
                          Foundation
                        </b>
                        <span className={s["fw-ld"]}>
                          Introduces terms and concepts. No prior knowledge.
                        </span>
                        <span className={s["fw-n"]}>
                          148
                        </span>
                      </div>
                      <div className={s["fw-lv"]}>
                        <span className={s["fw-lc"]}>
                          L2
                        </span>
                        <b>
                          Guided practice
                        </b>
                        <span className={s["fw-ld"]}>
                          Applies a method in a guided exercise.
                        </span>
                        <span className={s["fw-n"]}>
                          201
                        </span>
                      </div>
                      <div className={s["fw-lv"]}>
                        <span className={s["fw-lc"]}>
                          L3
                        </span>
                        <b>
                          Applied
                        </b>
                        <span className={s["fw-ld"]}>
                          Applies a method to a real project artifact.
                        </span>
                        <span className={s["fw-n"]}>
                          129
                        </span>
                      </div>
                      <div className={s["fw-lv"]}>
                        <span className={s["fw-lc"]}>
                          L4
                        </span>
                        <b>
                          Advanced
                        </b>
                        <span className={s["fw-ld"]}>
                          Adapts or governs a method across a program.
                        </span>
                        <span className={s["fw-n"]}>
                          46
                        </span>
                      </div>
                      <div className={s["fw-lv"]}>
                        <span className={s["fw-lc"]}>
                          L5
                        </span>
                        <b>
                          Expert
                        </b>
                        <span className={s["fw-ld"]}>
                          Shapes how a method is used across the company.
                        </span>
                        <span className={s["fw-n"]}>
                          12
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className={s.k}>
                      {"USED BY "}
                      <span className="lnk">
                        {"Populations "}
                        <Icon name="cr" size="xs" />
                      </span>
                    </h3>
                    <div className={s["fw-box"]}>
                      <div className={s["fw-pop"]}>
                        <span className={s["fw-pr"]}>
                          4
                        </span>
                        <div className="grow">
                          <div className="t">
                            Model-Based Design
                          </div>
                          <div className="c">
                            2 conditions · on v1 until you publish v2
                          </div>
                        </div>
                        <span className={s["fw-pm"]}>
                          121
                        </span>
                      </div>
                    </div>
                    <p className={s["fw-note"]} style={{ margin: "9px 0 0" }}>
                      The other 4 populations (
                      <span className="mono">
                        880
                      </span>
                      {" people) stay on v1."}
                    </p>
                  </div>
                  <div>
                    <h3 className={s.k}>
                      WHAT CHANGES FROM V1
                    </h3>
                    <div className={s["fw-df"]}>
                      <span className={cx(s["fw-sg"], s.add)}>
                        +
                      </span>
                      <div>
                        <b>
                          Model governance
                        </b>
                        {" area"}
                        <div className="c">
                          4 competencies: 3 new, 1 moved in
                        </div>
                      </div>
                    </div>
                    <div className={s["fw-df"]}>
                      <span className={cx(s["fw-sg"], s.chg)}>
                        ~
                      </span>
                      <div>
                        <b>
                          Model reviews
                        </b>
                        {" moves to Model governance"}
                        <div className="c">
                          from Architecture modelling, 8 → 7
                        </div>
                      </div>
                    </div>
                    <div className={s["fw-df"]}>
                      <span className={cx(s["fw-sg"], s.eq)}>
                        =
                      </span>
                      <div>
                        Course levels L1–L5 unchanged
                        <div className="c">
                          no catalog item changes level
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={s.k}>
                      CHECKS
                    </h3>
                    <div className={s["fw-chk"]}>
                      <div>
                        <Icon name="check" size="sm" />
                        <span>
                          Every v1 competency maps to one in v2, so approved evidence keeps its credit
                        </span>
                      </div>
                      <div>
                        <Icon name="check" size="sm" />
                        <span>
                          All 45 competencies have a description
                        </span>
                      </div>
                      <div className={s.w}>
                        <Icon name="alert" size="sm" />
                        <span>
                          2 new competencies have no catalog items yet. People see “No learning yet”, not a gap.
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
                    Draft v2
                  </b>
                  {" · publishing moves Model-Based Design ("}
                  <span className="mono">
                    121
                  </span>
                  ) to v2 · nothing else changes
                </span>
                <span className="sp" />
                <Button>
                  Compare with v1
                </Button>
                <Button variant="primary">
                  Publish v2
                </Button>
              </div>
            </section>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
