'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dots = exports.NextArrow = exports.PrevArrow = exports.Slides = exports.Slider = undefined;

var _Arrows = require('./Arrows.js');

Object.defineProperty(exports, 'PrevArrow', {
  enumerable: true,
  get: function get() {
    return _Arrows.PrevArrow;
  }
});
Object.defineProperty(exports, 'NextArrow', {
  enumerable: true,
  get: function get() {
    return _Arrows.NextArrow;
  }
});

var _Slider2 = require('./Slider.js');

var _Slider3 = _interopRequireDefault(_Slider2);

var _Slides2 = require('./Slides.js');

var _Slides3 = _interopRequireDefault(_Slides2);

var _Dots2 = require('./Dots.js');

var _Dots3 = _interopRequireDefault(_Dots2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Slider = _Slider3.default;
exports.Slides = _Slides3.default;
exports.Dots = _Dots3.default;