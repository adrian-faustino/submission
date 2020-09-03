import React from "react";
/* Constants */
import { IDay, IHour } from "../../constants/types";

interface IEntryCardProps {
  day: IDay;
  hour: IHour;
}

const EntryCard: React.FC<IEntryCardProps> = ({ day, hour }) => {
  return (
    <div>
      <span>{hour}</span>
      <span>{day.short}</span>
    </div>
  );
};

export default EntryCard;
