import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import Searchbar from './searchbar_container';
import SparkMD5 from 'spark-md5';
import { loginDemo } from '../../util/session_api_util';


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
        const userMD5 = currentUser ? SparkMD5.hash(currentUser.email) : "";

        return !!currentUser ? (
            <div className="active-session-buttons">
                <button className="account-button" onClick={this.toggleHidden} onBlur={this.toggleHide}>
                    <p className="active-session-button-label"><Gravatar default="mp" size={30} md5={userMD5} className="profile-icon" /></p> 
                    <ul className={`account-dropdown ${isDropdownVisible ? "" : "hidden" }`}>
                        <li className="account-dropdown-subtitle">Account</li>
                        <Link onMouseDown={e => e.preventDefault()} to={`/users/${currentUser.id}`}>View Profile</Link>
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

                <a onClick={() => this.props.loginDemo()}>Demo</a>
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
                        <a href="https://www.linkedin.com/in/drew-webster-4261a934/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://angel.co/u/drewwebs"><i className="fab fa-angellist"></i></a>
                    </div>
                </nav>
            </>
        );
    }
}