import React from "react";
/* Styles */
import "./Nav.css";
/* Redux */
import { useSelector, RootStateOrAny } from "react-redux";

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
      <h3>Logo</h3>
      <span>Total minutes this week: {total}</span>
    </section>
  );
};

export default Nav;
