// GENERATED from design/html/07e-profile-education.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Button, Icon, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Profile education";

export default function View_07e_profile_education() {
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
            <a>
              <Icon name="shield" size="sm" />
              Certifications
              <span className="n">
                4
              </span>
            </a>
            <a className="on">
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
                    Education
                  </h2>
                  <span className="cnt">
                    3
                  </span>
                  <span className={s["ped-desc"]}>
                    degrees and courses of study
                  </span>
                  <Button variant="primary" size="sm" className={s["ped-hb"]}>
                    <Icon name="plus" size="xs" />
                    {" Add education"}
                  </Button>
                </div>
                <div className={cx(s["ped-r"], s["ped-hd"])}>
                  <span />
                  <span>
                    Degree or course
                  </span>
                  <span>
                    Field
                  </span>
                  <span>
                    Institution
                  </span>
                  <span>
                    Year
                  </span>
                  <span />
                </div>
                <div className={s["ped-r"]}>
                  <span className={s["ped-ic"]}>
                    <Icon name="cap" size="sm" />
                  </span>
                  <div className="t ellipsis">
                    Master of Science (MSc)
                  </div>
                  <span className={cx("ellipsis", s["ped-f"])}>
                    Systems engineering
                  </span>
                  <span className={cx("ellipsis", s["ped-f"])}>
                    Northgate University
                  </span>
                  <span className={s["ped-y"]}>
                    2019
                  </span>
                  <span className={s["ped-more"]}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s["ped-r"]}>
                  <span className={s["ped-ic"]}>
                    <Icon name="cap" size="sm" />
                  </span>
                  <div className="t ellipsis">
                    Bachelor of Engineering (BEng)
                  </div>
                  <span className={cx("ellipsis", s["ped-f"])}>
                    Mechanical engineering
                  </span>
                  <span className={cx("ellipsis", s["ped-f"])}>
                    Riverside Institute of Technology
                  </span>
                  <span className={s["ped-y"]}>
                    2016
                  </span>
                  <span className={s["ped-more"]}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={s["ped-r"]}>
                  <span className={s["ped-ic"]}>
                    <Icon name="cap" size="sm" />
                  </span>
                  <div className="t ellipsis">
                    Graduate certificate
                  </div>
                  <span className={cx("ellipsis", s["ped-f"])}>
                    Data analysis
                  </span>
                  <span className={cx("ellipsis", s["ped-f"])}>
                    Lakeside College · online
                  </span>
                  <span className={s["ped-nr"]}>
                    Not recorded
                    <small className={s.acc}>
                      Add year
                    </small>
                  </span>
                  <span className={s["ped-more"]}>
                    <Icon name="more" size="sm" />
                  </span>
                </div>
                <div className={cx(s.never, s["ped-ln"])}>
                  <Icon name="user" size="xs" />
                  <span>
                    Education is self-reported: you add it and nobody verifies it here. A missing detail reads “Not recorded”.
                  </span>
                </div>
              </section>
            </div>
            <div className={s.cc}>
              <section className={cx("panel", s["ped-use"])}>
                <div className="panel-h">
                  <h2>
                    How education is used
                  </h2>
                </div>
                <div className={s["ped-u"]}>
                  <Icon name="eye" size="xs" />
                  <span>
                    <b>
                      Sam can see it
                    </b>
                    {" on your profile. Colleagues see it only if Privacy allows (off now)."}
                  </span>
                </div>
                <div className={s["ped-u"]}>
                  <Icon name="target" size="xs" />
                  <span>
                    <b>
                      {"It doesn't set your role"}
                    </b>
                    {" or make any learning required. Sam assigns your professional role."}
                  </span>
                </div>
                <div className={s["ped-u"]}>
                  <Icon name="book" size="xs" />
                  <span>
                    <b>
                      Short courses go in Learning.
                    </b>
                    {" Record them in My learning, where Sam reviews them."}
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
