import * as APIutil from '../util/session_api_util';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});


export const login = user => dispatch => (
    APIutil.login(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
    APIutil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
    APIutil.signup(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => dispatch(receiveErrors(err.responseJSON)))
);

export const loginDemo = () => dispatch => (
    APIutil.loginDemo()
    .then(user => dispatch(receiveCurrentUser(user)))
);

