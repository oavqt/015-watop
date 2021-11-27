require('./css/styles.css');
require('./controller');

// Server HMR
const start = require('./weather');

const content = document.querySelector('.content');

if (module.hot) {
  module.hot.accept();

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  start.default.onload();
}
