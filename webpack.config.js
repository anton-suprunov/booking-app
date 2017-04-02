const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  definePlugin = new webpack.DefinePlugin({
    DEV : JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  });

const commonConfig = {
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
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : './src/index.html',
    }),
    new ExtractTextPlugin({
      filename : 'css/[name].css',
      allChunks: true,
    }),
  ],
};

const productionConfig = () => commonConfig;
const developmentConfig = {
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8080,
  },
  devtool: 'cheap-eval-source-map',
};

module.exports = (env) => {
  if (env === 'production') {
    return productionConfig;
  } else {
    return Object.assign({}, commonConfig, developmentConfig);
  }
};