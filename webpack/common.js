const { resolve } = require("node:path");
const babelLoader = require("./loaders/babel");
const { sassLoader } = require("./loaders/styles");

const commonConfig = {
  target: "browserslist",
  resolve: {
    extensions: ".ts .tsx .js .jsx .json .wasm".split(" "),
  },
  entry: {
    main: resolve("src/main.tsx"),
  },
  module: {
    rules: [babelLoader, sassLoader].filter(Boolean),
  },
};

module.exports = commonConfig;
