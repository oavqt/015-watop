import display from './dom';

// Temperature converter
const temperature = {
  convert: {
    celsius: (value) => {
      const int = Number(value);

      if (typeof value === 'object' || Number.isNaN(int))
        throw new Error('Value is not a number');
      else return int * (9 / 5) + 32;
    },
    fahrenheit: (value) => {
      const int = Number(value);

      if (typeof value === 'object' || Number.isNaN(int))
        throw new Error('Value is not a number');
      else return (int - 32) * (5 / 9);
    }
  }
};

// Weather functions
async function fetchWeather(location, unit) {
  const publicKey = 'd50e03bdd93c4f7f9b811406212711';

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${publicKey}&q=${location}`
    );
    const weather = await response.json();

    return weather;
  } catch (err) {
    throw new Error(err);
  }
}

function processWeather(data) {
  return {
    location: {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      display: () => {
        const { name } = data.location;
        const { region } = data.location;
        const { country } = data.location;

        if (name !== region) return `${name}, ${region}`;
        return `${name}, ${country}`;
      }
    },
    weather: {
      current: data.current.condition.text,
      icon: data.current.condition.icon
    },
    temperature: {
      celsius: {
        current: data.current.temp_c,
        feels: data.current.feelslike_c
      },
      fahrenheit: {
        current: data.current.temp_f,
        feels: data.current.feelslike_f
      }
    },
    misc: {
      humidity: data.current.humidity
    },
    wind: {
      kph: data.current.wind_kph,
      mph: data.current.wind_mph,
      direction: data.current.wind_dir
    }
  };
}

function displayWeather(process) {
  display.weather(process);
}

async function getWeather(location, unit = 'metric') {
  const fetch = await fetchWeather(location, unit);
  const process = processWeather(fetch);

  displayWeather(process);
}

export default getWeather;
