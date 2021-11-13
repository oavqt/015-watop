async function fetchWeather(location, unit = 'metric') {
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
