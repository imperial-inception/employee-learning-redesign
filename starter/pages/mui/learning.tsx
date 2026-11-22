// /mui/learning: "Your learning", restructured for a calm, dense, actionable page: three distinct tabs
// (Recommended · For your role · Browse all), compact rows in one panel, one filter bar, the detail drawer.
// The tab lives in the URL (?tab=recommended|role|browse) so Back and shared links work.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { site } from '@/lib/site';
import { AppFrame } from '@/mui/components/AppFrame';
import { DsIcon } from '@/mui/components/icons';
import { Count } from '@/mui/components/labels';
import { BROWSE_TOTAL, ROLE_ITEMS, type LearningItem } from '@/mui/data/learning';
import { BrowseTab } from '@/mui/screens/learning/BrowseTab';
import { LearningContext, type LearningActions } from '@/mui/screens/learning/context';
import { LearningDrawer } from '@/mui/screens/learning/LearningDrawer';
import { RecommendedTab } from '@/mui/screens/learning/RecommendedTab';
import { RoleTab } from '@/mui/screens/learning/RoleTab';

const TABS: Array<{ id: TabId; label: string; count?: number }> = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'role', label: 'For your role', count: ROLE_ITEMS.length },
  { id: 'browse', label: 'Browse all', count: BROWSE_TOTAL },
];
type TabId = 'recommended' | 'role' | 'browse';
// old links (?tab=discover / recommendations) still land on the right tab
const LEGACY: Record<string, TabId> = { discover: 'browse', recommendations: 'recommended' };
function tabFrom(v: unknown): TabId {
  if (typeof v !== 'string') return 'recommended';
  if (v in LEGACY) return LEGACY[v];
  return TABS.some(t => t.id === v) ? (v as TabId) : 'recommended';
}

export default function LearningPage() {
  const router = useRouter();
  const tab = tabFrom(router.query.tab);
  const [openItem, setOpenItem] = useState<LearningItem | null>(null);
  const [plan, setPlan] = useState<Set<string>>(() => new Set(ROLE_ITEMS.filter(i => i.inPlan).map(i => i.id)));
  const [toast, setToast] = useState<string | null>(null);

  const selectTab = (next: TabId) => {
    if (next === tab) return;
    // push (not replace): each tab is a history entry, so Back returns to the previous tab
    router.push({ pathname: router.pathname, query: { ...router.query, tab: next } }, undefined, { shallow: true, scroll: false });
  };

  const addToPlan = useCallback((item: LearningItem) => {
    setPlan(p => new Set(p).add(item.id));
    setToast(`Added to your plan: ${item.title}`);
  }, []);
  const actions: LearningActions = useMemo(() => ({
    open: setOpenItem, openId: openItem?.id ?? null, inPlan: (i: LearningItem) => plan.has(i.id), addToPlan, notify: setToast,
  }), [openItem, plan, addToPlan]);

  let panel: ReactNode = <RecommendedTab />;
  if (tab === 'role') panel = <RoleTab />;
  if (tab === 'browse') panel = <BrowseTab />;

  return (
    <AppFrame active="learning" crumbs={[{ label: 'My development' }, { label: 'Learning' }]}>
      <Head><title>{`Your learning · ${site.name}`}</title></Head>
      <LearningContext.Provider value={actions}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 4, mb: 3 }}>
          <Box>
            <Typography variant="h4">Your learning</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>Learning picked for you, required for your role, and the full catalog.</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 1 }}>
            <Button variant="outlined" startIcon={<DsIcon name="download" />}>Learning record</Button>
            <Tooltip title="Refresh">
              <IconButton aria-label="Refresh learning" sx={{ border: 1, borderColor: 'divider', width: 36, height: 36 }}><DsIcon name="refresh" /></IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Tabs value={tab} onChange={(_, v: TabId) => selectTab(v)} aria-label="Learning views" sx={{ mb: 5 }}>
          {TABS.map(t => (
            <Tab key={t.id} value={t.id} id={`learning-tab-${t.id}`} aria-controls={`learning-panel-${t.id}`}
              label={<Box component="span" sx={{ display: 'inline-flex', alignItems: 'baseline', gap: 2 }}>{t.label}{t.count !== undefined && <Count>{t.count}</Count>}</Box>} />
          ))}
        </Tabs>

        <Box role="tabpanel" id={`learning-panel-${tab}`} aria-labelledby={`learning-tab-${tab}`}>{panel}</Box>

        <LearningDrawer item={openItem} onClose={() => setOpenItem(null)} />
        <Snackbar open={Boolean(toast)} autoHideDuration={2800} onClose={() => setToast(null)} message={toast} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />
      </LearningContext.Provider>
    </AppFrame>
  );
}
