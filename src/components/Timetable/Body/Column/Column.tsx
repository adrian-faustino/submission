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
  const [entries, setEntries] = useState<number[]>([]);

  const handleAddNewEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Adding new entry...");
    setEntries([...entries, Math.random()]);
  };

  const renderEntriesJSX = () => {
    return entries.map((entry) => <EntryCard />);
  };

  return (
    <div>
      {/* column header */}
      <h3 className="Column__header">{day.long}</h3>

      {/* render all entries */}
      {renderEntriesJSX()}

      {/* button to add new entry */}
      <button onClick={handleAddNewEntry}>+</button>

      {/* footer of each column to show total time this day */}
    </div>
  );
};

export default Column;
