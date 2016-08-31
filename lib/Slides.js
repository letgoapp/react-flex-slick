'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function Page(props) {
  var pageStyle = props.pageStyle;
  var className = props.className;


  return _react2.default.createElement(
    'div',
    { className: className, style: pageStyle },
    props.children
  );
};

Page.propTypes = {
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  pageStyle: _react.PropTypes.any
};

// TODO Possible PERF OPTIMIZATION remove translateXOffset and translateYOffset from
// here and do imperative DOM operations (translate) inside Slider.

// This is posibly blocked until the above todo.
// Implement shouldComponentUpdate so that setTimeout state change only effects
// on the edge. May be have an edge key inside state??

var Track = function (_Component) {
  _inherits(Track, _Component);

  function Track(props, context) {
    _classCallCheck(this, Track);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Track).call(this, props, context));

    _this.state = {
      previousSlide: undefined
    };
    return _this;
  }

  _createClass(Track, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      // TODO May be move this to Slider
      var currentSlide = this.props.currentSlide;
      var previousSlide = this.state.previousSlide;

      this.setState({
        previousSlide: previousSlide !== currentSlide ? currentSlide : previousSlide
      });
    }

    // shouldComponentUpdate(nextProps) {
    //   const { swipe, draggable } = this.props;
    //
    //   if (swipe === false && draggable === false) {
    //     return this.state.previousSlide !== nextProps.currentSlide;
    //   }
    //
    //   return true;
    // }

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      if (this.props.beforeChange !== undefined) {
        this.props.beforeChange(this.state.previousSlide, this.props.currentSlide);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.afterChange !== undefined) {
        this.props.afterChange(this.state.previousSlide, this.props.currentSlide);
      }
    }
  }, {
    key: 'computeTrackStyle',
    value: function computeTrackStyle() {
      var _props = this.props;
      var vertical = _props.vertical;
      var currentSlide = _props.currentSlide;
      var infinite = _props.infinite;
      var translateXOffset = _props.translateXOffset;
      var translateYOffset = _props.translateYOffset;
      var transitionSpeed = _props.transitionSpeed;
      var transitionTimingFn = _props.transitionTimingFn;

      var slideCount = _react.Children.count(this.props.children);
      var totalCount = slideCount + (infinite === true ? 2 : 0);
      var previousSlide = this.state.previousSlide;

      var preSlideCount = infinite === true ? 1 : 0;

      var trackWidth = vertical ? '100%' : 100 * totalCount + '%';
      var trackHeight = vertical ? 100 * totalCount + '%' : '100%';
      var translate = 100 * (currentSlide + preSlideCount) / totalCount;
      var translateX = vertical === false ? translate - translateXOffset : 0;
      var translateY = vertical === true ? translate - translateYOffset : 0;
      var trackTransform = 'translate3d(' + -translateX + '%, ' + -translateY + '%, 0)';
      var trackTransition = infinite === true && (previousSlide === -1 && currentSlide === slideCount - 1 || previousSlide === slideCount && currentSlide === 0) || translateXOffset !== 0 || translateYOffset !== 0 ? '' : 'all ' + transitionSpeed + 'ms ' + transitionTimingFn;
      var flexDirection = vertical ? 'column' : 'row';

      var trackStyle = {
        width: trackWidth,
        height: trackHeight,
        display: 'flex',
        flexDirection: flexDirection,
        flexShrink: 0,
        transform: trackTransform,
        transition: trackTransition
      };

      return trackStyle;
    }
  }, {
    key: 'computePageStyle',
    value: function computePageStyle() {
      var _props2 = this.props;
      var vertical = _props2.vertical;
      var infinite = _props2.infinite;


      var slideCount = _react.Children.count(this.props.children);
      var totalCount = slideCount + (infinite === true ? 2 : 0);

      var pageWidth = vertical ? '100%' : 100 / totalCount + '%';
      var pageHeight = vertical ? 100 / totalCount + '%' : '100%';
      var pageStyle = {
        width: pageWidth,
        height: pageHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };

      return pageStyle;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var pageClass = _props3.pageClass;
      var infinite = _props3.infinite;

      var slideCount = _react.Children.count(this.props.children);
      var totalCount = slideCount + (infinite === true ? 2 : 0);

      var trackStyle = this.computeTrackStyle();
      var pageStyle = this.computePageStyle();

      var slides = _react.Children.map(this.props.children, function (child, i) {
        return _react2.default.createElement(
          Page,
          { pageStyle: pageStyle, className: pageClass },
          (0, _react.cloneElement)(child, { key: i })
        );
      });

      var preSlides = !(slideCount === 1 || infinite === false) && _react2.default.createElement(
        Page,
        { pageStyle: pageStyle, className: pageClass, pre: true },
        (0, _react.cloneElement)(this.props.children[slideCount - 1], { key: -1 })
      );

      var postSlides = !(slideCount === 1 || infinite === false) && _react2.default.createElement(
        Page,
        { pageStyle: pageStyle, className: pageClass, post: true },
        (0, _react.cloneElement)(this.props.children[0], { key: totalCount })
      );

      return _react2.default.createElement(
        'div',
        { style: trackStyle },
        preSlides,
        slides,
        postSlides
      );
    }
  }]);

  return Track;
}(_react.Component);

