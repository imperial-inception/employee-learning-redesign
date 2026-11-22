// What every row needs from the page: open the detail drawer, which row is open, the plan, and a toast.
// One small context instead of threading the same five props through every tab.
import { createContext, useContext } from 'react';
import type { LearningItem } from '@/mui/data/learning';

export type LearningActions = {
  open: (item: LearningItem) => void;
  openId: string | null;
  inPlan: (item: LearningItem) => boolean;
  addToPlan: (item: LearningItem) => void;
  notify: (message: string) => void;
};

export const LearningContext = createContext<LearningActions>({
  open: () => {}, openId: null, inPlan: () => false, addToPlan: () => {}, notify: () => {},
});

export const useLearning = () => useContext(LearningContext);
