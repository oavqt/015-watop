import page from './dom';
import getWeather from './weathertools';

const storeLocation = (() => {
  const storage = { location: '' };

  const set = (location) => {
    storage.location = location;

    getWeather(location);

    console.log(storage);
  };

  const onload = () => {
    if (storage.location !== '') page.home();
    else page.default();
  };

  return { set, onload };
})();

export default storeLocation;
