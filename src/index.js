// Test import of a JavaScript function, an SVG, and Sass
import 'regenerator-runtime/runtime';

import './styles/index.scss';

import TodayWeather from './js/TodayWeather';

import Slider from './js/Slider';

import Navigation from './js/Navigation';

import './js/WeatherByHour';

import GetCoordinates from './js/GetCoordinates';

const todayWeather = new TodayWeather();

const getCoordinates = new GetCoordinates();

const slider = new Slider();

const nav = new Navigation();

getCoordinates.getCoordinates();
todayWeather.render();

nav.changeRing();

slider.render();
