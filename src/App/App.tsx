import React from "react";
/* Styles */
import "./App.css";
/* Views */
// import { TestView } from "../views";
/* Subcomponents */
import { Nav, Timetable } from "../components";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Timetable />

      {/* <TestView /> */}
    </div>
  );
};

export default App;
