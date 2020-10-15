// Test import of a JavaScript function, an SVG, and Sass
import 'regenerator-runtime/runtime';

import './styles/index.scss';

import TodayWeather from './js/TodayWeather';

import Slider from './js/Slider';

import Navigation from './js/Navigation';

const todayWeather = new TodayWeather();

const slider = new Slider();

const nav = new Navigation();

todayWeather.getCoordinates();
todayWeather.render();

nav.changeRing();

slider.render();
