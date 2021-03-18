const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { entryPath, outputPath } = require('./paths')

module.exports = {
  entry: entryPath,
  output: {
    path: outputPath,
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      src: entryPath,
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
}
