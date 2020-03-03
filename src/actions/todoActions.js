import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SEARCH_TODO,
  SET_VISIBILITY_FILTER
} from './types';

export const fetchTodo = content => {
  return {
    type: FETCH_TODOS,
    content
  };
};

export const addTodo = content => {
  return {
    type: ADD_TODO,
    content
  };
};

export const toggleTodo = index => {
  return { type: TOGGLE_TODO, index };
};

export const removeTodo = index => {
  return { type: REMOVE_TODO, index };
};

export const setVisibilityFilter = filter => {
  return { type: SET_VISIBILITY_FILTER, filter };
};

export const searchTodo = searchParam => {
  return { type: SEARCH_TODO, searchParam };
};
