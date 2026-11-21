// GENERATED from design/html/07g-profile-feedback.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import Link from 'next/link';
import { AppShell, Avatar, Button, Icon, Kbd, StatusIcon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Feedback";

export default function View_07g_profile_feedback() {
  return (
    <div>
      <AppShell active="me" manager>
        <main id="page">
          <header className={s["fb-idh"]}>
            <div className={cx("avatar", s["fb-xl"])}>
              JL
            </div>
            <div>
              <h1>
                Jordan Lee
              </h1>
              <div className={s["fb-idl"]}>
                <b>
                  Engineer, Systems II
                </b>
                <span className={s["fb-ro"]}>
                  <Icon name="lock" size="xs" />
                  From HR directory
                </span>
                <span className={s["fb-lnk"]}>
                  {"Edit in HR directory "}
                  <Icon name="ext" size="xs" />
                </span>
                <span className={s["fb-sl"]}>
                  ·
                </span>
                {"Architecture & integration"}
                <span className={s["fb-sl"]}>
                  ·
                </span>
                {"Employee ID "}
                <span className="mono">
                  104822
                </span>
              </div>
              <div className={s["fb-idl"]}>
                {"Professional role "}
                <b>
                  Systems Engineer
                </b>
                <span>
                  · assigned by Sam
                </span>
                <span className={s["fb-sl"]}>
                  ·
                </span>
                <span className={s["fb-lnk"]}>
                  {"View job expectations "}
                  <Icon name="arrow" size="xs" />
                </span>
              </div>
            </div>
            <div className={s["fb-acts"]}>
              <Button>
                <Icon name="eye" size="sm" />
                {" Preview as colleague"}
              </Button>
            </div>
          </header>
          <nav className={s["fb-tabs"]}>
            <Link href="/views/07-profile">
              <Icon name="grid" size="sm" />
              Overview
            </Link>
            <a>
              <Icon name="brief" size="sm" />
              Experience
              <span className={s["fb-n"]}>
                5
              </span>
            </a>
            <a>
              <Icon name="sliders" size="sm" />
              Tools
              <span className={s["fb-n"]}>
                5
              </span>
            </a>
            <a>
              <Icon name="shield" size="sm" />
              Certifications
              <span className={s["fb-n"]}>
                4
              </span>
            </a>
            <a>
              <Icon name="cap" size="sm" />
              Education
              <span className={s["fb-n"]}>
                3
              </span>
            </a>
            <Link href="/views/07f-profile-job-expectations">
              <Icon name="file" size="sm" />
              Job expectations
            </Link>
            <Link href="/views/07g-profile-feedback" className="on">
              <Icon name="msg" size="sm" />
              Feedback
              <span className={s["fb-n"]}>
                6
              </span>
            </Link>
            <Link href="/views/07h-profile-privacy" className={s["fb-push"]}>
              <Icon name="eyeoff" size="sm" />
              Privacy
              <span className={s["fb-n"]}>
                hidden
              </span>
            </Link>
            <Link href="/views/23-agent-confirm">
              <Icon name="link" size="sm" />
              Connected agents
              <span className={s["fb-dot"]} />
            </Link>
          </nav>
          <div className={s["fb-cols"]}>
            <div className={s["fb-col"]}>
              <section className={cx("panel", s["fb-list"])}>
                <div className="panel-h">
                  <h2>
                    Shared feedback
                  </h2>
                  <span className="cnt">
                    6
                  </span>
                  <span className="sp seg">
                    <span className="on">
                      All 6
                    </span>
                    <span>
                      On submissions 4
                    </span>
                    <span>
                      General 2
                    </span>
                  </span>
                </div>
                <div className={cx("li", s["fb-sel"])}>
                  <Avatar initials="SP" size="sm" tone={5} />
                  <div className="grow">
                    <div className={s["fb-q"]}>
                      Before our 1:1 on Thu 4 Dec, have a look at Next level and pick one area to grow in next.
                    </div>
                    <div className={s["fb-meta"]}>
                      <span className={s["fb-gen"]}>
                        <Icon name="msg" size="xs" />
                        General note
                      </span>
                    </div>
                  </div>
                  <span className={s["fb-dt"]}>
                    19 NOV
                  </span>
                </div>
                <div className="li">
                  <Avatar initials="SP" size="sm" tone={5} />
                  <div className="grow">
                    <div className={s["fb-q"]}>
                      The structure is clear and the reflection is honest. Add one example from the CDR prep.
                    </div>
                    <div className={s["fb-meta"]}>
                      <span className={s["fb-ref"]}>
                        <StatusIcon status="returned" />
                        {"Clear Status & Issue Communication "}
                        <span className="mono">
                          CO-120
                        </span>
                      </span>
                      <span className={s["fb-sl"]}>
                        ·
                      </span>
                      <span>
                        you replied 18 Nov
                      </span>
                    </div>
                  </div>
                  <span className={s["fb-dt"]}>
                    17 NOV
                  </span>
                </div>
                <div className="li">
                  <Avatar initials="SP" size="sm" tone={5} />
                  <div className="grow">
                    <div className={s["fb-q"]}>
                      Thanks for running the weekly interface sync while I was out. The actuator team noticed.
                    </div>
                    <div className={s["fb-meta"]}>
                      <span className={s["fb-gen"]}>
                        <Icon name="msg" size="xs" />
                        General note
                      </span>
                    </div>
                  </div>
                  <span className={s["fb-dt"]}>
                    7 NOV
                  </span>
                </div>
                <div className="li">
                  <Avatar initials="SP" size="sm" tone={5} />
                  <div className="grow">
                    <div className={s["fb-q"]}>
                      Good call to learn this from Priya directly. Your notes would help the next new starter.
                    </div>
                    <div className={s["fb-meta"]}>
                      <span className={s["fb-ref"]}>
                        <StatusIcon status="approved" />
                        RFLP model walkthrough
                      </span>
                    </div>
                  </div>
                  <span className={s["fb-dt"]}>
                    29 OCT
                  </span>
                </div>
                <div className="li">
                  <Avatar initials="SP" size="sm" tone={5} />
                  <div className="grow">
                    <div className={s["fb-q"]}>
                      v2 fixed the allocation gaps. The block diagram shows you understood it.
                    </div>
                    <div className={s["fb-meta"]}>
                      <span className={s["fb-ref"]}>
                        <StatusIcon status="approved" />
                        {"Systems Engineering Fundamentals "}
                        <span className="mono">
                          SE-101
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className={s["fb-dt"]}>
                    14 OCT
                  </span>
                </div>
                <div className="li">
                  <Avatar initials="SP" size="sm" tone={5} />
                  <div className="grow">
                    <div className={s["fb-q"]}>
                      The CDR traceability matrix is solid evidence. Keep it as your example for requirements work.
                    </div>
                    <div className={s["fb-meta"]}>
                      <span className={s["fb-ref"]}>
                        <StatusIcon status="approved" />
                        {"Requirements Traceability "}
                        <span className="mono">
                          RQ-102
                        </span>
                      </span>
                    </div>
                  </div>
                  <span className={s["fb-dt"]}>
                    24 SEP
                  </span>
                </div>
              </section>
              <div className={s["fb-rule"]}>
                <span className={s["fb-lk"]}>
                  <Icon name="lock" size="sm" />
                </span>
                <span>
                  <b>
                    {"A manager's private notes never appear here."}
                  </b>
                  {" This page shows only feedback Sam chose to share with you. Private notes stay with the manager who wrote them: never shown to you or colleagues, never exported, never sent to AI."}
                </span>
              </div>
            </div>
            <section className={cx("panel", s["fb-th"])}>
              <div className="panel-h">
                <Icon name="msg" size="sm" className="c-muted" />
                <h2>
                  General note from Sam
                </h2>
                <span className={s["fb-vis"]}>
                  <Icon name="eye" size="xs" />
                  Shared with you
                </span>
              </div>
              <div className={s["fb-msg"]}>
                <Avatar initials="SP" size="sm" tone={5} />
                <div className="grow">
                  <div className={s["fb-w"]}>
                    <b>
                      Sam Patel
                    </b>
                    <span className="mono">
                      19 NOV · 17:40
                    </span>
                  </div>
                  <p>
                    {"Before our 1:1 on Thu 4 Dec, have a look at Next level and pick one area you'd like to grow in next. We'll plan the first step together."}
                  </p>
                </div>
              </div>
              <div className={s["fb-cmp"]}>
                <label className="label">
                  Your reply
                </label>
                <div className="textarea">
                  {"Thanks Sam. I'd like to start with Integration & interfaces: IM-201 and more time at the interface review board."}
                  <span className={s["fb-caret"]} />
                </div>
              </div>
              <div className={s["fb-bar"]}>
                <span className={s["fb-vis2"]}>
                  <Icon name="eye" size="xs" />
                  Sam will see your reply
                </span>
                <Button variant="ghost" className="sp">
                  Cancel
                </Button>
                <Button variant="primary">
                  <Icon name="send" size="sm" />
                  {" Reply "}
                  <Kbd>
                    Ctrl Enter
                  </Kbd>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </AppShell>
    </div>
  );
}
