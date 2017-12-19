const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common');
const { resolve, getTarget } = require('./util');

const port = 3000;
const target = getTarget();
console.log('target: ', target);

const config = merge(common(target), {
  output: {
    pathinfo: true,
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    https: true,
    contentBase: target + '/public',
    port,
    host: '0.0.0.0',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: target + '/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
