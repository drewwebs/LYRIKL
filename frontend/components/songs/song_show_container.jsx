import React from 'react';
import { connect } from 'react-redux';
import SongShow from './song_show';
import { fetchSong } from '../../actions/song_actions';
import { fetchAnnotation } from '../../actions/annotation_actions';

const mSTP = ({entities}, ownProps) => ({
    song: entities.songs[ownProps.match.params.songId]
});

const mDTP = (dispatch, ownProps) => ({
    fetchSong: () => dispatch(fetchSong(ownProps.match.params.songId)),
    fetchAnnotation: (annotationId) => dispatch(fetchAnnotation(annotationId))
});

export default connect(mSTP, mDTP)(SongShow);