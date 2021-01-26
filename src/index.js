import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CardController from "./CardController";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CardController />
  </StrictMode>,
  rootElement
);
