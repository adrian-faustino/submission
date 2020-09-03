import React from "react";
/* Styles */
import "./Timetable.css";
/* Subcomponents */
import { Headers, Body, Footers, Column } from "../";
/* Constants */
import { DAYS_OF_WEEK } from "../../constants/appConfig";

const Timetable = () => {
  return (
    <section className="Timetable__">
      <div className="Timetable__columns-container">
        {DAYS_OF_WEEK.map((day) => (
          <Column day={day} />
        ))}
      </div>
    </section>
  );
};

export default Timetable;
