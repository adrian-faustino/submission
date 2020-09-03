import React from "react";
import ReactDOM from "react-dom";
/* Styles */
import "./index.css";
/* Reactstrap */
import "bootstrap/dist/css/bootstrap.min.css";
/* Subcomponents */
import App from "./App/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
