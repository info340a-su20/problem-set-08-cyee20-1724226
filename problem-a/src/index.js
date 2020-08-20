import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import data from "./senators.json";

ReactDOM.render(<App array={data} />, document.getElementById("root"));
