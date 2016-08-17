var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('bundle.css');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.css'],
    fallback: [path.join(__dirname, '../node_modules')],
  },
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract(['css'])
      }
    ]
  },
  plugins: [
    extractCSS,
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ]
};