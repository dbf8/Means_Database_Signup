import React, { Component } from "react";
import Signup from "../signup/Signup";
import "../app/App.css";
import OrgForm from "../orgform/OrgForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
        <OrgForm />
      </div>
    );
  }
}

export default App;
