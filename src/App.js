import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Preferences from './preferences/Preferences'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Preferences />
      </div>
    );
  }
}

export default App;
