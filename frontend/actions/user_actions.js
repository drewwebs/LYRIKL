import * as UserUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

export const fetchUser = userId => dispatch => (
    UserUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
);

export const addImageToUser = (userId, formData) => dispatch => (
    UserUtil.addImageToUser(userId, formData)
    .then(user => dispatch(receiveUser(user)))
    .then(data => dispatch(receiveCurrentUser(data.user)))
);