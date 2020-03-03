import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/todoActions';

function ListItem(props) {
  return (
    <div className='todo-item clearfix'>
      <div className='todo-item__left'>
        <input
          type='checkbox'
          checked={props.item.completed}
          onChange={() => props.toggleTodo(props.item.id)}
          className='todo-item__checkbox'
        />
        <span
          className={
            'todo-item__text' +
            (props.item.completed ? ' todo-item__text--is-completed' : '')
          }
        >
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
