const path = require('path');
var webpack = require('webpack');
var fs = require('fs');

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    filename: 'bluename.min.js',
    path: path.resolve(__dirname, 'build')
  },
};