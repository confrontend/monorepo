/* eslint-disable @typescript-eslint/no-var-requires */
const BaseWebpackConfig = require("../../../webpack.config.base.js");

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
  ],
};
