import React from "react";
import ReactDOM from "react-dom";
import Store from "../Stores/Stores";
import App from "../Containers/app";
import { Provider, observer } from "mobx-react";
import "./styles.css";

const root = (
  <Provider Store={Store}>
    <App />
  </Provider>
);
ReactDOM.render(root, document.getElementById("root"));
