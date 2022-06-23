const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const BaseWebpackConfig = {
  entry: "./src/index.tsx",

  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
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
        enforce: 'pre',
        // loading source maps
        use: ['source-map-loader'],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};

module.exports = BaseWebpackConfig;
