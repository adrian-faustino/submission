import React, { useState } from "react";
/* Styles */
import "./Timer.css";
/* Subcomponents */
import { TimerControls } from "../";
/* Constants */
import { ITimerState } from "../../constants/types";
/* Util */
import { formatDateObj } from "../../util/timeFormatHelpers";

const initialState: ITimerState = {
  isRunning: false,
  totalTime: 0,
  startTime: null,
  endTime: null,
};

const Timer = () => {
  /* State */
  const [timer, setTimer] = useState(initialState);

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