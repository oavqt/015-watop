require('./css/styles.css');
require('./dom');
require('./weather');

// Server HMR
if (module.hot) {
  module.hot.accept();
}
