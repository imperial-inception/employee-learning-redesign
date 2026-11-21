import Link from 'next/link';
import type { ReactNode } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';
import type { IconName } from './icon-paths.generated';
import { Avatar } from './Avatar';
import { Kbd } from './Labels';
import { site } from '@/lib/site';
import { routes, type NavId } from '@/lib/routes';

export type Workspace = 'employee' | 'admin';
export type ShellUser = { name: string; initials: string; role: string };
/** Nav counts from the API (e.g. { team: 4 } = 4 records waiting for your decision). null/0 hides the count. */
export type NavCounts = Partial<Record<NavId, number | string | null>>;

type Props = {
  workspace?: Workspace;
  /** Which nav item is current. "me" highlights the profile chip instead of a nav item. */
  active?: NavId | '';
  /** Show the manager group ("My team"). Comes from the API's capabilities, never from a client-side guess. */
  manager?: boolean;
  counts?: NavCounts;
  user?: Partial<ShellUser>;
  children: ReactNode;
};

const DEFAULT_USER: ShellUser = { name: 'Jordan Lee', initials: 'JL', role: 'Systems Engineer' };
// Sample counts the reference PNGs show; in the app every count comes from the API.
const DEFAULT_COUNTS: NavCounts = { team: 4 };

function NavItem({ id, icon, label, active, extra }: { id: NavId; icon: IconName; label: string; active: string; extra?: ReactNode }) {
  return (
    <Link href={routes[id]} className={active === id ? 'active' : ''} aria-current={active === id ? 'page' : undefined}>
      <Icon name={icon} />
      <span>{label}</span>
      {extra}
    </Link>
  );
}

/** Left sidebar (236px) + the main area with the profile corner (52px band, top right) above the content.
 *  Ported 1:1 from design/html/assets/shell.js. Profile is NOT a sidebar item: it is the chip top right. */
export function AppShell({ workspace = 'employee', active = '', manager = false, counts, user, children }: Props) {
  const u = { ...DEFAULT_USER, ...user };
  const c = { ...DEFAULT_COUNTS, ...counts };
  const cnt = (id: NavId, alert = false) => (c[id] ? <span className={cx('cnt', alert && 'alert')}>{c[id]}</span> : null);
  const admin = workspace === 'admin';

  return (
    <div className="app">
      <aside className="sidebar" aria-label="Main navigation">
        <div className="ws-btn">
          <div className="mark"><Icon name="cap" /></div>
          <b>{site.name}</b>
          {admin && <span className="ws-tag">ADMIN</span>}
          <Icon name="cd" size="xs" />
          <Link className="bell" href={routes.bell} aria-label="Notifications (new)">
            <Icon name="bell" size="sm" />
            <span className="dot" />
          </Link>
        </div>
        <Link className="cmdk-btn" href={routes.cmdk}>
          <Icon name="search" size="sm" />
          <span>Search or ask…</span>
          <Kbd>Ctrl K</Kbd>
        </Link>

        {admin ? (
          <>
            <div className="nav-sec" style={{ paddingTop: '2px' }}>Admin console</div>
            <nav className="nav">
              <NavItem id="health" icon="shield" label="Data health" active={active} extra={<span className="cnt alert">3</span>} />
              <NavItem id="catalog" icon="book" label="Catalog" active={active} extra={<span className="cnt">536</span>} />
              <NavItem id="templates" icon="route" label="Pathway templates" active={active} extra={<span className="cnt">4</span>} />
              <NavItem id="rules" icon="sliders" label="Rules & populations" active={active} />
              <NavItem id="sources" icon="cloud" label="Sources" active={active} extra={<span className="cnt">5</span>} />
              <NavItem id="access" icon="key" label="Access" active={active} />
              <NavItem id="audit" icon="file" label="Audit log" active={active} />
            </nav>
          </>
        ) : (
          <>
            <nav className="nav">
              <NavItem id="today" icon="home" label="Home" active={active} />
              <NavItem id="find" icon="book" label="Learning" active={active} />
              <NavItem id="plan" icon="target" label="Goals & pathways" active={active} />
              <NavItem id="colleagues" icon="users" label="Colleagues" active={active} />
            </nav>
            {manager && (
              <>
                <div className="nav-sec">My team</div>
                <nav className="nav" aria-label="My team">
                  {/* Reviewing lives inside Team ("Waiting for you" tab); the count is records waiting for this manager. */}
                  <NavItem id="team" icon="users" label="Team" active={active} extra={cnt('team')} />
                  <NavItem id="insights" icon="chart" label="Insights" active={active} />
                  <NavItem id="reports" icon="file" label="Reports" active={active} />
                </nav>
              </>
            )}
          </>
        )}

        <div className="side-foot">
          <nav className="nav" aria-label="More">
            {admin
              ? <NavItem id="back" icon="swap" label="Back to my portal" active={active} />
              : <NavItem id="admin" icon="key" label="Admin console" active={active} />}
            <NavItem id="help" icon="help" label="Help & guides" active={active} />
          </nav>
        </div>
      </aside>

      <div className="main">
        {/* Profile corner: the only thing above the page. Its menu: Profile, Connected agents, Theme, Sign out (02b). */}
        <div className="utop">
          <Link className={cx('me-chip', active === 'me' && 'active')} href={routes.me} title="Profile, connected agents, theme, sign out">
            <Avatar initials={u.initials} />
            <div className="pc-who"><b>{u.name}</b><small>{u.role}</small></div>
            <Icon name="cd" size="xs" />
          </Link>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
