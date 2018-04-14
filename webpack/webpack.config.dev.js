const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackBaseConfig = require('./webpack.config')();

const dashboard = new Dashboard();

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:8888',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      path.join(__dirname, '../src/app')
      // the entry point of our app
    ]
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'js/[name].dev.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.join(__dirname, '../'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`

    inline: true,
    compress: true,
    historyApiFallback: true,
    port: 8888,
    host: 'localhost',
    open: true,
    openPage: '',
    proxy: {

    },
    quiet: true
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
});
