import React, { useState } from "react";

interface ITimerState {
  isRunning: boolean;
  totalTime: number;
  startTime: number;
}

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

      {/* display timer details */}
      <span>Total: {timer.totalTime}</span>
    </div>
  );
};

export default Timer;
