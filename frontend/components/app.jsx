import React from 'react';
import Nav from './nav/nav_container';
import Signup from './session/signup_container';
import Login from './session/login_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Featured from './featured/featured';
import Charts from './songs/charts_container';
import Song from './songs/song_show_container';
import Splash from './splash/splash';

const App = () => {
    return (
        <div>
            <Nav />
            {/* <Route path="/" component={Nav} /> */}
            <Route exact path="/" component={Splash} />
            <Route path="/featured" component={Featured} />
            <Route path="/charts" component={Charts} />
            <Route path="/songs/:songId" component={Song} />
            <AuthRoute path="/signup" component={Signup} />
            <AuthRoute path="/login" component={Login} />
        </div>
    );
}

export default App