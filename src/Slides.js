import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

const Page = (props) => {
  const { pageStyle, className } = props;

  return (
    <div className={className} style={pageStyle}>
        {props.children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  pageStyle: PropTypes.any
};


// TODO Possible PERF OPTIMIZATION remove translateXOffset and translateYOffset from
// here and do imperative DOM operations (translate) inside Slider.

// This is posibly blocked until the above todo.
// Implement shouldComponentUpdate so that setTimeout state change only effects
// on the edge. May be have an edge key inside state??
class Track extends Component {

  static propTypes = {
    children: PropTypes.any,
    infinite: PropTypes.bool.isRequired,
    vertical: PropTypes.bool.isRequired,
    swipe: PropTypes.bool.isRequired,
    draggable: PropTypes.bool.isRequired,
    currentSlide: PropTypes.number.isRequired,
    pageClass: PropTypes.string,
    transitionSpeed: PropTypes.number.isRequired,
    transitionTimingFn: PropTypes.string.isRequired,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
    translateXOffset: PropTypes.number,
    translateYOffset: PropTypes.number
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      previousSlide: undefined
    };
  }

  componentWillReceiveProps() {
    // TODO May be move this to Slider
    const { currentSlide } = this.props;
    const { previousSlide } = this.state;
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

  componentWillUpdate() {
    if (this.props.beforeChange !== undefined) {
      this.props.beforeChange(this.state.previousSlide, this.props.currentSlide);
    }
  }


  componentDidUpdate() {
    if (this.props.afterChange !== undefined) {
      this.props.afterChange(this.state.previousSlide, this.props.currentSlide);
    }
  }

  computeTrackStyle() {
    const { vertical,
            currentSlide,
            infinite,
            translateXOffset,
            translateYOffset,
            transitionSpeed,
            transitionTimingFn
          } = this.props;
    const slideCount = Children.count(this.props.children);
    const totalCount = slideCount + (infinite === true ? 2 : 0);
    const { previousSlide } = this.state;
    const preSlideCount = infinite === true ? 1 : 0;

    const trackWidth = vertical ? '100%' : `${100 * totalCount}%`;
    const trackHeight = vertical ? `${100 * totalCount}%` : '100%';
    const translate = (100 * (currentSlide + preSlideCount)) / totalCount;
    const translateX = vertical === false ? translate - translateXOffset : 0;
    const translateY = vertical === true ? translate - translateYOffset : 0;
    const trackTransform = `translate3d(${-translateX}%, ${-translateY}%, 0)`;
    const trackTransition =
      infinite === true && ((previousSlide === -1 && (currentSlide === slideCount - 1)) ||
      ((previousSlide === slideCount) && currentSlide === 0)) ||
      (translateXOffset !== 0 || translateYOffset !== 0) ? '' :
      `all ${transitionSpeed}ms ${transitionTimingFn}`;
    const flexDirection = vertical ? 'column' : 'row';

    const trackStyle = {
      width: trackWidth,
      height: trackHeight,
      display: 'flex',
      flexDirection,
      flexShrink: 0,
      transform: trackTransform,
      transition: trackTransition,
      transitionProperty: 'top, right, bottom, left, transform'
    };

    return trackStyle;
  }

  computePageStyle() {
    const { vertical, infinite } = this.props;

    const slideCount = Children.count(this.props.children);
    const totalCount = slideCount + (infinite === true ? 2 : 0);

    const pageWidth = vertical ? '100%' : `${100 / totalCount}%`;
    const pageHeight = vertical ? `${100 / totalCount}%` : '100%';
    const pageStyle = {
      width: pageWidth,
      height: pageHeight,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return pageStyle;
  }

  render() {
    const { pageClass, infinite } = this.props;
    const slideCount = Children.count(this.props.children);
    const totalCount = slideCount + (infinite === true ? 2 : 0);

    const trackStyle = this.computeTrackStyle();
    const pageStyle = this.computePageStyle();

    const slides = Children.map(this.props.children, (child, i) =>
      <Page pageStyle={pageStyle} className={pageClass} >
        {cloneElement(child, { key: i })}
      </Page>
    );

    const preSlides = !(slideCount === 1 || infinite === false) &&
      <Page pageStyle={pageStyle} className={pageClass} pre >
        {cloneElement(this.props.children[slideCount - 1], { key: -1 })}
      </Page>;

    const postSlides = !(slideCount === 1 || infinite === false) &&
      <Page pageStyle={pageStyle} className={pageClass} post >
        {cloneElement(this.props.children[0], { key: totalCount })}
      </Page>;

    return (
      <div style={trackStyle}>
        {preSlides}
        {slides}
        {postSlides}
      </div>
    );
  }
}

class Slides extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    currentSlide: PropTypes.number,
    infinite: PropTypes.bool,
    vertical: PropTypes.bool,
    swipe: PropTypes.bool,
    draggable: PropTypes.bool,
    pageClass: PropTypes.string,
    transitionSpeed: PropTypes.number,
    transitionTimingFn: PropTypes.string,
    onMouseDown: PropTypes.func,
    onMouseMove: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchMove: PropTypes.func,
    onTouchEnd: PropTypes.func,
    onTouchCancel: PropTypes.func,
    beforeChange: PropTypes.func,
    afterChange: PropTypes.func,
    translateXOffset: PropTypes.number,
    translateYOffset: PropTypes.number
  }

  static defaultProps = {
    width: 0,
    height: 0
  }

  render() {
    const { width, height,
      onMouseDown, onMouseMove, onMouseUp, onMouseLeave,
      onTouchStart, onTouchMove, onTouchEnd, onTouchCancel, ...props } = this.props;

    const containerWidth = width === 0 ? '100%' : width;
    const containerHeight = height === 0 ? '100%' : height;
    const containerStyle = {
      width: containerWidth,
      height: containerHeight,
      display: 'flex',
      overflow: 'hidden'
    };

    return (
      <div
        style={containerStyle}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchCancel}
      >
        <Track {...props} />
      </div>
    );
  }
}

export default Slides;
