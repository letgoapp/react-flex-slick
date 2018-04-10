'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = exports.NextArrow = exports.PrevArrow = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  var activeClassName = _ref.activeClassName,
      className = _ref.className,
      color = _ref.color,
      currentSlide = _ref.currentSlide,
      inactiveClassName = _ref.inactiveClassName,
      infinite = _ref.infinite,
      next = _ref.next,
      prev = _ref.prev,
      size = _ref.size,
      slideCount = _ref.slideCount,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['activeClassName', 'className', 'color', 'currentSlide', 'inactiveClassName', 'infinite', 'next', 'prev', 'size', 'slideCount', 'style', 'children']);

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
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  currentSlide: _propTypes2.default.number,
  inactiveClassName: _propTypes2.default.string,
  infinite: _propTypes2.default.bool,
  next: _propTypes2.default.bool,
  prev: _propTypes2.default.bool,
  size: _propTypes2.default.number,
  slideCount: _propTypes2.default.number,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node
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