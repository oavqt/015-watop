// Weather functions
async function fetchWeather(location) {
  const publicKey = 'd50e03bdd93c4f7f9b811406212711';

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${publicKey}&q=${location}`,
      {
        mode: 'cors'
      }
    );

    const weather = await response.json();

    if (response.status !== 200) return response.status;

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

        if (country === 'United States of America') return `${name}, ${region}`;
        return `${name}, ${country}`;
      }
    },
    weather: {
      current: data.current.condition.text,
      temperature: {
        celsius: {
          number: Math.round(data.current.temp_c),
          feels: Math.round(data.current.feelslike_c)
        },
        fahrenheit: {
          number: Math.round(data.current.temp_f),
          feels: Math.round(data.current.feelslike_f)
        }
      },
      misc: {
        humidity: data.current.humidity
      },
      wind: {
        kph: Math.round(data.current.wind_kph),
        mph: Math.round(data.current.wind_mph),
        direction: data.current.wind_dir
      }
    }
  };
}

async function getWeather(location) {
  try {
    const fetch = await fetchWeather(location);

    if (typeof fetch !== 'object') return fetch;

    const process = processWeather(fetch);

    return process;
  } catch (err) {
    throw new Error(err);
  }
}

export default getWeather;
