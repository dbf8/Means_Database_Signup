import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> develop
import "../signup/Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phonenumber: ""
      },
      isEnabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
    const user = this.state.user;
    const isEnabled =
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.firstName.length > 0 &&
      user.lastName.length > 0 &&
      user.phonenumber.length > 0;

    console.log("this is enabled: " + isEnabled);
    if (isEnabled) {
      this.setState({
        ...this.state,
        isEnabled: true
      });
    }
    console.log(this.state.user);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("this has been submitted");
  }

  render() {
    return (
      <div className="signup">
        <h1>Sign Up Here!</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            <input type="radio" />
            Donor
          </label>
          <label>
            <input type="radio" />
            Recipient
          </label>
          <br />
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.user.firstName}
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.user.lastName}
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.user.email}
              placeholder="Email"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.user.password}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="number"
              name="phonenumber"
              value={this.state.user.phonenumber}
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input
            type="submit"
            value="submit"
            className="submit"
            disabled={!this.state.isEnabled}
          />
        </form>
      </div>
    );
  }
}

export default Signup;
