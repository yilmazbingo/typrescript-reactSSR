const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  entry: { main: "./src/client/client" },
  output: {
    filename: "[name]-bundle.js",
    // after we shipped the ss code to browser, browser will handle the rest with client side code in public.
    path: path.resolve(__dirname, "public"),
  },
  devServer: { overlay: true },
});
