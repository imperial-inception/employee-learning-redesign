// GENERATED from design/html/15c-rules-required.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Pill, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Required learning";

export default function View_15c_rules_required() {
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
              <Button variant="primary">
                <Icon name="plus" size="sm" />
                {" Require learning"}
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
            <span className="on">
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
            <section className={cx("panel", s["rq-main"])}>
              <div className="panel-h">
                <h2>
                  Required learning
                </h2>
                <span className="cnt">
                  4 rules
                </span>
                <span className="lnk">
                  {"2 ended rules "}
                  <Icon name="cr" size="xs" />
                </span>
              </div>
              <div className={cx(s["rq-g"], s["rq-th"])}>
                <span>
                  Learning · population
                </span>
                <span>
                  Due
                </span>
                <span>
                  Reason
                </span>
                <span>
                  Approved by
                </span>
              </div>
              <div className={cx(s["rq-g"], s["rq-row"])}>
                <div className={s["rq-it"]}>
                  <Icon name="flag" size="sm" />
                  <div className="grow">
                    <div className={s["rq-tt"]}>
                      Interface Management
                      <span className={s["rq-cd"]}>
                        IM-201
                      </span>
                    </div>
                    <div className={s["rq-pop"]}>
                      <Icon name="users" size="xs" />
                      {"Systems Engineering & Integration "}
                      <span className="mono">
                        214
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s["rq-due"]}>
                  by 31 Mar 2027
                  <div className={s["rq-sm"]}>
                    fixed date
                  </div>
                </div>
                <div className={s["rq-rs"]}>
                  Integration leads own interface control from Q2 2027.
                </div>
                <div className={s["rq-ap"]}>
                  <Avatar initials="PN" size="xs" tone={4} />
                  <div>
                    <b>
                      Priya Nair
                    </b>
                    <div className={s["rq-sm"]}>
                      2 Oct 2026
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx(s["rq-g"], s["rq-row"])}>
                <div className={s["rq-it"]}>
                  <Icon name="flag" size="sm" />
                  <div className="grow">
                    <div className={s["rq-tt"]}>
                      Configuration Control
                      <span className={s["rq-cd"]}>
                        CM-140
                      </span>
                    </div>
                    <div className={s["rq-pop"]}>
                      <Icon name="users" size="xs" />
                      {"Systems Engineering & Integration "}
                      <span className="mono">
                        214
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s["rq-due"]}>
                  60 days
                  <div className={s["rq-sm"]}>
                    after joining the population
                  </div>
                </div>
                <div className={s["rq-rs"]}>
                  Internal audit found design changes made without configuration review.
                </div>
                <div className={s["rq-ap"]}>
                  <Avatar initials="SP" size="xs" tone={6} />
                  <div>
                    <b>
                      Sam Patel
                    </b>
                    <div className={s["rq-sm"]}>
                      14 Aug 2026
                    </div>
                  </div>
                </div>
                <div className={s["rq-req"]}>
                  <Icon name="alert" size="sm" />
                  <div className={cx("grow", s.tx)}>
                    <b>
                      Sam Patel asked to remove this
                    </b>
                    {" · 19 Nov · "}
                    <span className={s.q}>
                      “Configuration review is now a required step in the change tool.”
                    </span>
                    <br />
                    <span className={s.q}>
                      {"Stays required until a second approver agrees. Sam can't approve his own request."}
                    </span>
                  </div>
                  <Button size="sm">
                    Review request
                  </Button>
                </div>
              </div>
              <div className={cx(s["rq-g"], s["rq-row"])}>
                <div className={s["rq-it"]}>
                  <Icon name="flag" size="sm" />
                  <div className="grow">
                    <div className={s["rq-tt"]}>
                      {"V&V Planning Essentials"}
                      <span className={s["rq-cd"]}>
                        VV-230
                      </span>
                    </div>
                    <div className={s["rq-pop"]}>
                      <Icon name="users" size="xs" />
                      {"Requirements & Verification "}
                      <span className="mono">
                        158
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s["rq-due"]}>
                  90 days
                  <div className={s["rq-sm"]}>
                    after joining the population
                  </div>
                </div>
                <div className={s["rq-rs"]}>
                  Test readiness reviews need a verification plan for every requirement set.
                </div>
                <div className={s["rq-ap"]}>
                  <Avatar initials="JL" size="xs" />
                  <div>
                    <b>
                      Jordan Lee
                      <span className={s["rq-you"]}>
                        YOU
                      </span>
                    </b>
                    <div className={s["rq-sm"]}>
                      9 Sep 2026
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx(s["rq-g"], s["rq-row"])}>
                <div className={s["rq-it"]}>
                  <Icon name="flag" size="sm" />
                  <div className="grow">
                    <div className={s["rq-tt"]}>
                      Digital Thread Basics
                      <span className={s["rq-cd"]}>
                        DT-120
                      </span>
                    </div>
                    <div className={s["rq-pop"]}>
                      <Icon name="users" size="xs" />
                      {"Digital Thread "}
                      <span className="mono">
                        96
                      </span>
                    </div>
                  </div>
                </div>
                <div className={s["rq-due"]}>
                  by 30 Jun 2027
                  <div className={s["rq-sm"]}>
                    fixed date
                  </div>
                </div>
                <div className={s["rq-rs"]}>
                  Model handoffs between teams move to the digital thread in 2027.
                </div>
                <div className={s["rq-ap"]}>
                  <Avatar initials="SP" size="xs" tone={6} />
                  <div>
                    <b>
                      Sam Patel
                    </b>
                    <div className={s["rq-sm"]}>
                      28 Oct 2026
                    </div>
                  </div>
                </div>
              </div>
              <div className={s["rq-pol"]}>
                <Icon name="lock" size="sm" />
                <span>
                  <b>
                    Removing a requirement needs a second approver,
                  </b>
                  {" and so does exempting one person from it. Whoever asks can't approve. Learning that matches a population stays optional unless a rule or override here makes it required. Company-wide required training stays in the LMS."}
                </span>
              </div>
            </section>
            <div className={s["rq-col"]}>
              <section className="panel">
                <div className="panel-h">
                  <h2>
                    Overrides
                  </h2>
                  <span className="cnt">
                    3 active
                  </span>
                  <span className="lnk">
                    <Icon name="plus" size="xs" />
                    {" Override"}
                  </span>
                </div>
                <div className={s["rq-lead"]}>
                  One person, one item, always with a reason.
                </div>
                <div className={s["rq-ov"]}>
                  <div className={s["rq-ovh"]}>
                    <Avatar initials="OH" size="xs" tone={6} />
                    <b>
                      Omar Haddad
                    </b>
                    <Pill tone="acc" size="sm">
                      Made required
                    </Pill>
                  </div>
                  <div className={s["rq-ovw"]}>
                    <span className="mono">
                      CM-140
                    </span>
                    Configuration Control · by 31 Jan 2027
                  </div>
                  <div className={s["rq-ovr"]}>
                    <span className={s.q}>
                      Reason:
                    </span>
                    {" joins the configuration board in January."}
                  </div>
                  <div className={s["rq-ovb"]}>
                    <Icon name="user" size="xs" />
                    {"Set by Jordan Lee · "}
                    <span className="mono">
                      12 Nov
                    </span>
                  </div>
                </div>
                <div className={s["rq-ov"]}>
                  <div className={s["rq-ovh"]}>
                    <Avatar initials="WC" size="xs" />
                    <b>
                      Wei Chen
                    </b>
                    <Pill tone="neu" size="sm">
                      Not required
                    </Pill>
                  </div>
                  <div className={s["rq-ovw"]}>
                    <span className="mono">
                      IM-201
                    </span>
                    Interface Management
                  </div>
                  <div className={s["rq-ovr"]}>
                    <span className={s.q}>
                      Reason:
                    </span>
                    {" already chairs the interface control board; equivalent experience approved."}
                  </div>
                  <div className={s["rq-ovb"]}>
                    <Icon name="users" size="xs" />
                    {"Jordan Lee, second approver Priya Nair · "}
                    <span className="mono">
                      5 Nov
                    </span>
                  </div>
                </div>
                <div className={s["rq-ov"]}>
                  <div className={s["rq-ovh"]}>
                    <Avatar initials="FR" size="xs" />
                    <b>
                      Fatima Rahman
                    </b>
                    <Pill tone="info" size="sm">
                      Due date moved
                    </Pill>
                  </div>
                  <div className={s["rq-ovw"]}>
                    <span className="mono">
                      VV-230
                    </span>
                    {"V&V Planning Essentials · by 15 Mar 2027"}
                  </div>
                  <div className={s["rq-ovr"]}>
                    <span className={s.q}>
                      Reason:
                    </span>
                    {" on a customer-site rotation until February."}
                  </div>
                  <div className={s["rq-ovb"]}>
                    <Icon name="user" size="xs" />
                    {"Set by Sam Patel · "}
                    <span className="mono">
                      3 Nov
                    </span>
                  </div>
                </div>
                <div className={s["rq-ft"]}>
                  <span>
                    4 ended overrides
                  </span>
                  <span className="lnk">
                    {"Show "}
                    <Icon name="cr" size="xs" />
                  </span>
                </div>
              </section>
              <section className={cx("panel", s["rq-pv"])}>
                <div className="grp">
                  How employees see it
                </div>
                <div className={s["rq-card"]}>
                  <div className={s.hd}>
                    <Icon name="flag" size="sm" />
                    Configuration Control
                    <span className="m">
                      due 14 Jan
                    </span>
                  </div>
                  <div className="why">
                    <b>
                      Why
                    </b>
                    Required for your population: internal audit found design changes made without configuration review.
                  </div>
                </div>
                <div className={s["rq-pvn"]}>
                  It shows under Required on Home, with this reason and the due date. Everything else that matches stays optional.
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
