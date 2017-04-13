//TODO: css linter warnings due to being run after scss
const dotenv = require('dotenv').config(),
      webpack = require('webpack'),
      path = require('path'),
      merge = require('webpack-merge'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
  
      devConfig = require('./webpack.development.config.js'),
      prodConfig = require('./webpack.production.config.js'),
  
      isProd = (process.env.NODE_ENV === 'production');
      //ENV = process.env.ENV = process.env.NODE_ENV = 'development';
    
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
          fix: true
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
            plugins : ['syntax-dynamic-import']
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        //'HMR': HMR,
        //'API_URL': JSON.stringify(process.env.API_URL)
      }
    }),
    new HtmlWebpackPlugin({
      template : './src/index.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    })
  ],
  node: {
    fs: "empty"
  }
};

module.exports = function() {
  if (isProd) {
    return merge(defaultConfig, prodConfig);
  }
  
  return merge(defaultConfig, devConfig);
}