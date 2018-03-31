import React, { Component } from "react";
import OrgAddressForm from "../orgaddressform/OrgAddressForm";

class OrgForm extends Component {
  render() {
    return (
      <div>
        <h1>Organization Information</h1>
        <br />
        <form>
          <span>
            <label>Organization: </label>
          </span>
          <span>
            <input type="text" name="organization" />
          </span>
          <OrgAddressForm />
        </form>
      </div>
    );
  }
}

export default OrgForm;
