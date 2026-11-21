import type { ReactNode } from 'react';
import { cx } from './cx';
import css from './Backdrop.module.css';

/** Static stand-in for "the page behind an open dialog/menu" in the reference views (the HTML mockups used an
 *  iframe). Fixed to the viewport and its own stacking context, so the shell's z-index cannot rise above the scrim.
 *  className carries the view's look for it (e.g. a slight blur behind the command palette).
 *  In the real app you don't need this: the dialog opens over the live page. */
export function Backdrop({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx(css.frame, className)} aria-hidden="true">{children}</div>;
}
