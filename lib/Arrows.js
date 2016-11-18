'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = exports.NextArrow = exports.PrevArrow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _static = require('inline-style-prefixer/static');

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function isActive(currentSlide, slideCount, infinite, next, prev) {
  if (next && currentSlide === 0 && infinite === false) {
    return false;
  }
  if (prev && currentSlide + 1 === slideCount && infinite === false) {
    return false;
  }
  return true;
}

var Arrow = function Arrow(_ref) {
  var activeClassName = _ref.activeClassName;
  var className = _ref.className;
  var color = _ref.color;
  var currentSlide = _ref.currentSlide;
  var inactiveClassName = _ref.inactiveClassName;
  var infinite = _ref.infinite;
  var next = _ref.next;
  var prev = _ref.prev;
  var size = _ref.size;
  var slideCount = _ref.slideCount;
  var style = _ref.style;
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ['activeClassName', 'className', 'color', 'currentSlide', 'inactiveClassName', 'infinite', 'next', 'prev', 'size', 'slideCount', 'style', 'children']);

  var adjustedClassName = isActive(currentSlide, slideCount, infinite, next, prev) ? activeClassName : inactiveClassName;
  var borderTopBottom = 'solid ' + size + 'px transparent';
  var borderLeftRight = 'solid ' + size * 1.25 + 'px ' + color;
  var display = prev && currentSlide === 0 || next && currentSlide === slideCount ? // eslint-disable-line
  'none' : 'block';

  var sx = _extends({}, adjustedClassName !== '' ? {} : {
    width: 0,
    height: 0,
    borderBottom: borderTopBottom,
    borderTop: borderTopBottom,
    borderRight: prev && borderLeftRight,
    borderLeft: next && borderLeftRight,
    display: display
  }, style);

  sx = (0, _static2.default)(sx);

  return _react2.default.createElement(
    'div',
    _extends({}, props, {
      className: '' + adjustedClassName + (className ? ' ' + className : ''),
      style: sx
    }),
    children
  );
};

Arrow.propTypes = {
  activeClassName: _react.PropTypes.string,
  className: _react.PropTypes.string,
  color: _react.PropTypes.string,
  currentSlide: _react.PropTypes.number,
  inactiveClassName: _react.PropTypes.string,
  infinite: _react.PropTypes.bool,
  next: _react.PropTypes.bool,
  prev: _react.PropTypes.bool,
  size: _react.PropTypes.number,
  slideCount: _react.PropTypes.number,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node
};

Arrow.defaultProps = {
  activeClassName: '',
  color: '#fff',
  inactiveClassName: '',
  size: 20
};

var PrevArrow = function PrevArrow(props) {
  return _react2.default.createElement(Arrow, _extends({}, props, { prev: true }));
};
var NextArrow = function NextArrow(props) {
  return _react2.default.createElement(Arrow, _extends({}, props, { next: true }));
};

exports.PrevArrow = PrevArrow;
exports.NextArrow = NextArrow;
exports.Arrow = Arrow;