import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';
import { iconPaths, statusPaths, type IconName } from '@/components/ds/icon-paths.generated';
import { STATUS, type ApiStatus } from '@/lib/status';

/** The design's own line icons as MUI icons (same drawings as the reference). Size with fontSize (px or 'small'). */
export function DsIcon({ name, ...props }: { name: IconName } & Omit<SvgIconProps, 'children'>) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"
      {...props} sx={{ fill: 'none', ...props.sx }}>
      {iconPaths[name]}
    </SvgIcon>
  );
}

const STATUS_COLOR: Record<ApiStatus, string> = {
  not_started: 'text.disabled', in_progress: 'primary.main', submitted: 'warning.main', approved: 'success.main',
  returned: 'secondary.main', rejected: 'error.main', locked: 'text.disabled',
};

/** Status glyph from the API enum: shape + colour (+ the label for screen readers). */
export function StatusGlyph({ status, label, ...props }: { status: ApiStatus; label?: string } & Omit<SvgIconProps, 'children'>) {
  const s = STATUS[status];
  return (
    <SvgIcon viewBox="0 0 24 24" titleAccess={label ?? s.label} {...props}
      sx={{ fontSize: 16, color: STATUS_COLOR[status], fill: 'none', ...props.sx }}>
      {statusPaths[s.glyph]}
    </SvgIcon>
  );
}
