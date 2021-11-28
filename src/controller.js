import dom from './domtools';
import weather from './weather'; //

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
  dom.clear(); // Temporary HMS
  weather.onload();
  setWeatherEvent();
});
