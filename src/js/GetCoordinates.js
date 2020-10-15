import TodayWeather from './TodayWeather';
import WeatherByHour from './WeatherByHour';

export default class GetCoordinates {
  constructor() {
    this.geo = navigator.geolocation;

    this.todayWeather = new TodayWeather();
    this.weatherByHour = new WeatherByHour();
  }

  getCoordinates() {
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
}
