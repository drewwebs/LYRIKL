import {
    RECEIVE_SONG,
    RECEIVE_ALL_SONGS
} from '../actions/song_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      const newSong = { [action.song.id]: action.song };
      return Object.assign({}, state, newSong);
    default:
      return state;
  }
};