import React from "react";
/* Styles */
import "./Nav.css";
/* Redux */
import { useSelector, RootStateOrAny } from "react-redux";
/* Util */
import { formatMStoHourFloat } from "../../util/timeFormatHelpers";

const Nav = () => {
  const allEntries = useSelector(
    (state: RootStateOrAny) => state.totalWorktime.allEntries
  );

  const total = allEntries.reduce(
    (acc: number, entry: any) => acc + entry.entryTotalTime,
    0
  );

  return (
    <section className="Nav__ center-text">
      <h1>Time Tracker</h1>
      <span>
        <b>Weekly hours:</b> {formatMStoHourFloat(total)}
      </span>
    </section>
  );
};

export default Nav;
