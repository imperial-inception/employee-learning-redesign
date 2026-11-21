// GENERATED from design/html/07c-profile-tools.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Profile tools";

export default function View_07c_profile_tools() {
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
            <a>
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
            <a className="on">
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
          <div className={s.cols}>
            <div className={s.cc}>
              <section className={cx("panel", s.tl)}>
                <div className="panel-h">
                  <h2>
                    Tools
                  </h2>
                  <span className="cnt">
                    5
                  </span>
                  <span className={s["ptl-desc"]}>
                    self-rated confidence · Basic, Working, Advanced, Expert
                  </span>
                  <Button size="sm" className={s["ptl-hb"]}>
                    <Icon name="plus" size="xs" />
                    {" Add tool"}
                  </Button>
                </div>
                <div>
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
                      {"Agent proposes "}
                      <span className="mono">
                        <s>
                          Basic
                        </s>
                        {" → Working"}
                      </span>
                    </span>
                    <Button size="sm">
                      Review
                    </Button>
                    <span className={s.up}>
                      updated 14 Jul
                    </span>
                  </div>
                  <div className={cx("li", s["ptl-ed"])}>
                    <span className={s.nm}>
                      Python
                    </span>
                    <span className="seg">
                      <span>
                        Basic
                      </span>
                      <span>
                        Working
                      </span>
                      <span className="on">
                        Advanced
                      </span>
                      <span>
                        Expert
                      </span>
                    </span>
                    <span className={s["ptl-was"]}>
                      {"was Working · "}
                      <span className="mono">
                        2 Feb
                      </span>
                    </span>
                    <span className={s["ptl-acts"]}>
                      <Button variant="ghost" size="sm">
                        Cancel
                      </Button>
                      <Button variant="primary" size="sm">
                        {"Save "}
                        <Kbd>
                          Enter
                        </Kbd>
                      </Button>
                    </span>
                  </div>
                  <div className="li">
                    <span className={s.nm}>
                      Simulation tool
                    </span>
                    <span className={cx(s.meter, s["ptl-nr"])}>
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                    <span className={cx(s.lv, s["ptl-nrl"])}>
                      Not recorded
                    </span>
                    <span className={cx(s["ptl-rate"], s.acc)}>
                      Rate it
                    </span>
                    <span className={s.up}>
                      added 18 Nov
                    </span>
                  </div>
                </div>
              </section>
            </div>
            <div className={s.cc}>
              <section className={cx("panel", s["ptl-key"])}>
                <div className="panel-h">
                  <h2>
                    What the levels mean
                  </h2>
                </div>
                <div className={s["ptl-kr"]}>
                  <span className={s.meter}>
                    <span className="on" />
                    <span />
                    <span />
                    <span />
                  </span>
                  <div>
                    <b>
                      Basic
                    </b>
                    <div className="c">
                      You can do simple tasks with help.
                    </div>
                  </div>
                </div>
                <div className={s["ptl-kr"]}>
                  <span className={s.meter}>
                    <span className="on" />
                    <span className="on" />
                    <span />
                    <span />
                  </span>
                  <div>
                    <b>
                      Working
                    </b>
                    <div className="c">
                      You use it on your own for everyday work.
                    </div>
                  </div>
                </div>
                <div className={s["ptl-kr"]}>
                  <span className={s.meter}>
                    <span className="on" />
                    <span className="on" />
                    <span className="on" />
                    <span />
                  </span>
                  <div>
                    <b>
                      Advanced
                    </b>
                    <div className="c">
                      You handle unusual cases and help others.
                    </div>
                  </div>
                </div>
                <div className={s["ptl-kr"]}>
                  <span className={s.meter}>
                    <span className="on" />
                    <span className="on" />
                    <span className="on" />
                    <span className="on" />
                  </span>
                  <div>
                    <b>
                      Expert
                    </b>
                    <div className="c">
                      Others come to you; you shape how the team uses it.
                    </div>
                  </div>
                </div>
                <div className={cx(s.never, s["ptl-ln"])}>
                  <Icon name="info" size="xs" />
                  <span>
                    Self-rated: your own view of your confidence. Nobody checks it, and it is not an assessment or a level for you.
                  </span>
                </div>
              </section>
              <section className={cx("panel", s.pv)}>
                <div className="panel-h">
                  <h2>
                    Who sees your tools
                  </h2>
                  <span className="lnk">
                    {"Privacy settings "}
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
                      Off. Colleagues see your tools only if you turn this on.
                    </div>
                  </div>
                </div>
                <div className={s["ptl-who"]}>
                  <Icon name="eye" size="xs" />
                  <span>
                    Sam can always see them on your profile.
                  </span>
                </div>
                <div className={s["ptl-who"]}>
                  <Icon name="link" size="xs" />
                  <span>
                    A connected agent can only propose a change. Nothing changes until you review it.
                  </span>
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
