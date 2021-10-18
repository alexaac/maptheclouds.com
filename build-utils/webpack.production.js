const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  mode: 'production',

  output: {
    assetModuleFilename: 'icons/[name][ext]',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // filename: "[name].[hash].css",
      // chunkFilename: "[id].[hash].css",
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new UglifyJSPlugin({
      uglifyOptions: { warnings: false },
    }),
  ],
});
