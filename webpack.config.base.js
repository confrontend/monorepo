const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const BaseWebpackConfig = {
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      https: false,
      http: false,
      querystring: false,
      url: false,
      stream: false,
      os: false,
      path: false,
      crypto: false,
      fs: false,
      child_process: false,
      net: false,
      dns: false,
      tls: false,
      zlib: false,
      buffer: false,
      util: false,
      assert: false,
      request: false,
    },
  },
  devServer: {
    // Enable hot reloading
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ["url-loader", "style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        exclude: /node_modules/,
        use: ["url-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        // loading source maps
        use: ["source-map-loader"],
      },
    ],
  },
  ignoreWarnings: [/Failed to parse source map/],
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.ProvidePlugin({
    //   process: "process/browser",
    // }),
    new webpack.DefinePlugin({
      process: {env: {}}
  })
  ],
};

module.exports = BaseWebpackConfig;
