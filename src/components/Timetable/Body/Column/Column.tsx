import React, { useState } from "react";
/* Styles */
import "./Column.css";
/* Constants */
import { IDay, IEntry } from "../../../../constants/types";
/* Subcomponents */
import { EntryCard } from "../../../";

interface IColumnProps {
  day: IDay;
}

const Column: React.FC<IColumnProps> = ({ day }) => {
  const [entries, setEntries] = useState<IEntry[]>([]);

  const handleAddNewEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Adding new entry...");
    setEntries([
      ...entries,
      { entryTotalTime: 0, entryID: `${day.short}-${Date.now()}` },
    ]);
  };

  const updateThisEntryTotal = (id: string, newTotal: number) => {
    const updatedArr = entries.map((entry) => {
      if (entry.entryID === id) {
        return { ...entry, entryTotalTime: newTotal };
      } else {
        return entry;
      }
    });

    console.log("Updating column total...");
    setEntries(updatedArr);
  };

  const renderEntriesJSX = () => {
    return entries.map((entry) => (
      <EntryCard entry={entry} updateThisEntryTotal={updateThisEntryTotal} />
    ));
  };

  const columnTotalTime = entries.reduce(
    (acc, entry) => acc + entry.entryTotalTime,
    0
  );

  return (
    <div className="Column__">
      {/* column header */}
      <h3 className="Column__header">{day.long}</h3>

      {/* render all entries */}
      <div>{renderEntriesJSX()}</div>

      {/* button to add new entry */}
      <button className="Column__new-entry-btn" onClick={handleAddNewEntry}>
        +
      </button>

      {/* footer of each column to show total time this day */}
      <span className="Column__total-time-span center-text">
        Total time:{columnTotalTime.toFixed(2)}
      </span>
    </div>
  );
};

export default Column;
