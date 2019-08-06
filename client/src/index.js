import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./components/Footer"
import "./index.css";

//   ReactDOM.render(<App />, document.getElementById("root"));
  ReactDOM.render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));
