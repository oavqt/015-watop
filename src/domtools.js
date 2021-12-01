import display from './dom';

const dom = {
  get: {
    element: {
      content: () => {
        return document.querySelector('.content');
      },
      homePage: {
        change: () => {
          return document.querySelector('.change__text');
        },
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
            return document.querySelector('.temperature__number');
          },
          symbol: {
            primary: () => {
              return document.querySelector('.symbol__text__primary');
            },
            secondary: () => {
              return document.querySelector('.symbol__text__secondary');
            },
            feels: () => {
              return document.querySelector('.feels__symbol');
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
            },
            symbol: () => {
              return document.querySelector('.wind__symbol');
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
        search: () => {
          return document.querySelector('.input--search');
        }
      },
      button: {
        search: () => {
          return document.querySelector('.button--search');
        },
        change: () => {
          return document.querySelector('.button--location--change');
        },
        symbol: () => {
          return document.querySelector('.button--temperature--symbol');
        }
      }
    },
    value: {
      input: {
        search: () => {
          return document.querySelector('.input--search').value;
        }
      }
    }
  },
  display: {
    page: {
      default: () => {
        dom.display.clear();

        display.skeleton.default();
      },
      home: () => {
        dom.display.clear();

        display.skeleton.home();
      }
    },
    update: {
      home: {
        weather: (process) => {
          const currentWeather = dom.get.element.weather.temperature.current();
          const location = dom.get.element.weather.location();
          const imgWeather = dom.get.element.image.description();
          const temperatureNumber =
            dom.get.element.weather.temperature.number();
          const feels = dom.get.element.weather.temperature.feels();
          const windDirection =
            dom.get.element.weather.temperature.wind.direction();
          const windNumber = dom.get.element.weather.temperature.wind.number();
          const humidity = dom.get.element.weather.temperature.humidity();

          currentWeather.textContent = process.weather.current;
          location.textContent = process.location.display();
          imgWeather.src = process.weather.icon;
          temperatureNumber.textContent =
            process.weather.temperature.celsius.number;
          feels.textContent = process.weather.temperature.celsius.feels;
          windDirection.textContent = process.weather.wind.direction;
          windNumber.textContent = process.weather.wind.kph;
          humidity.textContent = process.weather.misc.humidity;
        }
      },
      symbol: (process, option = 'celsius') => {
        const buttonSymbol = dom.get.element.button.symbol();
        const temperatureNumber = dom.get.element.weather.temperature.number();
        const primarySymbol =
          dom.get.element.weather.temperature.symbol.primary();
        const secondarySymbol =
          dom.get.element.weather.temperature.symbol.secondary();
        const feels = dom.get.element.weather.temperature.feels();
        const feelsSymbol = dom.get.element.weather.temperature.symbol.feels();
        const windNumber = dom.get.element.weather.temperature.wind.number();
        const windSymbol = dom.get.element.weather.temperature.wind.symbol();

        if (option === 'fahrenheit') {
          temperatureNumber.textContent =
            process.weather.temperature.fahrenheit.number;
          primarySymbol.textContent = '℉';
          secondarySymbol.textContent = '℃';
          feels.textContent = process.weather.temperature.fahrenheit.feels;
          feelsSymbol.textContent = '℉';
          windNumber.textContent = process.weather.wind.mph;
          windSymbol.textContent = 'mph';

          buttonSymbol.classList.remove('--celsius');
          buttonSymbol.classList.add('--fahrenheit');
        } else {
          temperatureNumber.textContent =
            process.weather.temperature.celsius.number;
          primarySymbol.textContent = '℃';
          secondarySymbol.textContent = '℉';
          feels.textContent = process.weather.temperature.celsius.feels;
          feelsSymbol.textContent = '℃';
          windNumber.textContent = process.weather.wind.kph;
          windSymbol.textContent = 'kp/h';

          buttonSymbol.classList.remove('--fahrenheit');
          buttonSymbol.classList.add('--celsius');
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
