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
      return todos.filter(item => item.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(item => !item.completed);
    default:
      return todos;
  }
};

const Main = props => {
  const filtered = getVisibleTodos(props.todos, props.visibilityFilter);
  console.log(props);
  const todos = filtered.filter(item =>
    item.text.toLowerCase().includes(props.searchParam.toLowerCase())
  );

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
