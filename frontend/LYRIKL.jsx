import React from 'react';
import ReactDOM from "react-dom";
import Root from './components/root';
import { login } from './actions/session_actions';
import configureStore from './store/store';
import {fetchArtwork} from './util/song_util';
const API_KEY = "7a6f8a4e181cb30d24744f6e6e158b29";
const USER_AGENT = "drewwebs";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;

    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState);
    window.getState = store.getState();
    ReactDOM.render(<Root store={store} />, root);
});