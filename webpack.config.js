'use strict';

var webpack = require('webpack');


module.exports = {
  entry: [__dirname + '/app.js', __dirname + '/application.sass'],

  output: {
    path: __dirname + '/dist/',
    filename: 'js/app.js',
  },

  resolve: {
    extensions: ['.js', '.sass', '.scss'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2', 'stage-0'],
        },
      },
      {
        test: /\.(sass|scss)$/, 
        loaders: ['style-loader', 'css-loader', 'sass-loader'] 
        // 'style', 'css!sass?indentedSyntax&includePaths[]=' + __dirname +  '/node_modules'
      },
    ],
  },

};

