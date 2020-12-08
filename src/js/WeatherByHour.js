/* eslint-disable camelcase */
export default class WeatherByHour {
  constructor() {
    this.viewList = document.querySelector('.hour-list__view');
    this.api = 'https://api.openweathermap.org/data/2.5/onecall?';
    this.apiKey = 'cd885cd68629b84dd290fe69cb42faed';

    this.temp = document.querySelector('hour-list__temperature');

    this.list = document.querySelector('.hour-list');

    this.form = document.querySelector('.form');
    this.formCityName = document.querySelector('.form__city');

    this.spinner = document.querySelector('.spinner');
  }

  async getWeatherByHour(lat, lon) {
    this.spinner.classList.add('spinner--visible');
    try {
      const data = await fetch(
        `${this.api}lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily,current&appid=${this.apiKey}`,
      ).then((res) => res.json());
      this.displayResults(data);
    } catch (err) {
      console.log(err);
    }
  }

  async getWeatherByHourCityName({ lat, lon }) {
    this.spinner.classList.add('spinner--visible');
    try {
      const dataByCity = await fetch(
        `${this.api}lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily,current&appid=${this.apiKey}`,
      ).then((res) => res.json());
      this.displayResults(dataByCity);
    } catch (err) {
      console.log(err);
    }
  }

  addStructure() {
    this.view = document.createElement('div');
    this.view.classList.add('hour-list__view');
    this.list.appendChild(this.view);

    for (let i = 0; i < 3; i++) {
      this.item = document.createElement('li');
      this.item.classList.add('hour-list__item');
      this.view.appendChild(this.item);

      this.time = document.createElement('span');
      this.time.classList.add('hour-list__time');
      this.item.appendChild(this.time);

      this.info = document.createElement('div');
      this.info.classList.add('hour-list__weather-info');
      this.item.appendChild(this.info);

      this.img = document.createElement('img');
      this.img.classList.add('hour-list__icon');
      this.info.appendChild(this.img);

      this.temp = document.createElement('span');
      this.temp.classList.add('hour-list__temperature');
      this.item.appendChild(this.temp);
    }
  }

  displayResults({ hourly }) {
    this.spinner.classList.remove('spinner--visible');
    if (document.querySelectorAll('.hour-list__view').length <= 7) {
      for (let i = 0; i < hourly.length / 3; i++) {
        this.addStructure(hourly);
      }
    }

    this.timeAll = document.querySelectorAll('.hour-list__time');
    this.imgAll = document.querySelectorAll('.hour-list__icon');
    this.tempAll = document.querySelectorAll(
      '.hour-list__temperature',
    );
    hourly.forEach(({ dt, temp, weather }, index) => {
      this.dateFromApi = new Date(dt * 1000);
      this.timeAll[
        index
      ].textContent = `${this.dateFromApi.getHours()}:${this.dateFromApi.getMinutes()}${this.dateFromApi.getSeconds()}`;
      this.imgAll[index].setAttribute(
        'src',
        `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
      );
      this.tempAll[index].textContent = `${Math.floor(temp)}°`;
    });
  }
}
