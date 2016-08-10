import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Slider, Slides, PrevArrow, NextArrow, Dots } from '../src';

import './index.css';

class App extends Component {

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
          <CustomArrows />
      </div>
    );
  }
}

const slideStyle = {
  width: '100%',
  backgroundColor: 'red',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};


class CustomArrows extends Component {

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

class ControlPlay extends Component {

  constructor(props) {
    super(props);
    this.state = { playing: false };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ playing: true });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
        <Slider infinite swipe draggable autoPlay={this.state.playing} >
          <button>Prev</button>
          <Slides {...this.props}>
            <div style={slideStyle}><h1>1</h1></div>
            <div style={slideStyle}><h1>2</h1></div>
            <div style={slideStyle}><h1>3</h1></div>
            <div style={slideStyle}><h1>4</h1></div>
            <div style={slideStyle}><h1>5</h1></div>
            <div style={slideStyle}><h1>6</h1></div>
          </Slides>
          <button>Next</button>
          <Dots />
        </Slider>
    );
  }
}

class SetSlide extends Component {

  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ currentSlide: 5 });
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <Slider {...this.state} infinite swipe draggable >
        <button>Prev</button>
        <Slides {...this.props}>
          <div style={slideStyle}><h1>1</h1></div>
          <div style={slideStyle}><h1>2</h1></div>
          <div style={slideStyle}><h1>3</h1></div>
          <div style={slideStyle}><h1>4</h1></div>
          <div style={slideStyle}><h1>5</h1></div>
          <div style={slideStyle}><h1>6</h1></div>
        </Slides>
        <button>Next</button>
      </Slider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
