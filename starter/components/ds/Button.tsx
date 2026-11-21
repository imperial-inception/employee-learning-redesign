import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';

export type ButtonVariant = 'secondary' | 'primary' | 'accent' | 'ghost' | 'ok';
export type ButtonSize = 'sm' | 'md' | 'lg'; // 28 / 32 / 38 px high

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Destructive text colour (Reject, Remove). Combine with variant="ghost" for quiet destructive actions. */
  danger?: boolean;
  className?: string;
  children?: ReactNode;
};
type AsButton = Common & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined };
type AsLink = Common & { href: string; title?: string; target?: string; rel?: string };

/** One primary button per screen (DESIGN_SYSTEM.md §0). The default variant is the quiet secondary button.
 *  Pass href to render a link that looks like a button (navigation), otherwise it is a <button>. */
export function Button(props: AsButton | AsLink) {
  const { variant = 'secondary', size = 'md', danger, className, children } = props;
  const cls = cx('btn', variant !== 'secondary' && variant, size !== 'md' && size, danger && 'danger', className);
  if (props.href !== undefined) {
    const { href, title, target, rel } = props;
    return <Link href={href} className={cls} title={title} target={target} rel={rel}>{children}</Link>;
  }
  const { variant: _v, size: _s, danger: _d, className: _c, children: _ch, type = 'button', ...rest } = props;
  return <button type={type} className={cls} {...rest}>{children}</button>;
}
