import React from 'react';

import './submit-button.styles.scss';

function SubmitButton({ children, ...otherProps }) {
  return (
    <button
      className="submit__button"
      onClick={otherProps.eventHandler}
      {...otherProps}>
      {children}
    </button>
  );
}

export default SubmitButton;
