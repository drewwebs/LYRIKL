import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Gravatar from 'react-gravatar';
import Searchbar from './searchbar';
import SparkMD5 from 'spark-md5';
import { logout, clearErrors, loginDemo } from '../../actions/session_actions';


export default (props) => {
    const currentUser = useSelector(state => state.session.currentUser);
    const dispatch = useDispatch();
    const userMD5 = currentUser ? SparkMD5.hash(currentUser.email) : "";
    const [showDropdown, toggleDropdown] =  useState(false);

    
    return (
        <>
            <header className="nav-bar">
                <Searchbar />
                <Link className="site-header" to="/"><img src={window.logoURL} alt="lyrikl" /></Link>
                {!!currentUser ? (
                    <div className="active-session-buttons">
                            <button className="account-button" onClick={() => toggleDropdown(!showDropdown)} onBlur={() => toggleDropdown(false)}>
                                <p className="active-session-button-label">
                                    {currentUser.photo ? <img className="profile-icon" src={currentUser.photo} /> :
                                        <Gravatar default="mp" md5={userMD5} className="profile-icon" />}
                                </p>
                                <ul className={`account-dropdown ${showDropdown ? "" : "hidden"}`}>
                                    <li className="account-dropdown-subtitle">Account</li>
                                    <Link onMouseDown={e => e.preventDefault()} to={`/users/${currentUser.id}`}>View Profile</Link>
                                    <a href="mailto:drewwebs@gmail.com">Report a Problem</a>
                                    <li onClick={() => dispatch(logout())}>Sign Out</li>
                                </ul>
                            </button>
                        </div>
                )
                :
                (
                    <div className="nav-buttons" onClick={() => dispatch(clearErrors())}>
                            <Link to="/signup">Sign Up</Link>

                            <Link to="/login">Sign In</Link>

                            <a onClick={() => dispatch(loginDemo())}>Demo</a>
                        </div>
                )}
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