import type { ReactNode } from 'react';

/** Marks the redesigned area. Every design-system rule in styles/ds.css is scoped to [data-ds], so pages that
 *  are not migrated yet are untouched. Wrap each redesigned page (or the new AppShell layout) in it, and render
 *  portals (dialogs, menus, the command palette) inside an element that also has data-ds. */
export function DsRoot({ children, className }: { children: ReactNode; className?: string }) {
  return <div data-ds="" className={className}>{children}</div>;
}
