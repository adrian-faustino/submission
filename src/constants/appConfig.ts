// constant variables that will be used to create the app's skeleton

import { IDay, IHour, IProject } from "../constants/types";

export const DAYS_OF_WEEK: Array<IDay> = [
  { long: "Monday", short: "Mon", index: 0 },
  { long: "Tuesday", short: "Tue", index: 0 },
  { long: "Wednesday", short: "Wed", index: 0 },
  { long: "Thursday", short: "Thur", index: 0 },
  { long: "Friday", short: "Fri", index: 0 },
  { long: "Saturday", short: "Sat", index: 0 },
  { long: "Sunday", short: "Sun", index: 0 },
];

// time of day
export const HOURS_PER_DAY: Array<IHour> = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];

// Static list of projects used for dropdown to categorize each task.
export const PROJECTS: Array<IProject> = [
  { title: "UI/UX", color_code: "blue" },
  { title: "Front-end", color_code: "pink" },
  { title: "Back-end", color_code: "yellow" },
  { title: "Testing", color_code: "green" },
];

// TIMER configs
export const TIMER_TICK_RATE: number = 300; // 300ms
