import React from 'react';
import HeaderTab from './HeaderTab';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todoActions';

const options = [
  {
    name: 'Home',
    filterName: 'SHOW_ALL'
  },
  {
    name: 'Completed',
    filterName: 'SHOW_COMPLETED'
  },
  {
    name: 'Remaining',
    filterName: 'SHOW_ACTIVE'
  }
];

class Header extends React.Component {
  setFilter = filter => {
    console.log(this.props.filter);
    console.log(filter);
    this.props.setVisibilityFilter(filter);
  };

  render() {
    return (
      <header>
        <div className='container clearfix'>
          <div className='header_title'>Todo List</div>
          <div className='header_options_container'>
            {options.map(item => (
              <HeaderTab
                name={item.name}
                filter={item.filterName}
                onClick={this.setFilter}
                key={item.name}
                active={
                  item.filterName === this.props.filter ? ' activeOption' : ''
                }
              />
            ))}
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
