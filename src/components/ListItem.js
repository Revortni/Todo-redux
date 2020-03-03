import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/todoActions';

function ListItem(props) {
  return (
    <div className='todo-item clearfix'>
      <div className='todo-item-left'>
        <input
          type='checkbox'
          checked={props.item.completed}
          onChange={() => props.toggleTodo(props.item.id)}
        />
        <span className={props.item.completed ? 'completedTask' : ''}>
          {props.item.text}
        </span>
      </div>
      <div
        className='removeTask'
        onClick={() => props.removeTodo(props.item.id)}
      >
        x
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state, content: state.content };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
