import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push("/"));
  }

  displaySignupPrompt() {
    if (this.props.formHeader === "Sign In") {
      return (<p className="signup-prompt">Don&#39;t have an account? <Link className="signup-prompt-button" to="/signup">Sign up here</Link></p>)
    }
  };

  displayNameFields() {
    if (this.props.formHeader === 'Sign In') {
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
      ) 
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
      ) 
    }
  }

  render() {
    return (
      <div className="session-container">
        <h2 className="session-header">{this.props.formHeader}</h2>
        <form onSubmit={this.handleSubmit} className="session-form">
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
          <button className="session-form-button">{this.props.buttonText}</button>
        </form>
        {this.displaySignupPrompt()}
    
        <form className="demo-login" onSubmit={this.props.loginDemo}>
          <button>
            Log in as demo
          </button>
        </form>
    )
      </div>
    );
  }
}
