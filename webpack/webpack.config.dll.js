const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackVersionPlugin = require('webpack-version-plugin');

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-router-dom', 'mobx', 'mobx-react'],
  },
  output: {
    path: path.join(__dirname, '../dist/vendor/'),
    filename: '[name].min.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../dist/vendor/manifest.json'),
      name: '[name]',
      context: __dirname
    }),
    new CleanWebpackPlugin(['dist/vendor'], { root: path.resolve() }),
    new WebpackVersionPlugin({
      cb: (hashMap) => {
        console.log(hashMap);
      }
    })
  ]
};
