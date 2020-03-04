import { SEARCH_TODO } from '../actions/types';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_TODO:
      return action.searchParam;
    default:
      return state;
  }
};
export default searchReducer;
