const merge = require('webpack-merge');
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
    contentBase: target + '/public',
    port,
    host: '0.0.0.0'
  }
});

module.exports = config;
