import React from 'react';
import ReactDOM from 'react-dom';
import { Slider, Slides, Arrow, Dots } from '../src';

import './index.css';

const App = () =>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Vertical />
  </div>;

const slideStyle = {
  width: '100%',
  backgroundColor: 'red',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const buttonStyle = {
  border: 'none',
  backgroundColor: 'green',
  width: 100,
  height: 30,
  textAlign: 'center',
  color: 'white',
  lineHeight: '30px'
};

const Vertical = () =>
  <div style={{ backgroundColor: '#555', width: '60%' }}>
    <Slider vertical swipe draggable >
      <Arrow style={buttonStyle}>
        prev
      </Arrow>
      <Slides>
        <div style={Object.assign({}, slideStyle, { height: '260px' })}><h1>1</h1></div>
        <div style={Object.assign({}, slideStyle, { height: '520px' })}><h1>2</h1></div>
        <div style={Object.assign({}, slideStyle, { height: '180px' })}><h1>3</h1></div>
        <div style={Object.assign({}, slideStyle, { height: '330px' })}><h1>4</h1></div>
        <div style={Object.assign({}, slideStyle, { height: '642px' })}><h1>5</h1></div>
        <div style={Object.assign({}, slideStyle, { height: '488px' })}><h1>6</h1></div>
      </Slides>
      <Arrow style={buttonStyle}>
        next
      </Arrow>
      <Dots />
    </Slider>
  </div>;

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
