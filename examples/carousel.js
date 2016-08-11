import React from 'react';
import { Slider, Slides, PrevArrow, NextArrow, Dots } from '../src';

const slideStyle = {
  width: '100%',
  backgroundColor: 'red',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};


class Carousel extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: '#555', width: '60%' }}>
        <Slider vertical swipe draggable >
          <button style={{display: 'none'}}>Prev</button>
          <Slides {...this.props}>
            <div style={Object.assign({}, slideStyle, {height: '260px'})}><h1>1</h1></div>
            <div style={Object.assign({}, slideStyle, {height: '520px'})}><h1>2</h1></div>
            <div style={Object.assign({}, slideStyle, {height: '180px'})}><h1>3</h1></div>
            <div style={Object.assign({}, slideStyle, {height: '330px'})}><h1>4</h1></div>
            <div style={Object.assign({}, slideStyle, {height: '642px'})}><h1>5</h1></div>
            <div style={Object.assign({}, slideStyle, {height: '488px'})}><h1>6</h1></div>
          </Slides>
          <button style={{display: 'none'}}>Next</button>
          <Dots style={{
              postion: 'absolute',
              top: 0,
              left: 0,
            }} />
        </Slider>
      </div>
    );
  }
}

export default Carousel;
