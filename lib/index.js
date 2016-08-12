'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _SliderJs = require('./Slider.js');

var _SliderJs2 = _interopRequireDefault(_SliderJs);

exports.Slider = _SliderJs2['default'];

var _SlidesJs = require('./Slides.js');

var _SlidesJs2 = _interopRequireDefault(_SlidesJs);

exports.Slides = _SlidesJs2['default'];

var _ArrowsJs = require('./Arrows.js');

Object.defineProperty(exports, 'PrevArrow', {
  enumerable: true,
  get: function get() {
    return _ArrowsJs.PrevArrow;
  }
});
Object.defineProperty(exports, 'NextArrow', {
  enumerable: true,
  get: function get() {
    return _ArrowsJs.NextArrow;
  }
});

var _DotsJs = require('./Dots.js');

var _DotsJs2 = _interopRequireDefault(_DotsJs);

exports.Dots = _DotsJs2['default'];