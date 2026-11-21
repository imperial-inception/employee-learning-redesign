// GENERATED from design/html/02b-profile-menu.html by scripts/convert-mockups.mjs: a static reference view.
// Sample text is hard-coded on purpose (it reproduces the reference PNG). In the app, every name, number, status and
// date comes from the API: keep the markup and classes, replace the literals with data (see screens/01-home for the pattern).
import { Avatar, Backdrop, Icon, Pill, ThemeSegment, cx } from '@/components/ds';
import Background from '@/screens/01-home';
import s from './view.module.css';

export const title = "Profile menu";

export default function View_02b_profile_menu() {
  return (
    <>
      <Backdrop>
        <Background />
      </Backdrop>
      <div className={s.v}>
        <div className={s["pm-scrim"]} />
        <div className={s["pm-top"]}>
        <div className="me-chip active">
          <Avatar initials="JL" />
          <div className="pc-who">
            <b>
              Jordan Lee
            </b>
            <small>
              Systems Engineer
            </small>
          </div>
          <Icon name="cu" size="xs" />
        </div>
      </div>
        <div className={cx("overlay", s.pm)} role="menu">
        <div className={s["pm-h"]}>
          <Avatar initials="JL" size="lg" />
          <div className="grow">
            <b>
              Jordan Lee
            </b>
            <small>
              Systems Engineer
            </small>
          </div>
        </div>
        <div className={s["pm-sep"]} />
        <div className={cx(s["pm-it"], s["pm-sel"])}>
          <Icon name="user" />
          Profile
        </div>
        <div className={s["pm-it"]}>
          <Icon name="link" />
          Connected agents
          <Pill tone="rev" size="sm">
            1 waiting
          </Pill>
        </div>
        <div className={s["pm-sep"]} />
        <div className={s["pm-th"]}>
          <span className={s["pm-l"]}>
            Theme
          </span>
          <ThemeSegment id="pm-theme" />
        </div>
        <div className={s["pm-sep"]} />
        <div className={cx(s["pm-it"], s["pm-out"])}>
          Sign out
        </div>
      </div>
      </div>
    </>
  );
}
