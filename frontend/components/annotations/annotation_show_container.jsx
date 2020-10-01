import React from 'react';
import { connect } from 'react-redux';
import { fetchAnnotation } from '../../actions/annotation_actions';
import { fetchSong } from '../../actions/song_actions';
import Annotation from './annotation_show';

const mSTP = (state, ownProps) => {
    return {annotation: state.entities.annotations[ownProps.match.params.annotationId]};
};

const mDTP = (dispatch, ownProps) => ({
    fetchAnnotation: () => dispatch(fetchAnnotation(ownProps.match.params.annotationId)),
    fetchSong: (annotationId) => dispatch(fetchSong(annotationId))
});

export default connect(mSTP, mDTP)(Annotation);