const { stat } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: {
      index: 'public/index.html'
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "email-app",
      filename: "email_application.js",
      exposes: {
        "EmailPage": ""
      },
      remotes: {
        MicroFrontend: "hostapp@http://localhost:3000/remoteEntry.js"
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
}