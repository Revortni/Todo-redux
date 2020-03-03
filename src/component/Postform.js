import React, { Component } from 'react';

class Postform extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <br></br>
          <input
            name='title'
            type='text'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='body'>Content</label>
          <br></br>
          <textarea
            name='body'
            type='text'
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
        <button type='submit'>Post</button>
      </form>
    );
  }
}

export default Postform;
