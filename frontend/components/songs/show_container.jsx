import React from 'react';
import { connect } from 'react-redux';
import SongShow from './show';
import { fetchSong } from '../../actions/song_actions';

const mSTP = ({entities}, ownProps) => ({
    song: entities.songs[ownProps.match.params.songId]
});

const mDTP = (dispatch, ownProps) => ({
    fetchSong: () => dispatch(fetchSong(ownProps.match.params.songId))
});

export default connect(mSTP, mDTP)(SongShow);