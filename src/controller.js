import dom from './domtools';
import weather from './weather';

const setLocation = async () => {
  dom.display.update.page.overlay.loader('active');

  try {
    const weatherData = await weather.get.weather(
      dom.get.value.input.location()
    );
    const weatherSymbol = dom.get.value.input.symbol();

    if (typeof weatherData !== 'object')
      return dom.display.update.page.location.error(weatherData);

    return (
      dom.display.update.page.overlay.inactive(),
      dom.display.update.page.weather(weatherData, weatherSymbol),
      weather.update.symbol(weatherSymbol)
    );
  } catch (err) {
    throw new Error(err);
  }
};

const cancelLocation = () => {
  const status = weather.get.data.location();

  if (status !== 'No Data') dom.display.update.page.overlay.inactive();
  else dom.display.update.page.location.error(status);
};

const editLocation = () => {
  const symbol = weather.get.data.symbol();

  dom.display.update.page.overlay.active();
  dom.display.update.page.overlay.symbol(symbol);
};

const cancelLocationEvent = () => {
  dom.get.element.button.cancel().addEventListener('click', (e) => {
    cancelLocation();
    e.preventDefault();
  });
};

const setLocationEvent = () => {
  dom.get.element.button.search().addEventListener('click', (e) => {
    setLocation();
    e.preventDefault();
  });
};

const editLocationEvent = () => {
  dom.get.element.button.edit().addEventListener('click', (e) => {
    editLocation();
    e.preventDefault();
  });
};

const loadLocationEvents = () => {
  cancelLocationEvent();
  setLocationEvent();
  editLocationEvent();
};

const onload = async () => {
  const [weatherData, weatherSymbol] = await weather.onload();

  if (weatherData !== 'No Data') {
    dom.display.load.home();
    dom.display.update.page.weather(weatherData, weatherSymbol);
  } else {
    dom.display.load.default();
  }

  loadLocationEvents();
};

window.addEventListener('load', () => {
  // dom.display.clear(); // Server HMR
  onload();
});

export default onload;
