import './main.scss';

const APIKEY = '49eaa4abf6e4f3d9db8f20bfed37ffca';

const destructData = (APIDATA) => {
  const [{ pressure, humidity, ...temperatures }, cityName, countryName, weather, { wind }] = [
    APIDATA.main,
    APIDATA.name,
    APIDATA.sys.country,
    APIDATA.weather[0],
    APIDATA];
  console.log(temperatures, pressure, humidity, cityName, countryName, weather, wind);
  
};

const getWeather = async (CITYNAME, APIKEY) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITYNAME}&appid=${APIKEY}`);
    const APIDATA = await response.json();
    destructData(APIDATA);
    console.log(APIDATA);
    return APIDATA;
  } catch (err) {
    console.log(err);
  }
  return null;
};

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = document.getElementById('search-input');
  getWeather(inputValue.value, APIKEY);
  inputValue.value = '';
});

const switcher = document.getElementById('switch-measurement');

switcher.addEventListener('click', () => {
  console.log(switcher.checked);
});

function switchStatus() {
  return document.getElementById('switch-measurement').checked;
}

function celsiusToFahrenheit(temperatures) {

}

function normalizeTempMetric(temperature) {
  return Math.floor(temperature / 10);
}

function normalizeTemperatures(temperatureObject) {
  const response = {};
  Object.keys(temperatureObject).forEach((key) => {
    response[key] = temperatureObject[key];
  });
  return response;
}

console.log(switchStatus());

// {coord: {…}, weather: Array(1), base: "stations", main: {…}, visibility: 10000, …}
// base: "stations"
// clouds: {all: 10}
// cod: 200
// coord: {lon: -60.7, lat: -31.63}
// dt: 1605125678
// id: 3836277
// main: {temp: 303.51, feels_like: 302.64, temp_min: 302.59, temp_max: 304.26, pressure: 1009, …}
// name: "Santa Fe"
// sys: {type: 3, id: 2008823, country: "AR", sunrise: 1605085064, sunset: 1605134171}
// timezone: -10800
// visibility: 10000
// weather: Array(1)
// 0:
// description: "clear sky"
// icon: "01d"
// id: 800
// main: "Clear"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// wind: {speed: 2.24, deg: 17, gust: 3.58}
// __proto__: Object