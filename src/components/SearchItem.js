import React from 'react';
import { connect } from 'react-redux';
import { searchTodo } from '../actions/todoActions';

const SearchItem = props => {
  const handleSearch = e => {
    let filter = e.target.value;
    props.searchTodo(filter);
  };

  return (
    <div className='container'>
      <div className='search'>
        <input
          type='text'
          name='item'
          onChange={handleSearch}
          value={props.searchParam}
          placeholder='Search'
          className='search__search-field'
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { searchParam: state.searchParam };
};

const mapDispatchToProps = dispatch => ({
  searchTodo: searchParam => dispatch(searchTodo(searchParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);
