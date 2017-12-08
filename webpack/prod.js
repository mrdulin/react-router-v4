const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const AppCachePlugin = require('appcache-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common');
const { resolve, getTarget } = require('./util');
const target = getTarget();

const config = merge(common(target), {
  output: {
    publicPath: '/',
    filename: 'scripts/[name].[chunkhash].js',
    chunkFilename: 'scripts/[name].chunk.[chunkhash].js',
  },
  plugins: [
    new AppCachePlugin(),
    new HtmlWebpackPlugin({
      template: target + '/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin()
  ]
});

module.exports = config;
