import React from "react";
/* Styles */
import "./Timetable.css";
/* Subcomponents */
import { Headers, Body, Footers } from "../";

const Timetable = () => {
  return (
    <section>
      {/* headers */}
      <Headers />

      {/* body */}
      <Body />

      {/* footers */}
      <Footers />
    </section>
  );
};

export default Timetable;
