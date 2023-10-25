const { merge } = require("webpack-merge")
const TerserPlugin = require("terser-webpack-plugin")
const common = require("./webpack.config")

module.exports = merge(common, {
	mode: "production",
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
})
