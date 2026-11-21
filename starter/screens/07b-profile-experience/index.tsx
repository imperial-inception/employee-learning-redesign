// GENERATED from design/html/07b-profile-experience.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, Kbd, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Profile experience";

export default function View_07b_profile_experience() {
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
            <a className="on">
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
                  <span className={s["pe-sort"]}>
                    newest first
                  </span>
                  <span className={s["pe-add"]}>
                    <Icon name="plus" size="xs" />
                    {" Add"}
                  </span>
                </div>
                <div>
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
                        Integration test witness · flight control rig
                      </div>
                      <div className="c ellipsis">
                        <span className="mono">
                          Mar – Sep 2024
                        </span>
                        {" · witnessed and signed off 14 rig integration tests"}
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
                          2 Oct
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
                        Trade study author · power distribution concept
                      </div>
                      <div className="c ellipsis">
                        <span className="mono">
                          Jun 2023
                        </span>
                        {" · compared three architectures for the concept review"}
                      </div>
                    </div>
                    <div>
                      <span className={cx(s.src, s.sr)}>
                        <Icon name="user" size="xs" />
                        Self-reported
                      </span>
                      <div className={s.by}>
                        {"Asked Sam · "}
                        <span className="mono">
                          18 Nov
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
                        <span className={s.acc}>
                          Ask Sam to confirm
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
                        Graduate rotation · systems integration lab
                      </div>
                      <div className="c ellipsis">
                        <span className="mono">
                          2019 – 2021
                        </span>
                        {" · What you did: "}
                        <span className={s["pe-nr"]}>
                          Not recorded
                        </span>
                        {" · "}
                        <span className={s.acc}>
                          Add details
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className={cx(s.src, s.sr)}>
                        <Icon name="user" size="xs" />
                        Self-reported
                      </span>
                      <div className={s.by}>
                        <span className={s.acc}>
                          Ask Sam to confirm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx(s.never, s["pe-foot"])}>
                  <Icon name="info" size="xs" />
                  <span>
                    Manager-confirmed experience counts as evidence in Next level; self-reported entries count once Sam confirms them. Missing details read “Not recorded” and never mean a missing skill.
                  </span>
                </div>
              </section>
            </div>
            <div className={s.cc}>
              <section className="panel glow pe-form">
                <div className="panel-h">
                  <h2>
                    Add experience
                  </h2>
                  <span className={s["pe-x"]}>
                    <Icon name="x" size="sm" />
                  </span>
                </div>
                <div className={s["pe-body"]}>
                  <div>
                    <span className="label">
                      Title or role
                    </span>
                    <div className={cx("input", s["pe-focus"])}>
                      Interface working group chair
                    </div>
                  </div>
                  <div>
                    <span className="label">
                      Project
                    </span>
                    <div className="input">
                      Actuation upgrade program
                      <span className={s["pe-chev"]}>
                        <Icon name="cd" size="xs" />
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className={s["pe-g2"]}>
                      <div>
                        <span className="label">
                          From
                        </span>
                        <div className="input">
                          <Icon name="cal" size="xs" />
                          <span className="mono" style={{ fontSize: "12.5px" }}>
                            Jan 2026
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="label">
                          To
                        </span>
                        <div className={cx("input", s["pe-ph"])}>
                          <Icon name="cal" size="xs" />
                          Now
                        </div>
                      </div>
                    </div>
                    <div className={s["pe-cb"]}>
                      <span className="check on">
                        <Icon name="check" />
                      </span>
                      I still do this
                    </div>
                  </div>
                  <div>
                    <span className="label">
                      What you did
                    </span>
                    <div className="textarea">
                      Chair the monthly interface working group: agenda, decisions log and open actions across four suppliers.
                    </div>
                    <div className={s["pe-cnt"]}>
                      104 / 280
                    </div>
                  </div>
                  <div>
                    <span className="label">
                      {"Link "}
                      <span className={s.opt}>
                        · optional
                      </span>
                    </span>
                    <div className={cx("input", s["pe-ph"])}>
                      <Icon name="link" size="xs" />
                      Paste a link to a document or intranet page
                    </div>
                  </div>
                  <div className={s["pe-conf"]}>
                    <span className="check on">
                      <Icon name="check" />
                    </span>
                    <div>
                      <b>
                        Ask Sam to confirm after saving
                      </b>
                      <div className="c">
                        It shows as Self-reported until Sam confirms it.
                      </div>
                    </div>
                  </div>
                  <div className={s["pe-vis"]}>
                    <Icon name="eye" size="xs" />
                    <span>
                      Sam can see it. Colleagues only if Privacy allows (off now).
                    </span>
                  </div>
                </div>
                <div className={s["pe-ft"]}>
                  <Button variant="ghost">
                    Cancel
                  </Button>
                  <span className="sp" />
                  <Button variant="primary">
                    {"Add experience "}
                    <Kbd>
                      Ctrl Enter
                    </Kbd>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
