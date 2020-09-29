import React from 'react';
import { connect } from 'react-redux';
import { fetchAnnotation } from '../../actions/annotation_actions';
import { fetchSong } from '../../actions/song_actions';
import Annotation from './annotation_show';

const mSTP = (state, ownProps) => {
    // debugger
    return {annotation: state.entities.annotations[ownProps.match.params.annotationId]};
            // song: state.entities.songs[state.entities.annotations[ownProps.match.params.annotationId].song_id]};
};

const mDTP = (dispatch, ownProps) => ({
    fetchAnnotation: () => dispatch(fetchAnnotation(ownProps.match.params.annotationId)),
    fetchSong: (annotationId) => dispatch(fetchSong(annotationId))
});

export default connect(mSTP, mDTP)(Annotation);