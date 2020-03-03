import React from 'react';
import ListItem from './ListItem';
import NoData from './NoData';

const ListContainer = props => {
  const todos = props.todos.map(item => <ListItem key={item.id} item={item} />);

  return (
    <div className='container'>
      <div className='todo-list'>
        <div className='todo-list__wrapper'>
          {todos.length ? todos : <NoData />}
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
