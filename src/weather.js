import getWeather from './weathertools';

const weather = (() => {
  const storage = { data: {}, symbol: {} };

  const update = {
    location: (location) => {
      storage.data = location;
    },
    symbol: (symbol) => {
      storage.symbol.value = symbol;
    }
  };

  const get = {
    location: () => {
      if (storage.data.location !== undefined)
        return storage.data.location.display();

      return 'No Data';
    },
    weather: async (location) => {
      try {
        const weatherData = await getWeather(location);

        if (typeof weatherData !== 'object') return weatherData;

        update.location(weatherData);

        return storage.data;
      } catch (err) {
        throw new Error(err);
      }
    },
    symbol: () => {
      return {
        weather: {
          temperature: {
            celsius: {
              number: storage.data.location.weather.temperature.celsius.number,
              feels: storage.data.location.weather.temperature.celsius.feels
            },
            fahrenheit: {
              number:
                storage.data.location.weather.temperature.fahrenheit.number,
              feels: storage.data.location.weather.temperature.fahrenheit.feels
            }
          },
          wind: {
            kph: storage.data.location.weather.wind.kph,
            mph: storage.data.location.weather.wind.mph
          }
        }
      };
    }
  };

  const onload = async () => {
    try {
      if (storage.data.location !== undefined) {
        await get.weather(storage.data.location.display());

        return [storage.data, storage.symbol.value];
      }

      return ['No Data'];
    } catch (err) {
      throw new Error(err);
    }
  };

  return { update, get, onload };
})();

export default weather;
