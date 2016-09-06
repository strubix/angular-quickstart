var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('bundle.css');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.css', '.scss'],
    fallback: [path.join(__dirname, 'node_modules/')]
  },
  entry: {
    app: [
      path.join(__dirname, 'src/app.js'),
      path.join(__dirname, 'src/app.scss')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '',
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
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass!sass-resources'
      },
      {
        test: /\.(mp4|mp3|avi|png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'file',
        query: {
          limit: 10000,
          name: 'assets/[name].[ext]'
        },
      },
    ]
  },
  plugins: [
    extractCSS,
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      inject: false
    })
  ],
  sassResources: 'src/app.scss',
};