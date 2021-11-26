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
  const publicKey = 'c3d8c66c21f63dca9b58e9ae48dcf602';

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${publicKey}&units=${unit}`
    );
    const weather = await response.json();

    return weather;
  } catch (err) {
    throw new Error(err);
  }
}

function processWeather(data) {
  return {
    weather: {
      current: data.weather[0].main,
      description: data.weather[0].description
    },
    temperature: {
      number: {
        current: data.main.temp,
        feels: data.main.feels_like,
        humidity: data.main.humidity,
        max: data.main.temp_max,
        min: data.main.temp_min,
        pressure: data.main.pressure
      }
    },
    wind: {
      speed: data.wind.speed,
      deg: data.wind.deg
    }
  };
}

function displayWeather(process) {
  console.log(process);
}

async function getWeather(location, unit = 'metric') {
  const fetch = await fetchWeather(location, unit);
  const process = processWeather(fetch);

  displayWeather(process);
}

export default getWeather;
