import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../../app/assets/images/logo.svg'; 

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isDropdownVisible: false};
        this.handleClick = this.handleClick.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
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

    clearErrors(e) {
        e.preventDefault();
        this.props.clearErrors();
    }

    display() {
        const { isDropdownVisible } = this.state;

        return !!this.props.currentUser ? (
            <div className="active-session-buttons">
                <a href="#"><i className="fas fa-pen-alt"></i><p className="active-session-button-label">Forums </p></a>
                <a href="#"><i className="far fa-newspaper"></i><p className="active-session-button-label">Feed </p></a>
                <a href="#"><i className="far fa-bell"></i><p className="active-session-button-label">Me </p></a>
                <a href="#"><i className="far fa-envelope"></i><p className="active-session-button-label">Messages </p></a>
                <a href="#"><i className="fas fa-brain" /> <p className="active-session-button-label">Earn IQ</p> </a>
                <li className="account-button" onClick={this.toggleHidden}>
                    <i className="far fa-address-card"></i>
                    <p className="active-session-button-label">139 IQ</p> 
                    <ul className={`account-dropdown ${isDropdownVisible ? "" : "hidden" }`}>
                        <li className="dropdown-subtitle">Account</li>
                        <a href="#">View Profile</a>
                        <a href="#">Report a Problem</a>
                        <li onClick={this.handleClick}><button>Sign Out</button></li>
                        <a href="#">Firehose</a>
                    </ul>
                </li>
            </div>
        )
        :
        (
            <div className="nav-buttons" onClick={this.clearErrors}>
                <Link to="/signup">Sign Up</Link>
        
                <Link to="/login">Sign In</Link>
            </div>
        );
    }

    render() {
        return (
            <>
                <header className="nav-bar">
                    <form action="#" className="search-bar">
                        <input placeholder="Search lyrics & more" />
                        <div className="search-icon">
                            <i className="fas fa-search" />
                        </div>
                    </form>
                    <img className="site-header" src={window.logoURL} alt="lyrikl" />
                    {this.display()}
                </header>
                <nav className="sub-nav-bar">
                    <a href="#">Featured</a>
                    <a href="#">Charts</a>
                    <a href="#">Videos</a>
                    <a href="#">Shop</a>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </nav>
            </>
        );
    }
}