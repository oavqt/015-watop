import getWeather from './weathertools';

const weather = (() => {
  let storage = {};

  const get = async (location) => {
    try {
      const weatherData = await getWeather(location);

      if (weatherData === 400) return weatherData;

      storage = weatherData;

      return storage;
    } catch (err) {
      throw new Error(err);
    }
  };

  const onload = () => {
    if (storage.location !== undefined) {
      getWeather(storage.location.display());
      return 'done';
    }

    return 'default';
  };

  const symbol = () => {
    return {
      weather: {
        temperature: {
          celsius: {
            number: storage.weather.temperature.celsius.number,
            feels: storage.weather.temperature.celsius.feels
          },
          fahrenheit: {
            number: storage.weather.temperature.fahrenheit.number,
            feels: storage.weather.temperature.fahrenheit.feels
          }
        },
        wind: {
          kph: storage.weather.wind.kph,
          mph: storage.weather.wind.mph
        }
      }
    };
  };

  return { get, onload, symbol };
})();

export default weather;
