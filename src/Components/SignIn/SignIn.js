import React, { Component } from "react";
import FormInput from '../FormInput/FormInput';
import './SignIn.styles.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="containr bg-light">
        <div className="sign-in">
          <form onSubmit={this.handleSubmit} className="form-box">
          <h3>Sign in with your Email and Password</h3>
            <FormInput
              name="email"
              type="email"
              handleChange={this.handleChange}
              value={this.state.email}
              label="Email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
