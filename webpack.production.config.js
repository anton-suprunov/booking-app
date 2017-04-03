const webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');
      
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                //modules: true // enables css-modules
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [ require('autoprefixer') ]
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            }
          ],
          fallback: 'style-loader'
        }),
      },
    ]
  }
}