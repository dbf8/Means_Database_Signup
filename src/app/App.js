import React, { Component } from "react";
import Signup from "../signup/Signup";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "../app/App.css";
import OrgForm from "../orgform/OrgForm";
import { Switch, Route } from "react-router-dom";
import Preferences from "../preferences/Preferences"

class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App">
          <Header />
          <Route
            path="/signup"
            render={() => {
              return <Signup />;
            }}
          />
          <Route
            path="/organization-info"
            render={() => {
              return <OrgForm />;
            }}
          />
          <Route
            path="/preferences"
            render={() => {
              return <Preferences />;
            }}
          />

          <Footer />
        </div>
      </Switch>
    );
  }
}

export default App;
