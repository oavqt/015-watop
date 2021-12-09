import getWeather from './weathertools';

const weather = (() => {
  let storage = { data: {}, symbol: {} };

  const local = {
    storage: {
      available: (type) => {
        let storageType;

        try {
          storageType = window[type];

          const test = 'test';

          storageType.setItem(test, test);
          storageType.removeItem(test);

          return true;
        } catch (err) {
          throw new Error(err);
        }
      },
      set: (property, value) => {
        if (local.storage.available('localStorage') === true) {
          localStorage.setItem(property, JSON.stringify(value));
        } else throw new Error('LocalStorage is not available');
      },
      get: (property) => {
        if (local.storage.available('localStorage') === true) {
          return localStorage.getItem(property);
        }
        throw new Error('LocalStorage is not available');
      },
      remove: (property) => {
        if (local.storage.available('localStorage') === true) {
          localStorage.removeItem(property);
        } else throw new Error('LocalStorage is not available');
      },
      clear: () => {
        if (local.storage.available('localStorage') === true) {
          localStorage.clear();
        } else throw new Error('LocalStorage is not available');
      },
      methods: {
        display: () => {
          const { name } = storage.data.location;
          const { region } = storage.data.location;
          const { country } = storage.data.location;

          if (country === 'United States of America')
            return `${name}, ${region}`;
          return `${name}, ${country}`;
        }
      }
    }
  };

  const update = {
    location: (location) => {
      storage.data = location;

      local.storage.set('storage', storage);
    },
    symbol: (symbol) => {
      storage.symbol.value = symbol;

      local.storage.set('storage', storage);
    }
  };

  const get = {
    data: {
      location: () => {
        if (storage.data.location !== undefined)
          return storage.data.location.display();

        return 'No Data';
      },
      symbol: () => {
        if (storage.symbol.value !== undefined) return storage.symbol.value;

        return 'No Data';
      }
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
    storage = JSON.parse(local.storage.get('storage'));

    try {
      if (storage.data.location !== undefined) {
        storage.data.location.display = local.storage.methods.display;

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
