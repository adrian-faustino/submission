import React from "react";
/* Constants */
import { DAYS_OF_WEEK } from "../../../constants/appConfig";

const Headers = () => {
  const renderHeadersJSX = () => {
    return DAYS_OF_WEEK.map((day, i) => (
      <span key={`${day}-${i}-header`}>{day.short}</span>
    ));
  };

  return <div>{renderHeadersJSX()}</div>;
};

export default Headers;
