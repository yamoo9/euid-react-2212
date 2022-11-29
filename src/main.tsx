import App from './App.js';

// @ts-ignore
const { React, ReactDOM } = window;

const { StrictMode } = React;
const { createRoot } = ReactDOM;

const container = document.getElementById('app');

createRoot(container).render(
  // @ts-ignore
  <StrictMode>
    <App />
  </StrictMode>
);
