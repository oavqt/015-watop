const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.dev');

const server = express();
const compiler = webpack(config);

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/'
  })
);

server.use(
  webpackHotMiddleware(compiler, {
    reload: true
  })
);

const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

server.listen('3333', () => {
  console.log('Server is starting at... http://localhost:3333/');
});
