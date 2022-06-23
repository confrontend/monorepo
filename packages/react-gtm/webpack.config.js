const BaseWebpackConfig = require("../../webpack.config.base.js");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...BaseWebpackConfig,
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  plugins: [
    ...BaseWebpackConfig.plugins,
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/data", to: "./data" },
        { from: "./public/images", to: "./images" },
      ],
    }),
  ],
};
