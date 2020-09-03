import React, { useState } from "react";
/* Styles */
import "./Timer.css";
/* Subcomponents */
import { TimerControls } from "../";
/* Constants */
import { ITimerState } from "../../constants/types";

const initialState: ITimerState = {
  isRunning: false,
  totalTime: 0,
  startTime: Date.now(),
};

const Timer = () => {
  /* State */
  const [timer, setTimer] = useState(initialState);

  return (
    <div className="Timer__">
      <h3>Timer</h3>

      <TimerControls timer={timer} setTimer={setTimer} />

      {/* display timer details */}
      <span>Total: {timer.totalTime}</span>
    </div>
  );
};

export default Timer;
