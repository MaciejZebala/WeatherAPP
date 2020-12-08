import TodayWeather from './TodayWeather';
import WeatherByHour from './WeatherByHour';

export default class GetCoordinates {
  constructor() {
    this.geo = navigator.geolocation;

    this.todayWeather = new TodayWeather();
    this.weatherByHour = new WeatherByHour();
  }

  async getCoordinatesByCityName(cityName) {
    try {
      const data = await fetch(
        `https://us1.locationiq.com/v1/search.php?key=pk.4fc367327b0060ccaa01e2788c9b28f7&q=${cityName}&format=json`,
      ).then((res) => res.json());
      const dataObj = data[0];
      this.todayWeather.getCurrentWeatherByCityName(
        dataObj,
        cityName,
      );
      this.weatherByHour.getWeatherByHourCityName(dataObj);
    } catch (err) {
      console.log(err);
    }
    this.date = new Date(1604486329 * 1000);
  }

  async getCoordinates() {
    if (this.geo) {
      this.geo.getCurrentPosition((location) => {
        this.lat = location.coords.latitude;
        this.lon = location.coords.longitude;

        this.todayWeather.getCurrentWeather(this.lat, this.lon);
        this.weatherByHour.getWeatherByHour(this.lat, this.lon);
      });
    } else {
      alert('No Data');
    }
  }

  render() {
    document
      .querySelector('.form')
      .addEventListener('submit', (e) => {
        this.formCityName = document.querySelector('.form__city');
        e.preventDefault();
        this.getCoordinatesByCityName(this.formCityName.value);
        this.formCityName.value = '';
      });
  }
}
