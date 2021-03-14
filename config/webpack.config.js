const path = require('path')

module.exports = {
  entry: './src/components/Header/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
