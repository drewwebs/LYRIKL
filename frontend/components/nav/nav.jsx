import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../../app/assets/images/logo.svg'; 

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isDropdownVisible: false};
        this.handleClick = this.handleClick.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }

    toggleHidden() {
        this.setState(prevState => ({
            isDropdownVisible: !prevState.isDropdownVisible
        }));
    }

    display() {
        const { isDropdownVisible } = this.state;

        return !!this.props.currentUser ? (
            <div className="active-session-buttons">
                <li> <a href="#">Forums </a></li>
                <li> <a href="#">Feed </a></li>
                <li> <a href="#">Me </a></li>
                <li> <a href="#">Messages </a></li>
                <li> <a href="#">Earn IQ </a></li>
                <li className="account-button" onClick={this.toggleHidden}> 
                    <a href="#">139 IQ </a>
                    <ul className={`account-dropdown ${isDropdownVisible ? "" : "hidden" }`}>
                        <li className="dropdown-subtitle">Account</li>
                        <li><a href="#">View Profile</a></li>
                        <li><a href="#">Report a Problem</a></li>
                        <li onClick={this.handleClick}><button>Sign Out</button></li>
                        <li><a href="#">Firehose</a></li>
                    </ul>
                </li>
            </div>
        )
        :
        (
            <div className="nav-buttons">
                <Link to="/signup">Sign Up</Link>
        
                <Link to="/login">Sign In</Link>
            </div>
        );
    }

    render() {
        return(
            <header className="nav-bar">
                <nav className="search-bar">Search Bar</nav>
                {/* <Logo className="site-header" /> */}
                <img className="site-header" src={window.logoURL} alt="lyrikl"/>
                {this.display()}
            </header>
        )
    }
}