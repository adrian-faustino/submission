import React from "react";
/* Constants */
import { HOURS_PER_DAY } from "../../../../constants/appConfig";
import { IDay } from "../../../../constants/types";
/* Subcomponents */
import { EntryCard } from "../../../";

interface IColumnProps {
  day: IDay;
}

const Column: React.FC<IColumnProps> = ({ day }) => {
  const renderEntryCardJSX = () => {
    return HOURS_PER_DAY.map((hour, i) => (
      <EntryCard hour={hour} day={day} key={`${hour}-${i}-hour`} />
    ));
  };

  return <div>{renderEntryCardJSX()}</div>;
};

export default Column;
