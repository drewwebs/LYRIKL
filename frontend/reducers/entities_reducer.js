import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import songsReducer from './songs_reducer.js';
import annotationsReducer from "./annotations_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: songsReducer,
  annotations: annotationsReducer
});

export default entitiesReducer;
