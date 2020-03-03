import { createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';
import reducer from './reducer/counterReducer';

const middleware = [thunk];

const initialState = {
  count: 0
};

const store = createStore(reducer, initialState);

export default store;
