import dom from './domtools';
import storeLocation from './weather';

const setWeather = () => {
  storeLocation.set(dom.get.value.input.search());
};

const setWeatherEvent = () => {
  dom.get.element.button.search().addEventListener('click', (e) => {
    setWeather();
    e.preventDefault();
  });
};

window.addEventListener('load', () => {
  storeLocation.onload();
  setWeatherEvent();
});
