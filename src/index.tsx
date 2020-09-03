import React from "react";
import ReactDOM from "react-dom";
/* Styles */
import "./index.css";
/* Reactstrap */
import "bootstrap/dist/css/bootstrap.min.css";
/* Subcomponents */
import App from "./App/App";
/* Redux */
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
