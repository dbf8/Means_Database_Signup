import React, { Component } from "react";
import OrgAddressForm from "../orgaddressform/OrgAddressForm";
import "./OrgForm.css";

class OrgForm extends Component {
  constructor() {
    super();
    this.state = {
      organization: {
        name: "",
        street: "",
        suite: "",
        city: "",
        state: "",
        zip: ""
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Organization Information</h1>
        <br />
        <form>
          <label>Organization: </label>
          <br />
          <input
            type="text"
            name="organization"
            placeholder="Organization Name"
          />
          <br />
          <br />
          <OrgAddressForm
            street={this.state.street}
            suite={this.state.suite}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
          />
        </form>
        <br />
        <button>Submit</button>
      </div>
    );
  }
}

export default OrgForm;
