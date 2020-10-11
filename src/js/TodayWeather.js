export default class TodayWeather {
  constructor() {
    this.url = 'https://api.weatherbit.io/v2.0/current?';
    this.apiKey = '823bb590e7d943b7af67eb1635a03f0f';

    this.geo = navigator.geolocation;

    this.cityName = document.querySelector('.location__name');
  }

  getCoordinates() {
    if (this.geo) {
      this.geo.getCurrentPosition((location) => {
        this.lat = location.coords.latitude;
        this.lon = location.coords.longitude;
        this.getCurrentWeather(this.lat, this.lon);
      });
    } else {
      alert('No Data');
    }
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
      };
    } catch (err) {
      alert('No Data');
    }
  }
}
