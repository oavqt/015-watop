const webpack = require('webpack');
const { merge } = require('webpack-merge');
const theBaseConfig = require('./webpack.base');

const theDevConfig = {
  entry: {
    theMain: ['./src/index.js', 'webpack-hot-middleware/client'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EvalSourceMapDevToolPlugin({
      test: /\.(vue|[jt]sx?)$/i,
    }),
    new webpack.SourceMapDevToolPlugin({
      test: /\.s?[as]ss?$/i,
    }),
  ],
};

module.exports = merge(theBaseConfig, theDevConfig);