Track.propTypes = {
  children: _react.PropTypes.any,
  infinite: _react.PropTypes.bool.isRequired,
  vertical: _react.PropTypes.bool.isRequired,
  swipe: _react.PropTypes.bool.isRequired,
  draggable: _react.PropTypes.bool.isRequired,
  currentSlide: _react.PropTypes.number.isRequired,
  pageClass: _react.PropTypes.string,
  transitionSpeed: _react.PropTypes.number.isRequired,
  transitionTimingFn: _react.PropTypes.string.isRequired,
  beforeChange: _react.PropTypes.func,
  afterChange: _react.PropTypes.func,
  translateXOffset: _react.PropTypes.number,
  translateYOffset: _react.PropTypes.number
};

var Slides = function (_Component2) {
  _inherits(Slides, _Component2);

  function Slides() {
    _classCallCheck(this, Slides);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Slides).apply(this, arguments));
  }

  _createClass(Slides, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var width = _props4.width;
      var height = _props4.height;
      var onMouseDown = _props4.onMouseDown;
      var onMouseMove = _props4.onMouseMove;
      var onMouseUp = _props4.onMouseUp;
      var onMouseLeave = _props4.onMouseLeave;
      var onTouchStart = _props4.onTouchStart;
      var onTouchMove = _props4.onTouchMove;
      var onTouchEnd = _props4.onTouchEnd;
      var onTouchCancel = _props4.onTouchCancel;

      var props = _objectWithoutProperties(_props4, ['width', 'height', 'onMouseDown', 'onMouseMove', 'onMouseUp', 'onMouseLeave', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel']);

      var containerWidth = width === 0 ? '100%' : width;
      var containerHeight = height === 0 ? '100%' : height;
      var containerStyle = {
        width: containerWidth,
        height: containerHeight,
        display: 'flex',
        overflow: 'hidden'
      };

      return _react2.default.createElement(
        'div',
        {
          style: containerStyle,
          onMouseDown: onMouseDown,
          onMouseMove: onMouseMove,
          onMouseUp: onMouseUp,
          onMouseLeave: onMouseLeave,
          onTouchStart: onTouchStart,
          onTouchMove: onTouchMove,
          onTouchEnd: onTouchEnd,
          onTouchCancel: onTouchCancel
        },
        _react2.default.createElement(Track, props)
      );
    }
  }]);

  return Slides;
}(_react.Component);

Slides.propTypes = {
  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  currentSlide: _react.PropTypes.number,
  infinite: _react.PropTypes.bool,
  vertical: _react.PropTypes.bool,
  swipe: _react.PropTypes.bool,
  draggable: _react.PropTypes.bool,
  pageClass: _react.PropTypes.string,
  transitionSpeed: _react.PropTypes.number,
  transitionTimingFn: _react.PropTypes.string,
  onMouseDown: _react.PropTypes.func,
  onMouseMove: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func,
  onTouchStart: _react.PropTypes.func,
  onTouchMove: _react.PropTypes.func,
  onTouchEnd: _react.PropTypes.func,
  onTouchCancel: _react.PropTypes.func,
  beforeChange: _react.PropTypes.func,
  afterChange: _react.PropTypes.func,
  translateXOffset: _react.PropTypes.number,
  translateYOffset: _react.PropTypes.number
};
Slides.defaultProps = {
  width: 0,
  height: 0
};
exports.default = Slides;