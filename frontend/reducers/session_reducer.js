import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_LIKE, DELETE_LIKE } from "../actions/like_actions";

const _nullSession = {
    currentUser: null
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        case RECEIVE_LIKE:
            const updatedCurrentUser = currentUser;
            updatedCurrentUser.likes.push([action.like.id, action.like.likeable_id]);
            return Object.assign({}, {currentUser: updatedCurrentUser});
        case DELETE_LIKE:
            const newCurrentUser = currentUser;
            for (let i = 0; i < newCurrentUser.likes.length; i++) {
                const like = newCurrentUser.likes[i];
                if (like[0] === action.likeId) {
                    newCurrentUser.likes.splice(i, 1);
                }
            }
            return Object.assign({}, {currentUser: newCurrentUser});
        default:
            return state;
    }
};

export default sessionReducer;