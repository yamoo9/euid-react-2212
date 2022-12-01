const app = document.getElementById("app");

if (app && "nodeType" in app && app.nodeType === document.ELEMENT_NODE) {
  app.insertAdjacentHTML(
    "beforeend",
    /* html */ `
      <h1>Webpack</h1>
      <p>Webpack is Module Bundler</p>
    `
  );
}
