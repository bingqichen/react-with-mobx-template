const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.config')();

module.exports = merge(webpackBaseConfig, {
  entry: {
    app: path.join(__dirname, '../src/app')
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'js/[name].js',
    publicPath: process.env.BETA === 'true' ? '//your_cdn_path/beta/project_name/' : '//your_cdn_path/release/project_name/'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new CleanWebpackPlugin(['dist/css', 'dist/js'], { root: path.resolve() })
  ]
});
