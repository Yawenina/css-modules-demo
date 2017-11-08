const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.reslove(__dirname, 'dist')
  },
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?modules'
      })
    },
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    }
  ],
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};

