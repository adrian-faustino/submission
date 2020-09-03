import React from "react";
/* Styles */
import "./TestButton.css";

const TestButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log("Clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default TestButton;
