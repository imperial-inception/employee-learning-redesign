// "From the intranet": one slim full-width row of three compact cards (article / question / event). Kept light so
// it never competes with the rows above. Hiding a post brings in the next one.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import type { IconName } from '@/components/ds/icon-paths.generated';
import { DsIcon } from '@/mui/components/icons';
import type { IntranetPost } from '@/mui/data/home';
import { Panel } from './parts';

const SHOWN = 3;
const KIND: Record<IntranetPost['kind'], { icon: IconName; label: string }> = {
  article: { icon: 'file', label: 'Article' },
  question: { icon: 'msg', label: 'Question' },
  event: { icon: 'cal', label: 'Event' },
};

function PostCard({ post, onHide }: { post: IntranetPost; onHide: () => void }) {
  const k = KIND[post.kind];
  return (
    <Box component="li" sx={{
      minWidth: 0, display: 'flex', flexDirection: 'column', p: 3.5, borderRadius: '10px', border: 1, borderColor: 'divider', bgcolor: 'ds.surface2',
    }}>
      <Typography variant="meta" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, whiteSpace: 'nowrap', overflow: 'hidden', fontSize: 12 }}>
        <DsIcon name={k.icon} aria-hidden sx={{ fontSize: 14 }} />{k.label} · {post.date}
      </Typography>
      <Typography component="h3" sx={{
        mt: 1, fontSize: 13.5, fontWeight: 600, lineHeight: 1.4, minHeight: '2.8em',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>{post.title}</Typography>
      <Box sx={{ mt: 'auto', pt: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Button href={post.href} target="_blank" rel="noopener noreferrer" variant="text" size="small" endIcon={<DsIcon name="ext" />}
          aria-label={`Open ${post.title} on the intranet`} sx={{ height: 26, ml: -2 }}>Open</Button>
        <Tooltip title="Hide this post">
          <IconButton size="small" aria-label={`Hide ${post.title}`} onClick={onHide} sx={{ mr: '-6px' }}><DsIcon name="eyeoff" /></IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export function IntranetRow({ posts, topics }: { posts: IntranetPost[]; topics: string }) {
  const [hidden, setHidden] = useState<string[]>([]);
  const shown = posts.filter(p => !hidden.includes(p.id)).slice(0, SHOWN);
  return (
    <Panel id="home-intranet-title" title={<><b>From the intranet</b><span>· matches your topics: {topics}</span></>}
      action={<Button variant="text" size="small">Choose topics</Button>}>
      {shown.length ? (
        <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 4, display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: `repeat(${SHOWN}, minmax(0, 1fr))` } }}>
          {shown.map(p => <PostCard key={p.id} post={p} onHide={() => setHidden(h => [...h, p.id])} />)}
        </Box>
      ) : (
        <Typography variant="body2" sx={{ px: 5, py: 4, color: 'text.secondary' }}>No posts left for your topics. Choose more topics to see others.</Typography>
      )}
    </Panel>
  );
}
