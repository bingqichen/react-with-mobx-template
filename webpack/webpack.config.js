const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { theme } = require('../package.json');
const manifest = require('../dist/vendor/manifest.json');

module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader?importLoaders=1',
            'postcss-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader?importLoaders=1',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                modifyVars: theme
              }
            }
          ]
        },
        {
          test: /\.js[x]?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /\.(png|jpe?g?)(\?[a-z0-9=&.]+)?$/,
          use: 'file-loader?name=images/[name].[ext]'
        }
      ]
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.less']
    }
  };

  if (process.env.NODE_ENV === 'development') {
    config.module.rules[0].use = [
      'css-hot-loader',
      MiniCssExtractPlugin.loader,
      'css-loader?importLoaders=1',
      'postcss-loader'
    ];
    config.module.rules[1].use = [
      'css-hot-loader',
      MiniCssExtractPlugin.loader,
      'css-loader?importLoaders=1',
      'postcss-loader',
      {
        loader: 'less-loader',
        options: {
          modifyVars: theme
        }
      }
    ];
  }

  return config;
};
