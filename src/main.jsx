import { createElement as h, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("app")).render(
  h(StrictMode, null, h(App))
);
