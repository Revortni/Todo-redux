import React from 'react';

const HeaderTab = props => {
  return (
    <div className='header_option_wrapper'>
      <div
        className={'header_option' + props.active}
        onClick={() => props.onClick(props.filter)}
      >
        {props.name}
      </div>
    </div>
  );
};

export default HeaderTab;
