// GENERATED from design/html/07f-profile-job-expectations.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import Link from 'next/link';
import { AppShell, Button, Icon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Job expectations";

export default function View_07f_profile_job_expectations() {
  return (
    <div>
      <AppShell active="me" manager>
        <main id="page">
          <header className={s["je-idh"]}>
            <div className={cx("avatar", s["je-xl"])}>
              JL
            </div>
            <div>
              <h1>
                Jordan Lee
              </h1>
              <div className={s["je-idl"]}>
                <b>
                  Engineer, Systems II
                </b>
                <span className={s["je-ro"]}>
                  <Icon name="lock" size="xs" />
                  From HR directory
                </span>
                <span className={s["je-lnk"]}>
                  {"Edit in HR directory "}
                  <Icon name="ext" size="xs" />
                </span>
                <span className={s["je-sl"]}>
                  ·
                </span>
                {"Architecture & integration"}
                <span className={s["je-sl"]}>
                  ·
                </span>
                {"Employee ID "}
                <span className="mono">
                  104822
                </span>
              </div>
              <div className={s["je-idl"]}>
                {"Professional role "}
                <b>
                  Systems Engineer
                </b>
                <span>
                  · assigned by Sam
                </span>
                <span className={s["je-sl"]}>
                  ·
                </span>
                <span className={s["je-lnk"]}>
                  {"View job expectations "}
                  <Icon name="arrow" size="xs" />
                </span>
              </div>
            </div>
            <div className={s["je-acts"]}>
              <Button>
                <Icon name="eye" size="sm" />
                {" Preview as colleague"}
              </Button>
            </div>
          </header>
          <nav className={s["je-tabs"]}>
            <Link href="/views/07-profile">
              <Icon name="grid" size="sm" />
              Overview
            </Link>
            <a>
              <Icon name="brief" size="sm" />
              Experience
              <span className={s["je-n"]}>
                5
              </span>
            </a>
            <a>
              <Icon name="sliders" size="sm" />
              Tools
              <span className={s["je-n"]}>
                5
              </span>
            </a>
            <a>
              <Icon name="shield" size="sm" />
              Certifications
              <span className={s["je-n"]}>
                4
              </span>
            </a>
            <a>
              <Icon name="cap" size="sm" />
              Education
              <span className={s["je-n"]}>
                3
              </span>
            </a>
            <Link href="/views/07f-profile-job-expectations" className="on">
              <Icon name="file" size="sm" />
              Job expectations
            </Link>
            <Link href="/views/07g-profile-feedback">
              <Icon name="msg" size="sm" />
              Feedback
              <span className={s["je-n"]}>
                6
              </span>
            </Link>
            <Link href="/views/07h-profile-privacy" className={s["je-push"]}>
              <Icon name="eyeoff" size="sm" />
              Privacy
              <span className={s["je-n"]}>
                hidden
              </span>
            </Link>
            <Link href="/views/23-agent-confirm">
              <Icon name="link" size="sm" />
              Connected agents
              <span className={s["je-dot"]} />
            </Link>
          </nav>
          <div className={s["je-cols"]}>
            <section className="panel">
              <div className="panel-h">
                <h2>
                  Expected at Individual contributor 1
                </h2>
                <span className="cnt">
                  6 areas
                </span>
                <span className={cx("sp", s["je-ro"])}>
                  <Icon name="lock" size="xs" />
                  Read-only · Job catalog
                </span>
              </div>
              <div className={s["je-hd"]}>
                <span>
                  Area
                </span>
                <span>
                  {"What's expected at IC1"}
                </span>
                <span>
                  Looks like on the job
                </span>
              </div>
              <div className={s["je-ar"]}>
                <div className={s["je-an"]}>
                  <span className={s["je-ix"]}>
                    01
                  </span>
                  {"Requirements & traceability"}
                </div>
                <div className={s["je-ex"]}>
                  You write clear requirements for single functions and keep their trace links current, with a lead reviewing them.
                </div>
                <div className={s["je-lk"]}>
                  Requirements for one function, traced and checked at a design review
                </div>
              </div>
              <div className={s["je-ar"]}>
                <div className={s["je-an"]}>
                  <span className={s["je-ix"]}>
                    02
                  </span>
                  Architecture modelling
                </div>
                <div className={s["je-ex"]}>
                  {"You extend existing SysML v2 models under close guidance and follow the team's modelling conventions."}
                </div>
                <div className={s["je-lk"]}>
                  Model updates accepted into the baseline without rework
                </div>
              </div>
              <div className={s["je-ar"]}>
                <div className={s["je-an"]}>
                  <span className={s["je-ix"]}>
                    03
                  </span>
                  {"Integration & interfaces"}
                </div>
                <div className={s["je-ex"]}>
                  You keep interface data current in existing ICDs and raise the mismatches you find.
                </div>
                <div className={s["je-lk"]}>
                  Interface changes logged and raised at the weekly interface sync
                </div>
              </div>
              <div className={s["je-ar"]}>
                <div className={s["je-an"]}>
                  <span className={s["je-ix"]}>
                    04
                  </span>
                  {"V&V planning"}
                </div>
                <div className={s["je-ex"]}>
                  You write test cases and verification procedures from a plan someone else owns.
                </div>
                <div className={s["je-lk"]}>
                  Test cases traced to the requirements they verify
                </div>
              </div>
              <div className={s["je-ar"]}>
                <div className={s["je-an"]}>
                  <span className={s["je-ix"]}>
                    05
                  </span>
                  Communication
                </div>
                <div className={s["je-ex"]}>
                  You report status on your own tasks clearly and raise risks to your lead early.
                </div>
                <div className={s["je-lk"]}>
                  Short, accurate status updates; risks raised before dates slip
                </div>
              </div>
              <div className={s["je-ar"]}>
                <div className={s["je-an"]}>
                  <span className={s["je-ix"]}>
                    06
                  </span>
                  Mentoring
                </div>
                <div className={cx(s["je-ex"], s.na)}>
                  Not expected at IC1. Sharing what you learn with your team is welcome.
                </div>
                <div className={s["je-lk"]}>
                  Optional: walk a newer colleague through a method you use
                </div>
              </div>
              <div className={s["je-ft"]}>
                <Icon name="book" size="xs" />
                <span>
                  Systems engineering job family · Systems Engineer · Individual contributor 1
                </span>
                <span className="sp mono">
                  CATALOG V2026.2 · PUBLISHED 1 SEP 2026
                </span>
              </div>
            </section>
            <aside className={s["je-side"]}>
              <section className={cx("panel glow", s["je-sum"])}>
                <div className={s["je-k"]}>
                  SYSTEMS ENGINEER · JOB CATALOG
                </div>
                <div className={s["je-lvls"]}>
                  <div className={cx(s["je-lvl"], s.now)}>
                    <span className={s["je-o"]} />
                    <span>
                      Individual contributor 1
                    </span>
                    <span className="mono">
                      YOU NOW
                    </span>
                  </div>
                  <div className={s["je-lvl"]}>
                    <span className={s["je-o"]} />
                    <span>
                      Individual contributor 2
                    </span>
                    <span className="mono">
                      NEXT
                    </span>
                  </div>
                </div>
                <div className={s["je-cmp"]}>
                  <span className={s["je-lnk"]}>
                    {"Compare with Individual contributor 2 "}
                    <Icon name="arrow" size="xs" />
                    {" Next level"}
                  </span>
                  <br />
                  {" See what changes in each of the 6 areas and where your approved evidence already is."}
                </div>
                <Button variant="primary" size="lg">
                  {"Open Next level "}
                  <Icon name="arrow" size="sm" />
                </Button>
              </section>
              <section className={cx("panel", s["je-how"])}>
                <h3>
                  <Icon name="info" size="sm" />
                  How to read this
                </h3>
                <ul>
                  <li>
                    <Icon name="lock" size="xs" />
                    <span>
                      <b>
                        Read-only.
                      </b>
                      {" Expectations come from the Job catalog and are the same for everyone at this level. If something looks wrong, ask Sam."}
                    </span>
                  </li>
                  <li>
                    <Icon name="msg" size="xs" />
                    <span>
                      <b>
                        Not an assessment.
                      </b>
                      {" Nothing here rates you. Use it to plan with Sam at your 1:1."}
                    </span>
                  </li>
                  <li>
                    <Icon name="eyeoff" size="xs" />
                    <span>
                      <b>
                        Private.
                      </b>
                      {" Colleagues never see your job expectations."}
                    </span>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
