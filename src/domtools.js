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
          scales: {
            primary: () => {
              return document.querySelector('.scales__text__primary');
            },
            secondary: () => {
              return document.querySelector('.scales__text__secondary');
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
            speed: () => {
              return document.querySelector('.wind__speed');
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
        scales: () => {
          return document.querySelector('.button--temperature--scales');
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
  update: {
    page: {
      default: () => {
        dom.clear();

        display.skeleton.default();
      },
      home: () => {
        dom.clear();

        display.skeleton.home();
      }
    },
    weather: (process) => {
      const currentWeather = dom.get.element.weather.temperature.current();
      const location = dom.get.element.weather.location();
      const imgWeather = dom.get.element.image.description();
      const numberTemperature = dom.get.element.weather.temperature.number();
      const feels = dom.get.element.weather.temperature.feels();
      const windDirection =
        dom.get.element.weather.temperature.wind.direction();
      const windNumber = dom.get.element.weather.temperature.wind.number();
      const humidity = dom.get.element.weather.temperature.humidity();

      currentWeather.textContent = process.weather.current;
      location.textContent = process.location.display();
      imgWeather.src = process.weather.icon;
      numberTemperature.textContent =
        process.weather.temperature.celsius.number;
      feels.textContent = process.weather.temperature.celsius.feels;
      windDirection.textContent = process.weather.wind.direction;
      windNumber.textContent = process.weather.wind.kph;
      humidity.textContent = process.weather.misc.humidity;
    }
  },
  clear: () => {
    const content = document.querySelector('.content');

    while (content.firstChild) {
      content.removeChild(content.lastChild);
    }
  }
};

export default dom;
