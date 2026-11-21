// GENERATED from design/html/15e-rules-reminders.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Reminders";

export default function View_15e_rules_reminders() {
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
            <span className="on">
              Reminders
            </span>
            <span>
              Feedback form
            </span>
          </div>
          <div className={s.lay}>
            <section className={cx("panel", s["rm-main"])}>
              <div className="panel-h">
                <h2>
                  Reminder rules
                </h2>
                <span className="cnt">
                  3
                </span>
                <span className="lnk">
                  Defaults for everyone
                </span>
              </div>
              <div className={s["rm-lead"]}>
                <Icon name="info" size="xs" />
                Reminders nudge and offer help. They never change a status or count against anyone.
              </div>
              <div className={s["rm-rule"]}>
                <div className={s["rm-hd"]}>
                  <span className={cx("a", s["rm-ic"])}>
                    <Icon name="clock" size="sm" />
                  </span>
                  <div className="grow">
                    <b>
                      Due soon
                    </b>
                    <div className={s["rm-to"]}>
                      To the employee · required learning and required pathway updates
                    </div>
                  </div>
                  <span className="toggle on" />
                </div>
                <div className={s["rm-sent"]}>
                  {"Remind "}
                  <span className={s["rm-val"]}>
                    14 days
                  </span>
                  {" and "}
                  <span className={s["rm-val"]}>
                    3 days
                  </span>
                  {" before the due date."}
                </div>
                <div className={s["rm-ch"]}>
                  <span className={s["rm-chl"]}>
                    Channels
                  </span>
                  <span className={s["rm-c"]}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                    Email
                  </span>
                  <span className={s["rm-c"]}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                    Chat
                  </span>
                </div>
              </div>
              <div className={s["rm-rule"]}>
                <div className={s["rm-hd"]}>
                  <span className={cx(s["rm-ic"], s.w)}>
                    <Icon name="alert" size="sm" />
                  </span>
                  <div className="grow">
                    <b>
                      Overdue
                    </b>
                    <div className={s["rm-to"]}>
                      To the employee, then their manager
                    </div>
                  </div>
                  <span className="toggle on" />
                </div>
                <div className={s["rm-sent"]}>
                  {"Remind "}
                  <span className={s["rm-val"]}>
                    the day after
                  </span>
                  {" the due date, then "}
                  <span className={s["rm-val"]}>
                    every 7 days
                  </span>
                  {". After "}
                  <span className={cx(s["rm-val"], s.new)}>
                    14 days
                  </span>
                  <span className={s["rm-was"]}>
                    was 7
                  </span>
                  <span className={s["rm-tg"]}>
                    UNSAVED
                  </span>
                  {", add it to the manager's digest so they can help."}
                </div>
                <div className={s["rm-ch"]}>
                  <span className={s["rm-chl"]}>
                    Channels
                  </span>
                  <span className={s["rm-c"]}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                    Email
                  </span>
                  <span className={s["rm-c"]}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                    Chat
                  </span>
                </div>
              </div>
              <div className={s["rm-rule"]}>
                <div className={s["rm-hd"]}>
                  <span className={s["rm-ic"]}>
                    <Icon name="inbox" size="sm" />
                  </span>
                  <div className="grow">
                    <b>
                      Review waiting
                    </b>
                    <div className={s["rm-to"]}>
                      To the manager who reviews it
                    </div>
                  </div>
                  <span className="toggle on" />
                </div>
                <div className={s["rm-sent"]}>
                  {"Remind the manager when a submission has waited "}
                  <span className={s["rm-val"]}>
                    5 days
                  </span>
                  {". On day "}
                  <span className={s["rm-val"]}>
                    7
                  </span>
                  , show it as late in their digest.
                </div>
                <div className={s["rm-note"]}>
                  <Icon name="info" size="xs" />
                  <span>
                    On time is judged by the submission date, so a slow review never counts against the employee.
                  </span>
                </div>
                <div className={s["rm-ch"]}>
                  <span className={s["rm-chl"]}>
                    Channels
                  </span>
                  <span className={s["rm-c"]}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                    Email
                  </span>
                  <span className={cx(s["rm-c"], s.off)}>
                    <span className="check" />
                    Chat
                  </span>
                </div>
              </div>
              <div className={s.dirty}>
                <span className={s.dt} />
                <span className={s.tx}>
                  <b>
                    1 unsaved change
                  </b>
                  {" · overdue: the manager hears after 14 days instead of 7"}
                </span>
                <span className="sp" />
                <Button>
                  Discard
                </Button>
                <Button variant="primary">
                  {"Save "}
                  <Kbd style={{ background: "transparent", borderColor: "rgba(127,127,127,.4)", color: "inherit", opacity: ".7" }}>
                    Ctrl S
                  </Kbd>
                </Button>
              </div>
            </section>
            <div className={s["rm-col"]}>
              <section className="panel">
                <div className="panel-h">
                  <h2>
                    Delivery
                  </h2>
                  <span className="cnt">
                    applies to all rules
                  </span>
                </div>
                <div className={s["rm-sec"]}>
                  <div className="grp">
                    Channels
                  </div>
                  <div className={s["rm-opt"]}>
                    <Icon name="send" size="sm" />
                    <div className="grow">
                      <b>
                        Email
                      </b>
                      <small>
                        Work address from the HR directory
                      </small>
                    </div>
                    <span className="toggle on" />
                  </div>
                  <div className={s["rm-opt"]}>
                    <Icon name="msg" size="sm" />
                    <div className="grow">
                      <b>
                        Chat
                      </b>
                      <small>
                        Direct message from Skill Portal
                      </small>
                    </div>
                    <span className="toggle on" />
                  </div>
                  <div className={s["rm-hint"]}>
                    People can switch one channel off, never both.
                  </div>
                </div>
                <div className={s["rm-sec"]}>
                  <div className="grp">
                    Daily digest
                  </div>
                  <div className={s["rm-row"]}>
                    <span className={cx("input", s["rm-in"])}>
                      <Icon name="clock" size="sm" />
                      09:00
                    </span>
                    <span className={s["rm-lbl"]}>
                      {"in each person's time zone"}
                    </span>
                  </div>
                  <div className={s["rm-hint"]}>
                    Reminders wait for the digest instead of arriving one by one.
                  </div>
                </div>
                <div className={s["rm-sec"]}>
                  <div className="grp">
                    Quiet hours
                  </div>
                  <div className={s["rm-row"]}>
                    <span className={cx("input", s["rm-in"])}>
                      <Icon name="moon" size="sm" />
                      19:00 – 08:00
                    </span>
                    <span className={s["rm-ck"]}>
                      <span className="check on">
                        <Icon name="check" size="xs" />
                      </span>
                      Weekends
                    </span>
                    <span className={s["rm-ck"]}>
                      <span className="check on">
                        <Icon name="check" size="xs" />
                      </span>
                      Public holidays
                    </span>
                  </div>
                </div>
                <div className={s["rm-sec"]}>
                  <div className="grp">
                    Combine
                  </div>
                  <div className={s["rm-opt"]}>
                    <Icon name="inbox" size="sm" />
                    <div className="grow">
                      <b>
                        One message per person per day
                      </b>
                      <small>
                        5 due items = 1 message · no item twice in 3 days
                      </small>
                    </div>
                    <span className="toggle on" />
                  </div>
                </div>
              </section>
              <section className="panel">
                <div className="panel-h">
                  <Icon name="eye" size="sm" />
                  <h2>
                    Example digest
                  </h2>
                  <span className="lnk">
                    sample data
                  </span>
                </div>
                <div className={s["rm-msg"]}>
                  <div className={s["rm-mh"]}>
                    <span className={s["rm-mk"]}>
                      <Icon name="cap" />
                    </span>
                    <b>
                      Skill Portal
                    </b>
                    <span className="m">
                      Mon 09:00 · email
                    </span>
                  </div>
                  <div className={s["rm-sub"]}>
                    5 learning items need you this week
                  </div>
                  <div className={s["rm-it"]}>
                    <Icon name="flag" size="sm" />
                    {"Configuration Control "}
                    <span className={s["rm-cd"]}>
                      CM-140
                    </span>
                    <span className={cx("m", s.w)}>
                      due in 3 days
                    </span>
                  </div>
                  <div className={s["rm-it"]}>
                    <Icon name="flag" size="sm" />
                    {"Interface Management "}
                    <span className={s["rm-cd"]}>
                      IM-201
                    </span>
                    <span className="m">
                      due in 14 days
                    </span>
                  </div>
                  <div className={s["rm-it"]}>
                    <Icon name="inbox" size="sm" />
                    2 submissions wait for your review
                    <span className="m">
                      oldest 5 days
                    </span>
                  </div>
                  <div className={s["rm-mf"]}>
                    <span className={s.more}>
                      + 1 more
                    </span>
                    <Button size="sm" className="sp">
                      Open Skill Portal
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
