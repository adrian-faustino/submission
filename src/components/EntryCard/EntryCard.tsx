import React, { useState } from "react";
/* Styles */
import "./EntryCard.css";
/* Constants */
import { IEntry } from "../../constants/types";
/* Subcomponents */
import { CardDetails, Timer } from "../";

interface IEntryCardProps {
  entry: IEntry;
  updateThisEntryTotal: (id: string, newTotal: number) => void;
}

const EntryCard: React.FC<IEntryCardProps> = ({
  entry,
  updateThisEntryTotal,
}) => {
  /* State */
  const [timerReady, setTimerReady] = useState(false);

  const handleNewTotal = (seconds: number) => {
    // update column total
    updateThisEntryTotal(entry.entryID, seconds);
  };

  return (
    <div className="EntryCard__ box-shadow border-rad">
      <CardDetails setTimerReady={setTimerReady} />

      {/* only render when initial details have been input */}
      {timerReady && <Timer handleNewTotal={handleNewTotal} />}
    </div>
  );
};

export default EntryCard;
