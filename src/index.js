require('./css/styles.css');
require('./weather');

// Server HMR
if (module.hot) {
  module.hot.accept();
}
