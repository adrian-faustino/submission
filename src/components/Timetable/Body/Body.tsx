import React from "react";
/* Styles */
import "./Body.css";
/* Constants */
import { DAYS_OF_WEEK } from "../../../constants/appConfig";

const Body = () => {
  const renderBodyColumnJSX = () => {
    return DAYS_OF_WEEK.map((day, i) => (
      <div key={`${day}-${i}-column`}>{day.long}</div>
    ));
  };

  return <section>{renderBodyColumnJSX()}</section>;
};

export default Body;
