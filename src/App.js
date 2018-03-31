import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import Footer from "./footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
