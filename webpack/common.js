const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { resolve } = require('./util');
const pkg = require('../package.json');

const dist = 'dist';
const vendor = Object.keys(pkg.dependencies);

module.exports = function config(src) {
  return {
    entry: {
      vendor
    },
    output: {
      filename: 'scripts/[name].bundle.js',
      path: resolve(src, dist)
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([dist], {
        root: src
      }),
      new HtmlWebpackPlugin({
        template: src + '/index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
            return false;
          }
          return module.context && module.context.indexOf("node_modules") !== -1;
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      })
    ]
  }
};
