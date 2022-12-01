const { resolve } = require("node:path");

const webpackConfig = {
  target: "browserslist",
  mode: "development",
  entry: {
    main: resolve("src/main.js"),
  },
  output: {
    path: resolve("public"),
    filename: "scripts/bundle.js",
  },
  devServer: {
    host: "localhost",
    port: 3000,
    client: {
      progress: true,
    },
  },
};

module.exports = webpackConfig;
