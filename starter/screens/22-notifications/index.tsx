// GENERATED from design/html/22-notifications.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { Backdrop, Button, Icon, Kbd, Pill, StatusIcon, cx } from '@/components/ds';
import Background from '@/screens/01-home';
import s from './view.module.css';

export const title = "Notifications";

export default function View_22_notifications() {
  return (
    <>
      <Backdrop className={s.bg}>
        <Background />
      </Backdrop>
      <div className={s.v}>
        <div className={s.scrim} />
        <div className={s["bell-on"]}>
        <Icon name="bell" size="sm" />
      </div>
        <div className={cx("overlay", s.np)} role="dialog" aria-label="Notifications">
        <span className={s.caret} />
        <div className={s.nh}>
          <h2>
            Notifications
          </h2>
          <Pill tone="acc">
            3 new
          </Pill>
          <Button variant="ghost" size="sm" className="sp">
            <Icon name="check" size="xs" />
            {" Mark all read"}
          </Button>
          <span className={s.ib}>
            <Icon name="sliders" size="sm" />
          </span>
        </div>
        <div className={s.ntabs}>
          <span className="on">
            All
          </span>
          <span>
            {"Unread "}
            <span className="n">
              3
            </span>
          </span>
          <span>
            {"Reviews "}
            <span className="n">
              2
            </span>
          </span>
          <span>
            {"Agents "}
            <span className="n">
              1
            </span>
          </span>
        </div>
        <div className="grp">
          TODAY
        </div>
        <div className={cx("sel", s.nt)}>
          <span className={s.ud} />
          <span className={cx(s.ic, s.ai)}>
            <Icon name="spark" size="sm" />
          </span>
          <div className="grow">
            <div className={s.tt}>
              <b>
                Desktop assistant (MCP)
              </b>
              {" proposed 2 changes to your plan"}
            </div>
            <div className={s.q}>
              Link IM-201 to your focus goal, add 2 activities. Nothing changes until you approve.
            </div>
            <div className={s.ac}>
              <Button variant="primary" size="sm">
                {"Review changes "}
                <Kbd>
                  Enter
                </Kbd>
              </Button>
              <span className="m">
                session ends 15:31
              </span>
            </div>
          </div>
          <span className={s.tm}>
            14:32
          </span>
        </div>
        <div className={s.nt}>
          <span className={s.ud} />
          <span className={s.ic}>
            <StatusIcon status="returned" />
          </span>
          <div className="grow">
            <div className={s.tt}>
              <b>
                Sam Patel
              </b>
              {" returned "}
              <b>
                {"Clear Status & Issue Communication"}
              </b>
            </div>
            <div className={s.q}>
              “Add one example from the CDR prep.”
            </div>
            <div className={s.ac}>
              <Button size="sm">
                Revise
              </Button>
              <span className="m">
                v1 · returned for changes
              </span>
            </div>
          </div>
          <span className={s.tm}>
            14:05
          </span>
        </div>
        <div className={s.nt}>
          <span className={s.ud} />
          <span className={cx("warn", s.ic)}>
            <Icon name="clock" size="sm" />
          </span>
          <div className="grow">
            <div className={s.tt}>
              <b>
                Due in 7 days:
              </b>
              {" Connect requirements and traceability"}
            </div>
            <div className={s.q}>
              Milestone M2 · due 28 Nov · 0 of 2 approved, 1 in review
            </div>
            <div className={s.ac}>
              <Button size="sm">
                Open goal
              </Button>
            </div>
          </div>
          <span className={s.tm}>
            09:00
          </span>
        </div>
        <div className="grp">
          THIS WEEK
        </div>
        <div className={cx(s.nt, s.read)}>
          <span className={s.ic}>
            <StatusIcon status="approved" />
          </span>
          <div className="grow">
            <div className={s.tt}>
              <b>
                Sam Patel
              </b>
              {" approved "}
              <b>
                System integration planning
              </b>
              {" "}
              <span className={s.code}>
                SI-120
              </span>
            </div>
            <div className={s.q}>
              {"Counts toward Systems integration & verification · now 1 of 4"}
            </div>
            <div className={s.ac}>
              <Button variant="ghost" size="sm" style={{ padding: "0 8px", marginLeft: "-8px" }}>
                {"View evidence "}
                <Icon name="cr" size="xs" />
              </Button>
            </div>
          </div>
          <span className={s.tm}>
            Wed
          </span>
        </div>
        <div className={cx(s.nt, s.read)}>
          <span className={cx(s.ic, s.acc)}>
            <Icon name="refresh" size="sm" />
          </span>
          <div className="grow">
            <div className={s.tt}>
              {"Your pathway "}
              <b>
                MBSE foundations
              </b>
              {" has a new revision "}
              <span className={s.code}>
                REV 2
              </span>
            </div>
            <div className={s.q}>
              Adds 1 activity. Your progress carries over; updating is your choice.
            </div>
            <div className={s.ac}>
              <Button variant="ghost" size="sm" style={{ padding: "0 8px", marginLeft: "-8px" }}>
                {"See what changed "}
                <Icon name="cr" size="xs" />
              </Button>
            </div>
          </div>
          <span className={s.tm}>
            Tue
          </span>
        </div>
        <div className={s.nf}>
          <Icon name="bell" size="xs" />
          <span>
            <b>
              Daily digest at 9:00
            </b>
            {" · email + chat"}
          </span>
          <span className="lnk">
            <Icon name="sliders" size="xs" />
            {" Notification settings"}
          </span>
        </div>
      </div>
      </div>
    </>
  );
}
