import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const loggedIn = !!this.props.currentUser;
        if (loggedIn) {
            return (
                <div>
                    <p>Welcome, {this.props.currentUser.username}</p>
                    <button onClick={this.handleClick}>Log Out</button>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <br />
                    <Link to="/login">Log In</Link>
                </div>
            );
        }
    }
}