import React from 'react';
import ListContainer from './ListContainer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Header from './Header';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../actions/types';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const Main = props => {
  console.log(props);
  const filtered = getVisibleTodos(props.todos, props.visibilityFilter);
  const todos = filtered.filter(item => item.text.includes(props.searchParam));

  return (
    <React.Fragment>
      <Header />
      <AddItem />
      <SearchItem />
      <ListContainer todos={todos} />
    </React.Fragment>
  );
};

const mapStateToProps = ({ todos, searchParam, visibilityFilter }) => {
  return { todos, searchParam, visibilityFilter };
};

export default connect(mapStateToProps, {})(Main);
