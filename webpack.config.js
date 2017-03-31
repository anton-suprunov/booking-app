var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/app',
      //'react-hot-loader/patch',
    ]
  },
  output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
              ['env', { modules: false }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 8080
  },
  devtool: "cheap-eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template : './src/index.html'
    }),
    new ExtractTextPlugin({
      filename : 'css/[name].css',
      allChunks: true
    })
  ]
};