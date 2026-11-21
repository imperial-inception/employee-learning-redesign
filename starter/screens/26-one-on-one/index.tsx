// GENERATED from design/html/26-one-on-one.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "1:1 with Priya";

export default function View_26_one_on_one() {
  return (
    <div className={s.v}>
      <AppShell active="team" manager>
        <main id="page">
          <div className="crumbs">
            <span>
              Team
            </span>
            <span className="sl">
              /
            </span>
            <span>
              Priya Nair
            </span>
            <span className="sl">
              /
            </span>
            <span>
              1:1s
            </span>
          </div>
          <header className="ph" style={{ marginBottom: "18px" }}>
            <div>
              <div className="row" style={{ gap: "12px" }}>
                <h1>
                  1:1 with Priya Nair
                </h1>
              </div>
              <p className="sub">
                <span className="mono" style={{ fontSize: "13px" }}>
                  TUE 25 NOV · 14:00 · 30 MIN
                </span>
                {" · shared agenda: you and Priya can both add to it"}
              </p>
            </div>
            <div className="acts">
              <span className="row" style={{ gap: "8px", marginRight: "6px" }}>
                <span className={s["stack-av"]}>
                  <Avatar initials="JL" />
                  <Avatar initials="PN" tone={2} />
                </span>
                <span className="muted" style={{ fontSize: "12.5px" }}>
                  Both can edit
                </span>
              </span>
              <Button>
                <Icon name="clock" size="sm" />
                {" Past 1:1s "}
                <span className="mono faint" style={{ fontSize: "11.5px" }}>
                  6
                </span>
              </Button>
              <Button variant="primary">
                <Icon name="send" size="sm" />
                {" Share agenda with Priya "}
                <Kbd style={{ background: "transparent", borderColor: "rgba(127,127,127,.4)" }}>
                  Ctrl Enter
                </Kbd>
              </Button>
            </div>
          </header>
          <div className={s.cols}>
            <div className={s.col}>
              <section className={cx("panel", s.since)}>
                <div className="panel-h">
                  <h2>
                    Since last 1:1
                  </h2>
                  <span className="cnt">
                    7 NOV
                  </span>
                  <span className="lnk">
                    <Icon name="refresh" size="xs" />
                    {" From Priya's record"}
                  </span>
                </div>
                <div className="grp">
                  {"APPROVED EVIDENCE "}
                  <span className="n">
                    2
                  </span>
                </div>
                <div className="li">
                  <StatusIcon status="approved" />
                  <div className="grow">
                    <div className="t">
                      {"Writing Verifiable Requirements "}
                      <span className="mono faint" style={{ fontSize: "11.5px" }}>
                        RQ-118
                      </span>
                    </div>
                    <div className="c">
                      Formal · you approved 12 Nov
                    </div>
                  </div>
                  <span className="m">
                    1 h
                  </span>
                </div>
                <div className="li">
                  <StatusIcon status="approved" />
                  <div className="grow">
                    <div className="t">
                      Harness routing trade study
                    </div>
                    <div className="c">
                      Experiential · you approved 18 Nov · counts toward her goal
                    </div>
                  </div>
                  <span className="m">
                    6 h
                  </span>
                </div>
                <div className="grp">
                  {"SUBMISSIONS "}
                  <span className="n">
                    1
                  </span>
                </div>
                <div className="li">
                  <StatusIcon status="submitted" />
                  <div className="grow">
                    <div className="t">
                      {"Interface Management "}
                      <span className="mono faint" style={{ fontSize: "11.5px" }}>
                        IM-201
                      </span>
                    </div>
                    <div className="c">
                      Submitted 19 Nov · you review by 26 Nov
                    </div>
                  </div>
                  <Button size="sm">
                    Review
                  </Button>
                </div>
                <div className="grp">
                  GOAL MOVEMENT
                </div>
                <div className="li">
                  <Icon name="target" size="sm" />
                  <div className="grow">
                    <div className="t">
                      Lead interface definition for the avionics bay
                    </div>
                    <div className="c">
                      2 → 3 of 4 approved · due 31 Jan
                    </div>
                  </div>
                  <span className={s.mbar}>
                    <span className="a" />
                    <span className="a" />
                    <span className={s.new} />
                    <span />
                  </span>
                </div>
                <div className="li" style={{ paddingBottom: "10px" }}>
                  <Icon name="plus" size="sm" />
                  <div className="grow">
                    <div className="t">
                      {"Added to plan: V&V Planning Essentials"}
                    </div>
                    <div className="c">
                      Priya · 14 Nov · step 4 of her goal
                    </div>
                  </div>
                  <span className="m">
                    3 h
                  </span>
                </div>
              </section>
              <section className={cx("panel", s["acts-t"])}>
                <div className="panel-h">
                  <h2>
                    Actions
                  </h2>
                  <span className="cnt">
                    4
                  </span>
                  <span className="muted" style={{ fontSize: "12.5px" }}>
                    · 3 carried over from 7 Nov
                  </span>
                  <span className="lnk">
                    <Icon name="plus" size="xs" />
                    {" Add action "}
                    <Kbd>
                      A
                    </Kbd>
                  </span>
                </div>
                <div className="li">
                  <span className="check" />
                  <span className="t grow ellipsis">
                    Book a slot to shadow the review board
                  </span>
                  <span className={s.owner}>
                    <Avatar initials="PN" tone={2} />
                    Priya
                  </span>
                  <span className={s.due}>
                    28 Nov
                  </span>
                  <span className={s.stc}>
                    <Pill tone="neu">
                      Carried over
                    </Pill>
                  </span>
                </div>
                <div className="li">
                  <span className="check" />
                  <span className="t grow ellipsis">
                    Ask the CM lead about a config audit
                  </span>
                  <span className={s.owner}>
                    <Avatar initials="JL" />
                    You
                  </span>
                  <span className={s.due}>
                    21 Nov
                  </span>
                  <span className={s.stc}>
                    <Pill tone="ret">
                      Due today
                    </Pill>
                  </span>
                </div>
                <div className="li">
                  <span className="check" />
                  <span className="t grow ellipsis">
                    {"Outline the V&V plan for the bracket test"}
                  </span>
                  <span className={s.owner}>
                    <Avatar initials="PN" tone={2} />
                    Priya
                  </span>
                  <span className={s.due}>
                    5 Dec
                  </span>
                  <span className={s.stc}>
                    <Pill tone="neu">
                      Carried over
                    </Pill>
                  </span>
                </div>
                <div className={cx("li", s.done)}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  <span className="t grow ellipsis">
                    Send Priya the ICD template from CDR prep
                  </span>
                  <span className={s.owner}>
                    <Avatar initials="JL" />
                    You
                  </span>
                  <span className={s.due}>
                    14 Nov
                  </span>
                  <span className={s.stc}>
                    <Pill tone="ok">
                      Done 13 Nov
                    </Pill>
                  </span>
                </div>
              </section>
            </div>
            <div className={s.col}>
              <section className={cx("panel", s.tp)}>
                <div className="panel-h">
                  <h2>
                    Talking points
                  </h2>
                  <span className="cnt">
                    4
                  </span>
                  <span className="lnk">
                    Priya 2 · You 2
                  </span>
                </div>
                <div className="li">
                  <Avatar initials="PN" tone={2} />
                  <div className="grow">
                    <div className={s.who}>
                      <b>
                        Priya
                      </b>
                      <span className="mono">
                        19 Nov
                      </span>
                    </div>
                    <div className={s.txt}>
                      {"I'd like to own the ICD for the sensor harness next quarter. What would I need to show first?"}
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="PN" tone={2} />
                  <div className="grow">
                    <div className={s.who}>
                      <b>
                        Priya
                      </b>
                      <span className="mono">
                        20 Nov
                      </span>
                    </div>
                    <div className={s.txt}>
                      Is VV-230 worth doing before the test readiness review, or after it?
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="JL" />
                  <div className="grow">
                    <div className={s.who}>
                      <b>
                        You
                      </b>
                      <span className="mono">
                        20 Nov
                      </span>
                    </div>
                    <div className={s.txt}>
                      Your CDR status update was clear. Next time, name an owner for each risk.
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="JL" />
                  <div className="grow">
                    <div className={s.who}>
                      <b>
                        You
                      </b>
                      <span className="mono">
                        21 Nov
                      </span>
                    </div>
                    <div className={s.txt}>
                      {"The shadowing slot keeps slipping. What's blocking it?"}
                    </div>
                  </div>
                </div>
                <div className={s.add}>
                  <Icon name="plus" size="sm" />
                  Add a talking point
                  <Kbd className="sp">
                    T
                  </Kbd>
                </div>
              </section>
              <section className={cx("panel", s.ai)}>
                <div className="panel-h">
                  <span className="ai-mark">
                    <Icon name="spark" size="xs" />
                    {" Summary"}
                  </span>
                  <Pill tone="rev">
                    Draft · edit before sharing
                  </Pill>
                  <span className="lnk">
                    <Icon name="refresh" size="xs" />
                    {" Redraft"}
                  </span>
                </div>
                <div className={s.body}>
                  <div className={s.draft}>
                    {"Since 7 Nov Priya had two items approved "}
                    <span className="cite">
                      1
                    </span>
                    <span className="cite">
                      2
                    </span>
                    {". The harness routing trade study moves her interface goal to "}
                    <b>
                      3 of 4
                    </b>
                    {" "}
                    <span className="cite">
                      3
                    </span>
                    {". Interface Management is waiting for your review "}
                    <span className="cite">
                      4
                    </span>
                    {". One action from last time is still open: the review board shadowing slot "}
                    <span className="cite">
                      5
                    </span>
                    .
                  </div>
                </div>
                <div className={s.srcs}>
                  <div>
                    <span className="cite">
                      1
                    </span>
                    <span>
                      RQ-118 approval
                    </span>
                    <span className="m">
                      12 Nov
                    </span>
                  </div>
                  <div>
                    <span className="cite">
                      2
                    </span>
                    <span>
                      Trade study approval
                    </span>
                    <span className="m">
                      18 Nov
                    </span>
                  </div>
                  <div>
                    <span className="cite">
                      3
                    </span>
                    <span>
                      Goal progress
                    </span>
                    <span className="m">
                      18 Nov
                    </span>
                  </div>
                  <div>
                    <span className="cite">
                      4
                    </span>
                    <span>
                      IM-201 submission
                    </span>
                    <span className="m">
                      19 Nov
                    </span>
                  </div>
                  <div>
                    <span className="cite">
                      5
                    </span>
                    <span>
                      Actions from last 1:1
                    </span>
                    <span className="m">
                      7 Nov
                    </span>
                  </div>
                </div>
                <div className={s.ft}>
                  <div className={cx("grow", s.note)}>
                    <Icon name="info" size="xs" />
                    <span>
                      {"Drafted only from the items on this page. AI doesn't rate Priya, approve anything or change her record."}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Discard
                  </Button>
                  <Button size="sm">
                    Add to agenda
                  </Button>
                </div>
              </section>
            </div>
          </div>
          <section className="priv">
            <span className={s.lk}>
              <Icon name="lock" size="sm" />
            </span>
            <div className={s.hd} style={{ width: "300px", paddingTop: "2px" }}>
              <b>
                Private notes
              </b>
              <small>
                Only you. Never shared, never in the agenda, never sent to AI.
              </small>
            </div>
            <div className={s.nt}>
              <div className="r">
                <span className="grow">
                  Check her load on the bracket program before offering the harness ICD.
                </span>
                <span className="mono faint" style={{ fontSize: "11.5px" }}>
                  SAVED 09:12
                </span>
              </div>
              <div className="r">
                <span className="grow">
                  If she raises IC2 again, start from her Next level comparison, not from timelines.
                </span>
                <span className="mono faint" style={{ fontSize: "11.5px" }}>
                  7 NOV
                </span>
              </div>
            </div>
          </section>
        </main>
      </AppShell>
    </div>
  );
}
