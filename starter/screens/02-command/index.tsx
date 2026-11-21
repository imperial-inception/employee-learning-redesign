// GENERATED from design/html/02-command.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { Avatar, Backdrop, Icon, Kbd, Pill, StatusIcon, Tag, TypeDot, cx } from '@/components/ds';
import Background from '@/screens/01-home';
import s from './view.module.css';

export const title = "Command palette";

export default function View_02_command() {
  return (
    <>
      <Backdrop className={s.bg}>
        <Background />
      </Backdrop>
      <div className={s.v}>
        <div className={s.scrim} />
        <div className={cx("overlay", s.pal)}>
        <div className={s.q}>
          <Icon name="search" size="lg" />
          <span>
            interface integ
            <span className={s.caret} />
          </span>
          <Kbd className="sp">
            Esc
          </Kbd>
        </div>
        <div className={s.scopes}>
          <span className="on">
            All
          </span>
          <span>
            <Icon name="book" size="xs" />
            {" Learning"}
          </span>
          <span>
            <Icon name="route" size="xs" />
            {" Pathways"}
          </span>
          <span>
            <Icon name="users" size="xs" />
            {" People"}
          </span>
          <span>
            <Icon name="cmd" size="xs" />
            {" Actions"}
          </span>
        </div>
        <div className="grp">
          ASK
        </div>
        <div className={s.ask}>
          <div className={s.ic}>
            <Icon name="spark" size="sm" />
          </div>
          <div className="grow">
            <div style={{ fontWeight: "550" }}>
              Ask the advisor: “what should I learn for interface integration?”
            </div>
            <div className="c" style={{ color: "var(--muted)", fontSize: "12.5px", marginTop: "2px" }}>
              Answers from the learning catalog only, with sources you can open
            </div>
          </div>
          <Kbd>
            Enter
          </Kbd>
        </div>
        <div className="grp">
          LEARNING
        </div>
        <div className={s.it}>
          <StatusIcon status="not_started" />
          <span className="t">
            Interface Management
          </span>
          <span className="mono faint" style={{ fontSize: "11.5px" }}>
            IM-201
          </span>
          <span className="r">
            <Tag>
              <TypeDot kind="formal" />
              Formal
            </Tag>
            <span className="mono faint" style={{ fontSize: "12px" }}>
              2 h
            </span>
          </span>
        </div>
        <div className={s.it}>
          <StatusIcon status="not_started" />
          <span className="t">
            {"Develop System & Component ICS"}
          </span>
          <span className="r">
            <Tag>
              <TypeDot kind="formal" />
              Formal
            </Tag>
            <span className="mono faint" style={{ fontSize: "12px" }}>
              1.5 h
            </span>
          </span>
        </div>
        <div className={s.it}>
          <StatusIcon status="in_progress" />
          <span className="t">
            System Integration Overview
          </span>
          <span className="r">
            <Pill tone="acc">
              In your plan
            </Pill>
            <span className="mono faint" style={{ fontSize: "12px" }}>
              1 h
            </span>
          </span>
        </div>
        <div className="grp">
          PATHWAYS
        </div>
        <div className={s.it}>
          <Icon name="route" size="sm" />
          <span className="t">
            Systems integration and verification
          </span>
          <span className="c">
            4 activities · 2 milestones
          </span>
          <span className="r">
            <Pill tone="acc">
              Adopted
            </Pill>
          </span>
        </div>
        <div className="grp">
          PEOPLE
        </div>
        <div className={s.it}>
          <Avatar initials="PN" tone={2} />
          <span className="t">
            Priya Nair
          </span>
          <span className="c">
            shares: interface control, SysML · self-reported
          </span>
        </div>
        <div className="grp">
          ACTIONS
        </div>
        <div className={s.it}>
          <Icon name="record" size="sm" />
          <span className="t">
            Record learning
          </span>
          <span className="r">
            <Kbd>
              R
            </Kbd>
          </span>
        </div>
        <div className={s.it}>
          <Icon name="target" size="sm" />
          <span className="t">
            Create a goal
          </span>
          <span className="r">
            <Kbd>
              G
            </Kbd>
          </span>
        </div>
        <div className={s.foot}>
          <span>
            <Kbd>
              ↑
            </Kbd>
            <Kbd>
              ↓
            </Kbd>
            {" move"}
          </span>
          <span>
            <Kbd>
              Enter
            </Kbd>
            {" open"}
          </span>
          <span>
            <Kbd>
              Tab
            </Kbd>
            {" scope"}
          </span>
          <span className="sp">
            <Icon name="lock" size="xs" />
            {" Results respect your permissions"}
          </span>
        </div>
      </div>
      </div>
    </>
  );
}
