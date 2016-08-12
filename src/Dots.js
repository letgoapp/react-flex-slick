import React, { PropTypes } from 'react';
const range = n => [...Array(n)].map((_, i) => i);

const sx = {
  display: 'flex',
  justifyContent: 'center'
};

const Dots = ({ activeClassName, slideCount, currentSlide, onClick, style }) =>
  <div
    style={{
      ...sx,
      ...style
    }}
  >
    {range(slideCount).map((x, i) =>
      <div
        className={i === currentSlide ? activeClassName : ''}
        onClick={() => onClick(i - currentSlide)}
        style={{
          width: 8,
          height: 8,
          borderRadius: 8,
          backgroundColor: 'black',
          opacity: i === currentSlide ? 1 : 0.2,
          margin: 3
        }}
        key={i}
      />
    )}
  </div>;

Dots.propTypes = {
  className: PropTypes.string,
  currentSlide: PropTypes.number,
  activeClassName: PropTypes.string,
  onClick: PropTypes.func,
  slideCount: PropTypes.number,
  style: PropTypes.object
};

export default Dots;
