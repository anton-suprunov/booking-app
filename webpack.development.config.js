const webpack = require('webpack'),
  path = require('path');

module.exports = {
  module : {
    rules : [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
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
                require('autoprefixer'),
                require('stylelint')({
                  ignoreFiles: 'node_modules/**/*.css',
                })
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
        use: { loader: 'url-loader' },
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