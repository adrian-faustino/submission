import React, { useContext } from "react";
import { AllEntriesCTX } from "../../context";
/* Styles */
import "./Nav.css";

const Nav = () => {
  const allEntries = useContext(AllEntriesCTX);

  return (
    <section className="Nav__ center-text">
      <h3>Logo</h3>
      <span>Total minutes this week: {allEntries}</span>
    </section>
  );
};

export default Nav;
