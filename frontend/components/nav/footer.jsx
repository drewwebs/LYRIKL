import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';

export default () => {

    const currentUser = useSelector(state => state.session.currentUser);
    const dispatch = useDispatch();

    return (
        <footer className="footer">
            <section className="footer-left">
                <div className="footer-left-text">LYRIKL is a clone of Genius built by Drew Webster.  It leverages a React/Redux frontend, a Rails backend, and a Postgres database.</div>
                <div className="footer-left-links">
                    <a href="https://drewwebster.dev/"><i className="fas fa-globe"></i></a>
                    <a href="https://github.com/drewwebs"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/drew-webster-4261a934/"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://angel.co/u/drewwebs"><i className="fab fa-angellist"></i></a>
                </div>
            </section>
            <section className="footer-right">
                <a href="https://github.com/drewwebs/LYRIKL">Source Code</a>
                <a href="https://genius.com/">Genius</a>
                <a href="mailto:drewwebs@gmail.com">Contact Drew</a>
                {currentUser ? <a href="#" onClick={() => dispatch(logout())}>Logout</a> : <Link to="/login">Sign In</Link>}
            </section>
        </footer>
    )
}