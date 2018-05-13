const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const phaserModulePath = path.join(__dirname, '/node_modules/phaser-ce/');

module.exports = {
  entry: {
    index: './src/index',
  },

  output: {
    filename: '[name].[chunkhash:7].js',
    path: path.join(__dirname, 'live'),
  },

  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      'phaser': path.join(phaserModulePath, 'build/custom/phaser-split.js'),
      'pixi': path.join(phaserModulePath, 'build/custom/pixi.js'),
      'p2': path.join(phaserModulePath, 'build/custom/p2.js'),
    },
  },

  module: {
    rules: [
      { test: /pixi\.js$/, loader: 'expose-loader?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
      { test: /p2\.js$/, loader: 'expose-loader?p2' },
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100,
              name: '[name].[hash:7].[ext]',
            },
          },
        ],
      }
    ],
  },

  devtool: '#eval-source-map',

  devServer: {
    port: 8808,
    inline: false,
    hot: false,
    contentBase: path.resolve(__dirname, 'div'),
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
};
