// Tab "Recommended" (default): a compact ask bar (the page's one primary button) with example questions, the
// answer panel after asking (AI explanation with citations, the matched rows, follow-ups, Clear), and the
// "Recommended for you" panel grouped by reason (goal · next level · required for the role).
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import NextLink from 'next/link';
import { useState } from 'react';
import { DsIcon } from '@/mui/components/icons';
import { ANSWER, EXAMPLE_QUESTIONS, FOLLOW_UPS, RECOMMENDED } from '@/mui/data/learning';
import { CiteBadge, LearningRow, RowList } from './LearningRow';
import { ListPanel, PanelSection } from './ListPanel';

function AskBar({ query, setQuery, explain, setExplain, onFind }: {
  query: string; setQuery: (q: string) => void; explain: boolean; setExplain: (v: boolean) => void; onFind: (q?: string) => void;
}) {
  return (
    <Card component="section" aria-label="Ask for learning" sx={{ p: 5, display: 'grid', gap: 3.5 }}>
      <Box component="form" onSubmit={e => { e.preventDefault(); onFind(); }} sx={{ display: 'flex', gap: 3, alignItems: 'center', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
        <OutlinedInput value={query} onChange={e => setQuery(e.target.value)} required sx={{ flex: 1, minWidth: 260 }}
          placeholder="What would you like to learn? A skill, a topic, or a question about your learning"
          inputProps={{ 'aria-label': 'What would you like to learn?' }}
          startAdornment={<InputAdornment position="start"><DsIcon name="spark" sx={{ color: 'primary.light' }} /></InputAdornment>} />
        <FormControlLabel control={<Checkbox checked={explain} onChange={e => setExplain(e.target.checked)} />} label="Explain with AI"
          sx={{ mx: 0, whiteSpace: 'nowrap', '& .MuiFormControlLabel-label': { fontSize: 13.5 } }} />
        <Button type="submit" variant="contained" endIcon={<DsIcon name="arrow" />} disabled={!query.trim()} sx={{ height: 40 }}>Find learning</Button>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography variant="meta" sx={{ mr: 1 }}>Try</Typography>
        {EXAMPLE_QUESTIONS.map(e => (
          <Tooltip key={e.q} title={e.q}>
            <Chip variant="outlined" clickable label={e.label} onClick={() => onFind(e.q)} icon={<DsIcon name="spark" />} sx={{ color: 'text.primary', fontWeight: 500 }} />
          </Tooltip>
        ))}
        <Typography variant="meta" sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <DsIcon name="spark" sx={{ fontSize: 14 }} />AI suggestions · review with your manager
        </Typography>
      </Box>
    </Card>
  );
}

function AnswerPanel({ question, explain, onClear }: { question: string; explain: boolean; onClear: () => void }) {
  const [followUp, setFollowUp] = useState<number | null>(null);
  const fu = followUp === null ? null : FOLLOW_UPS[followUp];
  return (
    <Card component="section" aria-labelledby="answer-title" aria-live="polite" sx={{ overflow: 'hidden', borderColor: t => alpha(t.palette.primary.light, 0.35) }}>
      <Box sx={{ minHeight: 50, px: 5, py: 2, display: 'flex', alignItems: 'center', gap: 3, borderBottom: 1, borderColor: 'divider',
        background: t => `linear-gradient(90deg, ${t.palette.ds.heroWash}, transparent 70%)` }}>
        <DsIcon name="spark" sx={{ fontSize: 17, color: 'primary.light' }} />
        <Typography id="answer-title" component="h2" sx={{ fontSize: 14.5, fontWeight: 650 }}>{explain ? 'AI explanation' : 'Catalog matches'}</Typography>
        <Typography variant="meta" sx={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>for “{question}”</Typography>
        <Button variant="text" size="small" onClick={onClear}>Clear</Button>
      </Box>

      <Box>
      {explain && (
        <Box sx={{ px: 5, py: 4, display: 'grid', gap: 2.5, maxWidth: 1000 }}>
          {ANSWER.paragraphs.map((p, i) => (
            <Typography key={i} variant="body2" sx={{ fontSize: 14, lineHeight: 1.6 }}>
              {p.map((part, j) => (typeof part === 'string' ? part : <CiteBadge key={j} n={part.cite} />))}
            </Typography>
          ))}
          <Box>
            <Button component={NextLink} href="/mui/pathways" variant="text" size="small" endIcon={<DsIcon name="arrow" />} sx={{ ml: -2 }}>
              Open pathway: {ANSWER.pathway}
            </Button>
          </Box>
        </Box>
      )}

      <PanelSection label="Matches in the catalog" sub={`${ANSWER.matches.length} items`} />
      <RowList label="Catalog matches">{ANSWER.matches.map((it, i) => <LearningRow key={it.id} item={it} cite={i + 1} />)}</RowList>

      <Box sx={{ px: 5, py: 4, borderTop: 1, borderColor: 'divider', display: 'grid', gap: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="meta" sx={{ mr: 1 }}>Ask a follow-up</Typography>
          {FOLLOW_UPS.map((f, i) => (
            <Chip key={f.q} variant="outlined" clickable label={f.q} onClick={() => setFollowUp(i)} color={followUp === i ? 'primary' : undefined}
              sx={{ fontWeight: 500, ...(followUp !== i && { color: 'text.primary' }) }} />
          ))}
        </Box>
        {fu && (
          <Box sx={{ p: 4, borderRadius: '10px', bgcolor: 'ds.surface2', border: 1, borderColor: 'divider', display: 'grid', gap: 1 }}>
            <Typography variant="label">{fu.q}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 13.5 }}>{fu.a}</Typography>
          </Box>
        )}
        <Typography variant="meta" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <DsIcon name="info" sx={{ fontSize: 14 }} />Suggestions are based on the learning catalog. This conversation lasts only while this search is open.
        </Typography>
      </Box>
      </Box>
    </Card>
  );
}

export function RecommendedTab() {
  const [query, setQuery] = useState('');
  const [explain, setExplain] = useState(true);
  const [asked, setAsked] = useState<{ q: string; explain: boolean; n: number } | null>(null);
  const total = RECOMMENDED.reduce((n, g) => n + g.items.length, 0);

  const find = (q?: string) => {
    const text = (q ?? query).trim();
    if (!text) return;
    setQuery(text);
    setAsked(a => ({ q: text, explain, n: (a?.n ?? 0) + 1 }));
  };

  return (
    <Box sx={{ display: 'grid', gap: 4 }}>
      <AskBar query={query} setQuery={setQuery} explain={explain} setExplain={setExplain} onFind={find} />
      {asked && <AnswerPanel key={asked.n} question={asked.q} explain={asked.explain} onClear={() => { setAsked(null); setQuery(''); }} />}
      <ListPanel id="rec-list" title={<><b>Recommended for you</b> · {total} picks</>}
        action={<Typography variant="meta">Based on your goal, your learning level and your role</Typography>}>
        {RECOMMENDED.map(g => (
          <Box key={g.id} component="section" aria-labelledby={`rec-${g.id}`} sx={{ '& + &': { borderTop: 1, borderColor: 'divider' } }}>
            <PanelSection id={`rec-${g.id}`} label={g.label} sub={g.sub} />
            <RowList label={g.label}>{g.items.map(it => <LearningRow key={it.id} item={it} />)}</RowList>
          </Box>
        ))}
      </ListPanel>
    </Box>
  );
}
