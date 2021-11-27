import element from './element';

const display = {
  skeleton: {
    default: () => {
      const defaultPage = element.create(
        'div',
        { class: 'content__weather' },
        element.create(
          'div',
          { class: 'weather__default' },
          element.create(
            'div',
            { class: 'default__title' },
            element.create('h1', { class: 'title__text' }, 'Le Weather')
          ),
          element.create(
            'div',
            { class: 'default__search' },
            element.create(
              'div',
              { class: 'search__title' },
              element.create(
                'h2',
                { class: 'title__text' },
                'Welcome, please enter your location to get the latest weather information for your area'
              )
            ),
            element.create(
              'form',
              { class: 'form--search' },
              element.create(
                'label',
                { class: 'label--search' },
                element.create('input', {
                  class: 'input--search',
                  placeholder: 'Tokyo, London, Tel-Aviv...'
                })
              ),
              element.create('button', { class: 'button--search' }, 'Search')
            )
          )
        )
      );
      document.querySelector('.content').appendChild(defaultPage);
    },
    home: () => {
      const homePage = element.create(
        'div',
        { class: 'content__weather' },
        element.create(
          'div',
          { class: 'weather__home' },
          element.create(
            'div',
            { class: 'home__title' },
            element.create('h1', { class: 'title__text' }, 'Le Weather')
          ),
          element.create(
            'div',
            { class: 'home__body' },
            element.create(
              'div',
              { class: 'body__current' },
              element.create('h2', { class: 'current__text' }, 'Clear')
            ),
            element.create(
              'div',
              { class: 'body__location' },
              element.create('h1', { class: 'location__text' }, 'Temple, Tx'),
              element.create(
                'button',
                { class: 'button--edit' },
                element.create('span', { class: 'edit__text' }, 'Edit')
              )
            ),
            element.create(
              'div',
              { class: 'body__card' },
              element.create(
                'div',
                { class: 'card__description' },
                element.create('img', { class: 'img--description' }),
                element.create(
                  'span',
                  { class: 'description__text' },
                  'Mostly Clear'
                )
              ),
              element.create(
                'div',
                { class: 'card__temperature' },
                element.create('span', { class: 'temperature__number' }, '12'),
                element.create(
                  'button',
                  { class: 'button--temperature' },
                  element.create('span', { class: 'temperature__text' }, '℃'),
                  element.create(
                    'span',
                    { class: 'temperature__text__secondary' },
                    ' / ℉'
                  )
                )
              ),
              element.create(
                'div',
                { class: 'card__misc' },
                element.create(
                  'div',
                  { class: 'misc__feel' },
                  element.create(
                    'span',
                    { class: 'feel__text' },
                    'Feels Like: 0 ℉'
                  )
                ),
                element.create(
                  'div',
                  { class: 'misc__wind' },
                  element.create(
                    'span',
                    { class: 'wind__text' },
                    'Wind Speed: 5mph'
                  )
                ),
                element.create(
                  'div',
                  { class: 'misc__humidity' },
                  element.create(
                    'span',
                    { class: 'humidity__text' },
                    'Humidity : 25%'
                  )
                )
              )
            )
          ),
          element.create(
            'div',
            { class: 'home__search' },
            element.create(
              'form',
              { class: 'form--search' },
              element.create(
                'label',
                { class: 'label--search' },
                element.create('input', {
                  class: 'input--search',
                  placeholder: 'Tokyo, London, Tel-Aviv...'
                })
              ),
              element.create('button', { class: 'button--search' }, 'Search')
            )
          )
        )
      );
      document.querySelector('.content').appendChild(homePage);
    }
  },
  weather: (process) => {
    console.log(process);
  }
};

export default display;
