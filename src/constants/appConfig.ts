// constant variables that will be used to create the app's skeleton

import { IDay, IProject } from "../constants/types";

export const DAYS_OF_WEEK: Array<IDay> = [
  { long: "Monday", short: "Mon", index: 0 },
  { long: "Tuesday", short: "Tue", index: 0 },
  { long: "Wednesday", short: "Wed", index: 0 },
  { long: "Thursday", short: "Thur", index: 0 },
  { long: "Friday", short: "Fri", index: 0 },
  { long: "Saturday", short: "Sat", index: 0 },
  { long: "Sunday", short: "Sun", index: 0 },
];

// Static list of projects used for dropdown to categorize each task.
export const PROJECTS: Array<IProject> = [
  { title: "Misc", color_code: "lightgray" },
  { title: "UI/UX", color_code: "lightblue" },
  { title: "Front-end", color_code: "pink" },
  { title: "Back-end", color_code: "yellow" },
  { title: "Testing", color_code: "green" },
];

// TIMER configs
export const TIMER_TICK_RATE: number = 122; // 300ms
