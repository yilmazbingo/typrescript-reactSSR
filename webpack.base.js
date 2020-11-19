const path = require("path");

module.exports = {
  //first resolve the given directory modules first
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
  mode: "development",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
