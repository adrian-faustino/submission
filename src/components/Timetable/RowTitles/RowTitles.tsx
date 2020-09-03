import React from "react";
/* Constants */
import { HOURS_PER_DAY } from "../../../constants/appConfig";

const RowTitles = () => {
  const renderRowTitlesJSX = () => {
    return HOURS_PER_DAY.map((hour) => <h3>{hour}</h3>);
  };

  return <div>{renderRowTitlesJSX()}</div>;
};

export default RowTitles;
