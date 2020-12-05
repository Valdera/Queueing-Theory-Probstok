import React from 'react';
import './back-button.styles.scss';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';

function BackButton({ children, ...otherProps }) {
  return (
    <button
      className="back-button"
      onClick={otherProps.eventHandler}
      {...otherProps}>
      <HomeIcon />
    </button>
  );
}

export default BackButton;
