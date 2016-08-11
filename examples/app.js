import React, { Component } from 'react';
import Carousel from './carousel.js';

class App extends Component {

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
          <Carousel />
      </div>
    );
  }
}

export default App;
