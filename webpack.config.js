const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack")
const ESLintWebpackPlugin = require("eslint-webpack-plugin")
const dotenv = require("dotenv")

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
		}),
	],
	resolve: {
		extensions: [".jsx", ".js", ".scss"],
		alias: {
			"@": path.resolve(__dirname, "src/"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			"@constants": path.resolve(__dirname, "src/constants"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@store": path.resolve(__dirname, "src/store"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@styles": path.resolve(__dirname, "src/styles"),
		},
	},
}
