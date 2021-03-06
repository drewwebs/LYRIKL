import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    if (this.props.closeForm) this.props.closeForm();
  }

  displaySignupPrompt() {
    if (this.props.formHeader === "Sign In") {
      return (
        <p className="signup-prompt">
          Don&#39;t have an account?{" "}
          {this.props.setFormType ? 
            <span
            className="signup-prompt-button"
            onClick={() => {
              this.clearErrors();
              this.props.setFormType("signup")
            }}
          >
              Sign up here
            </span>
            :
            <Link
              to="/signup"
              className="signup-prompt-button"
              onClick={this.clearErrors}
            >
              Sign up here
            </Link>
          }
        </p>
      );
    } else {
      return (
        <p className="signup-prompt">
          Already have an account?{" "}
          {this.props.setFormType ? 
            <span
            className="signup-prompt-button"
            onClick={() => {
              this.clearErrors();
              this.props.setFormType("login")
            }}
            >
              Log in here
            </span>
            :
            <Link
              to="/login"
              className="signup-prompt-button"
              onClick={this.clearErrors}
            >
              Log in here
            </Link>
          }
        </p>
      );
    }
  }

  displayNameFields() {
    if (this.props.formHeader === "Sign In") {
      return (
        <label>
          Lyrikl login or email
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInput("name")}
          />
        </label>
      );
    } else {
      return (
        <>
          <label>
            Lyrikl nickname
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
            />
          </label>

          <label>
            Email
            <br />
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput("email")}
            />
          </label>
        </>
      );
    }
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.loginDemo();
    if (this.props.closeForm) this.props.closeForm();
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <div className="errorContainer">
          <h2 id="whoops">Whoops</h2> 
          <p>There must be some mistake</p>
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>{error}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  clearErrors(e) {
    this.props.clearErrors()
  }

  render() {
    return (
      <div className="session-container">
        <h2 className="session-header">{this.props.formHeader}</h2>
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.renderErrors()}
          {this.displayNameFields()}
          <label>
            Password
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>
          <br />
          <button value="submit" className="session-form-button">
            {this.props.buttonText}
          </button>
          <button className="demo-login" onClick={this.handleDemo}>
            Log in as demo
          </button>
        </form>
        {this.displaySignupPrompt()})
      </div>
    );
  }
}
