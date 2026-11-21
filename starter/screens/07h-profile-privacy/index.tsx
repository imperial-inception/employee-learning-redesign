// GENERATED from design/html/07h-profile-privacy.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import Link from 'next/link';
import { AppShell, Button, Icon, Pill, Tag, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Privacy";

export default function View_07h_profile_privacy() {
  return (
    <div>
      <AppShell active="me" manager>
        <main id="page">
          <header className={s["pv-idh"]}>
            <div className={cx("avatar", s["pv-xl"])}>
              JL
            </div>
            <div>
              <h1>
                Jordan Lee
              </h1>
              <div className={s["pv-idl"]}>
                <b>
                  Engineer, Systems II
                </b>
                <span className={s["pv-ro"]}>
                  <Icon name="lock" size="xs" />
                  From HR directory
                </span>
                <span className={s["pv-lnk"]}>
                  {"Edit in HR directory "}
                  <Icon name="ext" size="xs" />
                </span>
                <span className={s["pv-sl"]}>
                  ·
                </span>
                {"Architecture & integration"}
                <span className={s["pv-sl"]}>
                  ·
                </span>
                {"Employee ID "}
                <span className="mono">
                  104822
                </span>
              </div>
              <div className={s["pv-idl"]}>
                {"Professional role "}
                <b>
                  Systems Engineer
                </b>
                <span>
                  · assigned by Sam
                </span>
                <span className={s["pv-sl"]}>
                  ·
                </span>
                <span className={s["pv-lnk"]}>
                  {"View job expectations "}
                  <Icon name="arrow" size="xs" />
                </span>
              </div>
            </div>
            <div className={s["pv-acts"]}>
              <Button>
                <Icon name="eye" size="sm" />
                {" Preview as colleague"}
              </Button>
            </div>
          </header>
          <nav className={s["pv-tabs"]}>
            <Link href="/views/07-profile">
              <Icon name="grid" size="sm" />
              Overview
            </Link>
            <a>
              <Icon name="brief" size="sm" />
              Experience
              <span className={s["pv-n"]}>
                5
              </span>
            </a>
            <a>
              <Icon name="sliders" size="sm" />
              Tools
              <span className={s["pv-n"]}>
                5
              </span>
            </a>
            <a>
              <Icon name="shield" size="sm" />
              Certifications
              <span className={s["pv-n"]}>
                4
              </span>
            </a>
            <a>
              <Icon name="cap" size="sm" />
              Education
              <span className={s["pv-n"]}>
                3
              </span>
            </a>
            <Link href="/views/07f-profile-job-expectations">
              <Icon name="file" size="sm" />
              Job expectations
            </Link>
            <Link href="/views/07g-profile-feedback">
              <Icon name="msg" size="sm" />
              Feedback
              <span className={s["pv-n"]}>
                6
              </span>
            </Link>
            <Link href="/views/07h-profile-privacy" className={cx("on", s["pv-push"])}>
              <Icon name="eyeoff" size="sm" />
              Privacy
              <span className={s["pv-n"]}>
                hidden
              </span>
            </Link>
            <Link href="/views/23-agent-confirm">
              <Icon name="link" size="sm" />
              Connected agents
              <span className={s["pv-dot"]} />
            </Link>
          </nav>
          <div className={s["pv-cols"]}>
            <div className={s["pv-col"]}>
              <section className="panel">
                <div className="panel-h">
                  <h2>
                    Colleague directory
                  </h2>
                  <span className="sp faint" style={{ fontSize: "12px" }}>
                    Changes save as you make them
                  </span>
                </div>
                <div className={s["pv-state"]}>
                  <span className={s["pv-ic"]}>
                    <Icon name="eyeoff" />
                  </span>
                  <div className="grow">
                    <b>
                      {"You're hidden from colleagues "}
                      <Pill tone="neu" size="sm">
                        Off
                      </Pill>
                    </b>
                    <div className={s["pv-c"]}>
                      Off by default. Nobody finds you in Colleagues or in People search results until you turn this on.
                    </div>
                  </div>
                  <Button variant="primary">
                    <Icon name="eye" size="sm" />
                    {" Turn on visibility"}
                  </Button>
                </div>
                <div className={s["pv-sec"]}>
                  <span className={s["pv-k"]}>
                    WHAT TO SHARE WHEN ON
                  </span>
                  <span className={s["pv-hint"]}>
                    <Icon name="lock" size="xs" />
                    {" Available once you're visible · nothing is ticked by default"}
                  </span>
                </div>
                <div className={s["pv-opt"]}>
                  <span className="check dis" />
                  <div className="grow">
                    <div className={s["pv-t"]}>
                      Skills
                    </div>
                    <div className={s["pv-c"]}>
                      The topics you listed yourself
                    </div>
                    <div className={s["pv-tg"]}>
                      <Tag>
                        SysML
                      </Tag>
                      <Tag>
                        MBSE
                      </Tag>
                      <Tag>
                        Interfaces
                      </Tag>
                    </div>
                  </div>
                </div>
                <div className={s["pv-opt"]}>
                  <span className="check dis" />
                  <div className="grow">
                    <div className={s["pv-t"]}>
                      {"Tools "}
                      <span className="mono" style={{ fontSize: "11.5px", fontWeight: "500" }}>
                        4
                      </span>
                    </div>
                    <div className={s["pv-c"]}>
                      With your self-rated confidence
                    </div>
                    <div className={s["pv-tg"]}>
                      <Tag>
                        SysML v2 · Working
                      </Tag>
                      <Tag>
                        Requirements tool · Advanced
                      </Tag>
                      <Tag>
                        PLM system · Basic
                      </Tag>
                      <Tag>
                        Python · Working
                      </Tag>
                    </div>
                  </div>
                </div>
                <div className={s["pv-opt"]}>
                  <span className="check dis" />
                  <div className="grow">
                    <div className={s["pv-t"]}>
                      {"Experience "}
                      <span className="mono" style={{ fontSize: "11.5px", fontWeight: "500" }}>
                        2
                      </span>
                    </div>
                    <div className={s["pv-c"]}>
                      Each entry keeps its label: Manager-confirmed or Self-reported
                    </div>
                  </div>
                </div>
                <div className={s["pv-always"]}>
                  <Icon name="lock" size="xs" />
                  <span>
                    <b>
                      {"Always shown once you're visible:"}
                    </b>
                    {" your name, HR job title and team, from the HR directory."}
                  </span>
                </div>
                <div className={s["pv-ft"]}>
                  <Icon name="info" size="xs" />
                  <span>
                    Turn it off any time and you leave colleague search straight away.
                  </span>
                </div>
              </section>
              <section className={cx("panel", s["pv-now"])}>
                <span className={s["pv-ic"]}>
                  <Icon name="users" />
                </span>
                <div className="grow">
                  <div className={s["pv-t"]}>
                    What colleagues see today: nothing
                  </div>
                  <div className={s["pv-c"]}>
                    {"You don't appear in Colleagues or in People results in search. Preview as colleague (top right) shows exactly what they would see."}
                  </div>
                </div>
              </section>
            </div>
            <aside className={s["pv-col"]}>
              <section className={cx("panel", s["pv-nv"])}>
                <div className="panel-h">
                  <Icon name="eyeoff" size="sm" className="c-muted" />
                  <h2>
                    Never shown to colleagues
                  </h2>
                </div>
                <div className="li">
                  <Icon name="target" />
                  <div className="grow">
                    <div className="t">
                      Goals
                    </div>
                    <div className="c">
                      including goals Sam set for you
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="record" />
                  <div className="grow">
                    <div className="t">
                      Learning records
                    </div>
                    <div className="c">
                      submissions, reviews and approvals
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="msg" />
                  <div className="grow">
                    <div className="t">
                      Feedback
                    </div>
                    <div className="c">
                      anything Sam shares with you
                    </div>
                  </div>
                </div>
                <div className="li">
                  <Icon name="file" />
                  <div className="grow">
                    <div className="t">
                      Job expectations
                    </div>
                    <div className="c">
                      your job profile level in the Job catalog
                    </div>
                  </div>
                </div>
              </section>
              <section className={cx("panel", s["pv-ai"])}>
                <h3>
                  <Icon name="spark" size="sm" className="c-accent" />
                  The AI advisor
                </h3>
                <p>
                  {"It answers from the learning catalog and pathways you're allowed to see. These are never sent to it:"}
                </p>
                <div className={s["pv-x"]}>
                  <Tag>
                    <Icon name="lock" size="xs" />
                    Your profile
                  </Tag>
                  <Tag>
                    <Icon name="lock" size="xs" />
                    Your goal text
                  </Tag>
                  <Tag>
                    <Icon name="lock" size="xs" />
                    Manager notes
                  </Tag>
                </div>
              </section>
              <section className={cx("panel", s["pv-dl"])}>
                <div className="row">
                  <span className={cx("grow", s["pv-t"])}>
                    Your data
                  </span>
                  <Button size="sm">
                    <Icon name="download" size="xs" />
                    {" Download my data"}
                  </Button>
                </div>
                <div className={s["pv-c"]}>
                  A copy of your profile, goals, learning records and shared feedback, as JSON and CSV.
                </div>
              </section>
            </aside>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
