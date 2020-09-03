import React, { useState } from "react";
/* Styles */
import "./Column.css";
/* Constants */
import { IDay } from "../../../../constants/types";
/* Subcomponents */
import { EntryCard } from "../../../";

interface IColumnProps {
  day: IDay;
}

const Column: React.FC<IColumnProps> = ({ day }) => {
  const [entries, setEntries] = useState(null);

  const handleAddNewEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Adding new entry...");
  };

  return (
    <div>
      {/* column header */}
      <h3 className="Column__header">{day.long}</h3>

      <button onClick={handleAddNewEntry}>+</button>
    </div>
  );
};

export default Column;
