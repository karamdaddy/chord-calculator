import React, { Component } from 'react';
import ChordController from './components/chord-controller';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header noSelection" />
          <ChordController />
      </div>
    );
  }
}

export default App;
