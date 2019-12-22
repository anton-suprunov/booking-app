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
    publicPath : '/',
  },

  resolve : {
    extensions: [".js", ".jsx"],
    
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src'),
    ],
  },
  
  performance: {
    maxAssetSize: 100000,
    maxEntrypointSize: 300000,
     //hints: 'warning'
  },

  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
          }
        },
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          fix: true
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
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
    
   
  ],

  node: {
    fs: "empty"
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },


};

module.exports = function() {
  if (isProd) {
    return merge(defaultConfig, prodConfig);
  }
  
  return merge(defaultConfig, devConfig);
}