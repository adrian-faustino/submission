import React from "react";
/* Styles */
import "./Body.css";
/* Constants */
import { DAYS_OF_WEEK } from "../../../constants/appConfig";
/* Subcomponents */
import { Column } from "../../../components";

const Body = () => {
  const renderBodyJSX = () => {
    return DAYS_OF_WEEK.map((day, i) => (
      <Column day={day} key={`${day}-${i}-column`} />
    ));
  };

  return (
    <section>
      <div></div>
      {renderBodyJSX()}
    </section>
  );
};

export default Body;
