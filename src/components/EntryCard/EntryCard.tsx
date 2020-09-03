import React, { useState } from "react";
/* Styles */
import "./EntryCard.css";
/* Constants */
import { IDay, IHour } from "../../constants/types";
/* Subcomponents */
import { CardDetails, Timer } from "../";

interface IEntryCardProps {
  day: IDay;
  hour: IHour;
}

const EntryCard: React.FC<IEntryCardProps> = ({ day, hour }) => {
  /* State */
  const [isNewEntry, setIsNewEntry] = useState(false);
  const [timerReady, setTimerReady] = useState(false);

  const handleAddEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsNewEntry(true);
  };

  return (
    <div className="EntryCard__ box-shadow border-rad">
      <span>{hour}</span>
      <span>{day.short}</span>
      {!isNewEntry && <button onClick={handleAddEntry}>+</button>}

      {/* // only show once user has selected to input new task */}
      {isNewEntry && <CardDetails setTimerReady={setTimerReady} />}

      {/* only render when initial details have been input */}
      {timerReady && <Timer />}
    </div>
  );
};

export default EntryCard;
