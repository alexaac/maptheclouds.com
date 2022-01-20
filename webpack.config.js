const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env'),
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

const config = async (
  { mode, presets } = { mode: 'production', presets: [] }
) => {
  const { getHelpers } = require('./src/globalHelpers');

  const helpers = await getHelpers();

  // Plugin to process HTML
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, './src/views/index.pug'),
    templateParameters: helpers,
  });

  const htmlPlugin_about = new HtmlWebpackPlugin({
    filename: 'about.html',
    template: path.join(__dirname, './src/views/about.pug'),
    templateParameters: helpers,
  });

  const htmlPlugin_services = new HtmlWebpackPlugin({
    filename: 'services.html',
    template: path.join(__dirname, './src/views/services.pug'),
    templateParameters: helpers,
  });

  const htmlPlugin_playground = new HtmlWebpackPlugin({
    filename: 'playground/index.html',
    template: path.join(__dirname, './src/views/playground.pug'),
    templateParameters: helpers,
  });

  const htmlPlugin_terms = new HtmlWebpackPlugin({
    filename: 'terms.html',
    template: path.join(__dirname, './src/views/terms.html'),
    templateParameters: helpers,
  });

  const htmlPlugin_privacy = new HtmlWebpackPlugin({
    filename: 'privacy.html',
    template: path.join(__dirname, './src/views/privacy.html'),
    templateParameters: helpers,
  });

  const htmlPlugin_30daychart = new HtmlWebpackPlugin({
    filename: 'playground/30-day-chart-challenge/index.html',
    template: path.join(
      __dirname,
      './src/playground/30-day-chart-challenge.pug'
    ),
    templateParameters: helpers,
  });

  return merge(
    {
      mode,

      resolve: {
        fallback: {
          path: false,
        },
      },

      context: path.join(__dirname, './src'),

      entry: {
        // main JS file
        app: './index.js',
      },

      target: 'node', // support native modules

      // different loaders are responsible for different file types
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg)$/,
            type: 'asset/resource',
          },
          {
            test: /\.pug$/,
            loader: 'pug-loader',
          },
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
          },
          {
            test: /\.(json|geojson)$/i,
            exclude: /(node_modules)/,
            loader: 'json-loader',
          },
        ],
      },

      target: 'web', // important! index.js does not work without it

      plugins: [
        htmlPlugin,
        htmlPlugin_about,
        htmlPlugin_services,
        htmlPlugin_playground,
        htmlPlugin_terms,
        htmlPlugin_privacy,
        htmlPlugin_30daychart,
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
          'process.env': dotenv.parsed,
        }),
      ],

      resolve: {
        extensions: ['.js', '*'],
        modules: [path.join(__dirname, 'node_modules')],
      },
    },

    modeConfig(mode),

    presetConfig({ mode, presets })
  );
};

module.exports = config;
