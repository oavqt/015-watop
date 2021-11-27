import display from './dom';
import getWeather from './weathertools';

const weather = (() => {
  const storage = { location: 'temple, tx' };

  const get = (location) => {
    getWeather(location);

    console.log(storage);
  };

  const store = (location) => {
    storage.location = location;
  };

  const onload = () => {
    if (storage.location !== '') display.skeleton.home();
    // getWeather(storage.location);
    else display.skeleton.default();
  };

  return { get, store, onload };
})();

export default weather;
