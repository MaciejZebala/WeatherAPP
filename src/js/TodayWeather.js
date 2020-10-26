import WeatherByHour from './WeatherByHour';

export default class TodayWeather {
  constructor() {
    this.url = 'https://api.weatherbit.io/v2.0/current?';
    this.apiKey = '823bb590e7d943b7af67eb1635a03f0f';

    this.cityName = document.querySelector('.location__name');
    this.date = document.querySelector('.weather__date');
    this.temperature = document.querySelector('.temperature__info');
    this.weatherInfo = document.querySelector('.weather__info');
    this.temperatureIcon = document.querySelector(
      '.temperature__icon',
    );
    this.uv = document.querySelector('.weather-details__data--uv');
    this.sunrise = document.querySelector(
      '.weather-details__data--sunrise',
    );
    this.sunset = document.querySelector(
      '.weather-details__data--sunset',
    );
    this.humidity = document.querySelector(
      '.weather-details__data--humidity',
    );

    this.formCityName = document.querySelector('.form__city');
    this.formBtn = document.querySelector('.form__btn');
    this.form = document.querySelector('.form');
  }

  async getCurrentWeather(lat, lon) {
    try {
      const data = await fetch(
        `${this.url}lat=${lat}&lon=${lon}&key=${this.apiKey}`,
      ).then((res) => res.json());
      const dataObj = await {
        city: data.data[0].city_name,
        temp: data.data[0].temp,
        dateTime: data.data[0].datetime,
        uv: data.data[0].uv,
        sunrise: data.data[0].sunrise,
        sunset: data.data[0].sunset,
        humidity: data.data[0].rh,
        icon: data.data[0].weather.icon,
        iconDesc: data.data[0].weather.description,
      };
      this.displayData(dataObj);
    } catch (err) {
      alert('No Data');
    }
  }

  async getCurrentWeatherByCityName(cityName) {
    try {
      const dataByCity = await fetch(
        `${this.url}city=${cityName}&key=${this.apiKey}`,
      ).then((res) => res.json());
      const dataByCityObj = await {
        city: dataByCity.data[0].city_name,
        temp: dataByCity.data[0].temp,
        dateTime: dataByCity.data[0].datetime,
        uv: dataByCity.data[0].uv,
        sunrise: dataByCity.data[0].sunrise,
        sunset: dataByCity.data[0].sunset,
        humidity: dataByCity.data[0].rh,
        icon: dataByCity.data[0].weather.icon,
        iconDesc: dataByCity.data[0].weather.description,
      };
      this.displayData(dataByCityObj);
    } catch (err) {
      alert('No Data');
    }
  }

  displayData(dataObj) {
    this.cityName.textContent = dataObj.city;
    this.date.textContent = dataObj.dateTime.slice(
      0,
      dataObj.dateTime.indexOf(':'),
    );
    this.temperature.textContent = dataObj.temp;
    this.weatherInfo.textContent = dataObj.iconDesc;
    this.uv.textContent = Math.floor(dataObj.uv);
    this.sunrise.textContent = dataObj.sunrise;
    this.sunset.textContent = dataObj.sunset;
    this.humidity.textContent = Math.floor(dataObj.humidity);
    this.temperatureIcon.setAttribute(
      'src',
      `./images/${dataObj.icon}.png`,
    );
    this.temperatureIcon.setAttribute('alt', dataObj.iconDesc);
  }

  render() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.getCurrentWeatherByCityName(this.formCityName.value);
      const weatherByHour = new WeatherByHour();
      weatherByHour.getWeatherByHourCityName(this.formCityName.value);
      this.formCityName.value = '';
    });
  }
}
