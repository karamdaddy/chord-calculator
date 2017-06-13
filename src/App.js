import React, { Component } from 'react';
import logo from './logo.svg';
import ChordController from './components/chordController';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
          <ChordController />
      </div>
    );
  }
}

export default App;
