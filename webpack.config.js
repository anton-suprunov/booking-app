//TODO: css linter warnings due to being run after scss

const webpack = require('webpack'),
  path = require('path'),
  merge = require('webpack-merge'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  
  devConfig = require('./webpack.development.config.js'),
  prodConfig = require('./webpack.production.config.js'),
  
  isProd = (process.env.NODE_ENV === 'production'),
  definePlugin = new webpack.DefinePlugin({
    DEV : JSON.stringify(JSON.parse(!isProd)),
  });
    
const defaultConfig = {
  entry: {
    app: [
      './src/index',
        //'react-hot-loader/patch',
    ],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'react',
                ['env', { modules: false }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : './src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ]
};

module.exports = function() {
  if (isProd) {
    return merge(defaultConfig, prodConfig);
  }
  
  return merge(defaultConfig, devConfig);
}