const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      app: path.resolve(__dirname, "./src/app/"),
      shared: path.join(__dirname, "/src/shared"),
      core: path.resolve(__dirname, "./src/core/"),
      enums: path.resolve(__dirname, "./src/enums/"),
      utils: path.resolve(__dirname, "./src/utils/"),
      data: path.resolve(__dirname, "./src/data/"),
      assets: path.resolve(__dirname, "./src/assets/"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js",
    publicPath: "./",
  },
  devServer: {
    publicPath: "/",
    historyApiFallback: true,
    stats: "minimal",
    watchOptions: {
      poll: undefined,
      aggregateTimeout: 300,
      ignored: /node_modules/,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ExtractTextPlugin("style.css"),
    new Dotenv({ path: "./.env", systemvars: true }),
  ],
  performance: {
    maxEntrypointSize: 750000,
    maxAssetSize: 750000,
  },
};
