import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE} from '../actions/like_actions';
import { RECEIVE_ANNOTATION } from '../actions/annotation_actions';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { [action.user.id]: action.user };
    case RECEIVE_COMMENT:
      return { [action.comment.author.id]: action.comment.author };
    case RECEIVE_LIKE:
      return { [action.like.liker.id]: action.like.liker};
    case RECEIVE_ANNOTATION:
      return { [action.annotation.author.id]: action.annotation.author};
    case RECEIVE_USER:
      return { [action.user.id]: action.user};
    default:
      return state;
  }
};

export default usersReducer;
