// "Needs you": a short actionable list (returned work, something due), then what is waiting on the manager.
// Status is always glyph + word. New users see one honest line.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DsIcon, StatusGlyph } from '@/mui/components/icons';
import { needsAction, waitingOnManager, type NeedsYouItem } from '@/mui/data/home';
import { EmptyLine, Panel, PanelSection } from './parts';

const STATUS: Record<NeedsYouItem['status'], { word: string; color: string }> = {
  returned: { word: 'Returned', color: 'secondary.main' },
  due: { word: 'Due', color: 'warning.main' },
  submitted: { word: 'In review', color: 'warning.main' },
};

function StatusMark({ status }: { status: NeedsYouItem['status'] }) {
  if (status === 'due') return <DsIcon name="clock" aria-hidden sx={{ fontSize: 16, color: STATUS.due.color }} />;
  return <StatusGlyph status={status} label="" sx={{ fontSize: 16 }} />;
}

function NeedsRow({ item, onAction }: { item: NeedsYouItem; onAction: (item: NeedsYouItem) => void }) {
  const s = STATUS[item.status];
  return (
    <Box component="li" sx={{
      display: 'grid', gridTemplateColumns: '16px minmax(0, 1fr) auto', gridTemplateAreas: '"mark title action" ". context context"',
      columnGap: 3, rowGap: '2px', alignItems: 'center', px: 5, py: 2.5,
      '&:not(:first-of-type)': { borderTop: 1, borderColor: 'divider' },
    }}>
      <Box sx={{ gridArea: 'mark', display: 'flex' }}><StatusMark status={item.status} /></Box>
      <Typography component="h3" title={`${item.title} · ${item.code}`} sx={{
        gridArea: 'title', minWidth: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.4,
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {item.title}
      </Typography>
      {item.action && (
        <Box sx={{ gridArea: 'action', my: '-4px' }}>
          {item.action.href
            ? <Button variant="outlined" size="small" href={item.action.href} target="_blank" rel="noopener noreferrer">{item.action.label}</Button>
            : <Button variant="outlined" size="small" onClick={() => onAction(item)}>{item.action.label}</Button>}
        </Box>
      )}
      <Typography variant="meta" component="p" sx={{ gridArea: 'context', m: 0 }}>
        <Box component="span" sx={{ color: s.color, fontWeight: 600 }}>{s.word}</Box> · {item.context}
      </Typography>
    </Box>
  );
}

export function NeedsYou({ items, onAction }: { items: NeedsYouItem[]; onAction: (item: NeedsYouItem) => void }) {
  const mine = needsAction(items);
  const waiting = waitingOnManager(items);
  return (
    <Panel id="needs-you" title={<><b>Needs you</b>{mine.length > 0 && <span>· {mine.length}</span>}</>}>
      {items.length === 0 ? <EmptyLine text="Nothing needs you yet." /> : (
        <>
          <Box component="ul" aria-label="Needs you" sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {mine.map(i => <NeedsRow key={i.id} item={i} onAction={onAction} />)}
          </Box>
          {waiting.length > 0 && (
            <>
              <PanelSection label="Waiting on Sam" />
              <Box component="ul" aria-label="Waiting on your manager" sx={{ listStyle: 'none', m: 0, p: 0 }}>
                {waiting.map(i => <NeedsRow key={i.id} item={i} onAction={onAction} />)}
              </Box>
            </>
          )}
        </>
      )}
    </Panel>
  );
}
