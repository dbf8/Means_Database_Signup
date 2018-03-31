import React, { Component } from "react";
import OrgAddressForm from "../orgaddressform/OrgAddressForm";
import "./OrgForm.css";

class OrgForm extends Component {
  constructor() {
    super();
    this.state = {
      organizaton: {
        name: "",
        street: "",
        suite: "",
        city: "",
        state: "",
        zip: ""
      }
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    this.setState({
      organizaton: {
        ...this.state.organizaton,
        [e.target.name]: e.target.value
      }
    });
  }
  render() {
    console.log(this.state.organizaton.name);
    return (
      <div>
        <h1>Organization Information</h1>
        <br />
        <form>
          <label>Organization: </label>
          <br />
          <input
            onChange={this.handleOnChange}
            type="text"
            name="name"
            placeholder="Organization Name"
          />
          <br />
          <br />
          <OrgAddressForm
            street={this.state.organizaton.street}
            suite={this.state.organizaton.suite}
            city={this.state.organizaton.city}
            state={this.state.organizaton.state}
            zip={this.state.organizaton.zip}
            handleOnChange={this.handleOnChange}
          />
        </form>
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default OrgForm;
