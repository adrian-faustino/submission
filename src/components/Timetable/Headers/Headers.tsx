import React from "react";
/* Styles */
import "./Headers.css";
/* Constants */
import { DAYS_OF_WEEK } from "../../../constants/appConfig";

const Headers = () => {
  const renderHeadersJSX = () => {
    return DAYS_OF_WEEK.map((day, i) => (
      <span key={`${day}-${i}-header`}>{day.long}</span>
    ));
  };

  return <section>{renderHeadersJSX()}</section>;
};

export default Headers;
