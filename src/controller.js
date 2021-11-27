import dom from './domtools';
import weather from './weather';

// Temporary HMS
const tempHMSDOMClear = () => {
  const content = dom.get.element.content();

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};
//

const setWeather = () => {
  weather.get(dom.get.value.input.search());
};

const setWeatherEvent = () => {
  dom.get.element.button.search().addEventListener('click', (e) => {
    setWeather();
    e.preventDefault();
  });
};

window.addEventListener('load', () => {
  tempHMSDOMClear(); // Temporary HMS
  weather.onload();
  setWeatherEvent();
});
