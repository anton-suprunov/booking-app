const webpack = require('webpack'),
  path = require('path');

module.exports = {
  mode: 'development',
  
  module : {
    rules : [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              camelCase: 'dashes',
              localIdentName: '[name]__[local]___[hash:base64:5]'
            },
          },
          { 
            loader: 'postcss-loader',
            options: {
              ident: 'postcss', // <= this line
              sourceMap: true,
              plugins: function () {
                return [
                  require('autoprefixer'),
                ]
              },
            },
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' 
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          }, 
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: function() {
                return [
                  require('autoprefixer'),
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
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: { 
          loader: 'url-loader' 
        },
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8080,
    overlay: {
      errors: true,
      warnings: true,
    }
  },
  devtool: 'cheap-eval-source-map',
}