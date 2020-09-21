import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { [action.user.id]: action.user };
    default:
      return state;
  }
};

export default usersReducer;
