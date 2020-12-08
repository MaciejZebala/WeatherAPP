export default class TodayWeather {
  constructor() {
    this.url = 'https://api.openweathermap.org/data/2.5/onecall?';
    this.apiKey = 'cd885cd68629b84dd290fe69cb42faed';

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

    this.spinner = document.querySelector('.spinner');
  }

  async getCurrentWeather(lat, lon) {
    this.spinner.classList.add('spinner--visible');
    try {
      const data = await fetch(
        `${this.url}lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily,hourly&appid=${this.apiKey}`,
      ).then((res) => res.json());
      const cityName = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.4fc367327b0060ccaa01e2788c9b28f7&lat=${lat}&lon=${lon}&format=json`,
      ).then((res) => res.json());
      this.displayData(data.current, cityName.address);
    } catch (err) {
      console.log(err);
    }
  }

  async getCurrentWeatherByCityName({ lat, lon }, cityName) {
    this.spinner.classList.add('spinner--visible');
    try {
      const dataByCity = await fetch(
        `${this.url}lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily,hourly&appid=${this.apiKey}`,
      ).then((res) => res.json());
      this.displayData(dataByCity.current, cityName);
    } catch (err) {
      alert('No Data');
    }
  }

  displayData(
    { humidity, dt, sunrise, sunset, uvi, temp, weather },
    cityName,
  ) {
    this.spinner.classList.remove('spinner--visible');
    this.cityName.textContent =
      cityName.city || cityName.village || cityName;
    this.dateFromApi = new Date(dt * 1000);
    this.date.textContent = `${this.dateFromApi.getDate()}.${this.dateFromApi.getMonth()}.${this.dateFromApi.getFullYear()}`;
    this.temperature.textContent = Math.floor(temp);
    this.weatherInfo.textContent = weather[0].description;
    this.uv.textContent = uvi;
    this.sunriseDate = new Date(sunrise * 1000);
    this.sunsetDate = new Date(sunset * 1000);
    this.sunrise.textContent = `${this.sunriseDate.getHours()}:${this.sunriseDate.getMinutes()}`;
    this.sunset.textContent = `${this.sunsetDate.getHours()}:${this.sunsetDate.getMinutes()}`;
    this.humidity.textContent = humidity;
    this.temperatureIcon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
    );
    this.temperatureIcon.setAttribute('alt', weather[0].description);
  }
}
