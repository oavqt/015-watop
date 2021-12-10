import element from './element';
import placeholder from './images/myPlaceholder.png';
import edit from './images/myEdit.png';
import github from './images/myGithub.png';

const display = {
  skeleton: () => {
    const page = element.create(
      'div',
      { class: 'content__primary' },
      element.create(
        'div',
        { class: 'primary__home' },
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
            { class: 'body__weather' },
            element.create(
              'div',
              { class: 'weather__current' },
              element.create('h2', { class: 'current__text' }, 'Unknown')
            ),
            element.create(
              'div',
              { class: 'weather__location' },
              element.create('h1', { class: 'location__text' }, 'Unknown'),
              element.create(
                'button',
                { class: 'button--location--edit' },
                element.create('img', { class: 'img--edit', src: edit })
              )
            ),
            element.create(
              'div',
              { class: 'weather__card' },
              element.create(
                'div',
                { class: 'card__temperature' },
                element.create(
                  'div',
                  { class: 'temperature__image' },
                  element.create('img', {
                    class: 'img--temperature',
                    src: placeholder
                  })
                ),
                element.create(
                  'div',
                  { class: 'temperature__information' },
                  element.create(
                    'div',
                    { class: 'information__number' },
                    element.create('span', { class: 'number__text' }, '000')
                  ),
                  element.create(
                    'div',
                    { class: 'information__symbol --celsius' },
                    element.create('span', { class: 'symbol__text' }, '°C')
                  )
                )
              ),
              element.create(
                'div',
                { class: 'card__misc' },
                element.create(
                  'div',
                  { class: 'misc__feels' },
                  element.create(
                    'span',
                    { class: 'feels__text' },
                    'Feels Like:'
                  ),
                  element.create('span', { class: 'feels__number' }, '000'),
                  element.create('span', { class: 'feels__symbol' }, '°C')
                ),
                element.create(
                  'div',
                  { class: 'misc__wind' },
                  element.create('span', { class: 'wind__text' }, 'Wind:'),
                  element.create(
                    'span',
                    { class: 'wind__direction' },
                    'Unknown'
                  ),
                  element.create('span', { class: 'wind__number' }, '000'),
                  element.create('span', { class: 'wind__symbol' }, 'kp/h')
                ),
                element.create(
                  'div',
                  { class: 'misc__humidity' },
                  element.create(
                    'span',
                    { class: 'humidity__text' },
                    'Humidity:'
                  ),
                  element.create('span', { class: 'humidity__number' }, '000'),
                  element.create('span', { class: 'humidity__percentage' }, '%')
                )
              )
            )
          ),
          element.create(
            'div',
            { class: 'body__overlay' },
            element.create(
              'div',
              { class: 'overlay__information' },
              element.create(
                'div',
                { class: 'information__logo' },
                element.create('img', { class: 'img--logo', src: placeholder })
              ),
              element.create(
                'div',
                { class: 'information__title' },
                element.create('h1', { class: 'title__text' }, 'Le Weather')
              ),
              element.create(
                'div',
                { class: 'information__tag' },
                element.create(
                  'a',
                  {
                    class: 'a--github',
                    href: 'https://github.com/oavqt',
                    target: '_blank'
                  },
                  element.create('img', {
                    class: 'img--github',
                    src: github
                  }),
                  element.create('span', { class: 'tag__title' }, 'Oav')
                )
              )
            ),
            element.create(
              'div',
              { class: 'overlay__option' },
              element.create(
                'form',
                { class: 'form--option' },
                element.create(
                  'div',
                  { class: 'option__location' },
                  element.create(
                    'label',
                    { class: 'label--location' },
                    element.create('input', {
                      class: 'input--location',
                      placeholder: 'Location'
                    }),
                    element.create(
                      'span',
                      { class: 'location__error' },
                      'Please insert a valid location'
                    )
                  )
                ),
                element.create(
                  'div',
                  { class: 'option__symbol' },
                  element.create(
                    'label',
                    { class: 'label--symbol' },
                    element.create(
                      'label',
                      {
                        class: 'label--celsius'
                      },
                      element.create('input', {
                        class: 'input--celsius',
                        type: 'radio',
                        name: 'symbol',
                        value: 'celsius',
                        checked: true
                      }),
                      element.create(
                        'span',
                        { class: 'celsius__text' },
                        'Celsius'
                      )
                    ),
                    element.create(
                      'label',
                      {
                        class: 'label--fahrenheit'
                      },
                      element.create('input', {
                        class: 'input--fahrenheit',
                        type: 'radio',
                        name: 'symbol',
                        value: 'fahrenheit'
                      }),
                      element.create(
                        'span',
                        { class: 'fahrenheit__text' },
                        'Fahrenheit'
                      )
                    )
                  )
                ),
                element.create(
                  'div',
                  { class: 'option__button' },
                  element.create(
                    'button',
                    { class: 'button--search' },
                    'Search'
                  ),
                  element.create(
                    'div',
                    { class: 'button__load' },
                    element.create('span', { class: 'load__loader' })
                  ),
                  element.create(
                    'button',
                    { class: 'button--cancel' },
                    'Cancel'
                  )
                )
              )
            )
          )
        )
      )
    );
    document.querySelector('.content').appendChild(page);
  }
};

export default display;
