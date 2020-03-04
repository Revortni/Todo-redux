import { combineReducers } from 'redux';

import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from '../actions/types';
import VisibilityFilter from './visibilityFilter';
import searchFilter from './searchReducer';
import { v4 as uuidv4 } from 'uuid';
import data from './todoData';

const initialState = {
  todos: data,
  content: '',
  visibilityFilter: 'SHOW_ALL',
  searchParam: '',
  filtered: data
};

const todos = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return state;

    case ADD_TODO:
      return [
        {
          id: uuidv4(),
          text: action.content,
          completed: false
        },
        ...state
      ];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.index);

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    default:
      return state;
  }
};

const todoApp = (state = initialState, action) => {
  return {
    ...state,
    todos: todos(state.todos, action),
    searchParam: searchFilter(state.searchParam, action),
    visibilityFilter: VisibilityFilter(state.visibilityFilter, action)
  };
};

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// });

export default todoApp;
