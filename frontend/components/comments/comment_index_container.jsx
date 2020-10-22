import React from 'react';
import CommentIndex from './comment_index';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

const mSTP = ({ session }) => ({
    currentUser: session.currentUser
});

const mDTP = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)), 
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(CommentIndex);