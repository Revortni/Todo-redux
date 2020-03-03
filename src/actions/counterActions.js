import { INCREMENT, DECREMENT, RESET } from './types';

export const increment = () => dispatch => {
  return dispatch({
    type: INCREMENT
  });
};

export const decrement = () => dispatch => {
  return dispatch({
    type: DECREMENT
  });
};

export const reset = () => dispatch => {
  return dispatch({
    type: RESET
  });
};
