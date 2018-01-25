const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./common");
const { getTarget } = require("./util");

const port = 3000;
const target = getTarget();

const config = merge(common(target), {
  output: {
    pathinfo: true,
    // publicPath: "http://localhost:3000/"
    publicPath: ""
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          target,
          path.resolve(__dirname, "../node_modules/webpack-dev-server")
        ],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    // https: true,
    contentBase: target + "/public",
    historyApiFallback: false,
    port,
    host: "0.0.0.0",
    hot: true,
    proxy: [
      {
        //http://localhost:3000/pairs -> http://data.gate.io/api2/1/paris
        context: ["/pairs", "/marketinfo", "/marketlist", "/tickers"],
        target: "http://data.gate.io/api2/1",
        changeOrigin: true
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: target + "/index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
