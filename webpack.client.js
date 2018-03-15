const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // inform webpack that we're building a bundle for nodeJS
  // rather than for the browser

  // target node / web    web is default
  // target: 'web',

  // Tell webpack the root file of our server application
  entry: './src/client/client.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

};

module.exports = merge(baseConfig, config);
