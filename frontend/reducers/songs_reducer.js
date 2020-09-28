import {
    RECEIVE_SONG,
    RECEIVE_ALL_SONGS,
    // RECEIVE_ALBUM_ART
} from '../actions/song_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      const newSong = { [action.song.id]: action.song };
      return Object.assign({}, state, newSong);
    // case RECEIVE_ALBUM_ART:
    //   const songWithArtwork = action.song;
    //   const newState = Object.assign({}, state);
    //   newState[action.song.id].image_url = action.art;
    //   return newState;
    default:
      return state;
  }
};