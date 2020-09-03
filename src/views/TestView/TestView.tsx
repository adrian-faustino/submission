import React from "react";
/* Styles */
import "./TestView.css";
/* Subcomponents */
import { TestButton } from "../../components";

const TestView = () => {
  return (
    <div>
      <h3>From TestView.tsx</h3>
      <TestButton />
    </div>
  );
};

export default TestView;
