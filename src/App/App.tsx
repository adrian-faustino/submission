import React, { useState } from "react";
import { AllEntriesCTX } from "../context";
/* Styles */
import "./App.css";
/* Views */
// import { TestView } from "../views";
/* Subcomponents */
import { Nav, Timetable } from "../components";
/* Constants */
import { IEntry } from "../constants/types";

const App = () => {
  const [allEntries, setAllEntries] = useState([]);

  return (
    <div className="App">
      <AllEntriesCTX.Provider value={allEntries}>
        <Nav />
        <Timetable />
      </AllEntriesCTX.Provider>

      {/* <TestView /> */}
    </div>
  );
};

export default App;
