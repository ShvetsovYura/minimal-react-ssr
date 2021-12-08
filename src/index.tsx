import { hydrate } from "react-dom";
import React from "react";
import { App } from "./App";

hydrate(<App />, document.querySelector("#root"));
