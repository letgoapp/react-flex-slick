'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var range = function range(n) {
  return [].concat(_toConsumableArray(Array(n))).map(function (_, i) {
    return i;
  });
};

var sx = {
  display: 'flex',
  justifyContent: 'center'
};

var Dots = function Dots(_ref) {
  var activeClassName = _ref.activeClassName;
  var slideCount = _ref.slideCount;
  var currentSlide = _ref.currentSlide;
  var onClick = _ref.onClick;
  var style = _ref.style;
  return _react2['default'].createElement(
    'div',
    {
      style: _extends({}, sx, style)
    },
    range(slideCount).map(function (x, i) {
      return _react2['default'].createElement('div', {
        className: i === currentSlide ? activeClassName : '',
        onClick: function () {
          return onClick(i - currentSlide);
        },
        style: {
          width: 8,
          height: 8,
          borderRadius: 8,
          backgroundColor: 'black',
          opacity: i === currentSlide ? 1 : 0.2,
          margin: 3
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
  onClick: _react.PropTypes.func,
  slideCount: _react.PropTypes.number,
  style: _react.PropTypes.object
};

exports['default'] = Dots;
module.exports = exports['default'];