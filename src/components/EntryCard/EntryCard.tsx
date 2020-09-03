import React from "react";
/* Styles */
import "./EntryCard.css";
/* Constants */
import { IDay, IHour } from "../../constants/types";

interface IEntryCardProps {
  day: IDay;
  hour: IHour;
}

const EntryCard: React.FC<IEntryCardProps> = ({ day, hour }) => {
  return (
    <div className="EntryCard__ box-shadow border-rad">
      <span>{hour}</span>
      <span>{day.short}</span>
    </div>
  );
};

export default EntryCard;
