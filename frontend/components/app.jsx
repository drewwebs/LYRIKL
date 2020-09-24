import React from 'react';
import Nav from './nav/nav_container';
import Signup from './session/signup_container';
import Login from './session/login_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Featured from './featured/featured';
import Charts from './songs/charts_container';

const App = () => {
    return (
        <div>
            <Nav />
            {/* <Route path="/" component={Nav} /> */}
            <Route path="/featured" component={Featured} />
            <Route path="/charts" component={Charts} />
            <AuthRoute path="/signup" component={Signup} />
            <AuthRoute path="/login" component={Login} />
        </div>
    );
}

export default App