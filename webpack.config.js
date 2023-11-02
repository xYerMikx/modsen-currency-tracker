const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack")
const ESLintWebpackPlugin = require("eslint-webpack-plugin")
const dotenv = require("dotenv")
const CopyPlugin = require("copy-webpack-plugin")

dotenv.config()

module.exports = {
  entry: ["@babel/polyfill", path.join(__dirname, "src", "index.jsx")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      title: "Modsen Currency Tracker",
      favicon: path.join(__dirname, "public", "favicon.svg"),
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new ESLintWebpackPlugin(),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env),
      "process.env.PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL),
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/mockServiceWorker.js", to: path.resolve(__dirname, "dist") },
      ],
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".scss"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
}
