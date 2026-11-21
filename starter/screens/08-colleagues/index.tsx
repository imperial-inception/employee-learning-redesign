// GENERATED from design/html/08-colleagues.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Colleagues";

export default function View_08_colleagues() {
  return (
    <div>
      <AppShell active="colleagues" manager>
        <main id="page">
          <header className="ph" style={{ marginBottom: "16px" }}>
            <div>
              <h1>
                Colleagues
              </h1>
              <p className="sub">
                Find people by skill or tool. Only colleagues who chose to be visible appear.
              </p>
            </div>
          </header>
          <div className={s.sbar}>
            <Icon name="search" size="lg" />
            <span>
              SysML
            </span>
            <span className="sp muted" style={{ fontSize: "12.5px" }}>
              Skills, tools and experience
            </span>
            <Kbd>
              Enter
            </Kbd>
          </div>
          <div className={cx("banner info", s.vis)}>
            <span className={s.ic}>
              <Icon name="eyeoff" size="sm" />
            </span>
            <span>
              <b>
                Only colleagues who chose to be visible appear.
              </b>
              {" "}
              <span className="t2">
                {"You're currently hidden."}
              </span>
            </span>
            <span className="acts">
              <Button size="sm">
                Change in Profile › Privacy
              </Button>
            </span>
          </div>
          <div className={s.lay}>
            <aside>
              <div className={s.fs}>
                <h3>
                  EXPERIENCE
                </h3>
                <div className={s.fo}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  Manager-confirmed
                  <span className="n">
                    3
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  Self-reported
                  <span className="n">
                    2
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check on">
                    <Icon name="check" size="xs" />
                  </span>
                  Not recorded
                  <span className="n">
                    1
                  </span>
                </div>
              </div>
              <div className={s.fs}>
                <h3>
                  CONFIDENCE
                </h3>
                <div className={s.fo}>
                  <span className="check" />
                  Expert
                  <span className="n">
                    1
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Advanced
                  <span className="n">
                    2
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Working
                  <span className="n">
                    2
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Basic
                  <span className="n">
                    1
                  </span>
                </div>
              </div>
              <div className={s.fs}>
                <h3>
                  TEAM
                </h3>
                <div className={s.fo}>
                  <span className="check" />
                  {"Architecture & integration"}
                  <span className="n">
                    2
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Flight controls
                  <span className="n">
                    1
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  {"Requirements & V&V"}
                  <span className="n">
                    2
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="check" />
                  Integration lab
                  <span className="n">
                    1
                  </span>
                </div>
              </div>
              <div className={s.fs}>
                <h3>
                  MATCHED IN
                </h3>
                <div className={s.fo}>
                  <span className="toggle on" />
                  Tools
                  <span className="n">
                    6
                  </span>
                </div>
                <div className={s.fo}>
                  <span className="toggle on" />
                  Experience
                  <span className="n">
                    5
                  </span>
                </div>
              </div>
            </aside>
            <section>
              <div className="row" style={{ marginBottom: "10px", fontSize: "13px" }}>
                <b>
                  6 colleagues
                </b>
                <span className="muted">
                  for “SysML” · 41 of 212 colleagues are visible
                </span>
                <span className="sp muted">
                  {"Sort "}
                  <b style={{ color: "var(--text)", fontWeight: "550" }}>
                    Best match
                  </b>
                  {" "}
                  <Icon name="cd" size="xs" />
                </span>
              </div>
              <div className={cx("panel", s.res)}>
                <div className="li hover">
                  <Avatar initials="PN" size="lg" tone={2} />
                  <div className="grow">
                    <div className={s.nm}>
                      <span className="t">
                        Priya Nair
                      </span>
                      <span className="c ellipsis">
                        {"Lead Systems Engineer · Architecture & integration"}
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={s.tool}>
                        SysML v2
                        <span className={s.meter}>
                          <span className="on" />
                          <span className="on" />
                          <span className="on" />
                          <span className="on" />
                        </span>
                        <span className={s.lvl}>
                          Expert
                        </span>
                      </span>
                      <span className={s["sr-t"]}>
                        self-rated
                      </span>
                      <span className={s.ot}>
                        Requirements tool
                      </span>
                      <span className={s.ot}>
                        PLM system
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={cx(s.src, s.mc)}>
                        <Icon name="shield" size="xs" />
                        Manager-confirmed
                      </span>
                      <span className={cx("ellipsis", s.exs)}>
                        {"SysML v2 model owner, flight controls · "}
                        <span className="mono">
                          2023 – now
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button variant="primary" size="sm">
                      <Icon name="msg" size="xs" />
                      {" Message"}
                    </Button>
                    <Button size="sm">
                      View profile
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="FR" size="lg" tone={3} />
                  <div className="grow">
                    <div className={s.nm}>
                      <span className="t">
                        Fatima Rahman
                      </span>
                      <span className="c ellipsis">
                        Configuration Analyst · Flight controls
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={s.tool}>
                        SysML v2
                        <span className={s.meter}>
                          <span className="on" />
                          <span className="on" />
                          <span className="on" />
                          <span />
                        </span>
                        <span className={s.lvl}>
                          Advanced
                        </span>
                      </span>
                      <span className={s["sr-t"]}>
                        self-rated
                      </span>
                      <span className={s.ot}>
                        PLM system
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={cx(s.src, s.mc)}>
                        <Icon name="shield" size="xs" />
                        Manager-confirmed
                      </span>
                      <span className={cx("ellipsis", s.exs)}>
                        {"Moved the actuation model from SysML v1 to v2 · "}
                        <span className="mono">
                          2025
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button size="sm">
                      <Icon name="msg" size="xs" />
                      {" Message"}
                    </Button>
                    <Button variant="ghost" size="sm">
                      View profile
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="WC" size="lg" tone={5} />
                  <div className="grow">
                    <div className={s.nm}>
                      <span className="t">
                        Wei Chen
                      </span>
                      <span className="c ellipsis">
                        {"Systems Engineer · Architecture & integration"}
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={s.tool}>
                        SysML v2
                        <span className={s.meter}>
                          <span className="on" />
                          <span className="on" />
                          <span className="on" />
                          <span />
                        </span>
                        <span className={s.lvl}>
                          Advanced
                        </span>
                      </span>
                      <span className={s["sr-t"]}>
                        self-rated
                      </span>
                      <span className={s.ot}>
                        Python
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={cx(s.src, s.sr)}>
                        <Icon name="user" size="xs" />
                        Self-reported
                      </span>
                      <span className={cx("ellipsis", s.exs)}>
                        {"Built the interface views for the cabin model · "}
                        <span className="mono">
                          2024
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button size="sm">
                      <Icon name="msg" size="xs" />
                      {" Message"}
                    </Button>
                    <Button variant="ghost" size="sm">
                      View profile
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="DO" size="lg" tone={4} />
                  <div className="grow">
                    <div className={s.nm}>
                      <span className="t">
                        Daniel Okafor
                      </span>
                      <span className="c ellipsis">
                        {"Requirements Engineer · Requirements & V&V"}
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={s.tool}>
                        SysML v2
                        <span className={s.meter}>
                          <span className="on" />
                          <span className="on" />
                          <span />
                          <span />
                        </span>
                        <span className={s.lvl}>
                          Working
                        </span>
                      </span>
                      <span className={s["sr-t"]}>
                        self-rated
                      </span>
                      <span className={s.ot}>
                        Requirements tool
                      </span>
                      <span className={s.ot}>
                        PLM system
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={cx(s.src, s.mc)}>
                        <Icon name="shield" size="xs" />
                        Manager-confirmed
                      </span>
                      <span className={cx("ellipsis", s.exs)}>
                        Reviewed the SysML v2 pilot models for two programs
                      </span>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button size="sm">
                      <Icon name="msg" size="xs" />
                      {" Message"}
                    </Button>
                    <Button variant="ghost" size="sm">
                      View profile
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="AK" size="lg" tone={6} />
                  <div className="grow">
                    <div className={s.nm}>
                      <span className="t">
                        Alex Kim
                      </span>
                      <span className="c ellipsis">
                        {"Systems Engineer · Requirements & V&V"}
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={s.tool}>
                        SysML v2
                        <span className={s.meter}>
                          <span className="on" />
                          <span className="on" />
                          <span />
                          <span />
                        </span>
                        <span className={s.lvl}>
                          Working
                        </span>
                      </span>
                      <span className={s["sr-t"]}>
                        self-rated
                      </span>
                      <span className={s.ot}>
                        Requirements tool
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={cx(s.src, s.sr)}>
                        <Icon name="user" size="xs" />
                        Self-reported
                      </span>
                      <span className={cx("ellipsis", s.exs)}>
                        Writes test cases straight from SysML v2 requirements
                      </span>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button size="sm">
                      <Icon name="msg" size="xs" />
                      {" Message"}
                    </Button>
                    <Button variant="ghost" size="sm">
                      View profile
                    </Button>
                  </div>
                </div>
                <div className="li">
                  <Avatar initials="MG" size="lg" />
                  <div className="grow">
                    <div className={s.nm}>
                      <span className="t">
                        Maria Gomez
                      </span>
                      <span className="c ellipsis">
                        Test Engineer · Integration lab
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={s.tool}>
                        SysML v2
                        <span className={s.meter}>
                          <span className="on" />
                          <span />
                          <span />
                          <span />
                        </span>
                        <span className={s.lvl}>
                          Basic
                        </span>
                      </span>
                      <span className={s["sr-t"]}>
                        self-rated
                      </span>
                      <span className={s.ot}>
                        Python
                      </span>
                    </div>
                    <div className={s.ml}>
                      <span className={cx("nr", s.exs)}>
                        Experience: not recorded
                      </span>
                    </div>
                  </div>
                  <div className={s.act}>
                    <Button size="sm">
                      <Icon name="msg" size="xs" />
                      {" Message"}
                    </Button>
                    <Button variant="ghost" size="sm">
                      View profile
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
