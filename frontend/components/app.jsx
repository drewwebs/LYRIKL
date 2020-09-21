import React from 'react';
import NavContainer from './nav/nav_container';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <header>
            <Route path="/" component={NavContainer} />
            
        </header>
    );
}

export default App