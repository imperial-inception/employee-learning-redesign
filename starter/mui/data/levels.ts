// The framework's level descriptions, shared by every screen (the app's own wording; placeholder level names L1–L5).
export type Level = 'L1' | 'L2' | 'L3' | 'L4' | 'L5';

export const LEVELS: Record<Level, string> = {
  L1: 'Entry-level position for new professionals, typically requiring minimal experience.',
  L2: 'Mid-level position for professionals with some experience, capable of working independently on tasks.',
  L3: 'Experienced professionals who can handle complex tasks and may mentor junior staff.',
  L4: 'Senior professionals who lead complex work and guide practice across teams.',
  L5: 'Expert-level professionals who provide strategic direction and influence organizational goals.',
};
