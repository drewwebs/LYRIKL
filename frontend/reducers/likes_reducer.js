import {
    RECEIVE_LIKE,
    DELETE_LIKE
} from '../actions/like_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like });
        case DELETE_LIKE:
            const newState = Object.assign({}, state);
            delete newState[action.likeId];
            return newState;
        default:
            return state;
    }
};