import * as SongUtil from '../util/song_util';

// Actions
export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = "RECEIVE_SONG";
// export const RECEIVE_ALBUM_ART = 'RECEIVE_ALBUM_ART';


export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
});

// Thunk action creators
const receiveAllSongs = songs => ({
    type: RECEIVE_ALL_SONGS,
    songs
});

// Thunks
export const fetchSong = songId => dispatch => (
    SongUtil.fetchSong(songId)
    .then( song => dispatch(receiveSong(song)))
);

export const fetchAllSongs = filters => dispatch => (
    SongUtil.fetchAllSongs(filters)
    .then( songs => dispatch(receiveAllSongs(songs)))
);

export const createSong = song => dispatch => (
    SongUtil.createSong(song)
    .then( song => dispatch(receiveSong(song)))
);

export const updateSong = song => dispatch => (
    SongUtil.updateSong(song)
    .then( song => dispatch(receiveSong(song)))
);