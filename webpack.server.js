const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we're building a bundle for nodeJS
  // rather than for the browser

  // target node / web    web is default
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Tell webpack to run babel on every file it runs through
  externals: [
    webpackNodeExternals()
  ]
};

module.exports = merge(baseConfig, config);
