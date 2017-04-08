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
                  return [ 
                    require('autoprefixer'),
                    //require('stylelint')({
                      //ignoreFiles: 'node_modules/**/*.css',
                    //})
                  ]
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
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options : {
            publicPath : '../img/',
            limit: 15000,
            name: '[name].[ext]'
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  plugins : [
    new ExtractTextPlugin({
      filename : './css/[name].css',
      allChunks: true,
    })
  ]
}