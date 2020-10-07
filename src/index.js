// Test import of a JavaScript function, an SVG, and Sass

import './styles/index.scss'

import Slider from './js/Slider';

import Navigation from './js/Navigation'

const slider = new Slider();

const nav = new Navigation();

nav.changeRing();

slider.render();


