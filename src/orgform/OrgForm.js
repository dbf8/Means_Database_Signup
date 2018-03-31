import React, { Component } from "react";
import OrgAddressForm from "../orgaddressform/OrgAddressForm";
import "./OrgForm.css";

class OrgForm extends Component {
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
          <OrgAddressForm />
        </form>
        <br />
        <button>Submit</button>
      </div>
    );
  }
}

export default OrgForm;
