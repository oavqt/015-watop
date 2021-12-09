import display from './dom';

const dom = {
  get: {
    element: {
      content: () => {
        return document.querySelector('.content');
      },
      page: {
        body: () => {
          return document.querySelector('.home__body');
        },
        search: () => {
          return document.querySelector('.home__search');
        },
        overlay: () => {
          return document.querySelector('.body__overlay');
        }
      },

      weather: {
        body: () => {
          return document.querySelector('.body__weather');
        },
        location: {
          name: () => {
            return document.querySelector('.location__text');
          },
          error: () => {
            return document.querySelector('.location__error');
          }
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
        edit: () => {
          return document.querySelector('.button--location--edit');
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
      },
      default: () => {
        display.skeleton();
        dom.display.update.page.overlay.default();
      },
      home: () => {
        display.skeleton();
        dom.display.update.page.overlay.home();
      }
    },
    update: {
      page: {
        overlay: {
          active: () => {
            const locationInput = dom.get.element.input.location();
            const locationName = dom.get.element.weather.location.name();
            const locationError = dom.get.element.weather.location.error();

            const overlay = dom.get.element.page.overlay();
            const body = dom.get.element.weather.body();

            locationInput.value = locationName.textContent;
            locationError.classList.remove('location__error--active');

            overlay.classList.remove('--fade--out');
            body.classList.remove('--fade--in');

            overlay.classList.add('--fade--in');
            body.classList.add('--fade--out');
          },
          inactive: () => {
            const overlay = dom.get.element.page.overlay();
            const body = dom.get.element.weather.body();

            overlay.classList.remove('--fade--in');
            body.classList.remove('--fade--out');

            overlay.classList.add('--fade--out');
            body.classList.add('--fade--in');
          },
          symbol: (symbol) => {
            const celsius = dom.get.element.input.celsius();
            const fahrenheit = dom.get.element.input.fahrenheit();

            if (symbol === 'fahrenheit') fahrenheit.checked = true;
            else celsius.checked = true;
          },
          default: () => {
            const overlay = dom.get.element.page.overlay();
            const body = dom.get.element.weather.body();

            body.classList.add('--visibility--hidden');
            overlay.classList.add('--fade--in');
          },
          home: () => {
            const overlay = dom.get.element.page.overlay();
            const body = dom.get.element.weather.body();

            overlay.classList.add('--visibility--hidden');
            body.classList.add('--fade--in');
          }
        },
        location: {
          error: (error) => {
            const err = dom.get.element.weather.location.error();

            if (error === 400) {
              err.textContent = 'Please enter a valid location name.';

              err.classList.add('location__error--active');
            } else if (error === 'No Data') {
              err.textContent = 'Please enter a location.';

              err.classList.add('location__error--active');
            } else {
              err.textContent =
                'We are sorry, Le weather is currently unavailable.';

              err.classList.add('location__error--active');
            }
          }
        },
        weather: (process, symbol = 'celsius') => {
          const currentWeather = dom.get.element.weather.temperature.current();
          const location = dom.get.element.weather.location.name();
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
