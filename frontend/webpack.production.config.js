const webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  GitRevisionPlugin = require('git-revision-webpack-plugin'),
  //BabiliPlugin = require('babili-webpack-plugin'),    
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  cssnano = require('cssnano');

module.exports = {
  mode: 'production',
  output : {
    chunkFilename: '[name].[chunkhash:8].js',
    filename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
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
              loader: 'postcss-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
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
            name: '[name].[hash:8].[ext]'
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  plugins : [
    new CleanWebpackPlugin(['./dist']),

    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        safe: true
      },
      canPrint: false
    }),

    new ExtractTextPlugin({
      filename : './css/[name].[contenthash:8].css',
      allChunks: true
    }),

    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version()
    }),

  /**
   * HashedModuleIdsPlugin generates module IDs based on module paths.
   * This is more stable than relying on the default order based numeric module IDs.
   */
    new webpack.HashedModuleIdsPlugin(),

    //new BabiliPlugin(),
    /*new webpack.optimize.UglifyJsPlugin({
      compress : {
        warnings: false
      }
    })*/
  ]
}