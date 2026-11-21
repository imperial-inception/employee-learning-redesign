// GENERATED from design/html/25-growth.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Pill, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Next level";

export default function View_25_growth() {
  return (
    <div>
      <AppShell active="plan" manager>
        <main id="page">
          <div className="crumbs">
            <span>
              {"Goals & pathways"}
            </span>
            <span className="sl">
              /
            </span>
            <span>
              Next level
            </span>
          </div>
          <header className="ph" style={{ marginBottom: "16px" }}>
            <div>
              <div className="row" style={{ gap: "12px" }}>
                <h1>
                  Next level
                </h1>
              </div>
              <p className="sub">
                What changes from Individual contributor 1 to Individual contributor 2 as a Systems Engineer, and where your evidence already is.
              </p>
            </div>
            <div className="acts">
              <Button>
                <Icon name="book" size="sm" />
                {" Open in Job catalog "}
                <Icon name="ext" size="xs" />
              </Button>
            </div>
          </header>
          <div className="banner info">
            <span className="bar-l" style={{ background: "var(--brand)" }} />
            <Icon name="msg" size="sm" />
            <div style={{ fontSize: "13px" }}>
              <b style={{ fontWeight: "600" }}>
                Guidance for a conversation, not an assessment.
              </b>
              {" "}
              <span className="muted">
                Expectations come from the Job catalog. Only Approved items and experience your manager confirmed are counted. Nothing here rates you or goes to HR.
              </span>
            </div>
          </div>
          <div className={s.lay}>
            <section className={cx("panel", s.areas)}>
              <div className="panel-h">
                <h2>
                  Expectation areas
                </h2>
                <span className="cnt">
                  6
                </span>
                <span className="sp seg">
                  <span className="on">
                    All 6
                  </span>
                  <span>
                    Gaps 3
                  </span>
                </span>
              </div>
              <div className={s.hd}>
                <span>
                  Area · what changes at IC2
                </span>
                <span>
                  Evidence on record
                </span>
                <span>
                  Next step
                </span>
              </div>
              <div className={s.ar}>
                <div>
                  <div className={s.an}>
                    <span className={s.ix}>
                      01
                    </span>
                    {"Requirements & traceability"}
                  </div>
                  <div className={s.chg}>
                    <b>
                      At IC2
                    </b>
                    you own requirements and trace links for a whole subsystem, not single functions.
                  </div>
                </div>
                <div className={s.ev}>
                  <div className="row" style={{ gap: "9px" }}>
                    <span className={s.meter}>
                      <i className="on" />
                      <i className="on" />
                      <i className="on" />
                    </span>
                    <span className={s.lbl}>
                      3 pieces of evidence
                    </span>
                  </div>
                  <div className={s.src}>
                    2 approved items · 1 confirmed project
                    <br />
                    <span className={s.x}>
                      RQ-102 · CDR traceability matrix
                    </span>
                  </div>
                </div>
                <div className={s.nx}>
                  <div className={s.cov}>
                    <Icon name="check" size="sm" />
                    Enough to talk through
                  </div>
                  <div className={s.opt}>
                    Optional: lead one requirements review
                  </div>
                </div>
              </div>
              <div className={s.ar}>
                <div>
                  <div className={s.an}>
                    <span className={s.ix}>
                      02
                    </span>
                    Architecture modelling
                  </div>
                  <div className={s.chg}>
                    <b>
                      At IC2
                    </b>
                    {"you build a subsystem's functional architecture in SysML v2 with light guidance."}
                  </div>
                </div>
                <div className={s.ev}>
                  <div className="row" style={{ gap: "9px" }}>
                    <span className={s.meter}>
                      <i className="on" />
                      <i />
                      <i />
                    </span>
                    <span className={s.lbl}>
                      1 piece of evidence
                    </span>
                  </div>
                  <div className={s.src}>
                    1 approved item: MBSE foundations
                    <br />
                    <span className={s.x}>
                      FA-110 is in review, not counted yet
                    </span>
                  </div>
                </div>
                <div className={s.nx}>
                  <div className={s.tt}>
                    MBSE Language / Architecture: SysML Overview
                  </div>
                  <div className="row">
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <Tag className="mono">
                      0.5 h
                    </Tag>
                    <Pill tone="acc">
                      In your plan · step 3
                    </Pill>
                  </div>
                </div>
              </div>
              <div className={s.ar}>
                <div>
                  <div className={s.an}>
                    <span className={s.ix}>
                      03
                    </span>
                    {"Integration & interfaces"}
                  </div>
                  <div className={s.chg}>
                    <b>
                      At IC2
                    </b>
                    you define and control interfaces between subsystems, including the ICDs.
                  </div>
                </div>
                <div className={s.ev}>
                  <div className="row" style={{ gap: "9px" }}>
                    <span className={s.meter}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={cx(s.lbl, s.none)}>
                      No approved evidence
                    </span>
                  </div>
                  <div className={s.src}>
                    Interface review board shadowing is in progress
                  </div>
                </div>
                <div className={s.nx}>
                  <div className={s.tt}>
                    {"Interface Management "}
                    <span className="mono">
                      IM-201
                    </span>
                  </div>
                  <div className="row">
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <Tag className="mono">
                      2 h
                    </Tag>
                    <Button size="sm" className="sp">
                      <Icon name="plus" size="xs" />
                      {" Add to plan"}
                    </Button>
                  </div>
                </div>
              </div>
              <div className={s.ar}>
                <div>
                  <div className={s.an}>
                    <span className={s.ix}>
                      04
                    </span>
                    {"V&V planning"}
                  </div>
                  <div className={s.chg}>
                    <b>
                      At IC2
                    </b>
                    {"you write a subsystem's verification plan and pick a method per requirement."}
                  </div>
                </div>
                <div className={s.ev}>
                  <div className="row" style={{ gap: "9px" }}>
                    <span className={s.meter}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={cx(s.lbl, s.none)}>
                      No approved evidence
                    </span>
                  </div>
                  <div className={s.src}>
                    Nothing submitted for this area yet
                  </div>
                </div>
                <div className={s.nx}>
                  <div className={s.tt}>
                    {"V&V Planning Essentials "}
                    <span className="mono">
                      VV-230
                    </span>
                  </div>
                  <div className="row">
                    <Tag>
                      <TypeDot kind="formal" />
                      Formal
                    </Tag>
                    <Tag className="mono">
                      3 h
                    </Tag>
                    <Button size="sm" className="sp">
                      <Icon name="plus" size="xs" />
                      {" Add to plan"}
                    </Button>
                  </div>
                </div>
              </div>
              <div className={s.ar}>
                <div>
                  <div className={s.an}>
                    <span className={s.ix}>
                      05
                    </span>
                    Communication
                  </div>
                  <div className={s.chg}>
                    <b>
                      At IC2
                    </b>
                    you present technical status and risks at program reviews without support.
                  </div>
                </div>
                <div className={s.ev}>
                  <div className="row" style={{ gap: "9px" }}>
                    <span className={s.meter}>
                      <i className="on" />
                      <i className="on" />
                      <i />
                    </span>
                    <span className={s.lbl}>
                      2 pieces of evidence
                    </span>
                  </div>
                  <div className={s.src}>
                    1 approved item · 1 confirmed briefing
                    <br />
                    <span className={s.x}>
                      A returned item is not counted
                    </span>
                  </div>
                </div>
                <div className={s.nx}>
                  <div className={s.cov}>
                    <Icon name="check" size="sm" />
                    Enough to talk through
                  </div>
                  <div className={s.opt}>
                    Optional: present at the next design review
                  </div>
                </div>
              </div>
              <div className={s.ar}>
                <div>
                  <div className={s.an}>
                    <span className={s.ix}>
                      06
                    </span>
                    Mentoring
                  </div>
                  <div className={s.chg}>
                    <b>
                      At IC2
                    </b>
                    you guide newer engineers through routine tasks and check their work.
                  </div>
                </div>
                <div className={s.ev}>
                  <div className="row" style={{ gap: "9px" }}>
                    <span className={cx("nr", s.meter)}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={cx("nr", s.lbl)}>
                      Not recorded
                    </span>
                  </div>
                  <div className={s.src}>
                    No mentoring has been recorded yet
                  </div>
                </div>
                <div className={s.nx}>
                  <div className={s.tt}>
                    Buddy a new starter for their first month
                  </div>
                  <div className="row">
                    <Tag>
                      <TypeDot kind="rel" />
                      Relational
                    </Tag>
                    <Tag className="mono">
                      1 mo
                    </Tag>
                    <Button size="sm" className="sp">
                      <Icon name="plus" size="xs" />
                      {" Add to plan"}
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            <aside className="stack" style={{ gap: "16px" }}>
              <section className={cx("panel glow", s.sum)}>
                <div className={s.k}>
                  SYSTEMS ENGINEER · JOB CATALOG
                </div>
                <div className={s.lvls}>
                  <div className={s.lvl}>
                    <span className="dot" />
                    <span>
                      Individual contributor 1
                    </span>
                    <span className="mono faint">
                      YOU NOW
                    </span>
                  </div>
                  <div className={cx(s.lvl, s.to)}>
                    <span className="dot" />
                    <span>
                      Individual contributor 2
                    </span>
                    <span className="mono">
                      NEXT
                    </span>
                  </div>
                </div>
                <div className={s.hl}>
                  <span className="big">
                    3 of 6
                  </span>
                  <span>
                    areas have evidence
                  </span>
                </div>
                <div className={s.seg6}>
                  <span className="on" />
                  <span className="on" />
                  <span className="on" />
                  <span />
                  <span />
                  <span className="nr" />
                </div>
                <div className="lg">
                  <span>
                    <i style={{ background: "var(--brand)" }} />
                    Evidence 3
                  </span>
                  <span>
                    <i style={{ background: "var(--surface-3)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                    None approved 2
                  </span>
                  <span>
                    <i style={{ background: "repeating-linear-gradient(135deg,var(--line-2) 0 2px,transparent 2px 4px)", boxShadow: "inset 0 0 0 1px var(--line-2)" }} />
                    Not recorded 1
                  </span>
                </div>
                <p>
                  {"Most evidence in "}
                  <b>
                    {"Requirements & traceability"}
                  </b>
                  {". Nothing approved yet for "}
                  <b>
                    {"Integration & interfaces"}
                  </b>
                  {" or "}
                  <b>
                    {"V&V planning"}
                  </b>
                  .
                </p>
              </section>
              <section className={cx("panel", s.oo)}>
                <div className={s.who}>
                  <Avatar initials="SP" tone={5} />
                  <div className="grow">
                    <b>
                      Next 1:1 with Sam Patel
                    </b>
                    <small>
                      THU 4 DEC · 10:00
                    </small>
                  </div>
                </div>
                <ul>
                  <li>
                    <Icon name="check" size="sm" />
                    <span>
                      This comparison, all 6 areas
                    </span>
                  </li>
                  <li>
                    <Icon name="check" size="sm" />
                    <span>
                      Links to the 4 approved items and 2 confirmed projects above
                    </span>
                  </li>
                  <li>
                    <Icon name="check" size="sm" />
                    <span>
                      Talking point: “What would IC2 look like on my current program?”
                    </span>
                  </li>
                </ul>
                <Button variant="primary" size="lg">
                  <Icon name="send" size="sm" />
                  {" Bring this to your next 1:1"}
                </Button>
                <div className="help">
                  <Icon name="lock" size="xs" />
                  <span>
                    Sam sees only what you add to the shared agenda. Your plan notes stay private.
                  </span>
                </div>
              </section>
              <section className={cx("panel", s.how)}>
                <h3>
                  <Icon name="info" size="sm" />
                  How evidence is counted
                </h3>
                <b>
                  Counted:
                </b>
                {" Approved items tagged to the area, and experience your manager confirmed. "}
                <b>
                  Not counted:
                </b>
                {" items in review or returned. There are no self-ratings, and no performance data is used. "}
              </section>
            </aside>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
