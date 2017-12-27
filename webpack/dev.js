const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common');
const { resolve, getTarget } = require('./util');

const port = 3000;
const target = getTarget();
// console.log('target: ', target);

const config = merge(common(target), {
  output: {
    pathinfo: true,
    publicPath: 'http://localhost:3000/'
  },
  devtool: 'source-map',
  devServer: {
    // https: true,
    contentBase: target + '/public',
    historyApiFallback: true,
    port,
    host: '0.0.0.0',
    hot: true,
    proxy: [
      {
        //http://localhost:3000/pairs -> http://data.gate.io/api2/1/paris
        context: ['/pairs', '/marketinfo', '/marketlist', '/tickers'],
        target: 'http://data.gate.io/api2/1',
        changeOrigin: true
      }
    ]
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
