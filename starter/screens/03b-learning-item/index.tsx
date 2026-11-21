// GENERATED from design/html/03b-learning-item.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Learning item";

export default function View_03b_learning_item() {
  return (
    <div>
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
              Find
            </span>
            <span className="sl">
              /
            </span>
            <span style={{ color: "var(--text-2)" }}>
              Interface Management
            </span>
          </div>
          <header className="ph" style={{ marginBottom: "20px" }}>
            <div className={s["ld-hd"]}>
              <div className={s["ld-ic"]}>
                <Icon name="book" />
              </div>
              <div>
                <h1>
                  Interface Management
                  <span className={s["ld-code"]}>
                    IM-201
                  </span>
                </h1>
                <div className={s["ld-tags"]}>
                  <Tag>
                    <TypeDot kind="formal" />
                    Formal
                  </Tag>
                  <Tag className="mono">
                    L2
                  </Tag>
                  <Tag className="mono">
                    2 h
                  </Tag>
                  <Tag>
                    Academy
                  </Tag>
                  <span className={s["ld-st"]}>
                    <StatusIcon status="not_started" />
                    Not started · not in your plan
                  </span>
                </div>
              </div>
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
          <div className={s["ld-lay"]}>
            <div className={s["ld-col"]}>
              <section className="panel">
                <div className="panel-h">
                  <h2>
                    What it covers
                  </h2>
                  <span className="lnk">
                    {"Engineering Academy · revision 2 · updated "}
                    <span className="mono" style={{ fontSize: "12px" }}>
                      20 Nov
                    </span>
                  </span>
                </div>
                <div className={s["ld-body"]}>
                  <p className={s["ld-desc"]}>
                    Define, control and coordinate interfaces between system elements and the teams that own them. You follow one subsystem from a first list of interfaces to a baselined interface control document.
                  </p>
                  <div className={s["ld-out"]}>
                    <div>
                      <Icon name="check" size="sm" />
                      Identify and classify interfaces: physical, functional and data
                    </div>
                    <div>
                      <Icon name="check" size="sm" />
                      Write and baseline an interface control document (ICD)
                    </div>
                    <div>
                      <Icon name="check" size="sm" />
                      Run an interface working group and handle change requests
                    </div>
                    <div>
                      <Icon name="check" size="sm" />
                      Spot interface risks before integration starts
                    </div>
                  </div>
                  <div className={s["ld-how"]}>
                    <span>
                      <Icon name="clock" size="sm" />
                      Self-paced online, about 2 h
                    </span>
                    <span>
                      <Icon name="file" size="sm" />
                      4 modules and a short knowledge check
                    </span>
                    <span>
                      <Icon name="ext" size="sm" />
                      Taken and completed in the LMS
                    </span>
                  </div>
                </div>
              </section>
              <section className={cx("panel", s["ld-fit"])}>
                <div className={s["ld-half"]}>
                  <div className={s["ld-sec"]}>
                    Before you start
                    <span className="sp">
                      <Icon name="check" size="xs" />
                      {"You're ready"}
                    </span>
                  </div>
                  <div className={s["ld-r"]}>
                    <StatusIcon status="approved" />
                    <div className="grow">
                      <div className="t">
                        Systems Engineering Fundamentals
                        <span className={s.cd}>
                          SE-101
                        </span>
                      </div>
                      <div className="c">
                        {"Required · approved "}
                        <span className="mono" style={{ fontSize: "11.5px" }}>
                          14 Oct
                        </span>
                      </div>
                    </div>
                    <span className={s.s}>
                      <span style={{ color: "var(--ok)", fontWeight: "550" }}>
                        Approved
                      </span>
                    </span>
                  </div>
                  <div className={s["ld-r"]}>
                    <StatusIcon status="submitted" />
                    <div className="grow">
                      <div className="t">
                        Functional Architecture
                        <span className={s.cd}>
                          FA-110
                        </span>
                      </div>
                      <div className="c">
                        {"Recommended, not required · Sam reviews by "}
                        <span className="mono" style={{ fontSize: "11.5px" }}>
                          25 Nov
                        </span>
                      </div>
                    </div>
                    <span className={s.s}>
                      <span style={{ color: "var(--warn)", fontWeight: "550" }}>
                        In review
                      </span>
                    </span>
                  </div>
                </div>
                <div className={s["ld-half"]}>
                  <div className={s["ld-sec"]}>
                    In 2 pathways
                  </div>
                  <div className={s["ld-r"]}>
                    <Icon name="route" size="sm" />
                    <div className="grow">
                      <div className="t">
                        {"Interface definition & control"}
                      </div>
                      <div className="c">
                        Step 1 of 4 · about 9 h
                      </div>
                    </div>
                    <span className={s.s}>
                      {"View "}
                      <Icon name="cr" size="xs" />
                    </span>
                  </div>
                  <div className={s["ld-r"]}>
                    <Icon name="route" size="sm" />
                    <div className="grow">
                      <div className="t">
                        {"Integration & test essentials"}
                      </div>
                      <div className="c">
                        Step 3 of 6 · about 14 h
                      </div>
                    </div>
                    <span className={s.s}>
                      {"View "}
                      <Icon name="cr" size="xs" />
                    </span>
                  </div>
                  <div className={s["ld-note"]}>
                    <Icon name="info" size="xs" />
                    <span>
                      {"Adding the course doesn't adopt a pathway. If you adopt one later, IM-201 isn't added twice."}
                    </span>
                  </div>
                </div>
              </section>
              <section className={cx("panel", s["ld-rel"])}>
                <div className="panel-h">
                  <h2>
                    Related
                  </h2>
                  <span className="cnt">
                    3
                  </span>
                  <span className="lnk">
                    {"More like this "}
                    <Icon name="cr" size="xs" />
                  </span>
                </div>
                <div className="li">
                  <StatusIcon status="not_started" />
                  <div className="grow">
                    <div className="t">
                      {"Develop System & Component ICS"}
                    </div>
                    <div className={s.meta}>
                      <TypeDot kind="formal" />
                      Formal · 1.5 h
                    </div>
                    <div className="why">
                      <b>
                        Why
                      </b>
                      the usual next step: writing interface control specifications
                    </div>
                  </div>
                  <Button size="sm">
                    <Icon name="plus" size="xs" />
                    {" Add"}
                  </Button>
                </div>
                <div className="li">
                  <StatusIcon status="in_progress" />
                  <div className="grow">
                    <div className="row" style={{ gap: "8px" }}>
                      <span className="t">
                        Shadow an interface review board
                      </span>
                      <Pill tone="acc" size="sm">
                        In your plan
                      </Pill>
                    </div>
                    <div className={s.meta}>
                      <TypeDot kind="rel" />
                      Relational · started 10 Nov
                    </div>
                    <div className="why">
                      <b>
                        Why
                      </b>
                      you see interface decisions made that IM-201 explains
                    </div>
                  </div>
                </div>
                <div className="li">
                  <StatusIcon status="not_started" />
                  <div className="grow">
                    <div className="t">
                      Multi-tool practice for moderate issue resolution
                    </div>
                    <div className={s.meta}>
                      <TypeDot kind="exp" />
                      Experiential · done on the job
                    </div>
                    <div className="why">
                      <b>
                        Why
                      </b>
                      practise on real cross-functional interface issues
                    </div>
                  </div>
                  <Button size="sm">
                    <Icon name="plus" size="xs" />
                    {" Add"}
                  </Button>
                </div>
              </section>
            </div>
            <aside className={cx("panel glow", s["ld-why"])}>
              <div className="panel-h">
                <h2>
                  Why it fits you
                </h2>
                <span className="lnk">
                  {"FROM YOUR SKILLS & GOALS"}
                </span>
              </div>
              <div className={s["ld-w"]}>
                <span className={s.ldi}>
                  <Icon name="target" size="sm" />
                </span>
                <div>
                  <b>
                    {"Closes your “Integration & interfaces” gap"}
                  </b>
                  {"No approved evidence there yet. It's one of the 6 skill areas for your next level."}
                </div>
              </div>
              <div className={s["ld-w"]}>
                <span className={s.ldi}>
                  <Icon name="flag" size="sm" />
                </span>
                <div>
                  <b>
                    Fits your goal “Lead an interface review”
                  </b>
                  Nothing is linked to that goal yet.
                </div>
              </div>
              <div className={s["ld-w"]}>
                <span className={s.ldi}>
                  <Icon name="users" size="sm" />
                </span>
                <div>
                  <b>
                    {"Builds on what you're already doing"}
                  </b>
                  You started “Shadow an interface review board” on 10 Nov.
                </div>
              </div>
              <div className={s["ld-act"]}>
                <span className="label">
                  {"Link to a goal "}
                  <span className="faint">
                    · optional
                  </span>
                </span>
                <div className="input">
                  <Icon name="flag" size="sm" />
                  Lead an interface review
                  <span className={s.cdn}>
                    <Icon name="cd" size="xs" />
                  </span>
                </div>
                <div className="help">
                  {"Approved learning linked to a goal moves that goal's progress."}
                </div>
                <div className={s["ld-btns"]}>
                  <Button variant="primary" size="lg">
                    <Icon name="plus" size="sm" />
                    {" Add to plan"}
                  </Button>
                  <Button size="lg">
                    {"Open in LMS "}
                    <Icon name="ext" size="sm" />
                  </Button>
                </div>
                <div className={s["ld-note"]} style={{ margin: "10px 0 0" }}>
                  <Icon name="info" size="xs" />
                  <span>
                    You take it in the LMS, then record it here. It counts once Sam approves it.
                  </span>
                </div>
              </div>
              <div className={s["ld-hr"]} />
              <div className={s["ld-sec"]} style={{ paddingTop: "14px" }}>
                Colleagues who completed it
              </div>
              <div className={s["ld-cnt"]}>
                <b>
                  23
                </b>
                {" colleagues who share their learning completed it, including"}
              </div>
              <div className={s["ld-p"]}>
                <Avatar initials="PN" size="sm" tone={2} />
                <span className="t">
                  Priya Nair
                </span>
                <span className="c">
                  {"Architecture & integration"}
                </span>
                <Icon name="cr" size="xs" />
              </div>
              <div className={s["ld-p"]}>
                <Avatar initials="WC" size="sm" tone={5} />
                <span className="t">
                  Wei Chen
                </span>
                <span className="c">
                  {"Architecture & integration"}
                </span>
                <Icon name="cr" size="xs" />
              </div>
              <div className={s["ld-p"]}>
                <Avatar initials="MG" size="sm" />
                <span className="t">
                  Maria Gomez
                </span>
                <span className="c">
                  Integration lab
                </span>
                <Icon name="cr" size="xs" />
              </div>
              <div className={s["ld-note"]} style={{ margin: "6px 16px 16px" }}>
                <Icon name="lock" size="xs" />
                <span>
                  Only colleagues who chose to share their learning are counted or named.
                </span>
              </div>
            </aside>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
