import React, { useState, useEffect } from "react";
/* Styles */
import "./Timer.css";
/* Subcomponents */
import { TimerControls } from "../";
/* Constants */
import { ITimerState } from "../../constants/types";
/* Util */
import { formatDateObj, formatMStoHHMMSS } from "../../util/timeFormatHelpers";

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer.totalTime]);

  // if timer is running, highlight the time ticking
  const timerSpanClass = timer.isRunning && "running";

  return (
    <div className="Timer__">
      {/* display timer details */}
      <div className="Timer__info-container">
        <label>Total:</label>

        {/* Total */}
        <span className={`Timer__time-span ${timerSpanClass}`}>
          {formatMStoHHMMSS(timer.totalTime)}
        </span>

        {/* Start */}
        <label>Start:</label>
        <span>{timer.startTime && formatDateObj(timer.startTime)}</span>

        {/* End */}
        <label>End:</label>
        <span>{timer.endTime && formatDateObj(timer.endTime)}</span>
      </div>

      <TimerControls timer={timer} setTimer={setTimer} />
    </div>
  );
};

export default Timer;
