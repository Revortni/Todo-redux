import React from 'react';

const HeaderTab = props => {
  return (
    <a
      href='#link'
      className={'nav__item' + props.active}
      onClick={() => props.onClick(props.filter)}
    >
      {props.name}
    </a>
  );
};

export default HeaderTab;
