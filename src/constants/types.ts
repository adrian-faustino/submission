export interface IDay {
  long: string;
  short: string;
  index: number;
}

export type IHour = number;

export interface IProject {
  title: string;
  color_code: string;
}

// for Timer.tsx
export interface ITimerState {
  isRunning: boolean;
  totalTime: number;
  startTime: number;
  endTime: number | null;
}
