import React from 'react';
import NavContainer from './nav/nav_container';
import Signup from './session/signup_container';
import Login from './session/login_container';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <header>
            <Route path="/" component={NavContainer} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </header>
    );
}

export default App