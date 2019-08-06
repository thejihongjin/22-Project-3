import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const Footer = () => (
    <footer class="footer">
      <p>Some footer nonsense!</p>
    </footer>
  );

//   ReactDOM.render(<App />, document.getElementById("root"));
  ReactDOM.render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));
