/* eslint-disable camelcase */
export default class WeatherByHour {
  constructor() {
    this.viewList = document.querySelector('.hour-list__view');
    this.api = 'https://api.weatherbit.io/v2.0/forecast/hourly?';
    this.apiKey = '823bb590e7d943b7af67eb1635a03f0f';

    this.temp = document.querySelector('hour-list__temperature');

    this.list = document.querySelector('.hour-list');
  }

  async getWeatherByHour(lat, lon) {
    try {
      const data = await fetch(
        `${this.api}lat=${lat}&lon=${lon}&key=${this.apiKey}&hours=24`,
      ).then((res) => res.json());
      const dataObj = data.data;
      this.displayResults(dataObj);
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

  displayResults(dataObj) {
    for (let i = 0; i < dataObj.length / 3; i++) {
      this.addStructure(dataObj);
    }

    this.timeAll = document.querySelectorAll('.hour-list__time');
    this.imgAll = document.querySelectorAll('.hour-list__icon');
    this.tempAll = document.querySelectorAll(
      '.hour-list__temperature',
    );
    dataObj.forEach(({ timestamp_local, temp, weather }, index) => {
      this.timeAll[index].textContent = timestamp_local.slice(
        timestamp_local.indexOf('T') + 1,
        timestamp_local.length - 3,
      );
      this.imgAll[index].setAttribute(
        'src',
        `./images/${weather.icon}.png`,
      );
      this.tempAll[index].textContent = `${temp}°`;
    });
    // for (let i = 0; i < dataObj.length; i++) {
    //   this.timeAll[i].textContent = dataObj[i].timestamp_local.slice(
    //     dataObj[i].timestamp_local.indexOf('T') + 1,
    //     dataObj[i].timestamp_local.length - 3,
    //   );
    //   this.imgAll[i].setAttribute(
    //     'src',
    //     `./images/${dataObj[i].weather.icon}.png`,
    //   );
    //   this.tempAll[i].textContent = `${dataObj[i].temp}°`;
    // }
  }
}
