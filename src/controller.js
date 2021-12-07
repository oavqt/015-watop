import dom from './domtools';
import weather from './weather';

const setWeather = async () => {
  try {
    const weatherData = await weather.get(dom.get.value.input.location());
    const weatherSymbol = dom.get.value.input.symbol();

    dom.display.load.skeleton();
    dom.display.update.page.weather(weatherData, weatherSymbol);
  } catch (err) {
    throw new Error(err);
  }
};

const setWeatherEvent = () => {
  dom.get.element.button.search().addEventListener('click', (e) => {
    setWeather();
    e.preventDefault();
  });
};

const onload = () => {
  const start = weather.onload();

  if (start === 'done') return;

  dom.display.load.skeleton();
};

window.addEventListener('load', () => {
  dom.display.clear(); // Temporary HMS
  onload();
  setWeatherEvent();
});
