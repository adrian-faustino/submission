import React, { useState, useEffect } from "react";
/* Styles */
import "./Timer.css";
/* Subcomponents */
import { TimerControls } from "../";
/* Constants */
import { ITimerState } from "../../constants/types";
/* Util */
import { formatDateObj } from "../../util/timeFormatHelpers";

interface ITimerProps {
  handleNewTotal: (seconds: number) => void;
}

const initialState: ITimerState = {
  isRunning: false,
  totalTime: 0,
  startTime: null,
  endTime: null,
};

const Timer: React.FC<ITimerProps> = ({ handleNewTotal }) => {
  /* State */
  const [timer, setTimer] = useState(initialState);

  // whenever timer total time is updated, update column total time
  useEffect(() => {
    handleNewTotal(timer.totalTime);
  }, [timer.totalTime]);

  return (
    <div className="Timer__">
      <h3>Timer</h3>

      <TimerControls timer={timer} setTimer={setTimer} />

      {/* display timer details */}
      <span>Total: {timer.totalTime.toFixed(2)}</span>
      <span>Start: {timer.startTime && formatDateObj(timer.startTime)}</span>
      <span>End: {timer.endTime && formatDateObj(timer.endTime)}</span>
    </div>
  );
};

export default Timer;
