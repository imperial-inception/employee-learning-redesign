// GENERATED from design/html/07-profile.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Profile";

export default function View_07_profile() {
  return (
    <div>
      <AppShell active="me" manager>
        <main id="page">
          <header className={s.idh}>
            <div className={cx("avatar", s.xl)}>
              JL
            </div>
            <div>
              <h1>
                Jordan Lee
              </h1>
              <div className={s.idl}>
                <b>
                  Engineer, Systems II
                </b>
                <span className={s.ro}>
                  <Icon name="lock" size="xs" />
                  From HR directory
                </span>
                <span className="lnk">
                  {"Edit in HR directory "}
                  <Icon name="ext" size="xs" />
                </span>
                <span className="sl">
                  ·
                </span>
                {"Architecture & integration"}
                <span className="sl">
                  ·
                </span>
                {"Employee ID "}
                <span className="mono">
                  104822
                </span>
              </div>
              <div className={s.idl}>
                {"Professional role "}
                <b>
                  Systems Engineer
                </b>
                <span>
                  · assigned by Sam
                </span>
                <span className="sl">
                  ·
                </span>
                <span className="lnk">
                  {"View job expectations "}
                  <Icon name="arrow" size="xs" />
                </span>
              </div>
            </div>
            <div className="acts">
              <Button>
                <Icon name="eye" size="sm" />
                {" Preview as colleague"}
              </Button>
            </div>
          </header>
          <nav className={s.ptabs}>
            <a className="on">
              <Icon name="grid" size="sm" />
              Overview
            </a>
            <a>
              <Icon name="brief" size="sm" />
              Experience
              <span className="n">
                5
              </span>
            </a>
            <a>
              <Icon name="sliders" size="sm" />
              Tools
              <span className="n">
                5
              </span>
            </a>
            <a>
              <Icon name="shield" size="sm" />
              Certifications
              <span className="n">
                4
              </span>
            </a>
            <a>
              <Icon name="cap" size="sm" />
              Education
              <span className="n">
                3
              </span>
            </a>
            <a>
              <Icon name="file" size="sm" />
              Job expectations
            </a>
            <a>
              <Icon name="msg" size="sm" />
              Feedback
              <span className="n">
                6
              </span>
            </a>
            <a className={s.push}>
              <Icon name="eyeoff" size="sm" />
              Privacy
              <span className="n">
                hidden
              </span>
            </a>
            <a>
              <Icon name="link" size="sm" />
              Connected agents
              <span className="dot" />
            </a>
          </nav>
          <div className={s.mn}>
            <div className={s.cols}>
              <div className={s.cc}>
                <section className={cx("panel", s.ex)}>
                  <div className="panel-h">
                    <h2>
                      Experience
                    </h2>
                    <span className="cnt">
                      5
                    </span>
                    <span className="lnk">
                      <Icon name="plus" size="xs" />
                      {" Add"}
                    </span>
                  </div>
                  <div className="li">
                    <span className={s.ic}>
                      <Icon name="brief" size="sm" />
                    </span>
                    <div className="grow">
                      <div className="t">
                        Interface control lead · actuation upgrade program
                      </div>
                      <div className="c ellipsis">
                        <span className="mono">
                          Oct 2024 – now
                        </span>
                        {" · owns the actuator ICDs and the weekly interface sync"}
                      </div>
                    </div>
                    <div>
                      <span className={cx(s.src, s.mc)}>
                        <Icon name="shield" size="xs" />
                        Manager-confirmed
                      </span>
                      <div className={s.by}>
                        {"Sam · "}
                        <span className="mono">
                          12 Aug
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="li">
                    <span className={s.ic}>
                      <Icon name="brief" size="sm" />
                    </span>
                    <div className="grow">
                      <div className="t">
                        Requirements analyst · cabin systems
                      </div>
                      <div className="c ellipsis">
                        <span className="mono">
                          2021 – 2024
                        </span>
                        {" · wrote and traced requirements for two design reviews"}
                      </div>
                    </div>
                    <div>
                      <span className={cx(s.src, s.sr)}>
                        <Icon name="user" size="xs" />
                        Self-reported
                      </span>
                      <div className={s.by}>
                        <span className={s.acc} style={{ fontWeight: "500" }}>
                          Ask Sam to confirm
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="li" style={{ minHeight: "40px", padding: "0 16px", color: "var(--muted)", fontSize: "12.5px" }}>
                    <Icon name="cd" size="xs" />
                    Show 3 more on Experience
                  </div>
                </section>
                <section className={cx("panel", s.tl)}>
                  <div className="panel-h">
                    <h2>
                      Tools
                    </h2>
                    <span className="cnt">
                      5
                    </span>
                    <span className="faint" style={{ fontSize: "12px", marginLeft: "6px" }}>
                      self-rated confidence · Basic, Working, Advanced, Expert
                    </span>
                    <span className="lnk">
                      Edit
                    </span>
                  </div>
                  <div className="li">
                    <span className={s.nm}>
                      SysML v2
                    </span>
                    <span className={s.meter}>
                      <span className="on" />
                      <span className="on" />
                      <span />
                      <span />
                    </span>
                    <span className={s.lv}>
                      Working
                    </span>
                    <span className={s.up}>
                      updated 3 Nov
                    </span>
                  </div>
                  <div className="li">
                    <span className={s.nm}>
                      Requirements tool
                    </span>
                    <span className={s.meter}>
                      <span className="on" />
                      <span className="on" />
                      <span className="on" />
                      <span />
                    </span>
                    <span className={s.lv}>
                      Advanced
                    </span>
                    <span className={s.up}>
                      updated 3 Nov
                    </span>
                  </div>
                  <div className="li">
                    <span className={s.nm}>
                      PLM system
                    </span>
                    <span className={s.meter}>
                      <span className="on" />
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className={s.lv}>
                      Basic
                    </span>
                    <span className={s.pend}>
                      <Icon name="clock" size="xs" />
                      Change pending
                    </span>
                    <span className={s.up} style={{ marginLeft: "12px" }}>
                      updated 14 Jul
                    </span>
                  </div>
                  <div className="li">
                    <span className={s.nm}>
                      Python
                    </span>
                    <span className={s.meter}>
                      <span className="on" />
                      <span className="on" />
                      <span />
                      <span />
                    </span>
                    <span className={s.lv}>
                      Working
                    </span>
                    <span className={s.up}>
                      updated 2 Feb
                    </span>
                  </div>
                  <div className="li">
                    <span className={cx("muted", s.nm)}>
                      Simulation tool
                    </span>
                    <span className={cx("hatch", s.meter)} style={{ width: "97px", height: "6px", borderRadius: "2px" }} />
                    <span className={cx("faint", s.lv)} style={{ whiteSpace: "nowrap", width: "92px" }}>
                      Not recorded
                    </span>
                    <span className={cx(s.up, s.acc)} style={{ fontFamily: "inherit", fontWeight: "500" }}>
                      Rate it
                    </span>
                  </div>
                </section>
              </div>
              <div className={s.cc}>
                <section className={cx("panel", s.pv)}>
                  <div className="panel-h">
                    <h2>
                      Privacy
                    </h2>
                    <span className="lnk">
                      {"All settings "}
                      <Icon name="cr" size="xs" />
                    </span>
                  </div>
                  <div className={s["tg-row"]}>
                    <span className="toggle" />
                    <div className="grow">
                      <b>
                        Show my skills and tools in colleague search
                      </b>
                      <div className="c">
                        {"Off. It's opt-in: nobody finds you in Colleagues until you turn it on."}
                      </div>
                    </div>
                  </div>
                  <div className={s.never}>
                    <Icon name="eyeoff" size="xs" />
                    <span>
                      Never shown to colleagues: your goals, learning records, feedback and job expectations.
                    </span>
                  </div>
                </section>
                <section className={cx("panel glow", s.ag)}>
                  <div className="panel-h">
                    <h2>
                      Connected agents
                    </h2>
                    <span className="cnt">
                      1
                    </span>
                    <span className="lnk">
                      {"Activity log "}
                      <Icon name="cr" size="xs" />
                    </span>
                  </div>
                  <div className={s.req}>
                    <div className="row" style={{ gap: "8px" }}>
                      <Icon name="alert" size="sm" />
                      <span className="t">
                        1 change waiting for your confirmation
                      </span>
                      <span className="sp mono faint" style={{ fontSize: "11.5px" }}>
                        3 MIN AGO
                      </span>
                    </div>
                    <div className="c" style={{ paddingLeft: "24px" }}>
                      Desktop assistant wants to update your profile
                    </div>
                    <div className={s.diff} style={{ paddingLeft: "24px" }}>
                      {"Tools › PLM system "}
                      <s>
                        Basic
                      </s>
                      <Icon name="arrow" size="xs" />
                      <span style={{ color: "var(--text)" }}>
                        Working
                      </span>
                    </div>
                    <div className="acts" style={{ paddingLeft: "24px" }}>
                      <Button variant="primary" size="sm">
                        Review
                      </Button>
                      <Button variant="ghost" size="sm">
                        Decline
                      </Button>
                    </div>
                  </div>
                  <div className={s.conn}>
                    <span className={s.ic}>
                      <Icon name="cmd" size="sm" />
                    </span>
                    <div className="grow">
                      <b>
                        Desktop assistant (MCP)
                      </b>
                      <div className="c">
                        <span className={s.live} />
                        {" Active · "}
                        <span className="mono">
                          expires in 42 min
                        </span>
                      </div>
                    </div>
                    <Button size="sm">
                      Revoke
                    </Button>
                  </div>
                  <div className={s.never} style={{ paddingTop: "0" }}>
                    <Icon name="info" size="xs" />
                    <span>
                      Agents act with your permissions and disconnect after 1 hour at most. Every change waits for you here.
                    </span>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
