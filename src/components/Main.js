import React, { useEffect } from 'react';
import ListContainer from './ListContainer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Header from './Header';
import { connect } from 'react-redux';
import { VisibilityFilters } from '../actions/types';
import { fetchData } from '../actions/todoActions';

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
  useEffect(() => {
    props.fetchData();
  }, []);

  const filtered = getVisibleTodos(props.todos, props.visibilityFilter);
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

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
