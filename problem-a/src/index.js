import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import SENATOR from "./senators.json";

ReactDOM.render(<App senators={SENATOR} />, document.getElementById("root"));
