import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Welcome from "./Welcome";
import registerServiceWorker from "./registerServiceWorker";

// ReactDOM.render(
//   <Welcome lunch="chicken rice" dinner="duck rice" />,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
