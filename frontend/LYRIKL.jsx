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


    // $.ajax({
    //   method: "GET",
    //   url: "http://ws.audioscrobbler.com/2.0/",
    //   data: `method=track.getInfo&artist=Childish+Gambino&track=Redbone&api_key=${API_KEY}&format=json`,
    //   headers: { "user-agent": USER_AGENT },
    // //   dataType: "jsonp",
    // }).then(song => console.log(song));


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