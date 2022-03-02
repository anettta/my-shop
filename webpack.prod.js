const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "development"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
    ],
  },
};
