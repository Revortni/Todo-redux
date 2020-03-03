import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    console.log('called from component');
  }

  render() {
    const postItems = this.props.posts.map(({ title, id, body }) => {
      return (
        <div className='post' key={id}>
          <h3 className='post__title'>{title}</h3>
          <p className='post__content'>{body}</p>
        </div>
      );
    });

    return (
      <div className='posts'>
        <h1>Posts</h1>
        <div className='posts__container'>{postItems}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
