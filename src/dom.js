import element from './element';

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
        'form',
        { class: 'form--search' },
        element.create(
          'label',
          { class: 'label--search' },
          element.create(
            'div',
            { class: 'search__title' },
            element.create(
              'span',
              { class: 'title__text' },
              'Welcome, please enter your location to get the latest weather information for your area'
            )
          ),
          element.create('input', {
            class: 'input--search',
            placeholder: 'Tokyo, London, Tel-Aviv...'
          })
        )
      )
    )
  )
);

document.querySelector('.content').appendChild(defaultPage);
