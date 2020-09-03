import React from "react";
/* Constants */
import { HOURS_PER_DAY } from "../../../../constants/appConfig";
/* Subcomponents */
import { EntryCard } from "../../../";

const Column = () => {
  const renderEntryCardJSX = () => {
    return HOURS_PER_DAY.map((hour, i) => (
      <EntryCard key={`${hour}-${i}-hour`} />
    ));
  };

  return <div>{renderEntryCardJSX()}</div>;
};

export default Column;
