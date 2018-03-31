import React, { Component } from "react";
import Signup from "../signup/Signup";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../app/App.css";
import OrgForm from "../orgform/OrgForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Signup />
        <Footer />
      </div>
    );
  }
}

export default App;
