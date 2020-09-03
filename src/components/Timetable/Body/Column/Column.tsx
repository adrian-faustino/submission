import React from "react";
/* Constants */
import { IDay } from "../../../../constants/types";
/* Subcomponents */
import { EntryCard } from "../../../";

interface IColumnProps {
  day: IDay;
}

const Column: React.FC<IColumnProps> = ({ day }) => {
  return (
    <div>
      <h3>{day.long}</h3>
    </div>
  );
};

export default Column;
