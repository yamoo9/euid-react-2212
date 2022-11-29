import App from './App.js';

const { React, ReactDOM } = window;

const { StrictMode } = React;

// @ts-ignore
const { createRoot } = ReactDOM;

const container = document.getElementById('app');

createRoot(container).render(
  // @ts-ignore
  <StrictMode>
    <App />
  </StrictMode>
);
