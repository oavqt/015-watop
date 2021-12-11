const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const theBaseConfig = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gir)$/i,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    assetModuleFilename: 'images/[name][ext]',
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      title: 'Le Weather'
    })
  ]
};

module.exports = theBaseConfig;
