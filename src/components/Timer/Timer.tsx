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

  return (
    <div className="Timer__">
      {/* display timer details */}
      <div className="Timer__info-container">
        <label>Total:</label>
        <span>{formatMStoHHMMSS(timer.totalTime)}</span>
        <label>Start:</label>
        <span>{timer.startTime && formatDateObj(timer.startTime)}</span>
        <label>End:</label>
        <span>{timer.endTime && formatDateObj(timer.endTime)}</span>
      </div>

      <TimerControls timer={timer} setTimer={setTimer} />
    </div>
  );
};

export default Timer;
