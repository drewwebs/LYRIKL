import {
    RECEIVE_ANNOTATION,
    DELETE_ANNOTATION
} from '../actions/annotation_actions';

export default (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ANNOTATION:
            return Object.assign({}, state, {[action.annotation.id]: action.annotation });
        case DELETE_ANNOTATION:
            newState = Object.assign({}, state);
            delete newState[action.annotationId];
            return newState;
        default:
            return state;
    }
};