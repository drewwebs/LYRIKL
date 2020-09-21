import { combineReducers } from "redux";
import errorReducer from "./error_reducer";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";

const rootReducer = combineReducers({
  errors: errorReducer,
  entities: entitiesReducer,
  session: sessionReducer,
});

export default rootReducer;
