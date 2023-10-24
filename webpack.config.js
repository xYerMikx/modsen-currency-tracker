const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { HotModuleReplacementPlugin } = require("webpack")
const ESLintWebpackPlugin = require("eslint-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = (_, argv) => {
	const isProd = argv.mode === "production"

	return {
		entry: ["@babel/polyfill", path.join(__dirname, "src", "index.jsx")],
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "bundle.js",
		},
		devServer: isProd
			? {}
			: {
					host: "localhost",
					port: 3000,
					open: true,
					hot: true,
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
					test: /\.(css|scss)$/,
					use: ["style-loader", "css-loader", "sass-loader"],
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
		],
		resolve: {
			extensions: [".jsx", ".js", ".scss"],
		},
		devtool: isProd ? false : "source-map",
		optimization: isProd
			? {
					minimize: true,
					minimizer: [new TerserPlugin()],
			  }
			: {},
	}
}
