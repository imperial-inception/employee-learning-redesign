import Head from 'next/head';
import Link from 'next/link';
import { views } from '@/screens/registry';
import { site } from '@/lib/site';
import css from './index.module.css';

const GROUPS: Array<{ title: string; match: (n: number) => boolean }> = [
  { title: 'Employee', match: n => [1, 2, 3, 4, 5, 6, 7, 8, 18, 19, 21, 22, 23, 25].includes(n) },
  { title: 'Manager', match: n => [9, 10, 11, 20, 26, 30, 31, 32, 33].includes(n) },
  { title: 'Admin console', match: n => [12, 13, 14, 15, 16, 17, 24].includes(n) },
];

export default function Index() {
  return (
    <>
      <Head><title>{`${site.name}: reference views`}</title></Head>
      <main className={css.wrap}>
        <header className="ph">
          <div>
            <h1>Reference views</h1>
            <p className="sub">
              {views.length} views (screens and their tabs, steps and dialogs), each a static React page that matches its PNG
              in design/screens. Press <span className="kbd">T</span> to switch dark / light. <Link href="/ui-kit">Component kit →</Link>
            </p>
          </div>
        </header>
        {GROUPS.map(g => {
          const list = views.filter(v => g.match(parseInt(v.id, 10)));
          return (
            <section key={g.title} className={css.group}>
              <h2 className="grp">{g.title} · {list.length}</h2>
              <div className={css.grid}>
                {list.map(v => (
                  <Link key={v.mockup} href={`/views/${v.mockup}`} className={`panel ${css.card}`}>
                    <span className="mono faint">{v.id}</span>
                    <b>{v.title}</b>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
