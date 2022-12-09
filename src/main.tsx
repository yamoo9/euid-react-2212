import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/app/App";
import "@/styles/global.scss";

createRoot(document.getElementById("app") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
