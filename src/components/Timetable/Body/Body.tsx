import React from "react";
/* Styles */
import "./Body.css";
/* Constants */
import { DAYS_OF_WEEK } from "../../../constants/appConfig";

const Body = () => {
  const renderBodyColumnJSX = () => {
    return DAYS_OF_WEEK.map((day) => <div>{day.long}</div>);
  };

  return (
    <section className="Body__ Headers__ center-text">
      {renderBodyColumnJSX()}
    </section>
  );
};

export default Body;
