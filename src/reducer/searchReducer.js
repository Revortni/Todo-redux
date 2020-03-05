// import { SEARCH_TODO } from '../actions/types';
import { handleActions } from 'redux-actions';

// const searchReducer = (state = '', action) => {
//   switch (action.type) {
//     case SEARCH_TODO:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const searchReducer = handleActions(
  {
    SEARCH_TODO: (state, action) => action.payload
  },
  ''
);
export default searchReducer;
