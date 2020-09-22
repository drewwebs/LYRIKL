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

    display() {
        return !!this.props.currentUser ? (
            <div className="session-buttons">
                <p>Welcome, {this.props.currentUser.username}</p>
                <button onClick={this.handleClick}>Log Out</button>
            </div>
        )
        :
        (
            <div className="session-buttons">
                <Link to="/signup">Sign Up</Link>
                <br />
                <Link to="/login">Log In</Link>
            </div>
        );
    }

    render() {
        return(
            <header className="nav-bar">
                <nav className="search-bar">Search Bar</nav>
                <h1 className="site-header">L Y R I K L</h1>
                {this.display()}
            </header>
        )
    }
}