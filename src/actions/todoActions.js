import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SEARCH_TODO,
  SET_VISIBILITY_FILTER
} from './types';

import { createAction } from 'redux-actions';
import data from '../reducer/todoData';

export const fetchTodo = createAction(FETCH_TODOS);

export const addTodo = createAction(ADD_TODO);

export const toggleTodo = createAction(TOGGLE_TODO);

export const removeTodo = createAction(REMOVE_TODO);

export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER);

export const searchTodo = createAction(SEARCH_TODO);

export const fetchData = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(fetchTodo(data));
    }, 2000);
  };
};
