require('./css/styles.css');
require('./dom');
require('./weather');
require('./controller');

// Server HMR
if (module.hot) {
  module.hot.accept();
}
