import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
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

  display() {
    if (this.props.formType === "Log In") {
      return (<p>Don&#39;t have an account? <Link to="/signup">Sign up here</Link></p>)
    }
  };

  render() {
    return (
      <div className="session-container">
        <h2 className="session-header">{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit} className="session-form">
          <label>
            Email
            <br />
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>
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
          <button>{this.props.formType}!</button>
        </form>
        {this.display()}
      </div>
    );
  }
}
