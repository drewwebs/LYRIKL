import React from 'react';
import CommentIndex from './comment_index';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import { fetchAnnotation } from '../../actions/annotation_actions';

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
});

const mDTP = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    fetchAnnotation: (annotationId) => dispatch(fetchAnnotation(annotationId))
});

export default connect(mSTP, mDTP)(CommentIndex);