import React, { useState } from "react";
/* Styles */
import "./Column.css";
/* Constants */
import { IDay, IEntry } from "../../../../constants/types";
/* Subcomponents */
import { EntryCard } from "../../../";
/* Util */
import { formatMStoHHMMSS } from "../../../../util/timeFormatHelpers";
/* Redux */
import {
  addNewEntry,
  updateEntriesArray,
} from "../../../../redux/actions/totalWorktimeActions";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

interface IColumnProps {
  day: IDay;
}

const Column: React.FC<IColumnProps> = ({ day }) => {
  const [entries, setEntries] = useState<IEntry[]>([]);
  /* Redux */
  const dispatch = useDispatch();
  const allEntries: Array<IEntry> = useSelector(
    (state: RootStateOrAny) => state.totalWorktime.allEntries
  );

  const handleAddNewEntry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Adding new entry...");
    const newEntry = {
      entryTotalTime: 0,
      entryID: `${day.short}-${Date.now()}`,
    };
    // add entry to array within same column
    setEntries([...entries, newEntry]);
    // add entry to global array of entries
    dispatch(addNewEntry(newEntry));
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

    // update column total
    setEntries(updatedArr);

    // update weekly total
    const updatedGlobalArr = allEntries.map((entry) => {
      if (entry.entryID === id) {
        return { ...entry, entryTotalTime: newTotal };
      } else {
        return entry;
      }
    });
    dispatch(updateEntriesArray(updatedGlobalArr));
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
      <button
        className="Column__new-entry-btn"
        onClick={handleAddNewEntry}
      ></button>

      {/* footer of each column to show total time this day */}
      <span className="Column__total-time-span center-text box-shadow">
        <b>Total time:</b>
        <div>{formatMStoHHMMSS(columnTotalTime)}</div>
      </span>
    </div>
  );
};

export default Column;
