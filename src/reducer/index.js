import { combineReducers } from 'redux';
import postReducer from './postReducer';
import counterReducer from './counterReducer';

export default combineReducers({
  posts: postReducer,
  counter: counterReducer
});
