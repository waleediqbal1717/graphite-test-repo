import { combineReducers } from 'redux';
import generalReducer from './generalReducer';
import userReducer from './userReducer';

const appReducer = combineReducers({
  generalReducer,
  userReducer,
});

export type AppState = ReturnType<typeof appReducer>;

export default appReducer;
