import display from './dom';

const dom = {
  get: {
    element: {
      content: () => {
        return document.querySelector('.content');
      },
      page: {
        search: () => {
          return document.querySelector('.home__search');
        }
      },

      weather: {
        location: () => {
          return document.querySelector('.location__text');
        },
        temperature: {
          current: () => {
            return document.querySelector('.current__text');
          },
          number: () => {
            return document.querySelector('.number__text');
          },
          symbol: {
            temperature: () => {
              return document.querySelector('.symbol__text');
            },
            feels: () => {
              return document.querySelector('.feels__symbol');
            },
            wind: () => {
              return document.querySelector('.wind__symbol');
            }
          },
          feels: () => {
            return document.querySelector('.feels__number');
          },
          wind: {
            direction: () => {
              return document.querySelector('.wind__direction');
            },
            number: () => {
              return document.querySelector('.wind__number');
            }
          },
          humidity: () => {
            return document.querySelector('.humidity__number');
          }
        }
      },
      image: {
        description: () => {
          return document.querySelector('.img--description');
        }
      },
      input: {
        location: () => {
          return document.querySelector('.input--location');
        },
        celsius: () => {
          return document.querySelector('.input--celsius');
        },
        fahrenheit: () => {
          return document.querySelector('.input--fahrenheit');
        }
      },
      button: {
        search: () => {
          return document.querySelector('.button--search');
        },
        cancel: () => {
          return document.querySelector('.button--cancel');
        },
        change: () => {
          return document.querySelector('.button--location--change');
        }
      }
    },
    value: {
      input: {
        location: () => {
          return document.querySelector('.input--location').value;
        },
        symbol: () => {
          const radio = [
            ...document.querySelectorAll('.input--celsius, .input--fahrenheit')
          ];

          return radio.find((input) => input.checked).value;
        }
      }
    }
  },
  display: {
    load: {
      skeleton: () => {
        display.skeleton();
      }
    },
    update: {
      page: {
        weather: (process, symbol = 'celsius') => {
          const currentWeather = dom.get.element.weather.temperature.current();
          const location = dom.get.element.weather.location();
          const temperatureNumber =
            dom.get.element.weather.temperature.number();
          const temperatureSymbol =
            dom.get.element.weather.temperature.symbol.temperature();
          const feels = dom.get.element.weather.temperature.feels();
          const feelsSymbol =
            dom.get.element.weather.temperature.symbol.feels();
          const windDirection =
            dom.get.element.weather.temperature.wind.direction();
          const windNumber = dom.get.element.weather.temperature.wind.number();
          const windSymbol = dom.get.element.weather.temperature.symbol.wind();
          const humidity = dom.get.element.weather.temperature.humidity();

          if (symbol === 'fahrenheit') {
            currentWeather.textContent = process.weather.current;

            location.textContent = process.location.display();

            temperatureNumber.textContent =
              process.weather.temperature.fahrenheit.number;
            temperatureSymbol.textContent = '℉';

            feels.textContent = process.weather.temperature.fahrenheit.feels;
            feelsSymbol.textContent = '℉';

            windDirection.textContent = process.weather.wind.direction;
            windNumber.textContent = process.weather.wind.mph;
            windSymbol.textContent = 'mph';

            humidity.textContent = process.weather.misc.humidity;
          } else {
            currentWeather.textContent = process.weather.current;

            location.textContent = process.location.display();

            temperatureNumber.textContent =
              process.weather.temperature.celsius.number;
            temperatureSymbol.textContent = '℃';

            feels.textContent = process.weather.temperature.celsius.feels;
            feelsSymbol.textContent = '℃';

            windDirection.textContent = process.weather.wind.direction;
            windNumber.textContent = process.weather.wind.kph;
            windSymbol.textContent = 'kp/h';

            humidity.textContent = process.weather.misc.humidity;
          }
        }
      }
    },
    clear: () => {
      const content = document.querySelector('.content');

      while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    }
  }
};

export default dom;
