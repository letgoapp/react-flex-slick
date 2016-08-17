'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _static = require('inline-style-prefixer/static');

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var range = function range(n) {
  return [].concat(_toConsumableArray(Array(n))).map(function (_, i) {
    return i;
  });
};


var sx = (0, _static2.default)({
  display: 'flex',
  justifyContent: 'center'
});

var Dots = function Dots(_ref) {
  var activeClassName = _ref.activeClassName;
  var slideCount = _ref.slideCount;
  var currentSlide = _ref.currentSlide;
  var activeColor = _ref.activeColor;
  var dotSize = _ref.dotSize;
  var style = _ref.style;
  return _react2.default.createElement(
    'div',
    {
      style: _extends({}, sx, style)
    },
    range(slideCount).map(function (x, i) {
      return _react2.default.createElement('div', {
        className: i === currentSlide ? activeClassName : '',
        style: {
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize,
          backgroundColor: activeColor,
          opacity: i === currentSlide ? 1 : 0.2,
          margin: '10px ' + dotSize / 2
        },
        key: i
      });
    })
  );
};

Dots.propTypes = {
  className: _react.PropTypes.string,
  currentSlide: _react.PropTypes.number,
  activeClassName: _react.PropTypes.string,
  slideCount: _react.PropTypes.number,
  activeColor: _react.PropTypes.string,
  dotSize: _react.PropTypes.number,
  style: _react.PropTypes.object
};

Dots.defaultProps = {
  activeColor: '#000',
  dotSize: 8
};

exports.default = Dots;