import dom from './domtools';
import weather from './weather';

function updateSymbol() {
  const symbolData = weather.symbol();
  let option = '';

  if (this.classList.contains('--celsius')) option = 'fahrenheit';
  else option = 'celsius';

  dom.display.update.symbol(symbolData, option);
}

const updateSymbolEvent = () => {
  dom.get.element.button.symbol().addEventListener('click', updateSymbol);
};

const homePageEvents = () => {
  updateSymbolEvent();
};

const setWeather = async () => {
  try {
    const weatherData = await weather.get(dom.get.value.input.search());

    dom.display.page.home();
    dom.display.update.home.weather(weatherData);
    homePageEvents();
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

  dom.display.page.default();
};

window.addEventListener('load', () => {
  dom.display.clear(); // Temporary HMS
  onload();
  setWeatherEvent();
});
