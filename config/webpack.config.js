const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', 'js', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
}
