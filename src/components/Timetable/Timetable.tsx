import React from "react";
/* Styles */
import "./Timetable.css";
/* Subcomponents */
import { Headers, Body, Footers } from "../";

const Timetable = () => {
  return (
    <section className="Timetable__">
      <div className="Timetable__columns-container">
        {/* headers */}
        <Headers />

        {/* body */}
        <Body />

        {/* footers */}
        <Footers />
      </div>
    </section>
  );
};

export default Timetable;
