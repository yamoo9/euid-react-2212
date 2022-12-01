import { createElement as h } from "react";

export function App() {
  return h("div", { className: "App", lang: "en" }, [
    h("h1", { key: "division" }, "React App"),
    h("p", { key: "paragraph" }, [
      "React is ",
      h("abbr", { title: "User Interface", key: "abbrebiation" }, "UI"),
      " Library",
    ]),
  ]);
}
