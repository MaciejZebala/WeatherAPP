export default class WeatherByHour {
  constructor() {
    this.viewList = document.querySelector('.hour-list__view');
    this.api = 'https://api.weatherbit.io/v2.0/forecast/hourly?';
    this.apiKey = '823bb590e7d943b7af67eb1635a03f0f';
  }

  async getWeatherByHour(lat, lon) {
    try {
      console.log(lat, lon);
      const data = await fetch(
        `${this.api}lat=${lat}&lon=${lon}&key=${this.apiKey}&hours=24`,
      ).then((res) => res.json());
      console.log(data);
    } catch (err) {
      alert('No Data');
    }
  }
}
