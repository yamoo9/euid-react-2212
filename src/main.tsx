import "./styles/global.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("app") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
