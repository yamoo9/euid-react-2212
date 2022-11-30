import App from "./App.js";
const { React, ReactDOM } = window;
const { StrictMode } = React;
const { createRoot } = ReactDOM;
const container = document.getElementById("app");
createRoot(container).render(React.createElement(StrictMode, null,
    React.createElement(App, null)));
