// GENERATED from design/html/08b-colleague-profile.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Tag, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Colleague profile";

export default function View_08b_colleague_profile() {
  return (
    <div>
      <AppShell active="colleagues" manager>
        <main id="page">
          <div className="crumbs">
            <Icon name="users" size="xs" />
            <span>
              Colleagues
            </span>
            <span className="sl">
              /
            </span>
            <span style={{ color: "var(--text-2)" }}>
              Priya Nair
            </span>
            <span className="sp mono faint" style={{ fontSize: "11.5px" }}>
              {"1 OF 6 FOR “SYSML” "}
              <Icon name="cu" size="xs" />
              <Icon name="cd" size="xs" />
            </span>
          </div>
          <header className={s["cp-idh"]}>
            <div className={cx("avatar a2", s["cp-xl"])}>
              PN
            </div>
            <div>
              <h1>
                Priya Nair
              </h1>
              <div className={s["cp-idl"]}>
                <b>
                  Lead Systems Engineer
                </b>
                <span className={s["cp-sl"]}>
                  ·
                </span>
                {"Architecture & integration"}
                <span className={s["cp-ro"]}>
                  <Icon name="lock" size="xs" />
                  From HR directory
                </span>
              </div>
              <div className={s["cp-idl"]}>
                <span>
                  {"Shares "}
                  <b>
                    skills
                  </b>
                  {", "}
                  <b>
                    tools
                  </b>
                  {" and "}
                  <b>
                    experience
                  </b>
                </span>
                <span className={s["cp-sl"]}>
                  ·
                </span>
                visible to colleagues by her choice
              </div>
            </div>
            <div className={s["cp-acts"]}>
              <Button variant="primary">
                <Icon name="msg" size="sm" />
                {" Message"}
              </Button>
            </div>
          </header>
          <div className={cx("banner info", s["cp-note"])}>
            <span className={s["cp-ic"]}>
              <Icon name="eyeoff" size="sm" />
            </span>
            <span style={{ fontSize: "13px" }}>
              <b>
                You see only what Priya chose to share.
              </b>
              {" "}
              <span className="t2">
                Her goals, learning records and feedback are never shown, and nothing here rates her.
              </span>
            </span>
            <span className="acts" style={{ alignItems: "center" }}>
              <span className="muted" style={{ fontSize: "12.5px" }}>
                {"You're her manager:"}
              </span>
              <Button size="sm">
                {"Open in Team "}
                <Icon name="cr" size="xs" />
              </Button>
            </span>
          </div>
          <div className={s["cp-cols"]}>
            <div className={s["cp-col"]}>
              <section className={cx("panel", s["cp-ex"])}>
                <div className="panel-h">
                  <h2>
                    Experience
                  </h2>
                  <span className="cnt">
                    3
                  </span>
                  <span className="lnk" style={{ cursor: "default" }}>
                    Manager-confirmed or self-reported, as she shared it
                  </span>
                </div>
                <div className={cx("li", s["cp-hit"])}>
                  <span className={s["cp-bx"]}>
                    <Icon name="brief" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      SysML v2 model owner · flight controls
                    </div>
                    <div className="c ellipsis">
                      <span className="mono">
                        2023 – now
                      </span>
                      {" · owns the architecture model and its modelling conventions"}
                    </div>
                  </div>
                  <span className={cx(s["cp-src"], s.mc)}>
                    <Icon name="shield" size="xs" />
                    Manager-confirmed
                  </span>
                </div>
                <div className="li">
                  <span className={s["cp-bx"]}>
                    <Icon name="brief" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      Interface control lead · cabin systems ICDs
                    </div>
                    <div className="c ellipsis">
                      <span className="mono">
                        2021 – 2023
                      </span>
                      {" · ran the interface review board for two design reviews"}
                    </div>
                  </div>
                  <span className={cx(s["cp-src"], s.mc)}>
                    <Icon name="shield" size="xs" />
                    Manager-confirmed
                  </span>
                </div>
                <div className="li">
                  <span className={s["cp-bx"]}>
                    <Icon name="brief" size="sm" />
                  </span>
                  <div className="grow">
                    <div className="t">
                      RFLP model walkthroughs for newer engineers
                    </div>
                    <div className="c ellipsis">
                      <span className="mono">
                        2025 – now
                      </span>
                      {" · one-hour sessions on reading and extending the model"}
                    </div>
                  </div>
                  <span className={cx(s["cp-src"], s.sr)}>
                    <Icon name="user" size="xs" />
                    Self-reported
                  </span>
                </div>
              </section>
              <section className={cx("panel", s["cp-tl"])}>
                <div className="panel-h">
                  <h2>
                    Tools
                  </h2>
                  <span className="cnt">
                    3
                  </span>
                  <span className="faint" style={{ fontSize: "12px", marginLeft: "6px" }}>
                    self-rated confidence · Basic, Working, Advanced, Expert
                  </span>
                </div>
                <div className={cx("li", s["cp-hit"])}>
                  <span className={s["cp-nm"]}>
                    SysML v2
                  </span>
                  <span className={s["cp-meter"]}>
                    <span className="on" />
                    <span className="on" />
                    <span className="on" />
                    <span className="on" />
                  </span>
                  <span className={s["cp-lv"]}>
                    Expert
                  </span>
                  <span className={s["cp-match"]}>
                    <Icon name="search" size="xs" />
                    matches “SysML”
                  </span>
                  <span className={s["cp-up"]}>
                    updated 2 Nov
                  </span>
                </div>
                <div className="li">
                  <span className={s["cp-nm"]}>
                    Requirements tool
                  </span>
                  <span className={s["cp-meter"]}>
                    <span className="on" />
                    <span className="on" />
                    <span className="on" />
                    <span />
                  </span>
                  <span className={s["cp-lv"]}>
                    Advanced
                  </span>
                  <span className={s["cp-up"]}>
                    updated 2 Nov
                  </span>
                </div>
                <div className="li">
                  <span className={s["cp-nm"]}>
                    PLM system
                  </span>
                  <span className={s["cp-meter"]}>
                    <span className="on" />
                    <span className="on" />
                    <span />
                    <span />
                  </span>
                  <span className={s["cp-lv"]}>
                    Working
                  </span>
                  <span className={s["cp-up"]}>
                    updated 9 Jun
                  </span>
                </div>
              </section>
            </div>
            <aside className={s["cp-col"]}>
              <section className={cx("panel glow", s["cp-why"])}>
                <div className={s["cp-k"]}>
                  WHY PRIYA MATCHED “SYSML”
                </div>
                <div className="why">
                  <b>
                    Why
                  </b>
                  SysML v2 is one of her tools and part of an experience her manager confirmed.
                </div>
                <div className={s["cp-mr"]}>
                  <span className={s["cp-w"]}>
                    Tools
                  </span>
                  <span className={s["cp-v"]}>
                    <b>
                      SysML v2
                    </b>
                    {" · Expert, self-rated"}
                  </span>
                </div>
                <div className={s["cp-mr"]}>
                  <span className={s["cp-w"]}>
                    Experience
                  </span>
                  <span className={s["cp-v"]}>
                    <b>
                      SysML v2 model owner
                    </b>
                    {" · Manager-confirmed"}
                  </span>
                </div>
                <div className={s["cp-mr"]}>
                  <span className={s["cp-w"]}>
                    Skills
                  </span>
                  <span className={s["cp-v"]}>
                    <b>
                      SysML
                    </b>
                    {" · listed by Priya"}
                  </span>
                </div>
                <div className={s["cp-ft"]}>
                  <Icon name="info" size="xs" />
                  <span>
                    Matches come only from what Priya shares. Results are ordered by how well they match your search, never by a rating of the person.
                  </span>
                </div>
              </section>
              <section className={cx("panel", s["cp-sk"])}>
                <div className="panel-h">
                  <h2>
                    Skills
                  </h2>
                  <span className="cnt">
                    5
                  </span>
                </div>
                <div className={s["cp-tags"]}>
                  <Tag className={s["cp-on"]}>
                    SysML
                  </Tag>
                  <Tag>
                    MBSE
                  </Tag>
                  <Tag>
                    Interface control
                  </Tag>
                  <Tag>
                    ICDs
                  </Tag>
                  <Tag>
                    Requirements traceability
                  </Tag>
                </div>
                <div className={s["cp-c"]}>
                  Topics Priya listed herself. Not verified.
                </div>
              </section>
            </aside>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
