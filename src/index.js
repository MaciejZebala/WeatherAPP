/* eslint-disable */

// Test import of a JavaScript function, an SVG, and Sass

import 'regenerator-runtime/runtime';

import './styles/index.scss';

import Slider from './js/Slider';

import './js/WeatherByHour';

import GetCoordinates from './js/GetCoordinates';

const getCoordinates = new GetCoordinates();

const slider = new Slider();

getCoordinates.getCoordinates();
getCoordinates.render();


slider.render();
