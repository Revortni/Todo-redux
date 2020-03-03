import React from 'react';
import ListContainer from './ListContainer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Header from './Header';
import { connect } from 'react-redux';

const Main = props => {
  const todos = props.todos.filter(item =>
    item.text.includes(props.searchParam)
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

const mapStateToProps = state => {
  return { todos: state.todos, searchParam: state.searchParam };
};

export default connect(mapStateToProps, {})(Main);
