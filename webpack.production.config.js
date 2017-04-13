const webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  GitRevisionPlugin = require('git-revision-webpack-plugin'),
  BabiliPlugin = require('babili-webpack-plugin'),    
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  cssnano = require('cssnano');

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
    new CleanWebpackPlugin(['./dist']),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
        safe: true,
      },
      canPrint: false,
    }),
    new ExtractTextPlugin({
      filename : './css/[name].css',
      allChunks: true,
    }),
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
    //new BabiliPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress : true
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
        // Run cssnano in safe mode to avoid
        // potentially unsafe transformations.
        safe: true,
      },
      canPrint: false,
    })
  ]
}