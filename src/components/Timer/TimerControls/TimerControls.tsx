import React, { useEffect } from "react";
/* Constants */
import { ITimerState } from "../../../constants/types";
import { TIMER_TICK_RATE } from "../../../constants/appConfig";

interface ITimerControlsProps {
  timer: ITimerState;
  setTimer: React.Dispatch<React.SetStateAction<ITimerState>>;
}

const TimerControls: React.FC<ITimerControlsProps> = ({ timer, setTimer }) => {
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    // if stopwatch is supposed to be running, create interval
    if (timer.isRunning) {
      interval = setInterval(() => {
        setTimer((state) => ({
          ...state,
          totalTime: timer.totalTime += TIMER_TICK_RATE / 1000,
        }));
      }, TIMER_TICK_RATE);

      // if it's the first time stopwatch is being started, set start time
      if (!timer.startTime) {
        setTimer((state) => ({ ...state, startTime: Date.now() }));
      }

      // else if it's not supposed to be running and it was already running before, stop interval and set last "endTime"
    } else if (!timer.isRunning && timer.totalTime !== 0) {
      interval && clearInterval(interval);
      setTimer((state) => ({ ...state, endTime: Date.now() }));
    }

    // clean up any intervals on unmount
    return () => {
      interval && clearInterval(interval);
    };
  }, [timer.isRunning, timer.totalTime]);

  const handleToggleTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTimer((state) => ({ ...state, isRunning: !timer.isRunning }));
  };

  const buttonInnerText = timer.isRunning ? "pause" : "start";
  return (
    <div>
      <button onClick={handleToggleTimer}>{buttonInnerText}</button>
    </div>
  );
};

export default TimerControls;
