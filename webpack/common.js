const { resolve } = require("node:path");

const commonConfig = {
  target: "browserslist",
  resolve: {
    extensions: ".js .jsx .json .wasm".split(" "),
  },
  entry: {
    main: resolve("src/main.jsx"),
  },
};

module.exports = commonConfig;
