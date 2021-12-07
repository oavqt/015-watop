import getWeather from './weathertools';

const weather = (() => {
  const storage = {
    data: { location: 'temple, tx' },
    symbol: {}
  };

  const update = {
    storage: (location) => {
      storage.data = location;
    },
    symbol: (symbol) => {
      storage.symbol.value = symbol;
    }
  };

  const get = {
    weather: async (location) => {
      try {
        const weatherData = await getWeather(location);

        if (weatherData === 400) return weatherData;

        update.storage(weatherData);

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
              number: storage.data.locationweather.temperature.celsius.number,
              feels: storage.data.locationweather.temperature.celsius.feels
            },
            fahrenheit: {
              number:
                storage.data.locationweather.temperature.fahrenheit.number,
              feels: storage.data.locationweather.temperature.fahrenheit.feels
            }
          },
          wind: {
            kph: storage.data.locationweather.wind.kph,
            mph: storage.data.locationweather.wind.mph
          }
        }
      };
    }
  };

  const onload = async () => {
    try {
      if (storage.data.location !== undefined) {
        await get.weather(storage.data.location);

        return [storage.data, storage.symbol.value];
      }

      return 'default';
    } catch (err) {
      throw new Error(err);
    }
  };

  return { update, get, onload };
})();

export default weather;
