import {
  FETCH_TODOS,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SEARCH_TODO
} from '../actions/types';
import VisibilityFilter from './visibilityFilter';
import { v4 as uuidv4 } from 'uuid';
import data from './todoData';

const initialState = {
  todos: data,
  content: '',
  visibilityFilter: 'SHOW_ALL',
  searchParam: '',
  filtered: data
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {};

    case ADD_TODO:
      return {
        todos: [
          {
            id: uuidv4(),
            text: action.content,
            completed: false
          },
          ...state.todos
        ]
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.index)
      };

    case SEARCH_TODO:
      return {
        searchParam: action.searchParam
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.index) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };

    default:
      return state;
  }
};

const todoApp = (state = initialState, action) => {
  return {
    ...state,
    ...todos(state, action),
    visibilityFilter: VisibilityFilter(state.visibilityFilter, action)
  };
};

export default todoApp;
