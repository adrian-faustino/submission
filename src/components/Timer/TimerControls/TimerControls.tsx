import React from "react";
/* Constants */
import { ITimerState } from "../../../constants/types";

interface ITimerControlsProps {
  timer: ITimerState;
  setTimer: React.Dispatch<React.SetStateAction<ITimerState>>;
}

const TimerControls: React.FC<ITimerControlsProps> = ({ timer, setTimer }) => {
  const buttonInnerText = timer.isRunning ? "pause" : "start";

  const handleToggleTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTimer((state) => ({ ...state, isRunning: !timer.isRunning }));
  };

  return (
    <div>
      <button onClick={handleToggleTimer}>{buttonInnerText}</button>
    </div>
  );
};

export default TimerControls;
