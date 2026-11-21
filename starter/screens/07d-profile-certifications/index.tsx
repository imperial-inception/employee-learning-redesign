// GENERATED from design/html/07d-profile-certifications.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Profile certifications";

export default function View_07d_profile_certifications() {
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
            <a>
              <Icon name="sliders" size="sm" />
              Tools
              <span className="n">
                5
              </span>
            </a>
            <a className="on">
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
              <section className="panel">
                <div className="panel-h">
                  <h2>
                    Certifications
                  </h2>
                  <span className="cnt">
                    4
                  </span>
                  <Button variant="primary" size="sm" className={s["pcx-hb"]}>
                    <Icon name="plus" size="xs" />
                    {" Add certification"}
                  </Button>
                </div>
                <div className={cx(s["pcx-r"], s["pcx-hd"])}>
                  <span />
                  <span>
                    Certification · issuer
                  </span>
                  <span>
                    Earned
                  </span>
                  <span>
                    Expires
                  </span>
                  <span>
                    Verification
                  </span>
                </div>
                <div className={s["pcx-r"]}>
                  <span className={s["pcx-ic"]}>
                    <Icon name="shield" size="sm" />
                  </span>
                  <div style={{ minWidth: "0" }}>
                    <div className="t ellipsis">
                      Systems Engineering Associate
                    </div>
                    <div className="c ellipsis">
                      Professional engineering society
                    </div>
                  </div>
                  <span className={s["pcx-d"]}>
                    Mar 2023
                  </span>
                  <div className={s["pcx-d"]}>
                    9 Jan 2027
                    <small className={s["pcx-soon"]}>
                      <Icon name="clock" size="xs" />
                      in 49 days
                    </small>
                  </div>
                  <div className={s["pcx-v"]}>
                    <span className={cx(s.src, s.mc)}>
                      <Icon name="check" size="xs" />
                      Verified from file
                    </span>
                    <small>
                      certificate.pdf
                    </small>
                  </div>
                </div>
                <div className={s["pcx-r"]}>
                  <span className={s["pcx-ic"]}>
                    <Icon name="shield" size="sm" />
                  </span>
                  <div style={{ minWidth: "0" }}>
                    <div className="t ellipsis">
                      MBSE Practitioner · SysML v2
                    </div>
                    <div className="c ellipsis">
                      Academy
                    </div>
                  </div>
                  <span className={s["pcx-d"]}>
                    Jun 2025
                  </span>
                  <span className={cx(s["pcx-d"], s["pcx-quiet"])}>
                    No expiry
                  </span>
                  <div className={s["pcx-v"]}>
                    <span className={cx(s.src, s.mc)}>
                      <Icon name="check" size="xs" />
                      Verified from file
                    </span>
                    <small>
                      mbse-practitioner.pdf
                    </small>
                  </div>
                </div>
                <div className={cx(s["pcx-r"], s["pcx-sel"])}>
                  <span className={s["pcx-ic"]}>
                    <Icon name="shield" size="sm" />
                  </span>
                  <div style={{ minWidth: "0" }}>
                    <div className="t ellipsis">
                      Requirements Engineering Foundation
                    </div>
                    <div className="c ellipsis">
                      Requirements engineering board
                    </div>
                  </div>
                  <span className={s["pcx-d"]}>
                    Nov 2021
                  </span>
                  <span className={s["pcx-nr"]}>
                    Not recorded
                  </span>
                  <div className={s["pcx-v"]}>
                    <span className={cx(s.src, s.sr)}>
                      <Icon name="user" size="xs" />
                      Self-reported
                    </span>
                    <small>
                      <span className={s.acc}>
                        Attach certificate
                      </span>
                    </small>
                  </div>
                </div>
                <div className={s["pcx-r"]}>
                  <span className={s["pcx-ic"]}>
                    <Icon name="shield" size="sm" />
                  </span>
                  <div style={{ minWidth: "0" }}>
                    <div className="t ellipsis">
                      Functional Safety Fundamentals
                    </div>
                    <div className="c ellipsis">
                      Academy
                    </div>
                  </div>
                  <span className={s["pcx-d"]}>
                    Sep 2020
                  </span>
                  <div className={cx(s["pcx-d"], s["pcx-exp"])}>
                    Sep 2023
                    <small>
                      Expired
                    </small>
                  </div>
                  <div className={s["pcx-v"]}>
                    <span className={cx(s.src, s.sr)}>
                      <Icon name="user" size="xs" />
                      Self-reported
                    </span>
                    <small>
                      <span className={s.acc}>
                        Attach certificate
                      </span>
                    </small>
                  </div>
                </div>
                <div className={cx(s.never, s["pcx-ln"])}>
                  <Icon name="info" size="xs" />
                  <span>
                    Verified from file: a certificate file is on record. Self-reported: you entered it, with no file yet. A missing date reads “Not recorded”.
                  </span>
                </div>
              </section>
            </div>
            <div className={s.cc}>
              <section className="panel">
                <div className="panel-h">
                  <h2>
                    Attach certificate
                  </h2>
                  <span className={s["pcx-sub"]}>
                    · Requirements Engineering Foundation
                  </span>
                </div>
                <div className={s["pcx-body"]}>
                  <div className={s["pcx-drop"]}>
                    <span className={s["pcx-ic"]}>
                      <Icon name="upload" size="sm" />
                    </span>
                    <b>
                      Drop the certificate here or browse
                    </b>
                    <div className="muted">
                      PDF, PNG or JPG · up to 10 MB
                    </div>
                  </div>
                  <div>
                    <span className="label">
                      {"Expires "}
                      <span className={s.opt}>
                        · optional
                      </span>
                    </span>
                    <div className="input">
                      <Icon name="cal" size="xs" />
                      Not recorded · add a date
                    </div>
                  </div>
                  <div className="help">
                    With a file attached it shows as Verified from file. Sam can open the file; colleagues see only the name and the badge.
                  </div>
                </div>
                <div className={s["pcx-ft"]}>
                  <Button variant="ghost">
                    Cancel
                  </Button>
                  <span className="sp" />
                  <Button>
                    <Icon name="clip" size="sm" />
                    {" Attach"}
                  </Button>
                </div>
              </section>
              <section className="panel">
                <div className="panel-h">
                  <h2>
                    Renewals
                  </h2>
                </div>
                <div className={s["pcx-rn"]}>
                  <Icon name="bell" size="xs" />
                  <span>
                    You get a reminder 60 days before a certification expires. Renew with the issuer, then attach the new certificate here. Expired ones stay listed, marked Expired.
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
