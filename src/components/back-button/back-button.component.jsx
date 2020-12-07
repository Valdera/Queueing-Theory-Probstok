import React from 'react';
import './back-button.styles.scss';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';

function BackButton({ children, eventHandler, ...otherProps }) {
  return (
    <button className="back-button" onClick={eventHandler} {...otherProps}>
      <HomeIcon />
    </button>
  );
}

export default BackButton;
