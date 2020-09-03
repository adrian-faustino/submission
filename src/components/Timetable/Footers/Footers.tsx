import React from "react";
/* Constants */
import { DAYS_OF_WEEK } from "../../../constants/appConfig";

const Footers = () => {
  const renderFootersJSX = () => {
    return DAYS_OF_WEEK.map((day, i) => (
      <footer key={`${day}-${i}-footer`}>{day.long}</footer>
    ));
  };

  return <div>{renderFootersJSX()}</div>;
};

export default Footers;
