const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [new CleanWebpackPlugin()],
})
