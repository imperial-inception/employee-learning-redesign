// GENERATED from design/html/33-reviews-bulk.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { AppShell, Avatar, Button, Icon, Kbd, Pill, cx } from '@/components/ds';
import s from './view.module.css';

export const title = "Team › Waiting for you, select mode";

export default function View_33_reviews_bulk() {
  return (
    <div className={s.v}>
      <AppShell active="team" manager counts={{"team":7}}>
        <main id="page">
          <header className="ph">
            <div>
              <h1>
                Team
              </h1>
              <p className="sub">
                Your 11 direct reports. For development conversations, not performance ratings.
              </p>
            </div>
            <div className="acts">
              <div className={s.fresh}>
                <Icon name="cloud" size="sm" />
                <span>
                  {"Org data from HR directory · last good update "}
                  <span className="mono">
                    20 Nov 00:57
                  </span>
                </span>
                <Pill tone="rev">
                  <Icon name="alert" size="xs" />
                  {" Today's refresh failed"}
                </Pill>
              </div>
            </div>
          </header>
          <div className={cx("tabs", s["tm-tabs"])}>
            <span>
              {"People "}
              <span className="n">
                11
              </span>
            </span>
            <span className="on">
              {"Waiting for you "}
              <span className="n">
                7
              </span>
            </span>
            <div className={s["tm-keys"]}>
              <span className={s.kh}>
                <Kbd>
                  X
                </Kbd>
                {" select"}
              </span>
              <span className={s.kh}>
                <Kbd>
                  A
                </Kbd>
                {" approve selected"}
              </span>
              <span className={s.kh}>
                <Kbd>
                  Esc
                </Kbd>
                {" exit select"}
              </span>
            </div>
          </div>
          <section className={cx("panel", s.tp)}>
            <div className="panel-h">
              <div className="seg">
                <span className="on">
                  {"Waiting "}
                  <span className="n">
                    7
                  </span>
                </span>
                <span>
                  {"Returned "}
                  <span className="n">
                    2
                  </span>
                </span>
                <span>
                  {"Done this month "}
                  <span className="n">
                    12
                  </span>
                </span>
              </div>
              <span className={s["tm-hint"]}>
                Tick the routine ones and decide them together; open anything that needs a closer look.
              </span>
              <div className="sp seg">
                <span>
                  One by one
                </span>
                <span className="on">
                  <Icon name="check" size="xs" />
                  {" Select"}
                </span>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th className={s.cb}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </th>
                  <th>
                    Person
                  </th>
                  <th>
                    Submission
                  </th>
                  <th>
                    Type
                  </th>
                  <th>
                    <span className={s.srt}>
                      {"Submitted "}
                      <Icon name="cu" size="xs" />
                    </span>
                  </th>
                  <th>
                    Evidence
                  </th>
                  <th>
                    Version
                  </th>
                  <th className={s.ac} />
                </tr>
              </thead>
              <tbody>
                <tr className="sel">
                  <td className={s.cb}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="TB" tone={5} />
                      <b>
                        Tom Becker
                      </b>
                    </div>
                  </td>
                  <td>
                    <div className={s.it}>
                      {"V&V Planning Essentials"}
                      <span className="mono">
                        VV-230
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.ty}>
                      <span className={cx("d formal", s.dt)} />
                      Formal
                    </span>
                  </td>
                  <td>
                    <span className="mono">
                      14 Nov
                    </span>
                    <span className={cx(s.sub2, s.late)}>
                      2 days late
                    </span>
                  </td>
                  <td>
                    <span className={s.evd}>
                      <Icon name="clip" size="xs" />
                      1 file
                    </span>
                  </td>
                  <td>
                    <span className={s.v1}>
                      v1
                    </span>
                  </td>
                  <td className={s.ac}>
                    <Button variant="ghost" size="sm">
                      {"Open "}
                      <Icon name="cr" size="xs" />
                    </Button>
                  </td>
                </tr>
                <tr className="dis">
                  <td className={s.cb}>
                    <span className="check dis" />
                  </td>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="PN" tone={4} />
                      <b>
                        Priya Nair
                      </b>
                    </div>
                  </td>
                  <td>
                    <div className={s.it}>
                      Functional Architecture
                      <span className="mono">
                        FA-110
                      </span>
                    </div>
                    <div className={s.rsn}>
                      <Icon name="info" size="xs" />
                      Resubmission v2: review individually
                    </div>
                  </td>
                  <td>
                    <span className={s.ty}>
                      <span className={cx("d formal", s.dt)} />
                      Formal
                    </span>
                  </td>
                  <td>
                    <span className="mono">
                      15 Nov
                    </span>
                    <span className={cx(s.sub2, s.ontime)}>
                      on time
                    </span>
                  </td>
                  <td>
                    <span className={s.evd}>
                      <Icon name="clip" size="xs" />
                      3 items
                    </span>
                  </td>
                  <td>
                    <span className={s.vchip}>
                      v2
                    </span>
                  </td>
                  <td className={s.ac}>
                    <Button size="sm">
                      {"Open "}
                      <Icon name="cr" size="xs" />
                    </Button>
                  </td>
                </tr>
                <tr className="sel">
                  <td className={s.cb}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="AK" tone={5} />
                      <b>
                        Alex Kim
                      </b>
                    </div>
                  </td>
                  <td>
                    <div className={s.it}>
                      Interface Management
                      <span className="mono">
                        IM-201
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.ty}>
                      <span className={cx("d formal", s.dt)} />
                      Formal
                    </span>
                  </td>
                  <td>
                    <span className="mono">
                      17 Nov
                    </span>
                    <span className={cx(s.sub2, s.ontime)}>
                      on time
                    </span>
                  </td>
                  <td>
                    <span className={s.evd}>
                      <Icon name="clip" size="xs" />
                      1 file
                    </span>
                  </td>
                  <td>
                    <span className={s.v1}>
                      v1
                    </span>
                  </td>
                  <td className={s.ac}>
                    <Button variant="ghost" size="sm">
                      {"Open "}
                      <Icon name="cr" size="xs" />
                    </Button>
                  </td>
                </tr>
                <tr className="sel">
                  <td className={s.cb}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="WC" />
                      <b>
                        Wei Chen
                      </b>
                    </div>
                  </td>
                  <td>
                    <div className={s.it}>
                      Run a requirements trace audit
                    </div>
                  </td>
                  <td>
                    <span className={s.ty}>
                      <span className={cx("d exp", s.dt)} />
                      Experiential
                    </span>
                  </td>
                  <td>
                    <span className="mono">
                      19 Nov
                    </span>
                    <span className={cx(s.sub2, s.ontime)}>
                      on time
                    </span>
                  </td>
                  <td>
                    <span className={s.evd}>
                      <Icon name="clip" size="xs" />
                      2 files
                    </span>
                  </td>
                  <td>
                    <span className={s.v1}>
                      v1
                    </span>
                  </td>
                  <td className={s.ac}>
                    <Button variant="ghost" size="sm">
                      {"Open "}
                      <Icon name="cr" size="xs" />
                    </Button>
                  </td>
                </tr>
                <tr className="dis">
                  <td className={s.cb}>
                    <span className="check dis" />
                  </td>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="FR" tone={6} />
                      <b>
                        Fatima Rahman
                      </b>
                    </div>
                  </td>
                  <td>
                    <div className={s.it}>
                      Communicating Technical Risk
                      <span className="mono">
                        CO-130
                      </span>
                    </div>
                    <div className={s.rsn}>
                      <Icon name="info" size="xs" />
                      No evidence attached
                    </div>
                  </td>
                  <td>
                    <span className={s.ty}>
                      <span className={cx("d formal", s.dt)} />
                      Formal
                    </span>
                  </td>
                  <td>
                    <span className="mono">
                      20 Nov
                    </span>
                    <span className={cx(s.sub2, s.ontime)}>
                      on time
                    </span>
                  </td>
                  <td>
                    <span className={cx(s.evd, s.none)}>
                      <Icon name="clip" size="xs" />
                      None
                    </span>
                  </td>
                  <td>
                    <span className={s.v1}>
                      v1
                    </span>
                  </td>
                  <td className={s.ac}>
                    <Button size="sm">
                      {"Open "}
                      <Icon name="cr" size="xs" />
                    </Button>
                  </td>
                </tr>
                <tr className="sel">
                  <td className={s.cb}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="MG" tone={3} />
                      <b>
                        Maria Gomez
                      </b>
                    </div>
                  </td>
                  <td>
                    <div className={s.it}>
                      Shadow an interface review board
                    </div>
                  </td>
                  <td>
                    <span className={s.ty}>
                      <span className={cx("d rel", s.dt)} />
                      Relational
                    </span>
                  </td>
                  <td>
                    <span className="mono">
                      20 Nov
                    </span>
                    <span className={cx(s.sub2, s.ontime)}>
                      on time
                    </span>
                  </td>
                  <td>
                    <span className={s.evd}>
                      <Icon name="link" size="xs" />
                      1 link
                    </span>
                  </td>
                  <td>
                    <span className={s.v1}>
                      v1
                    </span>
                  </td>
                  <td className={s.ac}>
                    <Button variant="ghost" size="sm">
                      {"Open "}
                      <Icon name="cr" size="xs" />
                    </Button>
                  </td>
                </tr>
                <tr className="sel">
                  <td className={s.cb}>
                    <span className="check on">
                      <Icon name="check" size="xs" />
                    </span>
                  </td>
                  <td>
                    <div className={s.who}>
                      <Avatar initials="LS" />
                      <b>
                        Lucas Silva
                      </b>
                    </div>
                  </td>
                  <td>
                    <div className={s.it}>
                      Writing Verifiable Requirements
                      <span className="mono">
                        RQ-118
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={s.ty}>
                      <span className={cx("d formal", s.dt)} />
                      Formal
                    </span>
                  </td>
                  <td>
                    <span className="mono">
                      21 Nov
                    </span>
                    <span className={cx(s.sub2, s.ontime)}>
                      on time
                    </span>
                  </td>
                  <td>
                    <span className={s.evd}>
                      <Icon name="clip" size="xs" />
                      1 file
                    </span>
                  </td>
                  <td>
                    <span className={s.v1}>
                      v1
                    </span>
                  </td>
                  <td className={s.ac}>
                    <Button variant="ghost" size="sm">
                      {"Open "}
                      <Icon name="cr" size="xs" />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className={cx("overlay", s.bulk)}>
            <div className={s.nt}>
              <Icon name="eye" size="sm" />
              <span>
                Each person gets the same shared note:
              </span>
              <div className={cx("input", s.ni)}>
                Optional for approve
              </div>
              <span className={s.req}>
                Required to return
              </span>
            </div>
            <div className={s.bb}>
              <span className={s["cnt-chip"]}>
                <span className="check on">
                  <Icon name="check" size="xs" />
                </span>
                5 selected
              </span>
              <Button variant="ghost" size="sm">
                Clear
              </Button>
              <span className="sp" />
              <Button>
                {"Return… "}
                <Kbd>
                  R
                </Kbd>
              </Button>
              <Button variant="primary">
                <Icon name="check" size="sm" />
                {" Approve 5 "}
                <Kbd>
                  A
                </Kbd>
              </Button>
            </div>
          </section>
        </main>
      </AppShell>
    </div>
  );
}
