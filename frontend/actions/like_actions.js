import * as APIUtil from '../util/like_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likeId => ({
    type: DELETE_LIKE,
    likeId
});


export const deleteLike = (likeId) => dispatch => (
    APIUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)))
);

export const createLike = (like) => dispatch => {
    return APIUtil.createLike(like)
        .then((like) => dispatch(receiveLike(like)));
};