import React from 'react';
import PropTypes from 'prop-types';
const range = n => [...Array(n)].map((_, i) => i);
import prefixAll from 'inline-style-prefixer/static';

const sx = prefixAll({
  display: 'flex',
  justifyContent: 'center'
});

const Dots = ({
  activeClassName,
  className,
  slideCount,
  currentSlide,
  activeColor,
  dotSize,
  style }) =>
  <div
    style={{
      ...sx,
      ...style
    }}
    className={className}
  >
    {range(slideCount).map((x, i) =>
      <div
        className={i === currentSlide ? activeClassName : ''}
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: dotSize,
          backgroundColor: activeColor,
          opacity: i === currentSlide ? 1 : 0.2,
          margin: `10px ${dotSize / 2}`
        }}
        key={i}
      />
    )}
  </div>;

Dots.propTypes = {
  className: PropTypes.string,
  currentSlide: PropTypes.number,
  activeClassName: PropTypes.string,
  slideCount: PropTypes.number,
  activeColor: PropTypes.string,
  dotSize: PropTypes.number,
  style: PropTypes.object
};

Dots.defaultProps = {
  activeColor: '#000',
  dotSize: 8
};

export default Dots;
