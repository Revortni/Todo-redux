import { createStore } from 'redux';

import reducer from './reducer/todoReducer';

const store = createStore(reducer);

export default store;
