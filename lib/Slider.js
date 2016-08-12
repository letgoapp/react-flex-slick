'use strict';

var _reactTransformHmr2 = require('react-transform-hmr');

var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);

var _react = require('react');

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _redboxReact = require('redbox-react');

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react2 = _interopRequireDefault(_react);

var _utilJs = require('./util.js');

var _components = {
  _$Slider: {
    displayName: 'Slider'
  }
};

var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
  filename: 'src/Slider.js',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
  filename: 'src/Slider.js',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Slider = (function (_Component) {
  _inherits(Slider, _Component);

  _createClass(Slider, null, [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.any,
      initialSlide: _react.PropTypes.number,
      currentSlide: _react.PropTypes.number,
      infinite: _react.PropTypes.bool,
      vertical: _react.PropTypes.bool,
      transitionSpeed: _react.PropTypes.number,
      transitionTimingFn: _react.PropTypes.string,
      beforeChange: _react.PropTypes.func,
      afterChange: _react.PropTypes.func,
      swipe: _react.PropTypes.bool,
      draggable: _react.PropTypes.bool,
      edgeFriction: _react.PropTypes.number,
      touchThreshold: _react.PropTypes.number,
      edgeEvent: _react.PropTypes.func,
      swipeEvent: _react.PropTypes.func,
      touchMove: _react.PropTypes.bool,
      autoPlay: _react.PropTypes.bool,
      autoPlaySpeed: _react.PropTypes.number
    },

    // May be move most of the props from here to Slider. and copy them to state while
    // componentWillMount

    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      initialSlide: 0,
      vertical: false,
      transitionSpeed: 500,
      transitionTimingFn: 'ease',
      swipe: false,
      draggable: false,
      infinite: false,
      edgeFriction: 0.35,
      touchThreshold: 0.2,
      touchMove: true,
      autoPlay: false,
      autoPlaySpeed: 3000
    },

    /**
      * @constructor
      */
    enumerable: true
  }]);

  function Slider(props, context) {
    _classCallCheck(this, _Slider);

    _get(Object.getPrototypeOf(_Slider.prototype), 'constructor', this).call(this, props, context);
    var currentSlide = props.currentSlide;
    var initialSlide = props.initialSlide;

    this.state = {
      currentSlide: currentSlide !== undefined ? currentSlide : initialSlide,
      animating: false,
      translateXOffset: 0,
      translateYOffset: 0
    };
  }

  _createClass(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      if (this.props.autoPlay && this.props.infinite) {
        this.autoPlayTransistionCallback = setInterval(function () {
          _this.handleSlideShift(1);
        }, this.props.autoPlaySpeed);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var currentSlide = nextProps.currentSlide;
      var autoPlay = nextProps.autoPlay;

      if (currentSlide !== undefined && currentSlide !== this.state.currentSlide) {
        this.setState({ currentSlide: currentSlide });
      }

      if (this.props.autoPlay && !autoPlay && this.autoPlayTransistionCallback) {
        clearInterval(this.autoPlayTransistionCallback);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var autoPlay = prevProps.autoPlay;

      if (this.props.autoPlay && !autoPlay && this.props.infinite) {
        this.autoPlayTransistionCallback = setInterval(function () {
          _this2.handleSlideShift(1);
        }, this.props.autoPlaySpeed);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.transitionEndCallback) {
        clearTimeout(this.transitionEndCallback);
      }
      if (this.autoPlayTransistionCallback) {
        clearInterval(this.autoPlayTransistionCallback);
      }
    }

    /**
     * Change the position of a slider by `delta`
     * @method
     * @private
     * @param {number} delta - Move forward the slide by delta (delta can be negative)
     */
  }, {
    key: 'handleSlideShift',
    value: function handleSlideShift(delta) {
      var _this3 = this;

      var _state = this.state;
      var currentSlide = _state.currentSlide;
      var animating = _state.animating;
      var _props = this.props;
      var transitionSpeed = _props.transitionSpeed;
      var infinite = _props.infinite;

      if (animating === true || delta === 0) {
        return;
      }

      var slides = this.props.children[1];
      var slideCount = _react.Children.count(slides.props.children);

      var newNextSlide = undefined;
      if (infinite === true) {
        if (currentSlide + 1 === slideCount && delta > 0) {
          newNextSlide = 0;
        } else if (currentSlide === 0 && delta < 0) {
          newNextSlide = slideCount - 1;
        }
      }

      // EndEventListeners are not reliable. So,we use setTimeout
      // See react 0.14.0-rc1 blog post.
      // FIXME PERFORMANCE BOTTLENECK
      this.transitionEndCallback = function () {
        _this3.setState({
          currentSlide: newNextSlide === undefined ? currentSlide + delta : newNextSlide,
          animating: false
        });
        delete _this3.transitionEndCallback;
      };

      var nonInfiniteCondition = infinite === false && (delta < 0 && currentSlide > 0 || delta > 0 && currentSlide + 1 < slideCount);

      if (nonInfiniteCondition || infinite === true) {
        this.setState({
          currentSlide: currentSlide + delta,
          animating: true,
          translateXOffset: 0,
          translateYOffset: 0
        }, function () {
          setTimeout(_this3.transitionEndCallback, transitionSpeed);
        });
      }
    }
  }, {
    key: 'handleSwipeStart',
    value: function handleSwipeStart(e) {
      var _props2 = this.props;
      var swipe = _props2.swipe;
      var draggable = _props2.draggable;
      var edgeEvent = _props2.edgeEvent;
      var swipeEvent = _props2.swipeEvent;
      var touchThreshold = _props2.touchThreshold;
      var vertical = _props2.vertical;

      if (swipe === false && draggable === false && e.type.indexOf('mouse') === -1) {
        return;
      }

      var posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
      var posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;

      // FIXME Breaks compatibility with react-0.13 may be use id to this.
      // Doesn't require a style recalc as the actions happens after component is
      // mounted or updated
      var slider = this.refs.slider;
      var sliderRect = slider.getBoundingClientRect();
      var trackRect = slider.children[1].children[0].getBoundingClientRect();
      var maxSwipeLength = vertical === false ? trackRect.width : trackRect.height;
      var minSwipe = (vertical === false ? sliderRect.width : sliderRect.height) * touchThreshold;

      this.setState({
        swiping: true,
        touchObject: {
          startX: posX,
          startY: posY,
          currX: posX,
          currY: posY,
          swipeLength: 0,
          edgeEventFired: edgeEvent === undefined,
          swipeEventFired: swipeEvent === undefined,
          minSwipe: minSwipe,
          maxSwipeLength: maxSwipeLength
        }
      });
    }
  }, {
    key: 'handleSwipeMove',
    value: function handleSwipeMove(e) {
      if (this.state.animating === true || this.state.swiping === false) {
        return;
      }

      var _props3 = this.props;
      var infinite = _props3.infinite;
      var edgeEvent = _props3.edgeEvent;
      var children = _props3.children;
      var swipeEvent = _props3.swipeEvent;
      var vertical = _props3.vertical;
      var touchMove = _props3.touchMove;
      var _state2 = this.state;
      var touchObject = _state2.touchObject;
      var currentSlide = _state2.currentSlide;

      touchObject.currY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;
      touchObject.currX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;

      touchObject.swipeLength = (0, _utilJs.swipeDistance)(touchObject);

      var direction = (0, _utilJs.swipeDirection)(touchObject);
      var horizontalPrev = vertical === false && direction === _utilJs.SWIPE_RIGHT;
      var horizontalNext = vertical === false && direction === _utilJs.SWIPE_LEFT;

      var verticalPrev = vertical === true && direction === _utilJs.SWIPE_DOWN;
      var verticalNext = vertical === true && direction === _utilJs.SWIPE_UP;

      var slideCount = _react.Children.count(children[1].props.children);

      var edgeSwipePrev = currentSlide === 0 && infinite === false && (horizontalPrev || verticalPrev);
      var edgeSwipeNext = currentSlide + 1 === slideCount && infinite === false && (horizontalNext || verticalNext);

      var edgeFriction = edgeSwipePrev || edgeSwipeNext ? this.props.edgeFriction : 1;

      // TODO refactor this into a function.
      if (touchObject.edgeEventFired === false) {
        if (edgeSwipePrev || edgeSwipeNext) {
          edgeEvent(direction);
          touchObject.edgeEventFired = true;
        }
      }

      if (touchObject.swipeEventFired === false) {
        swipeEvent(direction);
        touchObject.swipeEventFired = true;
      }

      var translateXOffset = vertical === false && touchMove === true ? (touchObject.currX - touchObject.startX) * 100 * edgeFriction / touchObject.maxSwipeLength : 0;
      var translateYOffset = vertical === true && touchMove === true ? (touchObject.currY - touchObject.startY) * 100 * edgeFriction / touchObject.maxSwipeLength : 0;

      // FIXME PERFORMANCE BOTTLENECK
      this.setState({
        touchObject: _extends({}, touchObject),
        translateXOffset: translateXOffset,
        translateYOffset: translateYOffset
      });

      // Don't cancel scrolling in the cross-axis to the slider
      var verticalScroll = vertical === false && (direction === _utilJs.SWIPE_UP || direction === _utilJs.SWIPE_DOWN);
      var horizontalScroll = vertical === true && (direction === _utilJs.SWIPE_LEFT || direction === _utilJs.SWIPE_RIGHT);

      if (verticalScroll || horizontalScroll) {
        return;
      }

      // Don't preventDefault for small movement helps in clicking links etc.,
      // Refer to react-slick#26
      if (touchObject.swipeLength > 4) {
        e.preventDefault();
      }
    }
  }, {
    key: 'handleSwipeEnd',
    value: function handleSwipeEnd(e) {
      if (!this.state.swiping) {
        return;
      }
      var touchObject = this.state.touchObject;
      var vertical = this.props.vertical;

      var direction = (0, _utilJs.swipeDirection)(touchObject);

      this.setState({
        swiping: false,
        touchObject: {},
        translateXOffset: 0,
        translateYOffset: 0
      });

      var horizontalPrev = vertical === false && direction === _utilJs.SWIPE_RIGHT;
      var horizontalNext = vertical === false && direction === _utilJs.SWIPE_LEFT;

      var verticalPrev = vertical === true && direction === _utilJs.SWIPE_DOWN;
      var verticalNext = vertical === true && direction === _utilJs.SWIPE_UP;

      if (touchObject.swipeLength > touchObject.minSwipe) {
        e.preventDefault();
        if (horizontalPrev || verticalPrev) {
          this.handleSlideShift(-1);
        } else if (horizontalNext || verticalNext) {
          this.handleSlideShift(1);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props4 = this.props;
      var transitionSpeed = _props4.transitionSpeed;
      var transitionTimingFn = _props4.transitionTimingFn;
      var beforeChange = _props4.beforeChange;
      var afterChange = _props4.afterChange;
      var children = _props4.children;
      var vertical = _props4.vertical;
      var infinite = _props4.infinite;
      var swipe = _props4.swipe;
      var draggable = _props4.draggable;

      var props = _objectWithoutProperties(_props4, ['transitionSpeed', 'transitionTimingFn', 'beforeChange', 'afterChange', 'children', 'vertical', 'infinite', 'swipe', 'draggable']);

      var _children = _slicedToArray(children, 4);

      var leftArrow = _children[0];
      var slides = _children[1];
      var rightArrow = _children[2];
      var customComponent = _children[3];
      var _state3 = this.state;
      var currentSlide = _state3.currentSlide;
      var translateXOffset = _state3.translateXOffset;
      var translateYOffset = _state3.translateYOffset;

      var slideCount = _react.Children.count(slides.props.children);

      // onClick is passed as a props so that dom elements can be custom arrows

      var newLeftArrow = leftArrow !== undefined ? (0, _react.cloneElement)(leftArrow, {
        key: 0,
        handleClick: function handleClick() {
          _this4.handleSlideShift(-1);
        },
        onClick: function onClick() {
          _this4.handleSlideShift(-1);
        },
        currentSlide: currentSlide,
        infinite: infinite
      }) : null;

      // Need to pass slideCount to check if end of slide has been reached.
      var newRightArrow = rightArrow !== undefined ? (0, _react.cloneElement)(rightArrow, {
        key: 2,
        handleClick: function handleClick() {
          _this4.handleSlideShift(1);
        },
        onClick: function onClick() {
          _this4.handleSlideShift(1);
        },
        currentSlide: currentSlide,
        infinite: infinite,
        slideCount: slideCount
      }) : null;

      // TODO Show a warning if transitionSpeed prop is declared on Slides.
      var newSlides = (0, _react.cloneElement)(slides, {
        key: 1,
        currentSlide: currentSlide,
        infinite: infinite,
        swipe: swipe,
        draggable: draggable,
        transitionSpeed: transitionSpeed,
        transitionTimingFn: transitionTimingFn,
        vertical: vertical,
        onMouseDown: this.handleSwipeStart.bind(this),
        onMouseMove: this.state.swiping ? this.handleSwipeMove.bind(this) : null,
        onMouseUp: this.handleSwipeEnd.bind(this),
        onMouseLeave: this.state.swiping ? this.handleSwipeEnd.bind(this) : null,
        onTouchStart: this.handleSwipeStart.bind(this),
        onTouchMove: this.state.swiping ? this.handleSwipeMove.bind(this) : null,
        onTouchEnd: this.handleSwipeEnd.bind(this),
        onTouchCancel: this.state.swiping ? this.handleSwipeEnd.bind(this) : null,
        beforeChange: beforeChange,
        afterChange: afterChange,
        translateXOffset: translateXOffset,
        translateYOffset: translateYOffset
      });

      var newCustomComponent = customComponent !== undefined ? (0, _react.cloneElement)(customComponent, {
        currentSlide: currentSlide,
        slideCount: slideCount,
        handleSlideShift: this.handleSlideShift.bind(this)
      }) : null;

      return _react2['default'].createElement(
        'div',
        props,
        _react2['default'].createElement(
          'div',
          { ref: 'slider', style: { display: 'flex', alignItems: 'center' } },
          newLeftArrow,
          newSlides,
          newRightArrow
        ),
        newCustomComponent
      );
    }
  }]);

  var _Slider = Slider;
  Slider = _wrapComponent('_$Slider')(Slider) || Slider;
  return Slider;
})(_react.Component);

exports['default'] = Slider;
module.exports = exports['default'];