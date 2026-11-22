// Tab "Browse all": the whole catalog. Filter bar · one list panel (result count + Sort in its header,
// pagination in its footer).
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { BROWSE_PAGE, BROWSE_TOTAL, PER_PAGE } from '@/mui/data/learning';
import { FilterBar, useFilters } from './FilterBar';
import { LearningRow, RowList } from './LearningRow';
import { ListPanel, PanelEmpty, SortSelect, sortItems, type SortKey } from './ListPanel';

export function BrowseTab() {
  const { f, set, active, shown, clear } = useFilters(BROWSE_PAGE);
  const [sort, setSort] = useState<SortKey>('relevance');
  const [page, setPage] = useState(1);
  const pages = Math.ceil(BROWSE_TOTAL / PER_PAGE);
  const start = (page - 1) * PER_PAGE + 1;
  const end = Math.min(page * PER_PAGE, BROWSE_TOTAL);

  return (
    <Box sx={{ display: 'grid', gap: 4 }}>
      <FilterBar id="browse-search" f={f} set={set} clear={clear} placeholder="Course, skill or topic" requirements={['mandatory', 'optional', 'catalog']} />
      <ListPanel id="browse-list"
        title={active
          ? <><b>{shown.length}</b> on this page match your filters</>
          : <><b>{start}–{end}</b> of <b>{BROWSE_TOTAL}</b> learning opportunities</>}
        action={<SortSelect id="browse-sort" value={sort} onChange={setSort} />}
        footer={shown.length > 0 && (
          <>
            <Typography variant="meta">Page {page} of {pages}</Typography>
            <Pagination count={pages} page={page} onChange={(_, p) => setPage(p)} siblingCount={1} aria-label="Catalog pages" />
          </>
        )}>
        {shown.length === 0
          ? <PanelEmpty text="No learning on this page matches these filters." onClear={clear} />
          : <RowList label="Learning opportunities">{sortItems(shown, sort).map(it => <LearningRow key={it.id} item={it} />)}</RowList>}
      </ListPanel>
    </Box>
  );
}
