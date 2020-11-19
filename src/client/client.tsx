// bootup location of our app in the browser
import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Home";

// we already rendered the app on the server. that code is inside temlate html.
ReactDOM.hydrate(React.createElement(Home), document.getElementById("root"));
