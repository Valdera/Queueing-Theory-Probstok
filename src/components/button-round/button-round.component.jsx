import React from 'react';

import './button-round.styles.scss';

function ButtonRound({ children, ...otherProps }) {
  return (
    <button
      className="button__round"
      onClick={otherProps.eventHandler}
      {...otherProps}>
      {children}
    </button>
  );
}

export default ButtonRound;
