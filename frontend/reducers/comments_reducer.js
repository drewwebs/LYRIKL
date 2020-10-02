import {
    RECEIVE_COMMENT,
    DELETE_COMMENT
} from '../actions/comment_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment });
        case DELETE_COMMENT:
            const newState = Object.assign({}, state);
            delete newState[action.commentId];
            return newState;
        default:
            return state;
    }
};