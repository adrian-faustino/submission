import React from "react";
/* Styles */
import "./Headers.css";
/* Constants */
import { DAYS_OF_WEEK } from "../../../constants/appConfig";

const Headers = () => {
  const renderHeadersJSX = () => {
    return DAYS_OF_WEEK.map((day, i) => (
      <span className="Headers__item" key={`${day}-${i}-header`}>
        {day.short}
      </span>
    ));
  };

  return (
    <section className="Headers__ center-text box-shadow">
      {renderHeadersJSX()}
    </section>
  );
};

export default Headers;
