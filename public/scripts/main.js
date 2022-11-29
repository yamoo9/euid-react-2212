import App from './App.js';

// @ts-ignore
var _window = window,
  React = _window.React,
  ReactDOM = _window.ReactDOM;
var Component = React.Component,
  StrictMode = React.StrictMode;
var createRoot = ReactDOM.createRoot;
var container = document.getElementById('app');
createRoot(container).render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(App, null)));