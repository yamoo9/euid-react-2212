import App from './App.js';

// @ts-ignore
const { React, ReactDOM } = window;

const { Component, StrictMode } = React;
const { createRoot } = ReactDOM;

const container = document.getElementById('app');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
