import React from 'react';
import Nav from './nav/nav_container';
import Signup from './session/signup_container';
import Login from './session/login_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Song from './songs/song_show_container';
import Splash from './splash/splash';
import Footer from './nav/footer';

const App = () => {
    return (
        <div className="app-container">
            <Nav className="nav-container" />
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/featured" component={Splash} />
                <Route path="/charts" component={Splash} />
                <Route path="/songs/:songId" component={Song} />
                <AuthRoute path="/signup" component={Signup} />
                <AuthRoute path="/login" component={Login} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App