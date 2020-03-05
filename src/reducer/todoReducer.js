// import {
//   FETCH_TODOS,
//   ADD_TODO,
//   TOGGLE_TODO,
//   REMOVE_TODO
// } from '../actions/types';
import VisibilityFilter from './visibilityFilter';
import searchFilter from './searchReducer';
import { v4 as uuidv4 } from 'uuid';

import { handleActions } from 'redux-actions';

const initialState = {
  todos: [],
  content: '',
  visibilityFilter: 'SHOW_ALL',
  searchParam: ''
};

// const STORAGE = 'todos';

const fetchFromLocal = state => {
  return state;
};

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_TODOS:
//       return fetchFromLocal();

//     case ADD_TODO:
// const item = {
//   id: uuidv4(),
//   text: action.content,
//   completed: false
// };
//       const newTodos = saveToLocal(item, state);
//       return newTodos;

//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.index);

//     case TOGGLE_TODO:
//       return state.map(todo => {
//         if (todo.id === action.index) {
//           return { ...todo, completed: !todo.completed };
//         }
//         return todo;
//       });

//     default:
//       return state;
//   }
// };

const todos = handleActions(
  {
    FETCH_TODOS: (state, action) => [...action.payload],
    ADD_TODO: (state, action) => {
      const item = {
        id: uuidv4(),
        text: action.payload,
        completed: false
      };
      return [item, ...state];
    },
    REMOVE_TODO: (state, action) =>
      state.filter(todo => todo.id !== action.payload),
    TOGGLE_TODO: (state, action) =>
      state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
  },
  []
);

const todoApp = (state = initialState, action) => {
  return {
    ...state,
    todos: todos(state.todos, action),
    searchParam: searchFilter(state.searchParam, action),
    visibilityFilter: VisibilityFilter(state.visibilityFilter, action)
  };
};

export default todoApp;
