import React, { Component } from "react";
import OrgAddressForm from "../orgaddressform/OrgAddressForm";
import "./OrgForm.css";
import { Link } from "react-router-dom"

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
          {/* insert If(Donor value == true)
          <label>EIN</label>
          <input type="number" name="ein" placeholder="EIN Number" /> */}
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
        <Link to="/preferences">
          <button type="submit" value="submit">
            Submit
        </button>
        </Link>
      </div>
    );
  }
}

export default OrgForm;
