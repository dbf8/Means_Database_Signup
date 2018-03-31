import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      }
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
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("this has been submitted");
  }

  render() {
    return (
      <div className="signup">
        <h1>Sign Up Here!</h1>
        <Link to="/donor" className="user">
          <button>Donor</button>
        </Link>
        <Link to="/recipient" className="user">
          <button>Recipient</button>
        </Link>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="firstname"
              name="firstname"
              value={this.state.value}
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="lastname"
              name="lastname"
              value={this.state.value}
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
              value={this.state.value}
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
              value={this.state.value}
              placeholder="Password"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="number"
              name="phone"
              value={this.state.value}
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="submit" className="submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
