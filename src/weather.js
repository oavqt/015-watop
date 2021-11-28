import display from './dom';
import getWeather from './weathertools';

const weather = (() => {
  const storage = { location: '' };

  const get = (location) => {
    getWeather(location)
      .then((process) => {
        storage.location = process.location.display();
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const onload = () => {
    if (storage.location !== '') display.skeleton.home();
    // getWeather(storage.location);
    else display.skeleton.default();
  };

  return { get, onload };
})();

export default weather;
