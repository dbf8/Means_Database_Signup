import React, { Component } from "react";
import OrgAddressForm from "../orgaddressform/OrgAddressForm";
import "./OrgForm.css";

class OrgForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      street: "",
      suite: "",
      city: "",
      state: "",
      zip: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
            onChange={this.handleOnChange}
            type="text"
            name="name"
            placeholder="Organization Name"
          />
          <br />
          <br />
          {/* insert If(Donor value == true)
          <label>EIN</label>
          <input type="number" name="ein" placeholder="EIN Number" /> */}
          <OrgAddressForm
            street={this.state.street}
            suite={this.state.suite}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
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
