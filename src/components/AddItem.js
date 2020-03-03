import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    if (e.keyCode === 13 || e.type === 'click') {
      if (this.state.content.length > 0) {
        this.props.addTodo(this.state.content);
        this.setState({
          content: ''
        });
      }
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='add_item clearfix'>
          <input
            type='text'
            name='item'
            value={this.state.content}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
            placeholder='Add a task'
          />
          <div className='add_item_button' onClick={this.handleSubmit}>
            +
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  addTodo: content => dispatch(addTodo(content))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
