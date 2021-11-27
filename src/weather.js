import display from './dom';
import getWeather from './weathertools';

const storeLocation = (() => {
  const storage = { location: 'Temple' };

  const set = (location) => {
    storage.location = location;

    getWeather(location);

    console.log(storage);
  };

  const onload = () => {
    if (storage.location !== '') display.skeleton.home();
    // getWeather(storage.location);
    else display.skeleton.default();
  };

  return { set, onload };
})();

export default storeLocation;
