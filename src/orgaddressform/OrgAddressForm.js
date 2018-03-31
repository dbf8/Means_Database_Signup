import React, { Component } from "react";

class OrgAddressForm extends Component {
  render() {
    return (
      <div>
        <label>Organization Address: </label>
        <br />
        <span>
          <label>Street</label>
        </span>
        <input type="text" name="street" placeholder="Street Address" />
      </div>
    );
  }
}

export default OrgAddressForm;
