import React, { Component } from "react";
import Signup from "../signup/Signup";
import "../app/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;
