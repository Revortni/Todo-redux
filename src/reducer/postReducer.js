import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

const reducer = (state, action) => {
  state = state || initialState;
  console.log('called from Post reducer');
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
