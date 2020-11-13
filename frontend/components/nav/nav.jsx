import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import Searchbar from './searchbar_container';


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isDropdownVisible: false};
        this.handleClick = this.handleClick.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
        this.clearErrors = this.clearErrors.bind(this);
        this.toggleHide = this.toggleHide.bind(this);
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

    toggleHide() {
        this.setState(
            {isDropdownVisible: false}
        );
    }

    clearErrors(e) {
        e.preventDefault();
        this.props.clearErrors();
    }

    display() {
        const { isDropdownVisible } = this.state;
        const currentUser = this.props.currentUser;

        return !!currentUser ? (
            <div className="active-session-buttons">
                <button className="account-button" onClick={this.toggleHidden} onBlur={this.toggleHide}>
                    <p className="active-session-button-label"><Gravatar d="mp" size={30} email="drewwebs@gmail.com" className="profile-icon" /></p> 
                    <ul className={`account-dropdown ${isDropdownVisible ? "" : "hidden" }`}>
                        <li className="account-dropdown-subtitle">Account</li>
                        <a href="#">View Profile</a>
                        <a href="mailto:drewwebs@gmail.com">Report a Problem</a>
                        <li onClick={this.handleClick}>Sign Out</li>
                    </ul>
                </button>
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
                    <Searchbar />
                    <Link className="site-header" to="/"><img src={window.logoURL} alt="lyrikl" /></Link>
                    {this.display()}
                </header>
                <nav className="sub-nav-bar">
                    <Link to="/featured">Featured</Link>
                    <Link to="/charts">Charts</Link>
                    <a href="https://github.com/drewwebs/LYRIKL">Github</a>
                    <a href="https://genius.com/">Genius</a>
                    <div className="social-links">
                        <a href="https://drewwebster.dev/"><i className="fas fa-globe"></i></a>
                        <a href="https://github.com/drewwebs"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/drew-webster-4261a934/"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://angel.co/u/drewwebs"><i class="fab fa-angellist"></i></a>
                    </div>
                </nav>
            </>
        );
    }
}