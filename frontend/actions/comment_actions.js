import * as APIUtil from '../util/comment_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: DELETE_COMMENT,
    commentId
});

export const fetchComment = (commentId) => dispatch => (
    APIUtil.fetchComment(commentId)
        .then((comment) => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
    APIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
);

export const updateComment = (comment) => dispatch => (
    APIUtil.updateComment(comment)
        .then((comment) => dispatch(receiveComment(comment)))
);

export const createComment = (comment) => dispatch => {
    return APIUtil.createComment(comment)
        .then((comment) => dispatch(receiveComment(comment)));
};