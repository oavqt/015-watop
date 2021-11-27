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
        temperature: {
          current: () => {
            return document.querySelector('.current__text');
          },
          number: () => {
            return document.querySelector('.temperature__number');
          },
          scales: {
            primary: () => {
              document.querySelector('.scales__text__primary');
            },
            secondary: () => {
              document.querySelector('.scales__text__secondary');
            }
          },
          feel: () => {
            document.querySelector('.feel__text');
          },
          wind: () => {
            document.querySelector('.wind__text');
          },
          humidity: () => {
            document.querySelector('.humidity__text');
          }
        },
        location: () => {
          return document.querySelector('.location__text');
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
  }
};

export default dom;
